import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Heart, Share2, Star, Clock, Shield, Truck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"

const mockDeals = [
  {
    id: 1,
    title: "50% Off Wireless Headphones",
    description:
      "Premium noise-cancelling wireless headphones with 40-hour battery life, fast charging, and crystal-clear audio quality. Perfect for music lovers and professionals.",
    price: "$49.99",
    originalPrice: "$99.99",
    image: "https://m.media-amazon.com/images/I/811QpiYXe-L._AC_SL1500_.jpg",
    expiresIn: "3h left",
    rating: 4.5,
    reviews: 1247,
    inStock: true,
    features: ["Noise Cancelling", "40h Battery", "Fast Charging", "Bluetooth 5.0"],
  },
  {
    id: 2,
    title: "iPhone 14 - Refurbished",
    description:
      "A+ condition iPhone 14 with 128GB storage, complete with 6-month warranty and original accessories. Thoroughly tested and certified.",
    price: "$599",
    originalPrice: "$799",
    image: "https://m.media-amazon.com/images/I/618Bb+QzCmL._UF1000,1000_QL80_.jpg",
    expiresIn: "12h left",
    rating: 4.8,
    reviews: 892,
    inStock: true,
    features: ["128GB Storage", "A+ Condition", "6-Month Warranty", "Original Box"],
  },
  {
    id: 3,
    title: "ASUS ROG Gaming Laptop",
    description:
      "High-performance gaming laptop with Intel i7 processor, RTX 3060 graphics, 16GB RAM, and 512GB SSD. Perfect for gaming and creative work.",
    price: "$999",
    originalPrice: "$1299",
    image: "https://www.asus.com/media/Odin/Websites/global/ProductLine/20200824120814.jpg",
    expiresIn: "1d left",
    rating: 4.6,
    reviews: 543,
    inStock: true,
    features: ["Intel i7", "RTX 3060", "16GB RAM", "512GB SSD"],
  },
]

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const deal = mockDeals.find((deal) => deal.id === Number.parseInt(id))

  if (!deal) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-6">The product you're looking for doesn't exist.</p>
          <Link href="/home-page">
            <Button className="bg-orange-600 hover:bg-orange-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Deals
            </Button>
          </Link>
        </div>
      </main>
    )
  }

  const discountPercentage = Math.round(
    ((Number.parseFloat(deal.originalPrice.replace("$", "")) - Number.parseFloat(deal.price.replace("$", ""))) /
      Number.parseFloat(deal.originalPrice.replace("$", ""))) *
      100,
  )

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
          <Link href="/home-page" className="hover:text-orange-600 transition-colors truncate">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-900 truncate">{deal.title}</span>
        </nav>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-12">
          {/* Left side: Image */}
          <div className="order-1 xl:order-1">
            <div className="xl:sticky xl:top-24 xl:h-fit">
              <div className="relative mb-6 xl:mb-0">
                <Image
                  width={800}
                  height={600}
                  src={deal.image || "/placeholder.svg"}
                  alt={deal.title}
                  className="w-full rounded-2xl object-cover shadow-lg max-h-[400px] xl:max-h-none"
                />
                <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600 text-white text-xs sm:text-sm">
                  {discountPercentage}% OFF
                </Badge>
                {deal.inStock && (
                  <Badge className="absolute top-4 right-4 bg-emerald-500 hover:bg-emerald-600 text-white text-xs sm:text-sm">
                    In Stock
                  </Badge>
                )}
              </div>
            </div>
          </div>

          {/* Right side: Details */}
          <div className="order-2 xl:order-2">
            <div className="bg-gradient-to-br from-orange-50 via-white to-emerald-50 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
              <div className="flex flex-col space-y-4 sm:space-y-6">
                {/* Title and Rating */}
                <div className="space-y-3">
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">{deal.title}</h1>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 sm:w-5 sm:h-5 ${
                            i < Math.floor(deal.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {deal.rating} ({deal.reviews} reviews)
                    </span>
                  </div>
                </div>

                {/* Price */}
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-orange-100">
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-3 mb-2">
                    <span className="text-2xl sm:text-3xl font-bold text-orange-600">{deal.price}</span>
                    <span className="text-lg sm:text-xl text-gray-400 line-through">{deal.originalPrice}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <span className="text-red-600 font-medium">⏰ {deal.expiresIn}</span>
                  </div>
                </div>

                {/* Description */}
                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-gray-100">
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{deal.description}</p>
                </div>

                {/* Features */}
                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">Key Features</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {deal.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                        <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-gray-100">
                  <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-around gap-3 sm:gap-0 text-xs sm:text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Secure Payment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Truck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Fast Shipping</span>
                    </div>
                  </div>
                </div>

                <Separator className="my-2" />

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button className="bg-orange-600 hover:bg-orange-700 w-full h-11 sm:h-12 text-base sm:text-lg font-semibold shadow-lg">
                    Add to Cart - {deal.price}
                  </Button>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Button
                      variant="outline"
                      className="border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300 bg-transparent h-10 sm:h-11 text-sm sm:text-base"
                    >
                      <Heart className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="truncate">Wishlist</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="border-orange-200 hover:bg-orange-50 hover:border-orange-300 bg-transparent h-10 sm:h-11 text-sm sm:text-base"
                    >
                      <Share2 className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="truncate">Share</span>
                    </Button>
                  </div>
                </div>

                {/* Back Link */}
                <div className="pt-2">
                  <Link
                    href="/home-page"
                    className="inline-flex items-center text-sm text-orange-600 hover:text-orange-700 hover:underline transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4 mr-1 flex-shrink-0" />
                    Back to deals
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
