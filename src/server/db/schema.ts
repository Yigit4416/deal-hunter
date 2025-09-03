import { pgTableCreator, index } from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `deal_hunter_${name}`);

// Brands Table
export const brands = createTable("brands", (d) => ({
  id: d.integer().primaryKey().generatedByDefaultAsIdentity(),
  name: d.varchar({ length: 128 }).notNull().unique(),
  slug: d.varchar({ length: 128 }).notNull(),
}));

// Categories Table
export const categories = createTable("categories", (d) => ({
  id: d.integer().primaryKey().generatedByDefaultAsIdentity(),
  name: d.varchar({ length: 128 }).notNull().unique(),
  slug: d.varchar({ length: 128 }).notNull(),
}));

// Products Table
export const products = createTable(
  "products",
  (d) => ({
    id: d.varchar({ length: 256 }).primaryKey(), // JSON’daki id
    title: d.varchar().notNull(),
    url: d.varchar().notNull(),
    model: d.varchar({ length: 128 }),
    imageId: d.integer(),
    merchantCount: d.integer(),
    offerCount: d.integer(),

    // Relations
    brandId: d.integer().references(() => brands.id, { onDelete: "set null" }),
    categoryId: d
      .integer()
      .references(() => categories.id, { onDelete: "set null" }),
  }),
  (t) => [
    index("product_brand_idx").on(t.brandId),
    index("product_category_idx").on(t.categoryId),
  ],
);

// Merchants Table
export const merchants = createTable("merchants", (d) => ({
  id: d.integer().primaryKey(),
  name: d.varchar({ length: 128 }).notNull(),
}));

// Offers Table
export const offers = createTable(
  "offers",
  (d) => ({
    id: d.integer().primaryKey(),
    productId: d
      .varchar({ length: 256 })
      .notNull()
      .references(() => products.id, { onDelete: "cascade" }),
    merchantId: d
      .integer()
      .notNull()
      .references(() => merchants.id, { onDelete: "cascade" }),
    price: d.integer().notNull(),
    unitPrice: d.integer(),
  }),
  (t) => [
    index("offer_product_idx").on(t.productId),
    index("offer_merchant_idx").on(t.merchantId),
  ],
);

// Product Specs Table (topSpecs JSON için)
export const productSpecs = createTable(
  "product_specs",
  (d) => ({
    id: d.integer().primaryKey().generatedByDefaultAsIdentity(),
    productId: d
      .varchar({ length: 256 })
      .notNull()
      .references(() => products.id, { onDelete: "cascade" }),
    name: d.varchar({ length: 128 }).notNull(),
    value: d.varchar({ length: 256 }).notNull(),
  }),
  (t) => [index("spec_product_idx").on(t.productId)],
);
