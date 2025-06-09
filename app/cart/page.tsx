import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Minus, Plus, ShoppingCart, Trash2, Utensils } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { SearchDialog } from "@/components/search-dialog"

// Mock cart data
const cartItems = [
  {
    id: "pressure-treated-2x4",
    title: "Pressure-Treated 2×4",
    price: 8.99,
    quantity: 10,
    image: "/placeholder.svg?height=100&width=100",
    category: "timber",
  },
  {
    id: "quick-set-concrete",
    title: "Quick-Set Concrete Mix",
    price: 7.99,
    quantity: 5,
    image: "/placeholder.svg?height=100&width=100",
    category: "concrete",
  },
  {
    id: "cordless-drill-kit",
    title: "20V Cordless Drill/Driver Kit",
    price: 129.99,
    quantity: 1,
    image: "/placeholder.svg?height=100&width=100",
    category: "tools",
  },
]

export default function CartPage() {
  // Calculate cart totals
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const tax = subtotal * 0.08 // 8% tax rate
  const shipping = 25.0
  const total = subtotal + tax + shipping

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header/Navigation */}
      <header className="border-b-4 border-red-500 bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <div className="relative h-12 w-12">
              <div className="absolute inset-0 rounded-full bg-red-500"></div>
              <Utensils className="absolute inset-0 m-auto h-6 w-6 text-white" />
            </div>
            <div>
              <span className="block font-serif text-2xl font-bold text-red-500">Builders Buffet</span>
              <span className="text-sm text-slate-600">Building Supplies Served Fresh</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <SearchDialog />
            <Link href="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-slate-800" />
              <Badge className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 p-0 text-[10px]">
                {cartItems.length}
              </Badge>
              <span className="sr-only">Shopping Cart</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Cart Page Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="font-serif text-3xl font-bold text-slate-800">Your Order</h1>
          <p className="text-slate-600">Review your items and proceed to checkout</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <CardHeader className="bg-red-500 text-white">
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5" /> Your Cart ({cartItems.length} items)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {cartItems.map((item, index) => (
                  <div key={item.id} className="group">
                    <div className="flex items-center gap-4 p-4">
                      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          width={100}
                          height={100}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <Link
                          href={`/products/${item.category}/${item.id}`}
                          className="font-medium text-slate-800 hover:text-red-500"
                        >
                          {item.title}
                        </Link>
                        <p className="text-sm text-slate-500">
                          Category: {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                        </p>
                        <div className="mt-1 flex items-center gap-4">
                          <div className="flex items-center">
                            <Button variant="outline" size="icon" className="h-7 w-7 rounded-r-none">
                              <Minus className="h-3 w-3" />
                              <span className="sr-only">Decrease</span>
                            </Button>
                            <input
                              type="number"
                              min="1"
                              value={item.quantity}
                              readOnly
                              className="h-7 w-12 border-y border-slate-300 bg-white text-center text-sm text-slate-800 focus:outline-none"
                            />
                            <Button variant="outline" size="icon" className="h-7 w-7 rounded-l-none">
                              <Plus className="h-3 w-3" />
                              <span className="sr-only">Increase</span>
                            </Button>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-7 px-2 text-red-500 hover:bg-red-50 hover:text-red-600"
                          >
                            <Trash2 className="mr-1 h-3 w-3" /> Remove
                          </Button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-slate-800">${item.price.toFixed(2)}</p>
                        <p className="text-sm text-slate-500">Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                    {index < cartItems.length - 1 && <Separator />}
                  </div>
                ))}
              </CardContent>
              <CardFooter className="flex justify-between bg-slate-50 p-4">
                <Button asChild variant="outline">
                  <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Continue Shopping
                  </Link>
                </Button>
                <Button variant="ghost" className="text-red-500 hover:bg-red-50 hover:text-red-600">
                  <Trash2 className="mr-2 h-4 w-4" /> Clear Cart
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card>
              <CardHeader className="bg-slate-800 text-white">
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Tax (8%)</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Shipping</span>
                    <span className="font-medium">${shipping.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-lg font-bold text-slate-800">Total</span>
                    <span className="text-lg font-bold text-red-500">${total.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-4 bg-slate-50 p-4">
                <Button className="w-full bg-red-500 py-6 text-lg hover:bg-red-600">
                  Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <div className="rounded-lg border border-dashed border-slate-300 bg-white p-3 text-center text-sm text-slate-600">
                  <p>Free delivery on orders over $250</p>
                  <p className="font-medium text-red-500">
                    You're ${(250 - subtotal).toFixed(2)} away from free shipping!
                  </p>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t-2 border-slate-200 bg-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-600">&copy; {new Date().getFullYear()} Builders Buffet. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
