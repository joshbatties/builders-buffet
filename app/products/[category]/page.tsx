import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ShoppingCart, Utensils } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SearchDialog } from "@/components/search-dialog"

// This is a mock data function that would be replaced with actual data fetching
function getCategoryData(category: string) {
  const categories = {
    timber: {
      title: "Timber & Lumber",
      description: "Quality wood products for framing, decking, and finishing",
      color: "red",
      products: [
        {
          id: "pressure-treated-2x4",
          title: "Pressure-Treated 2×4",
          description:
            "Our house specialty. Perfect for outdoor projects and ground contact applications. Treated to resist rot and insects.",
          price: "$8.99/8ft",
          image: "/placeholder.svg?height=200&width=200",
          featured: false,
        },
        {
          id: "premium-pine-1x6",
          title: "Premium Pine 1×6",
          description: "Smooth, knot-free pine boards, perfect for trim, shelving, and fine carpentry projects.",
          price: "$12.50/8ft",
          image: "/placeholder.svg?height=200&width=200",
          featured: false,
        },
        {
          id: "cedar-decking",
          title: "Cedar Decking 5/4×6",
          description:
            "Naturally resistant to decay and insects. The perfect choice for decks, outdoor furniture, and decorative projects.",
          price: "$3.25/ft",
          image: "/placeholder.svg?height=200&width=200",
          featured: true,
        },
        {
          id: "framing-stud-2x4",
          title: "Framing Stud 2×4",
          description: "Kiln-dried spruce-pine-fir studs. Straight and strong for reliable wall framing.",
          price: "$5.99/8ft",
          image: "/placeholder.svg?height=200&width=200",
          featured: false,
        },
        {
          id: "plywood-4x8",
          title: "Plywood 4×8 Sheet",
          description:
            '3/4" thick plywood for subfloors, sheathing, and general construction. Sanded smooth on one side.',
          price: "$42.99/sheet",
          image: "/placeholder.svg?height=200&width=200",
          featured: false,
        },
        {
          id: "oak-hardwood",
          title: "Red Oak Hardwood",
          description:
            "Solid red oak hardwood for furniture, cabinetry, and fine woodworking. S4S (surfaced four sides).",
          price: "$8.99/board ft",
          image: "/placeholder.svg?height=200&width=200",
          featured: false,
        },
        {
          id: "treated-fence-post",
          title: "Treated Fence Post 4×4",
          description:
            "Pressure-treated for ground contact. Perfect for fence posts, deck supports, and outdoor structures.",
          price: "$18.99/8ft",
          image: "/placeholder.svg?height=200&width=200",
          featured: false,
        },
        {
          id: "cedar-fence-picket",
          title: "Cedar Fence Picket",
          description: "Western red cedar fence pickets with dog-ear tops. Naturally resistant to decay and insects.",
          price: "$4.99/each",
          image: "/placeholder.svg?height=200&width=200",
          featured: false,
        },
      ],
    },
    concrete: {
      title: "Concrete & Masonry",
      description: "Foundation and structural materials for solid construction",
      color: "teal",
      products: [
        {
          id: "quick-set-concrete",
          title: "Quick-Set Concrete Mix",
          description: "Sets in 20-40 minutes for posts, footings, and small repairs. Just add water and mix.",
          price: "$7.99/60lb bag",
          image: "/placeholder.svg?height=200&width=200",
          featured: true,
        },
        {
          id: "red-clay-brick",
          title: "Red Clay Brick",
          description: "Classic red clay bricks for walls, paths, and decorative projects. Uniform size and color.",
          price: "$0.89/each",
          image: "/placeholder.svg?height=200&width=200",
          featured: false,
        },
        {
          id: "concrete-block",
          title: "Concrete Block 8×8×16",
          description: "Standard concrete blocks for foundation walls, retaining walls, and structural applications.",
          price: "$2.49/each",
          image: "/placeholder.svg?height=200&width=200",
          featured: false,
        },
        {
          id: "mortar-mix",
          title: "Mortar Mix Type S",
          description:
            "High-strength mortar for below-grade applications and load-bearing walls. Exceeds ASTM C270 requirements.",
          price: "$9.99/80lb bag",
          image: "/placeholder.svg?height=200&width=200",
          featured: false,
        },
        {
          id: "portland-cement",
          title: "Portland Cement",
          description:
            "Type I/II portland cement for general concrete work. Mix with sand and aggregate for custom concrete.",
          price: "$12.99/94lb bag",
          image: "/placeholder.svg?height=200&width=200",
          featured: false,
        },
        {
          id: "paver-stones",
          title: "Paver Stones",
          description:
            "Interlocking concrete pavers for patios, walkways, and driveways. Available in multiple colors and patterns.",
          price: "$2.99/each",
          image: "/placeholder.svg?height=200&width=200",
          featured: false,
        },
      ],
    },
    electrical: {
      title: "Electrical",
      description: "Wiring, fixtures, and electrical supplies for any project",
      color: "yellow",
      products: [
        {
          id: "romex-12-2-wire",
          title: "Romex 12/2 NM-B Wire",
          description:
            "For general purpose 20-amp circuits. 12-gauge copper wire with ground. Sold by the foot or 250ft roll.",
          price: "$0.89/ft",
          image: "/placeholder.svg?height=200&width=200",
          featured: false,
        },
        {
          id: "led-recessed-lighting",
          title: "LED Recessed Lighting Kit",
          description:
            "Energy-efficient 6-inch LED recessed lights. Dimmable, 3000K warm white, 800 lumens. Easy installation.",
          price: "$24.99/each",
          image: "/placeholder.svg?height=200&width=200",
          featured: true,
        },
        {
          id: "gfci-outlet",
          title: "20A GFCI Outlet",
          description:
            "Ground fault circuit interrupter outlet for kitchens, bathrooms, and outdoor locations. Tamper-resistant.",
          price: "$18.75/each",
          image: "/placeholder.svg?height=200&width=200",
          featured: false,
        },
        {
          id: "main-breaker-panel",
          title: "200A Main Breaker Panel",
          description: "Complete 200-amp main breaker panel with 40 circuit spaces. Indoor rated with copper bus bars.",
          price: "$189.99/each",
          image: "/placeholder.svg?height=200&width=200",
          featured: false,
        },
      ],
    },
    plumbing: {
      title: "Plumbing",
      description: "Pipes, fixtures, and fittings for all your plumbing needs",
      color: "blue",
      products: [
        {
          id: "pvc-schedule-40-pipe",
          title: "PVC Schedule 40 Pipe 1½″",
          description:
            "For drain, waste, and vent applications. Durable, corrosion-resistant, and easy to cut and join.",
          price: "$3.49/10ft",
          image: "/placeholder.svg?height=200&width=200",
          featured: false,
        },
        {
          id: "pex-tubing-red",
          title: "PEX Tubing ¾″ Red",
          description:
            "Flexible cross-linked polyethylene tubing for hot water supply lines. Resistant to scale and chlorine.",
          price: "$0.79/ft",
          image: "/placeholder.svg?height=200&width=200",
          featured: false,
        },
        {
          id: "kitchen-faucet",
          title: "Single-Handle Kitchen Faucet",
          description: "Stainless steel finish with pull-down sprayer. Ceramic disc valve for leak-free performance.",
          price: "$129.99/each",
          image: "/placeholder.svg?height=200&width=200",
          featured: true,
        },
        {
          id: "toilet-repair-kit",
          title: "Toilet Tank Repair Kit",
          description:
            "Universal fit for most toilets. Includes fill valve, flush valve, flapper, and hardware. Easy installation.",
          price: "$19.99/kit",
          image: "/placeholder.svg?height=200&width=200",
          featured: false,
        },
      ],
    },
    tools: {
      title: "Tools & Equipment",
      description: "Power and hand tools to get the job done right",
      color: "purple",
      products: [
        {
          id: "cordless-drill-kit",
          title: "20V Cordless Drill/Driver Kit",
          description:
            "Includes drill/driver, 2 lithium-ion batteries, charger, and carrying case. Variable speed with 16 clutch settings.",
          price: "$129.99/kit",
          image: "/placeholder.svg?height=200&width=200",
          featured: true,
        },
        {
          id: "circular-saw",
          title: "7¼″ Circular Saw",
          description:
            "15-amp motor, 5,800 RPM. Bevel capacity up to 56°. Includes carbide-tipped blade and blade wrench.",
          price: "$99.99/each",
          image: "/placeholder.svg?height=200&width=200",
          featured: false,
        },
        {
          id: "claw-hammer",
          title: "16 oz. Claw Hammer",
          description:
            "Fiberglass handle with rubber grip for comfort and reduced vibration. Drop-forged steel head with milled face.",
          price: "$19.99/each",
          image: "/placeholder.svg?height=200&width=200",
          featured: false,
        },
        {
          id: "tape-measure",
          title: "25 ft. Tape Measure",
          description:
            "Durable case with rubber overmold. 1-inch wide blade with nylon coating. Magnetic hook for solo measuring.",
          price: "$14.99/each",
          image: "/placeholder.svg?height=200&width=200",
          featured: false,
        },
        {
          id: "power-tools",
          title: "Power Tool Combo Kit",
          description:
            "5-piece combo kit including drill, impact driver, circular saw, reciprocating saw, and work light. Includes batteries and charger.",
          price: "$299.99/kit",
          image: "/placeholder.svg?height=200&width=200",
          featured: false,
        },
      ],
    },
  }

  return (
    categories[category as keyof typeof categories] || {
      title: "Category Not Found",
      description: "Please check our menu for available categories",
      color: "gray",
      products: [],
    }
  )
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const categoryData = getCategoryData(params.category)
  const colorMap: Record<string, string> = {
    red: "border-red-500 text-red-500",
    teal: "border-teal-500 text-teal-500",
    yellow: "border-yellow-600 text-yellow-600",
    blue: "border-blue-500 text-blue-500",
    purple: "border-purple-500 text-purple-500",
    gray: "border-gray-500 text-gray-500",
  }

  const borderColor = colorMap[categoryData.color] || colorMap.gray

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

      {/* Category Header */}
      <div className="bg-white py-8 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <Button asChild variant="outline" size="icon" className="h-8 w-8">
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Back to Home</span>
              </Link>
            </Button>
            <div>
              <h1 className={`font-serif text-3xl font-bold ${borderColor.split(" ")[1]}`}>{categoryData.title}</h1>
              <p className="text-slate-600">{categoryData.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categoryData.products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                image={product.image}
                category={params.category}
                featured={product.featured}
              />
            ))}
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

