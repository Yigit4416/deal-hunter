"use server";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { getAllProducts } from "@/server/queries";

export default async function HomePage() {
  try {
    const products = await getAllProducts();
    if (products === undefined) {
      return;
    }
    return (
      <main className="min-h-screen bg-gray-50">
        <Header />

        {/* Deals Section */}
        <section className="container mx-auto px-4 py-8 sm:py-12">
          <div className="mb-6 flex items-center justify-between sm:mb-8">
            <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
              Trending Deals
            </h2>
            <Link
              href="/deals"
              className="font-medium text-orange-600 hover:text-orange-700"
            >
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((deal) => (
              <div
                key={deal.id}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    width={400}
                    height={300}
                    src={deal.image || "/placeholder.svg"}
                    alt={deal.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600">
                    Hot Deal
                  </Badge>
                </div>

                <div className="flex flex-1 flex-col space-y-3 p-4">
                  <div className="space-y-2">
                    <h3 className="line-clamp-2 text-base leading-tight font-semibold text-gray-900 transition-colors group-hover:text-orange-600 sm:text-lg">
                      {deal.title}
                    </h3>
                    <p className="line-clamp-2 text-xs text-gray-500 sm:text-sm">
                      {deal.description}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-orange-600 sm:text-xl">
                        {deal.price}
                      </span>
                      <span className="text-sm text-gray-400 line-through">
                        {deal.originalPrice}
                      </span>
                    </div>
                  </div>

                  <div className="inset-x-0 bottom-0 mt-auto space-y-2 pt-1">
                    <Link href={`/product/${deal.id}`} className="block">
                      <Button
                        size="sm"
                        className="h-9 w-full bg-orange-600 text-xs font-medium hover:bg-orange-700 sm:h-10 sm:text-sm"
                      >
                        View Deal
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section className="bg-white">
          <div className="container mx-auto px-4 py-8 sm:py-12">
            <h2 className="mb-6 text-center text-2xl font-bold text-gray-800 sm:mb-8 sm:text-3xl">
              Shop by Category
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
              {[
                { name: "Electronics", emoji: "📱" },
                { name: "Computers", emoji: "💻" },
                { name: "Audio", emoji: "🎧" },
                { name: "Gaming", emoji: "🎮" },
                { name: "Fashion", emoji: "👕" },
                { name: "Home", emoji: "🏠" },
                { name: "Sports", emoji: "⚽" },
                { name: "Books", emoji: "📚" },
              ].map((category) => (
                <Link
                  key={category.name}
                  href={`/home-page/${category.name.toLowerCase()}`}
                  className="group flex flex-col items-center rounded-xl p-4 transition-colors hover:bg-gray-50"
                >
                  <div className="mb-2 text-3xl transition-transform group-hover:scale-110 sm:text-4xl">
                    {category.emoji}
                  </div>
                  <span className="text-center text-xs font-medium text-gray-700 sm:text-sm">
                    {category.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  } catch (e) {
    console.error(e);
  }
}
