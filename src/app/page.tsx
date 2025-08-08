/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, Target, Zap, Star, ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";

export default function DealHunterLanding() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
      <SignedIn>
        <header className="sticky top-0 z-50 flex h-14 items-center border-b bg-white/80 px-3 backdrop-blur-sm sm:h-16 sm:px-4 lg:px-6">
          <Link href="/" className="flex items-center justify-center">
            <Target className="h-6 w-6 text-orange-600 sm:h-8 sm:w-8" />
            <span className="ml-2 text-lg font-bold text-gray-900 sm:text-xl">
              DealHunter
            </span>
          </Link>
          <nav className="ml-auto hidden gap-4 sm:gap-6 md:flex">
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
              className="text-sm font-medium transition-colors hover:text-orange-600"
            >
              Pricing
            </Link>
          </nav>
          <div className="ml-4 flex gap-2 sm:ml-6">
            <Link href="/home-page">
              <Button
                size="sm"
                className="bg-orange-600 px-3 text-xs hover:bg-orange-700 sm:px-4 sm:text-sm"
              >
                Go to deals
              </Button>
            </Link>
          </div>
        </header>
      </SignedIn>
      <SignedOut>
        <header className="sticky top-0 z-50 flex h-14 items-center border-b bg-white/80 px-3 backdrop-blur-sm sm:h-16 sm:px-4 lg:px-6">
          <Link href="/" className="flex items-center justify-center">
            <Target className="h-6 w-6 text-orange-600 sm:h-8 sm:w-8" />
            <span className="ml-2 text-lg font-bold text-gray-900 sm:text-xl">
              DealHunter
            </span>
          </Link>
          <nav className="ml-auto hidden gap-4 sm:gap-6 md:flex">
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
              className="text-sm font-medium transition-colors hover:text-orange-600"
            >
              Pricing
            </Link>
          </nav>
          <div className="ml-4 flex gap-1 sm:ml-6 sm:gap-2">
            <SignInButton>
              <Button
                variant="ghost"
                size="sm"
                className="px-2 text-xs sm:px-3 sm:text-sm"
              >
                Sign In
              </Button>
            </SignInButton>
            <SignUpButton>
              <Button
                size="sm"
                className="bg-orange-600 px-3 text-xs hover:bg-orange-700 sm:px-4 sm:text-sm"
              >
                Get Started
              </Button>
            </SignUpButton>
          </div>
        </header>
      </SignedOut>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4 sm:space-y-6">
                <div className="space-y-3 sm:space-y-4">
                  <Badge className="bg-orange-100 text-xs text-orange-800 hover:bg-orange-100 sm:text-sm">
                    🔥 Never Miss a Deal Again
                  </Badge>
                  <h1 className="text-2xl leading-tight font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                    Get Notified About the{" "}
                    <span className="text-orange-600">Best Deals</span> Before
                    They&apos;re Gone
                  </h1>
                  <p className="max-w-[600px] text-base leading-relaxed text-gray-500 sm:text-lg md:text-xl">
                    Set your preferences, and we&apos;ll hunt down the best
                    deals for you. Get instant notifications when prices drop on
                    products you actually want.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <Link href="/pricing" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      className="w-full bg-orange-600 hover:bg-orange-700 sm:w-auto"
                    >
                      Start Saving Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    Watch Demo
                  </Button>
                </div>
                <div className="flex flex-col items-start gap-2 text-sm text-gray-500 sm:flex-row sm:items-center sm:gap-4">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Free to start
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    No credit card required
                  </div>
                </div>
              </div>
              <div className="mt-8 flex items-center justify-center lg:mt-0">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    width="300"
                    height="400"
                    alt="DealHunter App Interface"
                    className="w-full max-w-[250px] rounded-2xl shadow-2xl sm:max-w-[300px]"
                  />
                  <div className="absolute -top-2 -right-2 animate-pulse rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white sm:-top-4 sm:-right-4 sm:px-3 sm:py-1 sm:text-sm">
                    70% OFF
                  </div>
                  <div className="absolute -bottom-2 -left-2 rounded-full bg-green-500 px-2 py-1 text-xs font-bold text-white sm:-bottom-4 sm:-left-4 sm:px-3 sm:py-1 sm:text-sm">
                    Deal Alert!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full border-y bg-white py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 gap-4 text-center sm:gap-8 md:grid-cols-4">
              <div className="flex flex-col items-center justify-center space-y-1 sm:space-y-2">
                <div className="text-xl font-bold text-orange-600 sm:text-2xl md:text-3xl">
                  $2.3M+
                </div>
                <div className="text-xs text-gray-500 sm:text-sm">
                  Total Savings
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-1 sm:space-y-2">
                <div className="text-xl font-bold text-orange-600 sm:text-2xl md:text-3xl">
                  50K+
                </div>
                <div className="text-xs text-gray-500 sm:text-sm">
                  Active Users
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-1 sm:space-y-2">
                <div className="text-xl font-bold text-orange-600 sm:text-2xl md:text-3xl">
                  1M+
                </div>
                <div className="text-xs text-gray-500 sm:text-sm">
                  Deals Tracked
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-1 sm:space-y-2">
                <div className="text-xl font-bold text-orange-600 sm:text-2xl md:text-3xl">
                  4.9★
                </div>
                <div className="text-xs text-gray-500 sm:text-sm">
                  User Rating
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="w-full bg-gray-50 py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32"
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-3 sm:space-y-4">
                <Badge className="bg-orange-100 text-xs text-orange-800 sm:text-sm">
                  Features
                </Badge>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
                  Everything You Need to Save More
                </h2>
                <p className="max-w-[900px] text-sm leading-relaxed text-gray-500 sm:text-base md:text-lg lg:text-xl">
                  Our intelligent deal hunting system works 24/7 to find you the
                  best prices on products you love.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-4 py-8 sm:gap-6 sm:py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <Card className="border-0 shadow-lg">
                <CardContent className="flex flex-col items-center space-y-3 p-4 sm:space-y-4 sm:p-6">
                  <Bell className="h-10 w-10 text-orange-600 sm:h-12 sm:w-12" />
                  <h3 className="text-center text-lg font-bold sm:text-xl">
                    Smart Notifications
                  </h3>
                  <p className="text-center text-sm text-gray-500 sm:text-base">
                    Get instant alerts when prices drop on your wishlist items.
                    Never miss a deal again.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="flex flex-col items-center space-y-3 p-4 sm:space-y-4 sm:p-6">
                  <Target className="h-10 w-10 text-orange-600 sm:h-12 sm:w-12" />
                  <h3 className="text-center text-lg font-bold sm:text-xl">
                    Personalized Deals
                  </h3>
                  <p className="text-center text-sm text-gray-500 sm:text-base">
                    AI-powered recommendations based on your shopping history
                    and preferences.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg md:col-span-2 lg:col-span-1">
                <CardContent className="flex flex-col items-center space-y-3 p-4 sm:space-y-4 sm:p-6">
                  <Zap className="h-10 w-10 text-orange-600 sm:h-12 sm:w-12" />
                  <h3 className="text-center text-lg font-bold sm:text-xl">
                    Lightning Fast
                  </h3>
                  <p className="text-center text-sm text-gray-500 sm:text-base">
                    Real-time price tracking across thousands of retailers.
                    Deals updated every minute.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section
          id="how-it-works"
          className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32"
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-3 sm:space-y-4">
                <Badge className="bg-orange-100 text-xs text-orange-800 sm:text-sm">
                  How It Works
                </Badge>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
                  Start Saving in 3 Simple Steps
                </h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-8 sm:gap-8 sm:py-12 md:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-3 text-center sm:space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 sm:h-16 sm:w-16">
                  <span className="text-lg font-bold text-orange-600 sm:text-2xl">
                    1
                  </span>
                </div>
                <h3 className="text-lg font-bold sm:text-xl">
                  Set Your Preferences
                </h3>
                <p className="text-sm text-gray-500 sm:text-base">
                  Tell us what products you&apos;re interested in and set your
                  desired price ranges.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center sm:space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 sm:h-16 sm:w-16">
                  <span className="text-lg font-bold text-orange-600 sm:text-2xl">
                    2
                  </span>
                </div>
                <h3 className="text-lg font-bold sm:text-xl">
                  We Hunt for Deals
                </h3>
                <p className="text-sm text-gray-500 sm:text-base">
                  Our AI scans thousands of retailers 24/7 to find the best
                  deals matching your criteria.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center sm:space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 sm:h-16 sm:w-16">
                  <span className="text-lg font-bold text-orange-600 sm:text-2xl">
                    3
                  </span>
                </div>
                <h3 className="text-lg font-bold sm:text-xl">
                  Get Notified & Save
                </h3>
                <p className="text-sm text-gray-500 sm:text-base">
                  Receive instant notifications and grab amazing deals before
                  they expire.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full bg-gray-50 py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-3 sm:space-y-4">
                <Badge className="bg-orange-100 text-xs text-orange-800 sm:text-sm">
                  Testimonials
                </Badge>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
                  Loved by Deal Hunters Everywhere
                </h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-4 py-8 sm:gap-6 sm:py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-4 sm:p-6">
                  <div className="mb-3 flex items-center space-x-1 sm:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3 w-3 fill-yellow-400 text-yellow-400 sm:h-4 sm:w-4"
                      />
                    ))}
                  </div>
                  <p className="mb-3 text-sm text-gray-500 sm:mb-4 sm:text-base">
                    &quot;I&apos;ve saved over $500 this month alone! The
                    notifications are spot-on and I never miss a good deal
                    anymore.&quot;
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="h-6 w-6 rounded-full bg-orange-100 sm:h-8 sm:w-8"></div>
                    <div>
                      <div className="text-sm font-semibold sm:text-base">
                        Sarah Johnson
                      </div>
                      <div className="text-xs text-gray-500 sm:text-sm">
                        Verified User
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-4 sm:p-6">
                  <div className="mb-3 flex items-center space-x-1 sm:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3 w-3 fill-yellow-400 text-yellow-400 sm:h-4 sm:w-4"
                      />
                    ))}
                  </div>
                  <p className="mb-3 text-sm text-gray-500 sm:mb-4 sm:text-base">
                    &quot;Game changer! The app found me a 60% off deal on
                    headphones I&apos;d been watching for months.&quot;
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="h-6 w-6 rounded-full bg-orange-100 sm:h-8 sm:w-8"></div>
                    <div>
                      <div className="text-sm font-semibold sm:text-base">
                        Mike Chen
                      </div>
                      <div className="text-xs text-gray-500 sm:text-sm">
                        Tech Enthusiast
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg md:col-span-2 lg:col-span-1">
                <CardContent className="p-4 sm:p-6">
                  <div className="mb-3 flex items-center space-x-1 sm:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3 w-3 fill-yellow-400 text-yellow-400 sm:h-4 sm:w-4"
                      />
                    ))}
                  </div>
                  <p className="mb-3 text-sm text-gray-500 sm:mb-4 sm:text-base">
                    &quot;Simple, effective, and saves me so much time. I
                    don&apos;t have to constantly check prices anymore.&quot;
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="h-6 w-6 rounded-full bg-orange-100 sm:h-8 sm:w-8"></div>
                    <div>
                      <div className="text-sm font-semibold sm:text-base">
                        Emily Rodriguez
                      </div>
                      <div className="text-xs text-gray-500 sm:text-sm">
                        Busy Mom
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-gradient-to-r from-orange-600 to-red-600 py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white sm:space-y-6">
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
                  Ready to Start Saving?
                </h2>
                <p className="mx-auto max-w-[600px] text-sm leading-relaxed text-orange-100 sm:text-base md:text-lg lg:text-xl">
                  Join thousands of smart shoppers who never pay full price. Get
                  started for free today.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-3 sm:space-y-4">
                <form className="flex flex-col gap-2 sm:flex-row sm:gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 border-white/20 bg-white/10 text-sm text-white placeholder:text-white/70 sm:text-base"
                  />
                  <Button
                    type="submit"
                    variant="secondary"
                    className="w-full bg-white text-orange-600 hover:bg-gray-100 sm:w-auto"
                  >
                    Get Started
                  </Button>
                </form>
                <p className="text-xs leading-relaxed text-orange-100 sm:text-sm">
                  Free forever. No credit card required.{" "}
                  <Link
                    href="/privacy"
                    className="underline underline-offset-2"
                  >
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex w-full shrink-0 flex-col items-center gap-3 border-t bg-white px-4 py-6 sm:flex-row sm:gap-2 sm:px-6">
        <div className="flex items-center space-x-2">
          <Target className="h-4 w-4 text-orange-600 sm:h-5 sm:w-5" />
          <span className="text-sm font-semibold sm:text-base">DealHunter</span>
        </div>
        <p className="text-center text-xs text-gray-500 sm:ml-4 sm:text-left">
          © 2025 DealHunter. All rights reserved.
        </p>
        <nav className="flex flex-wrap justify-center gap-3 sm:ml-auto sm:gap-4">
          <Link
            href="#"
            className="text-xs text-gray-500 underline-offset-4 hover:underline"
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs text-gray-500 underline-offset-4 hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-xs text-gray-500 underline-offset-4 hover:underline"
          >
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  );
}
