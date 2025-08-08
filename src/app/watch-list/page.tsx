"use server";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";

type Products = {
  link: string;
  id: string;
  title: string;
  description: string;
  marketplace: string;
  price: number;
  originalPrice: number;
  image: string;
}[];

// Mock watchlist data
const mockWatchlistData: Products = [
  {
    id: "1",
    title: "Apple MacBook Pro 14-inch M3 Chip",
    description:
      "Powerful laptop with M3 chip, 16GB RAM, 512GB SSD. Perfect for professionals and creators.",
    marketplace: "Amazon",
    price: 1899,
    originalPrice: 2199,
    image: "/macbook-pro-laptop.png",
    link: "https://amazon.com/macbook-pro",
  },
  {
    id: "2",
    title: "Sony WH-1000XM5 Wireless Headphones",
    description:
      "Industry-leading noise canceling with premium sound quality and 30-hour battery life.",
    marketplace: "Best Buy",
    price: 329,
    originalPrice: 399,
    image: "/wireless-headphones.png",
    link: "https://bestbuy.com/sony-headphones",
  },
  {
    id: "3",
    title: 'Samsung 65" QLED 4K Smart TV',
    description:
      "Quantum Dot technology with vibrant colors, smart features, and sleek design.",
    marketplace: "Walmart",
    price: 899,
    originalPrice: 1299,
    image: "/samsung-qled-tv.png",
    link: "https://walmart.com/samsung-tv",
  },
  {
    id: "4",
    title: "iPhone 15 Pro Max 256GB",
    description:
      "Latest iPhone with titanium design, advanced camera system, and A17 Pro chip.",
    marketplace: "Apple Store",
    price: 1199,
    originalPrice: 1299,
    image: "/iphone-15-pro-max-display.png",
    link: "https://apple.com/iphone-15-pro",
  },
  {
    id: "5",
    title: "Nike Air Jordan 1 Retro High",
    description:
      "Classic basketball sneakers with premium leather and iconic design.",
    marketplace: "Nike",
    price: 139,
    originalPrice: 170,
    image: "/classic-sneakers.png",
    link: "https://nike.com/air-jordan-1",
  },
  {
    id: "6",
    title: "KitchenAid Stand Mixer 5-Qt",
    description:
      "Professional-grade stand mixer with multiple attachments for all your baking needs.",
    marketplace: "Target",
    price: 279,
    originalPrice: 349,
    image: "/kitchenaid-mixer.png",
    link: "https://target.com/kitchenaid-mixer",
  },
  {
    id: "7",
    title: "PlayStation 5 Console",
    description:
      "Next-gen gaming console with ultra-high speed SSD and ray tracing support.",
    marketplace: "GameStop",
    price: 499,
    originalPrice: 599,
    image: "/playstation-5-console.png",
    link: "https://gamestop.com/ps5",
  },
  {
    id: "8",
    title: "Dyson V15 Detect Cordless Vacuum",
    description:
      "Advanced cordless vacuum with laser dust detection and powerful suction.",
    marketplace: "Dyson",
    price: 649,
    originalPrice: 749,
    image: "/cordless-vacuum.png",
    link: "https://dyson.com/v15-detect",
  },
];

export default async function WatchlistPage() {
  const products = mockWatchlistData;

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Watchlist Section */}
      <section className="container mx-auto px-4 py-8 sm:py-12">
        <div className="mb-6 flex items-center justify-between sm:mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
              My Watchlist
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              {products.length} items saved for later
            </p>
          </div>
          <Button
            variant="outline"
            className="border-orange-600 text-orange-600 hover:bg-orange-50"
          >
            Clear All
          </Button>
        </div>

        {products.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="mb-4 text-6xl">📋</div>
            <h3 className="mb-2 text-xl font-semibold text-gray-800">
              Your watchlist is empty
            </h3>
            <p className="mb-6 text-gray-600">
              Start adding deals you want to track!
            </p>
            <Link href="/">
              <Button className="bg-orange-600 hover:bg-orange-700">
                Browse Deals
              </Button>
            </Link>
          </div>
        ) : (
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
                  <Badge className="absolute top-3 left-3 bg-blue-500 hover:bg-blue-600">
                    {deal.marketplace}
                  </Badge>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/80 p-0 hover:bg-white"
                  >
                    <span className="text-red-500">❤️</span>
                  </Button>
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
                        ${deal.price}
                      </span>
                      <span className="text-sm text-gray-400 line-through">
                        ${deal.originalPrice}
                      </span>
                      <Badge variant="secondary" className="ml-auto text-xs">
                        {Math.round(
                          ((deal.originalPrice - deal.price) /
                            deal.originalPrice) *
                            100,
                        )}
                        % off
                      </Badge>
                    </div>
                  </div>
                  <div className="inset-x-0 bottom-0 mt-auto space-y-2 pt-1">
                    <div className="flex gap-2">
                      <Link href={deal.link} className="flex-1">
                        <Button
                          size="sm"
                          className="h-9 w-full bg-orange-600 text-xs font-medium hover:bg-orange-700 sm:h-10 sm:text-sm"
                        >
                          View Deal
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-9 px-3 text-xs hover:border-red-200 hover:bg-red-50 hover:text-red-600 sm:h-10"
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Quick Actions Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-800 sm:mb-8 sm:text-3xl">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Link
              href="/price-alerts"
              className="group flex flex-col items-center rounded-xl p-6 transition-colors hover:bg-gray-50"
            >
              <div className="mb-3 text-4xl transition-transform group-hover:scale-110">
                🔔
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-800">
                Price Alerts
              </h3>
              <p className="text-center text-sm text-gray-600">
                Get notified when prices drop on your watchlist items
              </p>
            </Link>
            <Link
              href="/share-watchlist"
              className="group flex flex-col items-center rounded-xl p-6 transition-colors hover:bg-gray-50"
            >
              <div className="mb-3 text-4xl transition-transform group-hover:scale-110">
                📤
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-800">
                Share Watchlist
              </h3>
              <p className="text-center text-sm text-gray-600">
                Share your favorite deals with friends and family
              </p>
            </Link>
            <Link
              href="/deal-history"
              className="group flex flex-col items-center rounded-xl p-6 transition-colors hover:bg-gray-50"
            >
              <div className="mb-3 text-4xl transition-transform group-hover:scale-110">
                📊
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-800">
                Price History
              </h3>
              <p className="text-center text-sm text-gray-600">
                Track price changes and find the best time to buy
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
