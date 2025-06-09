import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Minus, Plus, ShoppingCart, Utensils } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SearchDialog } from "@/components/search-dialog"

// This is a mock data function that would be replaced with actual data fetching
function getProductData(category: string, product: string) {
  const products = {
    timber: {
      "pressure-treated-2x4": {
        title: "Pressure-Treated 2×4",
        description:
          "Our house specialty. Perfect for outdoor projects and ground contact applications. Treated to resist rot and insects.",
        longDescription:
          "These pressure-treated 2×4 lumber pieces are perfect for outdoor construction projects. Treated with environmentally preferred MCA (Micronized Copper Azole) preservative, these boards resist termites, fungal decay, and rot. Ideal for decks, fences, landscaping, and other outdoor structures where wood comes in contact with the ground or is exposed to the elements. Each piece is kiln-dried after treatment for improved stability.",
        price: "$8.99/8ft",
        image: "/placeholder.svg?height=400&width=400",
        featured: false,
        specs: [
          { name: "Dimensions", value: '1.5" × 3.5" × 8\'' },
          { name: "Material", value: "Southern Yellow Pine" },
          { name: "Treatment", value: "MCA Pressure Treatment" },
          { name: "Grade", value: "#2 or Better" },
          { name: "Use", value: "Outdoor, Ground Contact" },
          { name: "Warranty", value: "Limited Lifetime" },
        ],
        relatedProducts: [
          {
            id: "cedar-decking",
            title: "Cedar Decking 5/4×6",
            price: "$3.25/ft",
            image: "/placeholder.svg?height=100&width=100",
          },
          {
            id: "treated-fence-post",
            title: "Treated Fence Post 4×4",
            price: "$18.99/8ft",
            image: "/placeholder.svg?height=100&width=100",
          },
        ],
      },
      "cedar-decking": {
        title: "Cedar Decking 5/4×6",
        description:
          "Naturally resistant to decay and insects. The perfect choice for decks, outdoor furniture, and decorative projects.",
        longDescription:
          "Our premium cedar decking boards are naturally beautiful and resistant to decay, rot, and insect damage without chemical treatments. The 5/4×6 profile provides excellent strength and stability for deck surfaces with less flex underfoot. Cedar's natural oils make it resistant to moisture, helping prevent warping and splitting. These boards can be left unfinished to weather to a natural silver-gray, or sealed to maintain their rich color. An excellent choice for decks, outdoor furniture, and other exterior applications.",
        price: "$3.25/ft",
        image: "/placeholder.svg?height=400&width=400",
        featured: true,
        specs: [
          { name: "Dimensions", value: '1" × 5.5" (actual)' },
          { name: "Material", value: "Western Red Cedar" },
          { name: "Treatment", value: "None (Naturally Resistant)" },
          { name: "Grade", value: "Select Tight Knot" },
          { name: "Use", value: "Decking, Outdoor Furniture" },
          { name: "Warranty", value: "10 Year Limited" },
        ],
        relatedProducts: [
          {
            id: "pressure-treated-2x4",
            title: "Pressure-Treated 2×4",
            price: "$8.99/8ft",
            image: "/placeholder.svg?height=100&width=100",
          },
          {
            id: "cedar-fence-picket",
            title: "Cedar Fence Picket",
            price: "$4.99/each",
            image: "/placeholder.svg?height=100&width=100",
          },
        ],
      },
    },
    concrete: {
      "quick-set-concrete": {
        title: "Quick-Set Concrete Mix",
        description: "Sets in 20-40 minutes for posts, footings, and small repairs. Just add water and mix.",
        longDescription:
          "Our Quick-Set Concrete Mix is specially formulated to set in just 20-40 minutes, making it perfect for projects that need to be completed quickly. This high-strength concrete mix is ideal for setting posts, poles, and footings, as well as making small repairs. Simply add water, mix, and pour - no mixing machine required. The fast-setting formula allows you to continue your project without lengthy waiting periods. Each bag covers approximately 0.5 cubic feet when mixed properly.",
        price: "$7.99/60lb bag",
        image: "/placeholder.svg?height=400&width=400",
        featured: true,
        specs: [
          { name: "Weight", value: "60 lbs per bag" },
          { name: "Coverage", value: "0.5 cubic feet per bag" },
          { name: "Set Time", value: "20-40 minutes" },
          { name: "Compressive Strength", value: "4,000 PSI after 28 days" },
          { name: "Use", value: "Posts, Footings, Repairs" },
          { name: "Shelf Life", value: "1 year when properly stored" },
        ],
        relatedProducts: [
          {
            id: "portland-cement",
            title: "Portland Cement",
            price: "$12.99/94lb bag",
            image: "/placeholder.svg?height=100&width=100",
          },
          {
            id: "concrete-block",
            title: "Concrete Block 8×8×16",
            price: "$2.49/each",
            image: "/placeholder.svg?height=100&width=100",
          },
        ],
      },
    },
    electrical: {
      "led-recessed-lighting": {
        title: "LED Recessed Lighting Kit",
        description:
          "Energy-efficient 6-inch LED recessed lights. Dimmable, 3000K warm white, 800 lumens. Easy installation.",
        longDescription:
          "Upgrade your home with our energy-efficient LED recessed lighting kit. These 6-inch fixtures provide bright, warm illumination while using a fraction of the energy of traditional recessed lights. The slim profile design allows for installation in areas with limited plenum space, including locations with insulation contact. These fixtures are dimmable from 10-100% with compatible dimmers, allowing you to create the perfect ambiance for any occasion. The simple retrofit design installs easily into existing recessed housings or new construction, with no recessed housing required. Each kit includes the LED light fixture, trim, and mounting hardware for a complete installation.",
        price: "$24.99/each",
        image: "/placeholder.svg?height=400&width=400",
        featured: true,
        specs: [
          { name: "Diameter", value: "6 inches" },
          { name: "Color Temperature", value: "3000K (Warm White)" },
          { name: "Brightness", value: "800 Lumens" },
          { name: "Wattage", value: "12W (75W Equivalent)" },
          { name: "Dimmable", value: "Yes (10-100%)" },
          { name: "Lifespan", value: "35,000 hours" },
        ],
        relatedProducts: [
          {
            id: "gfci-outlet",
            title: "20A GFCI Outlet",
            price: "$18.75/each",
            image: "/placeholder.svg?height=100&width=100",
          },
          {
            id: "romex-12-2-wire",
            title: "Romex 12/2 NM-B Wire",
            price: "$0.89/ft",
            image: "/placeholder.svg?height=100&width=100",
          },
        ],
      },
    },
    plumbing: {
      "kitchen-faucet": {
        title: "Single-Handle Kitchen Faucet",
        description: "Stainless steel finish with pull-down sprayer. Ceramic disc valve for leak-free performance.",
        longDescription:
          "Upgrade your kitchen with our sleek single-handle kitchen faucet. The stainless steel finish resists spots and fingerprints for a clean look that complements any kitchen decor. The pull-down sprayer features multiple spray patterns for versatile cleaning, while the high-arc spout provides plenty of clearance for filling large pots. The ceramic disc valve ensures smooth operation and prevents leaks for years of reliable use. Installation is simple with our QuickConnect system, and all mounting hardware is included.",
        price: "$129.99/each",
        image: "/placeholder.svg?height=400&width=400",
        featured: true,
        specs: [
          { name: "Material", value: "Stainless Steel" },
          { name: "Finish", value: "Brushed Nickel" },
          { name: "Handle Type", value: "Single Lever" },
          { name: "Spout Height", value: "15.5 inches" },
          { name: "Flow Rate", value: "1.8 GPM" },
          { name: "Warranty", value: "Limited Lifetime" },
        ],
        relatedProducts: [
          {
            id: "pex-tubing-red",
            title: "PEX Tubing ¾″ Red",
            price: "$0.79/ft",
            image: "/placeholder.svg?height=100&width=100",
          },
          {
            id: "toilet-repair-kit",
            title: "Toilet Tank Repair Kit",
            price: "$19.99/kit",
            image: "/placeholder.svg?height=100&width=100",
          },
        ],
      },
    },
    tools: {
      "cordless-drill-kit": {
        title: "20V Cordless Drill/Driver Kit",
        description:
          "Includes drill/driver, 2 lithium-ion batteries, charger, and carrying case. Variable speed with 16 clutch settings.",
        longDescription:
          "Our professional-grade 20V cordless drill/driver kit delivers the power and versatility you need for a wide range of drilling and fastening applications. The brushless motor provides up to 50% longer runtime and increased power and performance compared to brushed motors. With 16 clutch settings and a two-speed gearbox (0-450/0-1,800 RPM), you can match the torque and speed to your specific task. The kit includes two 2.0Ah lithium-ion batteries for extended runtime, a rapid charger, and a durable carrying case to keep everything organized. The ergonomic grip and lightweight design reduce fatigue during extended use.",
        price: "$129.99/kit",
        image: "/placeholder.svg?height=400&width=400",
        featured: true,
        specs: [
          { name: "Voltage", value: "20V" },
          { name: "Chuck Size", value: "1/2 inch" },
          { name: "Speed Settings", value: "2 (0-450/0-1,800 RPM)" },
          { name: "Clutch Settings", value: "16 + Drill Mode" },
          { name: "Battery", value: "2 × 2.0Ah Lithium-Ion" },
          { name: "Warranty", value: "3 Year Limited" },
        ],
        relatedProducts: [
          {
            id: "circular-saw",
            title: "7¼″ Circular Saw",
            price: "$99.99/each",
            image: "/placeholder.svg?height=100&width=100",
          },
          {
            id: "power-tools",
            title: "Power Tool Combo Kit",
            price: "$299.99/kit",
            image: "/placeholder.svg?height=100&width=100",
          },
        ],
      },
    },
  }

  try {
    return (
      products[category as keyof typeof products][product as keyof (typeof products)[keyof typeof products]] || {
        title: "Product Not Found",
        description: "This product is not available",
        longDescription: "This product is not available. Please check our menu for available products.",
        price: "N/A",
        image: "/placeholder.svg?height=400&width=400",
        featured: false,
        specs: [],
        relatedProducts: [],
      }
    )
  } catch (error) {
    return {
      title: "Product Not Found",
      description: "This product is not available",
      longDescription: "This product is not available. Please check our menu for available products.",
      price: "N/A",
      image: "/placeholder.svg?height=400&width=400",
      featured: false,
      specs: [],
      relatedProducts: [],
    }
  }
}

