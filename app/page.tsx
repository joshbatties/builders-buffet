import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, MapPin, Phone, ShoppingCart, Utensils } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SearchDialog } from "@/components/search-dialog"

export default function HomePage() {
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
          <nav className="hidden md:block">
            <ul className="flex gap-8 font-medium">
              <li>
                <Link href="/" className="text-slate-800 hover:text-red-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#menu" className="text-slate-800 hover:text-red-500">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="#specials" className="text-slate-800 hover:text-red-500">
                  Daily Specials
                </Link>
              </li>
              <li>
                <Link href="#location" className="text-slate-800 hover:text-red-500">
                  Location
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-slate-800 hover:text-red-500">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <SearchDialog />
            <Link href="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-slate-800" />
              <Badge className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 p-0 text-[10px]">
                3
              </Badge>
              <span className="sr-only">Shopping Cart</span>
            </Link>
            <Button variant="outline" className="md:hidden" size="icon">
              <Utensils className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-[url('/placeholder.svg?height=500&width=1000')] bg-cover bg-center py-20 text-center text-white">
        <div className="absolute inset-0 bg-slate-900/70"></div>
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 animate-pulse rounded-full bg-red-500 px-6 py-2 text-sm font-bold uppercase tracking-wider text-white inline-block">
              Now Serving
            </div>
            <h1 className="font-serif text-5xl font-bold md:text-6xl lg:text-7xl">
              <span className="block text-red-400">Builders</span>
              <span className="block text-teal-300">Buffet</span>
            </h1>
            <p className="mt-4 text-xl">Building Supplies Served All Day</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button className="bg-red-500 text-white hover:bg-red-600" size="lg">
                View Our Menu
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900"
                size="lg"
              >
                Today's Specials
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Banner */}
      <section className="bg-red-500 py-4 text-center text-white">
        <div className="container mx-auto px-4">
          <p className="text-lg font-medium">
            Quality building supplies with a side of exceptional service - Open 7 days a week!
          </p>
        </div>
      </section>

      {/* Menu Board Introduction */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-block rounded-lg bg-teal-500 px-4 py-1 text-sm font-bold uppercase tracking-wider text-white">
              Our Menu
            </div>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-800 md:text-4xl">
              Building Supplies By Trade
            </h2>
            <p className="mt-4 text-slate-600">
              Browse our extensive menu of quality building materials organized by trade. From foundation to finish,
              we've got everything you need to complete your project. Take a seat and order up!
            </p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            {/* Timber & Lumber Section */}
            <div className="mb-16 rounded-lg border-4 border-red-500 bg-white p-6 shadow-lg md:p-8">
              <div className="mb-8 flex items-center justify-between border-b-2 border-dashed border-slate-300 pb-4">
                <h3 className="font-serif text-3xl font-bold text-red-500">TIMBER & LUMBER</h3>
                <div className="text-right">
                  <span className="block text-sm text-slate-500">Framing, Decking & More</span>
                  <span className="block text-xs text-slate-400">Fresh Cut Daily</span>
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <MenuItem
                  title="Pressure-Treated 2×4"
                  description="Our house specialty. Perfect for outdoor projects and ground contact applications. Treated to resist rot and insects."
                  price="$8.99/8ft"
                  image="/placeholder.svg?height=100&width=100"
                  category="timber"
                  slug="pressure-treated-2x4"
                />
                <MenuItem
                  title="Premium Pine 1×6"
                  description="Smooth, knot-free pine boards, perfect for trim, shelving, and fine carpentry projects."
                  price="$12.50/8ft"
                  image="/placeholder.svg?height=100&width=100"
                  category="timber"
                  slug="premium-pine-1x6"
                />
                <MenuItem
                  title="Cedar Decking 5/4×6"
                  description="Naturally resistant to decay and insects. The perfect choice for decks, outdoor furniture, and decorative projects."
                  price="$3.25/ft"
                  image="/placeholder.svg?height=100&width=100"
                  category="timber"
                  slug="cedar-decking"
                  featured={true}
                />
                <MenuItem
                  title="Framing Stud 2×4"
                  description="Kiln-dried spruce-pine-fir studs. Straight and strong for reliable wall framing."
                  price="$5.99/8ft"
                  image="/placeholder.svg?height=100&width=100"
                  category="timber"
                  slug="framing-stud-2x4"
                />
              </div>

              <div className="mt-8 text-center">
                <Button asChild className="bg-red-500 text-white hover:bg-red-600">
                  <Link href="/products/timber">View All Timber Products</Link>
                </Button>
              </div>
            </div>

            {/* Concrete & Masonry Section */}
            <div className="mb-16 rounded-lg border-4 border-teal-500 bg-white p-6 shadow-lg md:p-8">
              <div className="mb-8 flex items-center justify-between border-b-2 border-dashed border-slate-300 pb-4">
                <h3 className="font-serif text-3xl font-bold text-teal-500">CONCRETE & MASONRY</h3>
                <div className="text-right">
                  <span className="block text-sm text-slate-500">Foundation & Structural</span>
                  <span className="block text-xs text-slate-400">Solid Selections</span>
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <MenuItem
                  title="Quick-Set Concrete Mix"
                  description="Sets in 20-40 minutes for posts, footings, and small repairs. Just add water and mix."
                  price="$7.99/60lb bag"
                  image="/placeholder.svg?height=100&width=100"
                  category="concrete"
                  slug="quick-set-concrete"
                  featured={true}
                />
                <MenuItem
                  title="Red Clay Brick"
                  description="Classic red clay bricks for walls, paths, and decorative projects. Uniform size and color."
                  price="$0.89/each"
                  image="/placeholder.svg?height=100&width=100"
                  category="concrete"
                  slug="red-clay-brick"
                />
                <MenuItem
                  title="Concrete Block 8×8×16"
                  description="Standard concrete blocks for foundation walls, retaining walls, and structural applications."
                  price="$2.49/each"
                  image="/placeholder.svg?height=100&width=100"
                  category="concrete"
                  slug="concrete-block"
                />
                <MenuItem
                  title="Mortar Mix Type S"
                  description="High-strength mortar for below-grade applications and load-bearing walls. Exceeds ASTM C270 requirements."
                  price="$9.99/80lb bag"
                  image="/placeholder.svg?height=100&width=100"
                  category="concrete"
                  slug="mortar-mix"
                />
              </div>

              <div className="mt-8 text-center">
                <Button asChild className="bg-teal-500 text-white hover:bg-teal-600">
                  <Link href="/products/concrete">View All Concrete Products</Link>
                </Button>
              </div>
            </div>

            {/* Electrical Section */}
            <div className="mb-16 rounded-lg border-4 border-yellow-500 bg-white p-6 shadow-lg md:p-8">
              <div className="mb-8 flex items-center justify-between border-b-2 border-dashed border-slate-300 pb-4">
                <h3 className="font-serif text-3xl font-bold text-yellow-600">ELECTRICAL</h3>
                <div className="text-right">
                  <span className="block text-sm text-slate-500">Wiring, Fixtures & Supplies</span>
                  <span className="block text-xs text-slate-400">Shocking Deals</span>
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <MenuItem
                  title="Romex 12/2 NM-B Wire"
                  description="For general purpose 20-amp circuits. 12-gauge copper wire with ground. Sold by the foot or 250ft roll."
                  price="$0.89/ft"
                  image="/placeholder.svg?height=100&width=100"
                  category="electrical"
                  slug="romex-12-2-wire"
                />
                <MenuItem
                  title="LED Recessed Lighting Kit"
                  description="Energy-efficient 6-inch LED recessed lights. Dimmable, 3000K warm white, 800 lumens. Easy installation."
                  price="$24.99/each"
                  image="/placeholder.svg?height=100&width=100"
                  category="electrical"
                  slug="led-recessed-lighting"
                  featured={true}
                />
                <MenuItem
                  title="20A GFCI Outlet"
                  description="Ground fault circuit interrupter outlet for kitchens, bathrooms, and outdoor locations. Tamper-resistant."
                  price="$18.75/each"
                  image="/placeholder.svg?height=100&width=100"
                  category="electrical"
                  slug="gfci-outlet"
                />
                <MenuItem
                  title="200A Main Breaker Panel"
                  description="Complete 200-amp main breaker panel with 40 circuit spaces. Indoor rated with copper bus bars."
                  price="$189.99/each"
                  image="/placeholder.svg?height=100&width=100"
                  category="electrical"
                  slug="main-breaker-panel"
                />
              </div>

              <div className="mt-8 text-center">
                <Button asChild className="bg-yellow-500 text-white hover:bg-yellow-600">
                  <Link href="/products/electrical">View All Electrical Products</Link>
                </Button>
              </div>
            </div>

            {/* Plumbing Section */}
            <div className="mb-16 rounded-lg border-4 border-blue-500 bg-white p-6 shadow-lg md:p-8">
              <div className="mb-8 flex items-center justify-between border-b-2 border-dashed border-slate-300 pb-4">
                <h3 className="font-serif text-3xl font-bold text-blue-500">PLUMBING</h3>
                <div className="text-right">
                  <span className="block text-sm text-slate-500">Pipes, Fixtures & Fittings</span>
                  <span className="block text-xs text-slate-400">Go With The Flow</span>
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <MenuItem
                  title="PVC Schedule 40 Pipe 1½″"
                  description="For drain, waste, and vent applications. Durable, corrosion-resistant, and easy to cut and join."
                  price="$3.49/10ft"
                  image="/placeholder.svg?height=100&width=100"
                  category="plumbing"
                  slug="pvc-schedule-40-pipe"
                />
                <MenuItem
                  title="PEX Tubing ¾″ Red"
                  description="Flexible cross-linked polyethylene tubing for hot water supply lines. Resistant to scale and chlorine."
                  price="$0.79/ft"
                  image="/placeholder.svg?height=100&width=100"
                  category="plumbing"
                  slug="pex-tubing-red"
                />
                <MenuItem
                  title="Single-Handle Kitchen Faucet"
                  description="Stainless steel finish with pull-down sprayer. Ceramic disc valve for leak-free performance."
                  price="$129.99/each"
                  image="/placeholder.svg?height=100&width=100"
                  category="plumbing"
                  slug="kitchen-faucet"
                  featured={true}
                />
                <MenuItem
                  title="Toilet Tank Repair Kit"
                  description="Universal fit for most toilets. Includes fill valve, flush valve, flapper, and hardware. Easy installation."
                  price="$19.99/kit"
                  image="/placeholder.svg?height=100&width=100"
                  category="plumbing"
                  slug="toilet-repair-kit"
                />
              </div>

              <div className="mt-8 text-center">
                <Button asChild className="bg-blue-500 text-white hover:bg-blue-600">
                  <Link href="/products/plumbing">View All Plumbing Products</Link>
                </Button>
              </div>
            </div>

            {/* Tools & Equipment Section */}
            <div className="rounded-lg border-4 border-purple-500 bg-white p-6 shadow-lg md:p-8">
              <div className="mb-8 flex items-center justify-between border-b-2 border-dashed border-slate-300 pb-4">
                <h3 className="font-serif text-3xl font-bold text-purple-500">TOOLS & EQUIPMENT</h3>
                <div className="text-right">
                  <span className="block text-sm text-slate-500">Power & Hand Tools</span>
                  <span className="block text-xs text-slate-400">Get The Job Done</span>
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <MenuItem
                  title="20V Cordless Drill/Driver Kit"
                  description="Includes drill/driver, 2 lithium-ion batteries, charger, and carrying case. Variable speed with 16 clutch settings."
                  price="$129.99/kit"
                  image="/placeholder.svg?height=100&width=100"
                  category="tools"
                  slug="cordless-drill-kit"
                  featured={true}
                />
                <MenuItem
                  title="7¼″ Circular Saw"
                  description="15-amp motor, 5,800 RPM. Bevel capacity up to 56°. Includes carbide-tipped blade and blade wrench."
                  price="$99.99/each"
                  image="/placeholder.svg?height=100&width=100"
                  category="tools"
                  slug="circular-saw"
                />
                <MenuItem
                  title="16 oz. Claw Hammer"
                  description="Fiberglass handle with rubber grip for comfort and reduced vibration. Drop-forged steel head with milled face."
                  price="$19.99/each"
                  image="/placeholder.svg?height=100&width=100"
                  category="tools"
                  slug="claw-hammer"
                />
                <MenuItem
                  title="25 ft. Tape Measure"
                  description="Durable case with rubber overmold. 1-inch wide blade with nylon coating. Magnetic hook for solo measuring."
                  price="$14.99/each"
                  image="/placeholder.svg?height=100&width=100"
                  category="tools"
                  slug="tape-measure"
                />
              </div>

              <div className="mt-8 text-center">
                <Button asChild className="bg-purple-500 text-white hover:bg-purple-600">
                  <Link href="/products/tools">View All Tools & Equipment</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Specials */}
      <section id="specials" className="bg-slate-900 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <div className="inline-block rounded-lg bg-yellow-500 px-4 py-1 text-sm font-bold uppercase tracking-wider text-white">
                Limited Time
              </div>
              <h2 className="mt-2 font-serif text-3xl font-bold text-white md:text-4xl">Today's Specials</h2>
              <p className="mt-4 text-slate-300">
                Check out our daily deals on select items. These specials change regularly, so grab them while they're
                hot!
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <SpecialCard
                title="Contractor Special"
                description="Buy 100 2×4×8' studs, get 10 free! Perfect for that big framing project."
                day="MON"
                category="timber"
                slug="framing-stud-2x4"
              />
              <SpecialCard
                title="Tool Tuesday"
                description="20% off all power tools! Upgrade your toolkit with big savings."
                day="TUE"
                category="tools"
                slug="power-tools"
                featured={true}
              />
              <SpecialCard
                title="Plumbing Package"
                description="Complete bathroom rough-in kit: $199.99 (Save $50). Everything you need to get started."
                day="WED"
                category="plumbing"
                slug="bathroom-rough-in-kit"
              />
            </div>

            <div className="mt-10 text-center">
              <Button className="bg-red-500 text-white hover:bg-red-600" size="lg">
                View All Specials
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Checkerboard Feature Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-0 overflow-hidden rounded-lg shadow-xl md:grid-cols-2">
              <div className="bg-red-500 p-8 md:p-12">
                <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">Contractor Accounts</h2>
                <p className="mt-4 text-red-100">
                  Sign up for a contractor account and enjoy exclusive benefits, including bulk discounts, priority
                  service, and monthly billing options.
                </p>
                <Button className="mt-6 bg-white text-red-500 hover:bg-slate-100">Learn More</Button>
              </div>
              <div className="bg-[url('/placeholder.svg?height=400&width=600')] bg-cover bg-center"></div>
              <div className="bg-[url('/placeholder.svg?height=400&width=600')] bg-cover bg-center"></div>
              <div className="bg-teal-500 p-8 md:p-12">
                <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">Delivery Service</h2>
                <p className="mt-4 text-teal-100">
                  We offer convenient delivery options for all your building materials. Schedule a delivery time that
                  works for you, and we'll bring your order right to your job site.
                </p>
                <Button className="mt-6 bg-white text-teal-500 hover:bg-slate-100">Schedule Delivery</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section id="location" className="bg-slate-100 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <div className="inline-block rounded-lg bg-slate-800 px-4 py-1 text-sm font-bold uppercase tracking-wider text-white">
                Find Us
              </div>
              <h2 className="mt-2 font-serif text-3xl font-bold text-slate-800 md:text-4xl">Location & Hours</h2>
              <p className="mt-4 text-slate-600">
                Stop by our diner and check out our extensive menu of building supplies. We're conveniently located and
                ready to serve you.
              </p>
            </div>

            <div className="grid gap-8 rounded-lg bg-white p-6 shadow-lg md:grid-cols-2 md:p-8">
              <div>
                <h3 className="font-serif text-2xl font-bold text-slate-800">Our Location</h3>
                <div className="mt-4 flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-red-500" />
                  <div>
                    <p className="font-medium text-slate-800">Builders Buffet Diner</p>
                    <p className="text-slate-600">
                      123 Construction Avenue
                      <br />
                      Buildersville, BL 45678
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-red-500" />
                  <div>
                    <p className="font-medium text-slate-800">Call Us</p>
                    <p className="text-slate-600">(555) 123-4567</p>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="h-64 w-full overflow-hidden rounded-lg bg-slate-200">
                    {/* Map placeholder - would be replaced with actual map */}
                    <div className="flex h-full items-center justify-center">
                      <span className="text-slate-500">Map Loading...</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-slate-800">Serving Hours</h3>
                <div className="mt-4 flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-red-500" />
                  <div>
                    <p className="font-medium text-slate-800">Open 7 Days a Week</p>
                  </div>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="flex justify-between rounded-lg bg-slate-50 p-3">
                    <span className="font-medium text-slate-800">Monday - Friday</span>
                    <span className="text-red-500">7:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between rounded-lg bg-slate-50 p-3">
                    <span className="font-medium text-slate-800">Saturday</span>
                    <span className="text-red-500">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between rounded-lg bg-slate-50 p-3">
                    <span className="font-medium text-slate-800">Sunday</span>
                    <span className="text-red-500">10:00 AM - 4:00 PM</span>
                  </div>
                </div>
                <div className="mt-6 rounded-lg border-2 border-dashed border-red-500 bg-red-50 p-4">
                  <p className="text-center font-medium text-red-500">
                    Contractor Early Bird Special: We open at 6:00 AM for contractor accounts Monday-Friday!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-red-500 bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="relative h-10 w-10">
                  <div className="absolute inset-0 rounded-full bg-red-500"></div>
                  <Utensils className="absolute inset-0 m-auto h-5 w-5 text-white" />
                </div>
                <span className="font-serif text-xl font-bold text-red-500">Builders Buffet</span>
              </div>
              <p className="mt-4 text-slate-600">
                Where quality building supplies are served with a side of exceptional service.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-slate-800">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/" className="flex items-center gap-1 text-slate-600 hover:text-red-500">
                    <ArrowRight className="h-4 w-4" /> Home
                  </Link>
                </li>
                <li>
                  <Link href="#menu" className="flex items-center gap-1 text-slate-600 hover:text-red-500">
                    <ArrowRight className="h-4 w-4" /> Menu
                  </Link>
                </li>
                <li>
                  <Link href="#specials" className="flex items-center gap-1 text-slate-600 hover:text-red-500">
                    <ArrowRight className="h-4 w-4" /> Daily Specials
                  </Link>
                </li>
                <li>
                  <Link href="#location" className="flex items-center gap-1 text-slate-600 hover:text-red-500">
                    <ArrowRight className="h-4 w-4" /> Location
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="flex items-center gap-1 text-slate-600 hover:text-red-500">
                    <ArrowRight className="h-4 w-4" /> Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-slate-800">Categories</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/products/timber" className="flex items-center gap-1 text-slate-600 hover:text-red-500">
                    <ArrowRight className="h-4 w-4" /> Timber & Lumber
                  </Link>
                </li>
                <li>
                  <Link href="/products/concrete" className="flex items-center gap-1 text-slate-600 hover:text-red-500">
                    <ArrowRight className="h-4 w-4" /> Concrete & Masonry
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/electrical"
                    className="flex items-center gap-1 text-slate-600 hover:text-red-500"
                  >
                    <ArrowRight className="h-4 w-4" /> Electrical
                  </Link>
                </li>
                <li>
                  <Link href="/products/plumbing" className="flex items-center gap-1 text-slate-600 hover:text-red-500">
                    <ArrowRight className="h-4 w-4" /> Plumbing
                  </Link>
                </li>
                <li>
                  <Link href="/products/tools" className="flex items-center gap-1 text-slate-600 hover:text-red-500">
                    <ArrowRight className="h-4 w-4" /> Tools & Equipment
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-slate-800">Contact Us</h3>
              <ul className="mt-4 space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-red-500" />
                  <span className="text-slate-600">
                    123 Construction Avenue
                    <br />
                    Buildersville, BL 45678
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-red-500" />
                  <span className="text-slate-600">(555) 123-4567</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-red-500" />
                  <span className="text-slate-600">
                    Mon-Fri: 7am - 6pm
                    <br />
                    Sat: 8am - 5pm
                    <br />
                    Sun: 10am - 4pm
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-slate-200 pt-6 text-center">
            <p className="text-slate-600">
              &copy; {new Date().getFullYear()} Builders Buffet. All rights reserved. Serving quality building supplies
              since 1985.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Menu Item Component
