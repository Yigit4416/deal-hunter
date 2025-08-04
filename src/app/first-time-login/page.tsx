"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

const categories = [
  { id: "electronics", name: "Electronics", icon: "⚡" },
  { id: "computers", name: "Computers", icon: "💻" },
  { id: "audio", name: "Audio", icon: "🎧" },
  { id: "gaming", name: "Gaming", icon: "🎮" },
  { id: "fashion", name: "Fashion", icon: "👕" },
  { id: "home", name: "Home", icon: "🏠" },
  { id: "sports", name: "Sports", icon: "⚽" },
  { id: "books", name: "Books", icon: "📚" },
  { id: "cars", name: "Cars", icon: "🚗" },
]

export default function InterestsSelection() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(categoryId)) {
        return prev.filter((id) => id !== categoryId)
      } else if (prev.length < 10) {
        return [...prev, categoryId]
      }
      return prev
    })
  }

  const getButtonText = () => {
    if (selectedCategories.length < 3) {
      return `${selectedCategories.length}/3`
    }
    return "Continue"
  }

  const isButtonEnabled = selectedCategories.length >= 3

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What are your interests?</h1>
            <p className="text-lg text-gray-600 mb-2">Select at least 3 categories to personalize your experience</p>
            <p className="text-sm text-gray-500">Choose between 3-10 categories that interest you most</p>
          </div>

          {/* Categories Grid */}
          <div className="bg-gradient-to-br from-orange-50 via-white to-emerald-50 rounded-2xl p-6 sm:p-8 shadow-lg mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((category) => {
                const isSelected = selectedCategories.includes(category.id)
                const isMaxReached = selectedCategories.length >= 10 && !isSelected

                return (
                  <button
                    key={category.id}
                    onClick={() => toggleCategory(category.id)}
                    disabled={isMaxReached}
                    className={`
                      relative p-6 rounded-xl border-2 transition-all duration-200 text-left
                      ${isSelected
                        ? "border-orange-500 bg-orange-50 shadow-md"
                        : "border-gray-200 bg-white/70 hover:border-orange-300 hover:bg-orange-25"
                      }
                      ${isMaxReached ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
                    `}
                  >
                    {/* Selection indicator */}
                    {isSelected && (
                      <div className="absolute top-3 right-3">
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    )}

                    {/* Category content */}
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{category.icon}</div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">{category.name}</h3>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Selection counter */}
            <div className="mt-6 text-center">
              <Badge variant="outline" className="bg-white/70 border-orange-200 text-orange-700">
                {selectedCategories.length} of 10 categories selected
              </Badge>
            </div>
          </div>

          {/* Continue Button */}
          <div className="text-center">
            <Button
              size="lg"
              disabled={!isButtonEnabled}
              className={`
                w-full sm:w-auto px-12 py-4 text-lg font-semibold rounded-xl shadow-lg
                ${isButtonEnabled
                  ? "bg-orange-600 hover:bg-orange-700 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }
              `}
            >
              {getButtonText()}
            </Button>

            {selectedCategories.length < 3 && (
              <p className="text-sm text-gray-500 mt-3">
                Select {3 - selectedCategories.length} more{" "}
                {3 - selectedCategories.length === 1 ? "category" : "categories"} to continue
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