export default function ProductPage({ params }: { params: { category: string; product: string } }) {
  const productData = getProductData(params.category, params.product)

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
                3
              </Badge>
              <span className="sr-only">Shopping Cart</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Breadcrumb Navigation */}
      <div className="bg-white py-4 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-slate-600 hover:text-red-500">
              Home
            </Link>
            <span className="text-slate-400">/</span>
            <Link href={`/products/${params.category}`} className="text-slate-600 hover:text-red-500">
              {params.category.charAt(0).toUpperCase() + params.category.slice(1)}
            </Link>
            <span className="text-slate-400">/</span>
            <span className="font-medium text-slate-800">{productData.title}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Product Image */}
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={productData.image || "/placeholder.svg"}
                  alt={productData.title}
                  fill
                  className="object-cover"
                />
                {productData.featured && (
                  <div className="absolute right-4 top-4 rounded-full bg-red-500 px-4 py-1 text-sm font-medium text-white">
                    Chef's Special
                  </div>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="font-serif text-3xl font-bold text-slate-800">{productData.title}</h1>
              <p className="mt-2 text-xl font-medium text-red-500">{productData.price}</p>
              <div className="mt-6">
                <p className="text-slate-600">{productData.longDescription}</p>
              </div>

              {/* Quantity Selector */}
              <div className="mt-8">
                <label htmlFor="quantity" className="block text-sm font-medium text-slate-700">
                  Quantity
                </label>
                <div className="mt-2 flex items-center">
                  <Button variant="outline" size="icon" className="h-10 w-10 rounded-r-none">
                    <Minus className="h-4 w-4" />
                    <span className="sr-only">Decrease</span>
                  </Button>
                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    defaultValue="1"
                    className="h-10 w-16 border-y border-slate-300 bg-white text-center text-slate-800 focus:outline-none"
                  />
                  <Button variant="outline" size="icon" className="h-10 w-10 rounded-l-none">
                    <Plus className="h-4 w-4" />
                    <span className="sr-only">Increase</span>
                  </Button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <div className="mt-8">
                <Button className="w-full bg-red-500 py-6 text-lg hover:bg-red-600">
                  <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                </Button>
              </div>

              {/* Back to Category */}
              <div className="mt-8">
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/products/${params.category}`}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to{" "}
                    {params.category.charAt(0).toUpperCase() + params.category.slice(1)}
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-12">
            <Tabs defaultValue="specs">
              <TabsList className="w-full justify-start border-b">
                <TabsTrigger value="specs" className="text-lg">
                  Specifications
                </TabsTrigger>
                <TabsTrigger value="related" className="text-lg">
                  Related Products
                </TabsTrigger>
              </TabsList>
              <TabsContent value="specs" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                      {productData.specs.map((spec, index) => (
                        <div key={index} className="rounded-lg bg-slate-50 p-4">
                          <h3 className="font-medium text-slate-800">{spec.name}</h3>
                          <p className="text-slate-600">{spec.value}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="related" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                      {productData.relatedProducts.map((product) => (
                        <Link
                          key={product.id}
                          href={`/products/${params.category}/${product.id}`}
                          className="group block rounded-lg bg-white p-4 shadow-sm transition-all hover:shadow-md"
                        >
                          <div className="relative aspect-square overflow-hidden rounded-md">
                            <Image
                              src={product.image || "/placeholder.svg"}
                              alt={product.title}
                              fill
                              className="object-cover transition-transform group-hover:scale-105"
                            />
                          </div>
                          <h3 className="mt-4 font-medium text-slate-800 group-hover:text-red-500">{product.title}</h3>
                          <p className="mt-1 text-red-500">{product.price}</p>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-slate-200 bg-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-600">&copy; {new Date().getFullYear()} Builders Buffet. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
