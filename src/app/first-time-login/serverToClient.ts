"use server";

import { setCategories } from "@/server/queries";

type UserCategories = {
  electronics: boolean;
  computers: boolean;
  audio: boolean;
  gaming: boolean;
  fashion: boolean;
  home: boolean;
  sports: boolean;
  books: boolean;
  cars: boolean;
};

export async function sendUserCategories({
  userCategories,
}: {
  userCategories: string[];
}) {
  try {
    const result = await setCategories({ category: userCategories });
    if (!result) throw new Error("Something went wrong on saving categories");

    console.log(result);
    return result
  } catch (e) {
    console.error(e);
    return;
  }
}
