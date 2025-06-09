"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

// Mock product database for search
const allProducts = [
  {
    id: "pressure-treated-2x4",
    title: "Pressure-Treated 2×4",
    description: "Perfect for outdoor projects and ground contact applications.",
    price: "$8.99/8ft",
    category: "timber",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "cedar-decking",
    title: "Cedar Decking 5/4×6",
    description: "Naturally resistant to decay and insects.",
    price: "$3.25/ft",
    category: "timber",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "quick-set-concrete",
    title: "Quick-Set Concrete Mix",
    description: "Sets in 20-40 minutes for posts, footings, and small repairs.",
    price: "$7.99/60lb bag",
    category: "concrete",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "red-clay-brick",
    title: "Red Clay Brick",
    description: "Classic red clay bricks for walls, paths, and decorative projects.",
    price: "$0.89/each",
    category: "concrete",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "led-recessed-lighting",
    title: "LED Recessed Lighting Kit",
    description: "Energy-efficient 6-inch LED recessed lights. Dimmable, 3000K warm white.",
    price: "$24.99/each",
    category: "electrical",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "gfci-outlet",
    title: "20A GFCI Outlet",
    description: "Ground fault circuit interrupter outlet for kitchens, bathrooms, and outdoor locations.",
    price: "$18.75/each",
    category: "electrical",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "kitchen-faucet",
    title: "Single-Handle Kitchen Faucet",
    description: "Stainless steel finish with pull-down sprayer.",
    price: "$129.99/each",
    category: "plumbing",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "pvc-schedule-40-pipe",
    title: "PVC Schedule 40 Pipe 1½″",
    description: "For drain, waste, and vent applications.",
    price: "$3.49/10ft",
    category: "plumbing",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "cordless-drill-kit",
    title: "20V Cordless Drill/Driver Kit",
    description: "Includes drill/driver, 2 lithium-ion batteries, charger, and carrying case.",
    price: "$129.99/kit",
    category: "tools",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "circular-saw",
    title: "7¼″ Circular Saw",
    description: "15-amp motor, 5,800 RPM. Bevel capacity up to 56°.",
    price: "$99.99/each",
    category: "tools",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export function SearchDialog() {
  const [open, setOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<typeof allProducts>([])

  // Search function
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([])
      return
    }

    const query = searchQuery.toLowerCase()
    const results = allProducts.filter(
      (product) =>
        product.title.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query),
    )
    setSearchResults(results)
  }, [searchQuery])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="relative h-9 w-9">
          <Search className="h-4 w-4" />
          <span className="sr-only">Search menu</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden">
        <div className="relative">
          {/* Diner Menu Board Header */}
          <div className="bg-slate-900 p-6 text-center">
            <div className="relative">
              <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
                <span className="relative inline-block">
                  <span className="relative z-10">TODAY'S SPECIALS</span>
                  <span className="absolute -inset-1 z-0 blur-[2px] bg-red-500 opacity-70"></span>
                </span>
              </h2>
              <p className="mt-2 text-yellow-300">Search our menu of quality building supplies</p>
            </div>
          </div>

          {/* Search Input */}
          <div className="relative border-y-4 border-dashed border-red-500 bg-slate-800 p-4">
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <Input
                  type="search"
                  placeholder="What are you looking for today?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-12 border-2 border-yellow-400 bg-white pl-10 pr-4 text-slate-900 placeholder:text-slate-500 focus:border-red-500 focus:ring-red-500"
                  autoFocus
                />
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchQuery("")}
                className="h-10 w-10 text-slate-300 hover:text-white"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Clear search</span>
              </Button>
            </div>
          </div>

          {/* Search Results */}
          <div className="max-h-[60vh] overflow-y-auto bg-white p-0">
            {searchQuery.trim() === "" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="rounded-full bg-slate-100 p-4">
                  <Search className="h-8 w-8 text-slate-400" />
                </div>
                <h3 className="mt-4 font-serif text-xl font-medium text-slate-800">Search Our Menu</h3>
                <p className="mt-2 max-w-md text-slate-600">
                  Enter a product name, category, or description to find what you're looking for
                </p>
              </div>
            ) : searchResults.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="rounded-full bg-red-100 p-4">
                  <X className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="mt-4 font-serif text-xl font-medium text-slate-800">No Items Found</h3>
                <p className="mt-2 max-w-md text-slate-600">
                  We couldn't find any menu items matching "{searchQuery}". Try a different search term.
                </p>
              </div>
            ) : (
              <div className="divide-y divide-dashed divide-slate-200">
                {searchResults.map((product) => (
                  <Link
                    key={`${product.category}-${product.id}`}
                    href={`/products/${product.category}/${product.id}`}
                    onClick={() => setOpen(false)}
                    className="group block hover:bg-red-50"
                  >
                    <div className="flex items-center gap-4 p-4">
                      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-slate-200">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.title}
                          width={80}
                          height={80}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1 pr-4">
                        <div className="flex items-baseline justify-between gap-2 border-b border-dotted border-slate-200 pb-1">
                          <h3 className="font-serif text-lg font-bold text-slate-800 group-hover:text-red-500">
                            {product.title}
                          </h3>
                          <span className="whitespace-nowrap font-medium text-red-500">{product.price}</span>
                        </div>
                        <p className="mt-1 text-sm text-slate-600">{product.description}</p>
                        <p className="mt-1 text-xs font-medium uppercase text-slate-500">
                          Category: {product.category}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Diner Menu Footer */}
          <div className="bg-slate-900 p-4 text-center">
            <p className="text-sm text-slate-400">Ask your server about our contractor specials and daily deals!</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
