import { Link, Target } from "lucide-react";
import { Button } from "./button";

export default function TopBar() {
  return (
    <header className="sticky top-0 z-50 flex h-16 items-center border-b bg-white/80 px-4 backdrop-blur-sm lg:px-6">
      <Link href="/" className="flex items-center justify-center">
        <Target className="h-8 w-8 text-orange-600" />
        <span className="ml-2 text-xl font-bold text-gray-900">DealHunter</span>
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
  );
}
