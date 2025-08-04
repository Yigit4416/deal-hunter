import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { Target } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
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
                        href="/#features"
                        className="text-sm font-medium transition-colors hover:text-orange-600"
                    >
                        Features
                    </Link>
                    <Link
                        href="/#how-it-works"
                        className="text-sm font-medium transition-colors hover:text-orange-600"
                    >
                        How It Works
                    </Link>
                    <Link
                        href="/pricing"
                        className="text-sm font-medium text-orange-600"
                    >
                        Pricing
                    </Link>
                </nav>
                <div className="ml-6 flex gap-2">
                    <SignedOut>
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
                    </SignedOut>
                    <SignedIn>
                        <Link href="/home-page">
                            <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                                Go to deals
                            </Button>
                        </Link>
                    </SignedIn>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 px-4 py-12 md:px-6 md:py-24 lg:py-32">
                <div className="mx-auto mb-12 max-w-3xl space-y-4 text-center">
                    <Badge className="bg-orange-100 text-orange-800">Pricing</Badge>
                    <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                        Simple & Transparent Pricing
                    </h1>
                    <p className="text-lg text-gray-600">
                        Choose a plan that fits your savings goals. Start free and upgrade
                        when you&apos;re ready.
                    </p>
                </div>

                <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
                    {/* Basic Plan */}
                    <Card className="border-0 shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-2xl">Basic Plan</CardTitle>
                            <CardDescription>
                                Basic features to help you get started
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="text-4xl font-bold text-orange-600">$5</div>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>✔ Up to 5 categories to watch</li>
                                <li>✔ Up to 100 items in your watchlist</li>
                                <li>✔ Email notifications only</li>
                            </ul>
                            <Button className="w-full bg-orange-600 text-white hover:bg-orange-700">
                                Get Started
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Premium Plan */}
                    <Card className="border-0 shadow-lg ring-2 ring-orange-600">
                        <CardHeader>
                            <CardTitle className="text-2xl">Premium Plan</CardTitle>
                            <CardDescription>For power users who want it all</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="text-4xl font-bold text-orange-600">$15</div>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>✔ Unlimited categories to watch</li>
                                <li>✔ Unlimited items in your watchlist</li>
                                <li>✔ Email, text, WhatsApp, and Telegram notifications</li>
                            </ul>
                            <Button className="w-full bg-orange-600 text-white hover:bg-orange-700">
                                Upgrade Now
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}
