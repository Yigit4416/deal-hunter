import "server-only";
import { db } from "./db";
import {
  products,
  brands,
  categories,
  merchants,
  offers,
  productSpecs,
} from "./db/schema";
import { eq } from "drizzle-orm";

// brand upsert
async function upsertBrand(brand: { name: string; slug: string } | null) {
  if (!brand) return null;
  const existing = await db.query.brands.findFirst({
    where: (m, { eq }) => eq(m.name, brand.name),
  });
  if (existing) return existing.id;

  const [inserted] = await db
    .insert(brands)
    .values({ name: brand.name, slug: brand.slug })
    .returning();
  return inserted.id;
}

// category upsert
async function upsertCategory(category: { name: string; slug: string } | null) {
  if (!category) return null;
  const existing = await db.query.categories.findFirst({
    where: (m, { eq }) => eq(m.name, category.name),
  });
  if (existing) return existing.id;

  const [inserted] = await db
    .insert(categories)
    .values({ name: category.name, slug: category.slug })
    .returning();
  return inserted.id;
}

// merchant upsert
async function upsertMerchant(merchant: { id: number; name: string }) {
  const existing = await db.query.merchants.findFirst({
    where: (m, { eq }) => eq(m.id, merchant.id),
  });
  if (existing) return existing.id;

  const [inserted] = await db.insert(merchants).values(merchant).returning();
  return inserted.id;
}

// ürün + ilişkileri upsert

type ApiProducts = {
  id: number;
  title: string;
  url: string;
  model: string;
  imageId: number;
  merchantCount: number;
  offerCount: number;
  brandId: number;
  categoryId: number;
  topOffers: {
    id: number;
    price: number;
    merchant: { id: number; name: string };
    unitPrice: number | null;
  }[];
  topSpecs: {
    name: string;
    value: string;
  }[];
  brand: { name: string; slug: string };
  category: { name: string; slug: string };
};

export async function upsertProducts(apiProducts: ApiProducts[]) {
  try {
    for (const p of apiProducts) {
      const brandId = await upsertBrand(p.brand);
      const categoryId = await upsertCategory(p.category);

      const existingProduct = await db.query.products.findFirst({
        where: (m, { eq }) => eq(m.id, String(p.id)),
      });

      if (existingProduct) {
        await db
          .update(products)
          .set({
            title: p.title,
            url: p.url,
            model: p.model,
            imageId: p.imageId,
            merchantCount: p.merchantCount,
            offerCount: p.offerCount,
            brandId,
            categoryId,
          })
          .where(eq(products.id, String(p.id)));
      } else {
        await db.insert(products).values({
          id: String(p.id),
          title: p.title,
          url: p.url,
          model: p.model,
          imageId: p.imageId,
          merchantCount: p.merchantCount,
          offerCount: p.offerCount,
          brandId,
          categoryId,
        });
      }

      // offers
      if (p.topOffers) {
        for (const offer of p.topOffers) {
          const merchantId = await upsertMerchant(offer.merchant);

          const existingOffer = await db.query.offers.findFirst({
            where: (m, { eq }) => eq(m.id, offer.id),
          });

          if (existingOffer) {
            await db
              .update(offers)
              .set({
                price:
                  offer.price != null ? Math.round(Number(offer.price)) : 0,
                unitPrice:
                  offer.unitPrice != null
                    ? Math.round(Number(offer.unitPrice))
                    : 0,

                productId: String(p.id),
                merchantId,
              })
              .where(eq(offers.id, offer.id));
          } else {
            await db.insert(offers).values({
              id: offer.id,

              price: offer.price != null ? Math.round(Number(offer.price)) : 0,
              unitPrice:
                offer.unitPrice != null
                  ? Math.round(Number(offer.unitPrice))
                  : 0,

              productId: String(p.id),
              merchantId,
            });
          }
        }
      }

      // specs
      if (p.topSpecs) {
        for (const spec of p.topSpecs) {
          const existingSpec = await db.query.productSpecs.findFirst({
            where: (m, { and, eq }) =>
              and(eq(m.productId, String(p.id)), eq(m.name, spec.name)),
          });

          if (existingSpec) {
            await db
              .update(productSpecs)
              .set({ value: spec.value })
              .where(eq(productSpecs.id, existingSpec.id));
          } else {
            await db.insert(productSpecs).values({
              productId: String(p.id),
              name: spec.name,
              value: spec.value,
            });
          }
        }
      }
    }
  } catch (e) {
    console.error(e);
    throw new Error("Error on saving new products");
  }
}
