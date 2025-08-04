import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import {
  Target,
  Search,
  ShoppingCart,
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
} from "lucide-react"
import Link from "next/link"

const categories = [
  { name: "Electronics", icon: Smartphone, href: "/category/electronics" },
  { name: "Computers", icon: Laptop, href: "/category/computers" },
  { name: "Audio", icon: Headphones, href: "/category/audio" },
  { name: "Wearables", icon: Watch, href: "/category/wearables" },
  { name: "Photography", icon: Camera, href: "/category/photography" },
  { name: "Gaming", icon: Gamepad2, href: "/category/gaming" },
  { name: "Home & Garden", icon: Home, href: "/category/home-garden" },
  { name: "Fashion", icon: Shirt, href: "/category/fashion" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Target className="h-8 w-8 text-orange-600" />
            <span className="text-xl font-bold text-gray-900 hidden sm:block">DealHunter</span>
            <span className="text-lg font-bold text-gray-900 sm:hidden">DH</span>
          </Link>

          {/* Categories Dropdown - Desktop */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="hidden lg:flex items-center gap-2 h-10 bg-transparent">
                <Menu className="h-4 w-4" />
                <span>Categories</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              {categories.map((category) => {
                const IconComponent = category.icon
                return (
                  <DropdownMenuItem key={category.name} asChild>
                    <Link href={category.href} className="flex items-center gap-3 px-3 py-2">
                      <IconComponent className="h-4 w-4 text-gray-500" />
                      <span>{category.name}</span>
                    </Link>
                  </DropdownMenuItem>
                )
              })}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input type="search" placeholder="Search for products..." className="pl-10 pr-4 h-10 w-full" />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Shopping Cart */}
            <Button variant="ghost" size="sm" className="relative p-2">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-orange-600 text-xs text-white flex items-center justify-center">
                0
              </span>
              <span className="sr-only">Shopping cart</span>
            </Button>

            {/* User Authentication */}
            <SignedOut>
              <div className="flex items-center gap-1 sm:gap-2">
                <SignInButton>
                  <Button variant="ghost" size="sm" className="text-xs sm:text-sm px-2 sm:px-3">
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton>
                  <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-xs sm:text-sm px-2 sm:px-4">
                    Sign Up
                  </Button>
                </SignUpButton>
              </div>
            </SignedOut>

            <SignedIn>
              <div className="flex items-center gap-2">
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "h-8 w-8",
                    },
                  }}
                />
              </div>
            </SignedIn>

            {/* Mobile Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden p-2">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="px-3 py-2 border-b">
                  <p className="font-medium">Categories</p>
                </div>
                {categories.map((category) => {
                  const IconComponent = category.icon
                  return (
                    <DropdownMenuItem key={category.name} asChild>
                      <Link href={category.href} className="flex items-center gap-3 px-3 py-2">
                        <IconComponent className="h-4 w-4 text-gray-500" />
                        <span>{category.name}</span>
                      </Link>
                    </DropdownMenuItem>
                  )
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="border-t lg:hidden">
        <div className="container mx-auto px-4 py-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input type="search" placeholder="Search products..." className="pl-10 pr-4 h-10 w-full" />
          </div>
        </div>
      </div>
    </header>
  )
}
