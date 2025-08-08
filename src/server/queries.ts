import "server-only";

import { auth } from "@clerk/nextjs/server";
import { db } from "./db";
import { userCategories } from "./db/schema";

export async function setCategories({ category }: { category: string[] }) {
  const user = await auth();
  if (!user.userId) {
    throw new Error("Unauthorized");
  }

  const electronics = category.includes("electronics");
  const computers = category.includes("computers");
  const audio = category.includes("audio");
  const gaming = category.includes("gaming");
  const fashion = category.includes("fashion");
  const home = category.includes("home");
  const sports = category.includes("sports");
  const books = category.includes("books");
  const cars = category.includes("cars");

  try {
    const result = await db.insert(userCategories).values({
      userId: user.userId,
      electronics: electronics,
      computers: computers,
      audio: audio,
      gaming: gaming,
      fashion: fashion,
      home: home,
      sports: sports,
      books: books,
      cars: cars,
    });

    if (!result) {
      throw new Error("Something went wrong while uploading userCategory info");
    }

    return result;
  } catch (e) {
    console.error(e);
  }
}

export async function categoryProducts(category: string) {
  try {
    const categoryId = await db.query.categories.findFirst({
      where: (modal, { eq }) => eq(modal.name, category),
    });
    if (!categoryId) {
      throw new Error("Couldn't find any category");
    }

    const result = await db.query.productCategories.findMany({
      where: (modal, { eq }) => eq(modal.categoryId, categoryId.id),
    });

    if (result.length === 0 || result === undefined) {
      throw new Error("No product on this category");
    }

    const productList = await db.query.products.findMany({
      where: (modal, { inArray }) =>
        inArray(
          modal.id,
          result.map((r) => r.productId),
        ),
    });

    return productList;
  } catch (e) {
    console.error(e);
    return [];
  }
}

export async function getProduct({ productId }: { productId: string }) {
  try {
    const result = await db.query.products.findFirst({
      where: (modal, { eq }) => eq(modal.id, productId),
    });
    if (!result) {
      throw new Error("There is no such product");
    }
    return result;
  } catch (e) {
    console.error(e);
    throw new Error("Something went wrong on getProduct");
  }
}

export async function getAllProducts() {
  try {
    const results = await db.query.products.findMany();
    return results;
  } catch (e) {
    console.error(e);
  }
}
