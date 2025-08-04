import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"

const mockDeals = [
  {
    id: 1,
    title: "50% Off Wireless Headphones",
    description: "Noise-cancelling, 40h battery life, fast shipping",
    price: "$49.99",
    originalPrice: "$99.99",
    image: "https://m.media-amazon.com/images/I/811QpiYXe-L._AC_SL1500_.jpg",
    expiresIn: "3h left",
    category: "Audio",
  },
  {
    id: 2,
    title: "iPhone 14 - Refurbished",
    description: "A+ condition, 128GB, 6-month warranty",
    price: "$599",
    originalPrice: "$799",
    image: "https://m.media-amazon.com/images/I/618Bb+QzCmL._UF1000,1000_QL80_.jpg",
    expiresIn: "12h left",
    category: "Electronics",
  },
  {
    id: 3,
    title: "ASUS ROG Gaming Laptop",
    description: "i7, RTX 3060, 16GB RAM, 512GB SSD",
    price: "$999",
    originalPrice: "$1299",
    image: "https://www.asus.com/media/Odin/Websites/global/ProductLine/20200824120814.jpg",
    expiresIn: "1d left",
    category: "Computers",
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Deals Section */}
      <section className="container mx-auto px-4 py-8 sm:py-12">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Trending Deals</h2>
          <Link href="/deals" className="text-orange-600 hover:text-orange-700 font-medium">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {mockDeals.map((deal) => (
            <div
              key={deal.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <Image
                  width={400}
                  height={300}
                  src={deal.image || "/placeholder.svg"}
                  alt={deal.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600">Hot Deal</Badge>
                <Badge variant="secondary" className="absolute top-3 right-3">
                  {deal.category}
                </Badge>
              </div>

              <div className="p-4 space-y-3 flex flex-col flex-1">
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 line-clamp-2 leading-tight group-hover:text-orange-600 transition-colors">
                    {deal.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 line-clamp-2">{deal.description}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg sm:text-xl font-bold text-orange-600">{deal.price}</span>
                    <span className="text-sm text-gray-400 line-through">{deal.originalPrice}</span>
                  </div>

                  <div className="flex items-center gap-1 text-xs sm:text-sm text-red-600">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="font-medium">{deal.expiresIn}</span>
                  </div>
                </div>

                <div className="space-y-2 pt-1 inset-x-0 bottom-0 mt-auto">
                  <Link href={`/product/${deal.id}`} className="block">
                    <Button
                      size="sm"
                      className="w-full bg-orange-600 hover:bg-orange-700 h-9 sm:h-10 text-xs sm:text-sm font-medium"
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
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">Shop by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
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
                href={`/category/${category.name.toLowerCase()}`}
                className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-colors group"
              >
                <div className="text-3xl sm:text-4xl mb-2 group-hover:scale-110 transition-transform">
                  {category.emoji}
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-700 text-center">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