function ProductCard({
  id,
  title,
  description,
  price,
  image,
  category,
  featured = false,
}: {
  id: string
  title: string
  description: string
  price: string
  image: string
  category: string
  featured?: boolean
}) {
  return (
    <Card className={`overflow-hidden transition-all hover:shadow-md ${featured ? "border-2 border-red-500" : ""}`}>
      <Link href={`/products/${category}/${id}`} className="block">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
          {featured && (
            <div className="absolute right-2 top-2 rounded-full bg-red-500 px-3 py-1 text-xs font-medium text-white">
              Chef's Special
            </div>
          )}
        </div>
      </Link>
      <CardContent className="p-4">
        <Link href={`/products/${category}/${id}`} className="block">
          <h3 className="font-serif text-lg font-bold text-slate-800">{title}</h3>
          <p className="mt-1 line-clamp-2 text-sm text-slate-600">{description}</p>
          <div className="mt-2 flex items-center justify-between">
            <span className="font-medium text-red-500">{price}</span>
          </div>
        </Link>
        <div className="mt-4 flex gap-2">
          <Button asChild variant="outline" size="sm" className="flex-1">
            <Link href={`/products/${category}/${id}`}>View Details</Link>
          </Button>
          <Button size="sm" className="bg-red-500 hover:bg-red-600">
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
