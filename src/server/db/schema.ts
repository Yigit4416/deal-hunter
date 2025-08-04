import {
  pgTableCreator,
  index,
  primaryKey,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `deal_hunter_${name}`);

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
  (t) => [index("user_id_idx").on(t.userId)],
);

// Holds category names
export const categories = createTable("categories", (d) => ({
  id: d.integer().primaryKey().generatedByDefaultAsIdentity(),
  name: d.varchar({ length: 64 }).notNull().unique(),
}));

// Holds all products
export const products = createTable(
  "products",
  (d) => ({
    id: d.varchar({ length: 256 }).primaryKey(), // productId
    name: d.varchar().notNull(),
    description: d.varchar().notNull(),
    marketplace: d.varchar({ length: 64 }).notNull(),
    link: d.varchar().notNull(),
  }),
  (t) => [index("product_marketplace_idx").on(t.marketplace)],
);

// Join Table: Products <-> Categories (many-to-many)
export const productCategories = createTable(
  "product_categories",
  (d) => ({
    productId: d.varchar({ length: 256 }).notNull(),
    categoryId: d.integer().notNull(),
  }),
  (t) => [
    primaryKey({ columns: [t.productId, t.categoryId] }),
    index("product_category_idx").on(t.productId, t.categoryId),
  ],
);

// Watchlist Table (user <-> product)
export const watchlist = createTable(
  "watchlist",
  (d) => ({
    id: d.integer().primaryKey().generatedByDefaultAsIdentity(),
    userId: d.varchar({ length: 256 }).notNull(),
    productId: d.varchar({ length: 256 }).notNull(),
  }),
  (t) => [
    index("user_watchlist_idx").on(t.userId),
    index("product_watchlist_idx").on(t.productId),
  ],
);
