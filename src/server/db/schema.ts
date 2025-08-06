import {
  pgTableCreator,
  index,
  primaryKey,
  unique,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `deal_hunter_${name}`);

// Categories Table (New - for better normalization)
export const categories = createTable("categories", (d) => ({
  id: d.integer().primaryKey().generatedByDefaultAsIdentity(),
  name: d.varchar({ length: 50 }).notNull().unique(), // electronics, computers, audio, etc.
  description: d.varchar(),
}));

// User Categories Table (Updated to reference categories table)
export const userCategories = createTable(
  "user_categories",
  (d) => ({
    userId: d.varchar({ length: 256 }).notNull(),
    categoryId: d.integer().notNull().references(() => categories.id, {
      onDelete: "cascade",
    }),
  }),
  (t) => [
    primaryKey({ columns: [t.userId, t.categoryId] }),
    index("user_categories_user_idx").on(t.userId),
    index("user_categories_category_idx").on(t.categoryId),
  ]
);

// Products Table (unchanged)
export const products = createTable(
  "products",
  (d) => ({
    id: d.varchar({ length: 256 }).primaryKey(),
    name: d.varchar().notNull(),
    description: d.varchar().notNull(),
    marketplace: d.varchar({ length: 64 }).notNull(),
    link: d.varchar().notNull(),
  }),
  (t) => [index("product_marketplace_idx").on(t.marketplace)]
);

// Product Categories Table (Fixed - now supports multiple categories per product)
export const productCategories = createTable(
  "product_categories",
  (d) => ({
    productId: d.varchar({ length: 256 }).notNull().references(() => products.id, {
      onDelete: "cascade",
    }),
    categoryId: d.integer().notNull().references(() => categories.id, {
      onDelete: "cascade",
    }),
  }),
  (t) => [
    primaryKey({ columns: [t.productId, t.categoryId] }),
    index("product_categories_product_idx").on(t.productId),
    index("product_categories_category_idx").on(t.categoryId),
  ]
);

// Watchlist Table (Updated foreign key reference)
export const watchlist = createTable(
  "watchlist",
  (d) => ({
    id: d.integer().primaryKey().generatedByDefaultAsIdentity(),
    userId: d.varchar({ length: 256 }).notNull(), // Remove the wrong foreign key reference
    productId: d.varchar({ length: 256 }).notNull().references(() => products.id, {
      onDelete: "cascade",
    }),
  }),
  (t) => [
    unique("user_product_unique").on(t.userId, t.productId), // Prevent duplicate entries
    index("watchlist_user_idx").on(t.userId),
    index("watchlist_product_idx").on(t.productId),
  ]
);