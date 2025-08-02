/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, Target, Zap, Star, ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

export default function DealHunterLanding() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
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
            className="text-sm font-medium transition-colors hover:text-orange-600"
          >
            Pricing
          </Link>
        </nav>
        <div className="ml-6 flex gap-2">
          <SignInButton>
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
          </SignInButton>
          <SignUpButton>
            <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
              Get Started
            </Button>
          </SignUpButton>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">
                    🔥 Never Miss a Deal Again
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Get Notified About the{" "}
                    <span className="text-orange-600">Best Deals</span> Before
                    They&apos;re Gone
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Set your preferences, and we&apos;ll hunt down the best
                    deals for you. Get instant notifications when prices drop on
                    products you actually want.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/pricing">
                    <Button
                      size="lg"
                      className="bg-orange-600 hover:bg-orange-700"
                    >
                      Start Saving Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg">
                    Watch Demo
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500">
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
              <div className="flex items-center justify-center">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    width="300"
                    height="400"
                    alt="DealHunter App Interface"
                    className="rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -top-4 -right-4 animate-pulse rounded-full bg-red-500 px-3 py-1 text-sm font-bold text-white">
                    70% OFF
                  </div>
                  <div className="absolute -bottom-4 -left-4 rounded-full bg-green-500 px-3 py-1 text-sm font-bold text-white">
                    Deal Alert!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full border-y bg-white py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid h-full grid-cols-2 gap-8 text-center md:grid-cols-4">
              <div className="flex h-full flex-col items-center justify-center">
                <div className="text-3xl font-bold text-orange-600">$2.3M+</div>
                <div className="text-sm text-gray-500">Total Savings</div>
              </div>
              <div className="flex h-full flex-col items-center justify-center">
                <div className="text-3xl font-bold text-orange-600">50K+</div>
                <div className="text-sm text-gray-500">Active Users</div>
              </div>
              <div className="flex h-full flex-col items-center justify-center">
                <div className="text-3xl font-bold text-orange-600">1M+</div>
                <div className="text-sm text-gray-500">Deals Tracked</div>
              </div>
              <div className="flex h-full flex-col items-center justify-center">
                <div className="text-3xl font-bold text-orange-600">4.9★</div>
                <div className="text-sm text-gray-500">User Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="w-full bg-gray-50 py-12 md:py-24 lg:py-32"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-orange-100 text-orange-800">
                  Features
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Everything You Need to Save More
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our intelligent deal hunting system works 24/7 to find you the
                  best prices on products you love.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="border-0 shadow-lg">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Bell className="h-12 w-12 text-orange-600" />
                  <h3 className="text-xl font-bold">Smart Notifications</h3>
                  <p className="text-center text-gray-500">
                    Get instant alerts when prices drop on your wishlist items.
                    Never miss a deal again.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Target className="h-12 w-12 text-orange-600" />
                  <h3 className="text-xl font-bold">Personalized Deals</h3>
                  <p className="text-center text-gray-500">
                    AI-powered recommendations based on your shopping history
                    and preferences.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Zap className="h-12 w-12 text-orange-600" />
                  <h3 className="text-xl font-bold">Lightning Fast</h3>
                  <p className="text-center text-gray-500">
                    Real-time price tracking across thousands of retailers.
                    Deals updated every minute.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-orange-100 text-orange-800">
                  How It Works
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Start Saving in 3 Simple Steps
                </h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                  <span className="text-2xl font-bold text-orange-600">1</span>
                </div>
                <h3 className="text-xl font-bold">Set Your Preferences</h3>
                <p className="text-gray-500">
                  Tell us what products you&apos;re interested in and set your
                  desired price ranges.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                  <span className="text-2xl font-bold text-orange-600">2</span>
                </div>
                <h3 className="text-xl font-bold">We Hunt for Deals</h3>
                <p className="text-gray-500">
                  Our AI scans thousands of retailers 24/7 to find the best
                  deals matching your criteria.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                  <span className="text-2xl font-bold text-orange-600">3</span>
                </div>
                <h3 className="text-xl font-bold">Get Notified & Save</h3>
                <p className="text-gray-500">
                  Receive instant notifications and grab amazing deals before
                  they expire.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full bg-gray-50 py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-orange-100 text-orange-800">
                  Testimonials
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Loved by Deal Hunters Everywhere
                </h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="mb-4 text-gray-500">
                    &quot;I&apos;ve saved over $500 this month alone! The
                    notifications are spot-on and I never miss a good deal
                    anymore.&quot;
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-full bg-orange-100"></div>
                    <div>
                      <div className="font-semibold">Sarah Johnson</div>
                      <div className="text-sm text-gray-500">Verified User</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="mb-4 text-gray-500">
                    &quot;Game changer! The app found me a 60% off deal on
                    headphones I&apos;d been watching for months.&quot;
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-full bg-orange-100"></div>
                    <div>
                      <div className="font-semibold">Mike Chen</div>
                      <div className="text-sm text-gray-500">
                        Tech Enthusiast
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="mb-4 text-gray-500">
                    &quot;Simple, effective, and saves me so much time. I
                    don&apos;t have to constantly check prices anymore.&quot;
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-full bg-orange-100"></div>
                    <div>
                      <div className="font-semibold">Emily Rodriguez</div>
                      <div className="text-sm text-gray-500">Busy Mom</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-gradient-to-r from-orange-600 to-red-600 py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Start Saving?
                </h2>
                <p className="mx-auto max-w-[600px] text-orange-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of smart shoppers who never pay full price. Get
                  started for free today.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="max-w-lg flex-1 border-white/20 bg-white/10 text-white placeholder:text-white/70"
                  />
                  <Button
                    type="submit"
                    variant="secondary"
                    className="bg-white text-orange-600 hover:bg-gray-100"
                  >
                    Get Started
                  </Button>
                </form>
                <p className="text-xs text-orange-100">
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
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t bg-white px-4 py-6 sm:flex-row md:px-6">
        <div className="flex items-center space-x-2">
          <Target className="h-5 w-5 text-orange-600" />
          <span className="font-semibold">DealHunter</span>
        </div>
        <p className="text-xs text-gray-500 sm:ml-4">
          © 2025 DealHunter. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
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
