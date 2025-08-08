"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import {
  Target,
  Search,
  Bookmark,
  Menu,
  ChevronDown,
  Smartphone,
  Laptop,
  Headphones,
  Watch,
  Camera,
  Gamepad2,
  Home,
  Shirt,
} from "lucide-react";
import Link from "next/link";

const categories = [
  { name: "Electronics", icon: Smartphone, href: "/home-page/electronics" },
  { name: "Computers", icon: Laptop, href: "/home-page/computers" },
  { name: "Audio", icon: Headphones, href: "/home-page/audio" },
  { name: "Wearables", icon: Watch, href: "/home-page/wearables" },
  { name: "Photography", icon: Camera, href: "/home-page/photography" },
  { name: "Gaming", icon: Gamepad2, href: "/home-page/gaming" },
  { name: "Home & Garden", icon: Home, href: "/home-page/home-garden" },
  { name: "Fashion", icon: Shirt, href: "/home-page/fashion" },
];

export function Header() {
  const pathname = usePathname();

  // Determine selected category based on current pathname
  const selectedCategory =
    categories.find((cat) => pathname === cat.href)?.name ?? null;

  const getSelectedCategoryIcon = () => {
    if (!selectedCategory) return Menu;
    const category = categories.find((cat) => cat.name === selectedCategory);
    return category?.icon ?? Menu;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto max-w-[1900px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center gap-4">
          {/* Left - Logo & Categories - Fixed width */}
          <div className="flex min-w-0 flex-shrink-0 items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-600">
                <Target className="h-5 w-5 text-white" />
              </div>
              <span className="hidden text-lg font-bold text-gray-900 sm:block">
                DealHunter
              </span>
            </Link>
            {/* Desktop Categories Dropdown */}
            <div className="hidden xl:block">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className={`flex h-9 items-center gap-2 px-3 ${
                      selectedCategory
                        ? "border-orange-600 bg-orange-50 text-orange-700 hover:bg-orange-100"
                        : "border-gray-200 hover:border-orange-600 hover:text-orange-600"
                    }`}
                  >
                    {(() => {
                      const Icon = getSelectedCategoryIcon();
                      return <Icon className="h-4 w-4" />;
                    })()}
                    <span className="text-sm">
                      {selectedCategory ?? "Categories"}
                    </span>
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56 p-2">
                  {/* All Categories option */}
                  <DropdownMenuItem asChild>
                    <Link
                      href="/"
                      className={`flex items-center gap-3 rounded-md px-3 py-2 ${
                        !selectedCategory
                          ? "bg-orange-100 text-orange-700"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <Menu
                        className={`h-4 w-4 ${!selectedCategory ? "text-orange-600" : "text-gray-500"}`}
                      />
                      <span className="text-sm">All Categories</span>
                      {!selectedCategory && (
                        <div className="ml-auto h-2 w-2 rounded-full bg-orange-600" />
                      )}
                    </Link>
                  </DropdownMenuItem>
                  <div className="my-1 border-t border-gray-100" />
                  {categories.map((category) => {
                    const Icon = category.icon;
                    const isSelected = selectedCategory === category.name;
                    return (
                      <DropdownMenuItem key={category.name} asChild>
                        <Link
                          href={category.href}
                          className={`flex items-center gap-3 rounded-md px-3 py-2 ${
                            isSelected
                              ? "bg-orange-100 text-orange-700"
                              : "hover:bg-orange-50 hover:text-orange-700"
                          }`}
                        >
                          <Icon
                            className={`h-4 w-4 ${isSelected ? "text-orange-600" : "text-gray-500"}`}
                          />
                          <span className="text-sm">{category.name}</span>
                          {isSelected && (
                            <div className="ml-auto h-2 w-2 rounded-full bg-orange-600" />
                          )}
                        </Link>
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Center - Search - Absolutely positioned for true centering */}
          <div className="absolute top-1/2 left-1/2 hidden w-full max-w-xl -translate-x-1/2 -translate-y-1/2 transform px-4 lg:block">
            <div className="relative">
              <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Search for products..."
                className="h-10 w-full rounded-lg border-gray-200 pr-20 pl-10 text-sm focus:border-orange-600 focus:ring-orange-600"
              />
              <Button
                size="sm"
                className="absolute top-1/2 right-1 h-8 -translate-y-1/2 bg-orange-600 px-3 text-xs hover:bg-orange-700"
              >
                Search
              </Button>
            </div>
          </div>

          {/* Right - Cart & Auth - Fixed width */}
          <div className="ml-auto flex min-w-0 flex-shrink-0 items-center gap-2 sm:gap-3">
            <Link href="/watch-list">
              <Button
                variant="ghost"
                size="sm"
                className="relative p-2 hover:bg-orange-50 hover:text-orange-700"
                aria-label="Watchlist"
              >
                <Bookmark className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-orange-600 text-xs font-medium text-white">
                  3
                </span>
              </Button>
            </Link>

            {/* Auth Buttons */}
            <SignedOut>
              <div className="hidden items-center gap-2 sm:flex">
                <SignInButton>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="px-3 text-sm hover:bg-orange-50 hover:text-orange-700"
                  >
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton>
                  <Button
                    size="sm"
                    className="bg-orange-600 px-4 text-sm hover:bg-orange-700"
                  >
                    Sign Up
                  </Button>
                </SignUpButton>
              </div>
              <div className="sm:hidden">
                <SignInButton>
                  <Button
                    size="sm"
                    className="bg-orange-600 px-3 text-xs hover:bg-orange-700"
                  >
                    Sign In
                  </Button>
                </SignInButton>
              </div>
            </SignedOut>

            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox:
                      "h-8 w-8 ring-2 ring-orange-100 hover:ring-orange-200",
                  },
                }}
              />
            </SignedIn>

            {/* Mobile Menu */}
            <div className="xl:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-2 hover:bg-orange-50 hover:text-orange-700"
                    aria-label="Open menu"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 p-2">
                  <div className="mb-2 border-b border-gray-100 px-3 py-2">
                    <p className="text-sm font-medium text-gray-900">
                      {selectedCategory
                        ? `Selected: ${selectedCategory}`
                        : "Categories"}
                    </p>
                  </div>
                  {/* All Categories option for mobile */}
                  <DropdownMenuItem asChild>
                    <Link
                      href="/"
                      className={`flex items-center gap-3 rounded-md px-3 py-2 ${
                        !selectedCategory
                          ? "bg-orange-100 text-orange-700"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <Menu
                        className={`h-4 w-4 ${!selectedCategory ? "text-orange-600" : "text-gray-500"}`}
                      />
                      <span className="text-sm">All Categories</span>
                      {!selectedCategory && (
                        <div className="ml-auto h-2 w-2 rounded-full bg-orange-600" />
                      )}
                    </Link>
                  </DropdownMenuItem>
                  <div className="my-1 border-t border-gray-100" />
                  {categories.map((category) => {
                    const Icon = category.icon;
                    const isSelected = selectedCategory === category.name;
                    return (
                      <DropdownMenuItem key={category.name} asChild>
                        <Link
                          href={category.href}
                          className={`flex items-center gap-3 rounded-md px-3 py-2 ${
                            isSelected
                              ? "bg-orange-100 text-orange-700"
                              : "hover:bg-orange-50 hover:text-orange-700"
                          }`}
                        >
                          <Icon
                            className={`h-4 w-4 ${isSelected ? "text-orange-600" : "text-gray-500"}`}
                          />
                          <span className="text-sm">{category.name}</span>
                          {isSelected && (
                            <div className="ml-auto h-2 w-2 rounded-full bg-orange-600" />
                          )}
                        </Link>
                      </DropdownMenuItem>
                    );
                  })}
                  <SignedOut>
                    <div className="mt-2 border-t border-gray-100 pt-2 sm:hidden">
                      <SignUpButton>
                        <button className="w-full rounded-md px-3 py-2 text-left text-sm hover:bg-orange-50 hover:text-orange-700">
                          Sign Up
                        </button>
                      </SignUpButton>
                    </div>
                  </SignedOut>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="border-t border-gray-100 bg-white lg:hidden">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="py-3">
            <div className="relative">
              <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Search products..."
                className="h-10 w-full rounded-lg border-gray-200 pr-16 pl-10 text-sm focus:border-orange-600 focus:ring-orange-600"
              />
              <Button
                size="sm"
                className="absolute top-1/2 right-1 h-8 -translate-y-1/2 bg-orange-600 px-3 text-xs hover:bg-orange-700"
              >
                Go
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
