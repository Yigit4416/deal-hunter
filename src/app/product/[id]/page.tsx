import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Heart, Share2, Shield, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { getProduct } from "@/server/queries";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  try {
    const deal = await getProduct({ productId: id });

    if (!deal) {
      return (
        <main className="min-h-screen bg-gray-50">
          <Header />
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="mb-4 text-2xl font-bold">Product Not Found</h1>
            <p className="mb-6">
              The product you're looking for doesn't exist.
            </p>
            <Link href="/home-page">
              <Button className="bg-orange-600 hover:bg-orange-700">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Deals
              </Button>
            </Link>
          </div>
        </main>
      );
    }

    const cleanPrice = (price: number) => {
      return Number.parseFloat(String(price).replace("$", ""));
    };

    const discountPercentage = Math.round(
      ((cleanPrice(deal.originalPrice) - cleanPrice(deal.price)) /
        cleanPrice(deal.originalPrice)) *
        100,
    );

    return (
      <main className="min-h-screen bg-gray-50">
        <Header />

        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <nav className="flex items-center space-x-2 text-xs text-gray-500 sm:text-sm">
            <Link
              href="/home-page"
              className="truncate transition-colors hover:text-orange-600"
            >
              Home
            </Link>
            <span>/</span>
            <span className="truncate text-gray-900">{deal.title}</span>
          </nav>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 pb-8">
          <div className="grid grid-cols-1 gap-6 lg:gap-12 xl:grid-cols-2">
            {/* Left side: Image */}
            <div className="order-1 xl:order-1">
              <div className="xl:sticky xl:top-24 xl:h-fit">
                <div className="relative mb-6 xl:mb-0">
                  <Image
                    width={800}
                    height={600}
                    src={deal.image || "/placeholder.svg"}
                    alt={deal.title}
                    className="max-h-[400px] w-full rounded-2xl object-cover shadow-lg xl:max-h-none"
                  />
                  <Badge className="absolute top-4 left-4 bg-red-500 text-xs text-white hover:bg-red-600 sm:text-sm">
                    {discountPercentage}% OFF
                  </Badge>
                </div>
              </div>
            </div>

            {/* Right side: Details */}
            <div className="order-2 xl:order-2">
              <div className="rounded-2xl bg-gradient-to-br from-orange-50 via-white to-emerald-50 p-4 shadow-lg sm:p-6 lg:p-8">
                <div className="flex flex-col space-y-4 sm:space-y-6">
                  {/* Title and Rating */}
                  <div className="space-y-3">
                    <h1 className="text-2xl leading-tight font-bold text-gray-900 sm:text-3xl">
                      {deal.title}
                    </h1>

                    {/* Price */}
                    <div className="rounded-xl border border-orange-100 bg-white/70 p-4 backdrop-blur-sm">
                      <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-3">
                        <span className="text-2xl font-bold text-orange-600 sm:text-3xl">
                          {deal.price}
                        </span>
                        <span className="text-lg text-gray-400 line-through sm:text-xl">
                          {deal.originalPrice}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="rounded-xl border border-gray-100 bg-white/50 p-4 backdrop-blur-sm">
                      <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        {deal.description}
                      </p>
                    </div>

                    {/* Trust Badges */}
                    <div className="rounded-xl border border-gray-100 bg-white/50 p-4 backdrop-blur-sm">
                      <div className="flex flex-col items-center justify-center gap-3 text-xs text-gray-600 sm:flex-row sm:justify-around sm:gap-0 sm:text-sm">
                        <div className="flex items-center gap-2">
                          <Shield className="h-4 w-4 flex-shrink-0 text-emerald-600" />
                          <span>Secure Payment</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Truck className="h-4 w-4 flex-shrink-0 text-emerald-600" />
                          <span>Fast Shipping</span>
                        </div>
                      </div>
                    </div>

                    <Separator className="my-2" />

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <Button className="h-11 w-full bg-orange-600 text-base font-semibold shadow-lg hover:bg-orange-700 sm:h-12 sm:text-lg">
                        Add to Cart - {deal.price}
                      </Button>
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <Button
                          variant="outline"
                          className="h-10 border-emerald-200 bg-transparent text-sm hover:border-emerald-300 hover:bg-emerald-50 sm:h-11 sm:text-base"
                        >
                          <Heart className="mr-2 h-4 w-4 flex-shrink-0" />
                          <span className="truncate">Wishlist</span>
                        </Button>
                        <Button
                          variant="outline"
                          className="h-10 border-orange-200 bg-transparent text-sm hover:border-orange-300 hover:bg-orange-50 sm:h-11 sm:text-base"
                        >
                          <Share2 className="mr-2 h-4 w-4 flex-shrink-0" />
                          <span className="truncate">Share</span>
                        </Button>
                      </div>
                    </div>

                    {/* Back Link */}
                    <div className="pt-2">
                      <Link
                        href="/home-page"
                        className="inline-flex items-center text-sm text-orange-600 transition-colors hover:text-orange-700 hover:underline"
                      >
                        <ArrowLeft className="mr-1 h-4 w-4 flex-shrink-0" />
                        Back to deals
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  } catch (e) {
    console.error(e);
    return (
      <main className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="mb-4 text-2xl font-bold">An error occurred</h1>
          <p className="mb-6">Please try again later or contact support.</p>
          <Link href="/home-page">
            <Button className="bg-orange-600 hover:bg-orange-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Deals
            </Button>
          </Link>
        </div>
      </main>
    );
  }
}
