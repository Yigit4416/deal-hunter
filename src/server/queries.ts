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
    const result = db.insert(userCategories).values({
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
