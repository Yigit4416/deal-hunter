import { getAllProducts } from "@/server/queries";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const products = await getAllProducts();
    console.log(products);
    return NextResponse.json({ products });
  } catch (e) {
    console.error(e);
    return NextResponse.error();
  }
}
