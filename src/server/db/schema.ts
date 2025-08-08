import { pgTableCreator, index, primaryKey, unique } from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `deal_hunter_${name}`);

// User Categories Table
export const userCategories = createTable(
  "user_categories",
  (d) => ({
    id: d.integer().primaryKey().generatedByDefaultAsIdentity(),
    userId: d.varchar({ length: 256 }).notNull(),
    electronics: d.boolean().default(false),
    computers: d.boolean().default(false),
    audio: d.boolean().default(false),
    gaming: d.boolean().default(false),
    fashion: d.boolean().default(false),
    home: d.boolean().default(false),
    sports: d.boolean().default(false),
    books: d.boolean().default(false),
    cars: d.boolean().default(false),
  }),
  (t) => [
    index("user_id_idx").on(t.userId),
    unique("user_id_unique").on(t.userId), // Foreign key uyumu için gerekli
  ],
);

// Categories Table
export const categories = createTable("categories", (d) => ({
  id: d.integer().primaryKey().generatedByDefaultAsIdentity(),
  name: d.varchar({ length: 64 }).notNull().unique(),
}));

// Products Table
export const products = createTable(
  "products",
  (d) => ({
    id: d.varchar({ length: 256 }).primaryKey(),
    title: d.varchar().notNull(),
    description: d.varchar().notNull(),
    marketplace: d.varchar({ length: 64 }).notNull(),
    price: d.integer().notNull(),
    originalPrice: d.integer().notNull(),
    image: d.varchar().notNull(),
    link: d.varchar().notNull(),
  }),
  (t) => [index("product_marketplace_idx").on(t.marketplace)],
);

// Join Table: Products <-> Categories
export const productCategories = createTable(
  "product_categories",
  (d) => ({
    productId: d
      .varchar({ length: 256 })
      .notNull()
      .references(() => products.id, {
        onDelete: "cascade",
      }),
    categoryId: d
      .integer()
      .notNull()
      .references(() => categories.id, {
        onDelete: "cascade",
      }),
  }),
  (t) => [
    primaryKey({ columns: [t.productId, t.categoryId] }),
    index("product_category_idx").on(t.productId, t.categoryId),
  ],
);

// Watchlist Table
export const watchlist = createTable(
  "watchlist",
  (d) => ({
    id: d.integer().primaryKey().generatedByDefaultAsIdentity(),
    userId: d
      .varchar({ length: 256 })
      .notNull()
      .references(() => userCategories.userId, {
        onDelete: "cascade",
      }),
    productId: d
      .varchar({ length: 256 })
      .notNull()
      .references(() => products.id, {
        onDelete: "cascade",
      }),
  }),
  (t) => [
    index("user_watchlist_idx").on(t.userId),
    index("product_watchlist_idx").on(t.productId),
  ],
);
