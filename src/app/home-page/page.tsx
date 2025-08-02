import { Button } from "@/components/ui/button";
import { Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const mockDeals = [
  {
    id: 1,
    title: "50% Off Wireless Headphones",
    description: "Noise-cancelling, 40h battery life, fast shipping",
    price: "$49.99",
    originalPrice: "$99.99",
    image: "/headphones.jpg",
    expiresIn: "3h left",
  },
  {
    id: 2,
    title: "iPhone 14 - Refurbished",
    description: "A+ condition, 128GB, 6-month warranty",
    price: "$599",
    originalPrice: "$799",
    image: "/iphone.jpg",
    expiresIn: "12h left",
  },
  {
    id: 3,
    title: "ASUS ROG Gaming Laptop",
    description: "i7, RTX 3060, 16GB RAM, 512GB SSD",
    price: "$999",
    originalPrice: "$1299",
    image: "/laptop.jpg",
    expiresIn: "1d left",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 flex h-16 items-center border-b bg-white/80 px-4 backdrop-blur-sm lg:px-6">
        <Link href="/" className="flex items-center justify-center">
          <Target className="h-8 w-8 text-orange-600" />
          <span className="ml-2 text-xl font-bold text-gray-900">
            DealHunter
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#features"
            className="text-sm font-medium transition-colors hover:text-orange-600"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium transition-colors hover:text-orange-600"
          >
            How It Works
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium font-semibold text-orange-600"
          >
            Pricing
          </Link>
        </nav>
        <div className="ml-6 flex gap-2">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
            Get Started
          </Button>
        </div>
      </header>

      <section className="px-4 py-10 lg:px-6">
        <h1 className="mb-6 text-3xl font-bold text-gray-800">
          🔥 Trending Deals
        </h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {mockDeals.map((deal) => (
            <div
              key={deal.id}
              className="overflow-hidden rounded-2xl bg-white shadow-md"
            >
              <Image
              width={400}
              height={300}
                src={deal.image}
                alt={deal.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  {deal.title}
                </h2>
                <p className="text-sm text-gray-500">{deal.description}</p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-xl font-bold text-orange-600">
                    {deal.price}
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    {deal.originalPrice}
                  </span>
                </div>
                <p className="mt-1 text-xs text-gray-500">{deal.expiresIn}</p>
                <Button
                  size="sm"
                  className="mt-3 w-full bg-orange-600 hover:bg-orange-700"
                >
                  View Deal
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