function MenuItem({
  title,
  description,
  price,
  image,
  category,
  slug,
  featured = false,
}: {
  title: string
  description: string
  price: string
  image: string
  category: string
  slug: string
  featured?: boolean
}) {
  return (
    <div
      className={`relative rounded-lg p-4 transition-all hover:shadow-md ${
        featured ? "border-2 border-dashed border-red-500 bg-red-50" : ""
      }`}
    >
      <div className="flex gap-4">
        <div className="hidden sm:block">
          <div className="h-20 w-20 overflow-hidden rounded-lg">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              width={100}
              height={100}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-baseline justify-between gap-2">
            <h4 className="font-serif text-lg font-bold text-slate-800">{title}</h4>
            <span className="whitespace-nowrap font-medium text-red-500">{price}</span>
          </div>
          <p className="mt-2 text-sm text-slate-600">{description}</p>
          {featured && (
            <div className="mt-3">
              <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-medium text-white">Chef's Special</span>
            </div>
          )}
          <div className="mt-3">
            <Button asChild variant="outline" size="sm" className="text-xs">
              <Link href={`/products/${category}/${slug}`}>View Details</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Special Card Component
function SpecialCard({
  title,
  description,
  day,
  category,
  slug,
  featured = false,
}: {
  title: string
  description: string
  day: string
  category: string
  slug: string
  featured?: boolean
}) {
  return (
    <Card
      className={`overflow-hidden border-0 ${
        featured ? "ring-2 ring-yellow-400 ring-offset-2 ring-offset-slate-900" : ""
      }`}
    >
      <div className="relative">
        <div className="absolute left-0 top-0 z-10 rounded-br-lg bg-red-500 px-3 py-1 font-bold text-white">{day}</div>
        <CardContent className="p-6">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-slate-800 p-3">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="Special"
                width={32}
                height={32}
                className="h-8 w-8"
              />
            </div>
            <h3 className="font-serif text-xl font-bold text-slate-800">{title}</h3>
            <p className="mt-2 text-slate-600">{description}</p>
            <Button asChild className="mt-4 bg-red-500 text-white hover:bg-red-600" size="sm">
              <Link href={`/products/${category}/${slug}`}>View Details</Link>
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}
