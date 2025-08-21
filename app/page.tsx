import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Tractor,
  Wheat,
  Beef,
  Carrot,
  Phone,
  Mail,
  MapPin,
  Globe,
  Sprout,
  Users,
  Target,
  Eye,
  Heart,
  Leaf,
  Lightbulb,
  Award,
  ArrowRight,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ContactForm from "@/components/contact-form"
import NewsletterSignup from "@/components/newsletter-signup"
import ServiceCalculator from "@/components/service-calculator"
import InteractiveStats from "@/components/interactive-stats"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
             <Image
                src="/cultilogo.jpg?height=600&width=600"
                alt="Cultiveight farming operations"
                width={80}
                height={20}
              />
            <div>
              <h1 className="text-xl font-bold text-green-800">CULTIVEIGHT</h1>
              <p className="text-xs text-green-600">(PRIVATE) LIMITED</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#about" className="text-sm font-medium hover:text-green-600 transition-colors">
              About
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-green-600 transition-colors">
              Services
            </Link>
            <Link href="#divisions" className="text-sm font-medium hover:text-green-600 transition-colors">
              Divisions
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-green-600 transition-colors">
              Contact
            </Link>
          </nav>
          <Link href="#services">
          <Button className="bg-green-600 hover:bg-green-700">Get Quote</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container px-4">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                  INNOVATIVE. SUSTAINABLE. FARM-DRIVEN.
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl text-gray-900">
                  Transforming Agriculture in <span className="text-green-600">Zimbabwe</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-[600px]">
                  Comprehensive, innovative, and sustainable farming solutions across mechanized tillage, animal
                  husbandry, horticulture, and large-scale crop production.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Link href="#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                >
                  Contact Us
                </Button>
                </Link>
              </div>
              <InteractiveStats />
            </div>
            <div className="relative">
              <Image
                src="/grrr.jpg?height=600&width=600"
                alt="Cultiveight farming operations"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Wheat className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Food Security</div>
                    <div className="text-sm text-gray-600">Our Priority</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Cultiveight</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A dynamic agricultural enterprise committed to delivering comprehensive, innovative, and sustainable
              farming solutions across Zimbabwe.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 mb-16">
            <Card className="text-center border-green-200">
              <CardHeader>
                <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To provide value-driven, technology-enhanced agricultural services and products that enhance farm
                  productivity and profitability for both small- and large-scale farmers.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-green-200">
              <CardHeader>
                <Eye className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To be a leading, diversified agricultural company in Zimbabwe, known for excellence in service
                  delivery, innovation in agribusiness, and sustainable farming practices.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-green-200">
              <CardHeader>
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Driven by passion for agriculture and rural transformation, focusing on food security, employment
                  creation, and service excellence.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <div className="bg-green-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Core Values</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              <div className="text-center">
                <Heart className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900">Integrity</h4>
                <p className="text-sm text-gray-600">We deliver what we promise</p>
              </div>
              <div className="text-center">
                <Leaf className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900">Sustainability</h4>
                <p className="text-sm text-gray-600">Eco-friendly farming practices</p>
              </div>
              <div className="text-center">
                <Lightbulb className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900">Innovation</h4>
                <p className="text-sm text-gray-600">Modern agricultural technology</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900">Community</h4>
                <p className="text-sm text-gray-600">Empowering local farmers</p>
              </div>
              <div className="text-center">
                <Award className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900">Excellence</h4>
                <p className="text-sm text-gray-600">Quality in all we do</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive agricultural solutions tailored to meet the diverse needs of farmers across Zimbabwe.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Tractor className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Custom Tillage Services</CardTitle>
                <CardDescription>Per hectare mechanized land preparation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Professional tillage services with modern equipment for optimal soil preparation.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Crop Management Consulting</CardTitle>
                <CardDescription>Seasonal expert guidance</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Professional consulting services to maximize your crop yields and profitability.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Beef className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Livestock Supply</CardTitle>
                <CardDescription>Goats, Broilers, Road Runners</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Quality livestock for meat production and breeding programs.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Sprout className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Contract Growing</CardTitle>
                <CardDescription>Outgrower support programs</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Partnership programs to support small-scale farmers with resources and markets.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Wheat className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Crop Production & Marketing</CardTitle>
                <CardDescription>End-to-end crop solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Complete crop production services from planting to market delivery.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Tractor className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Farm Mechanization Leasing</CardTitle>
                <CardDescription>Equipment rental (in development)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Affordable access to modern farming equipment through our leasing program.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="flex justify-center">
          <ServiceCalculator />
        </div>
      </section>

      {/* Divisions Section */}
      <section id="divisions" className="py-20 bg-white">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Divisions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four specialized divisions working together to provide comprehensive agricultural solutions.
            </p>
          </div>

          <div className="space-y-16">
            {/* Tillage Services Division */}
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Tractor className="h-8 w-8 text-green-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Tillage Services Division</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  End-to-end mechanized land preparation and planting solutions, tailored to seasonal farming needs.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Ploughing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Discing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Boom Spraying</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Fertilizer Spreading</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Precision Planting</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Mechanized Harvesting</span>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src="/green.jpg?height=400&width=600"
                  alt="Tillage services"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>

            <Separator />

            {/* Animal Husbandry Division */}
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="lg:order-2">
                <div className="flex items-center space-x-3 mb-4">
                  <Beef className="h-8 w-8 text-green-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Animal Husbandry Division</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Our livestock operations supply both local markets and processors with quality animals.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Broiler Poultry Production</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Road Runner Chickens</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Goat Farming</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Beef & Dairy Cattle</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Pig Farming</span>
                  </div>
                </div>
              </div>
              <div className="lg:order-1">
                <Image
                  src="/red.jpg?height=400&width=600"
                  alt="Animal husbandry"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>

            <Separator />

            {/* Horticulture Division */}
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Carrot className="h-8 w-8 text-green-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Horticulture Division</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Through meticulous care, innovative techniques, and sustainable practices, we ensure our horticultural
                  crops thrive and reach their full potential.
                </p>
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Potatoes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Tomatoes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Cabbages</span>
                  </div>
                    <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Onions</span>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src="/green.jpg?height=400&width=600"
                  alt="Horticulture crops"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>

            <Separator />

            {/* Crop Farming Division */}
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="lg:order-2">
                <div className="flex items-center space-x-3 mb-4">
                  <Wheat className="h-8 w-8 text-green-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Crop Farming Division</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Strategically focused on the production of both staple and cash crops to meet market demands and
                  ensure food security.
                </p>
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Maize</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Soybeans</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Wheat</span>
                  </div>
                   <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Tobacco</span>
                  </div>
                </div>
              </div>
              <div className="lg:order-1">
                <Image
                  src="/mountain.jpg?height=400&width=600"
                  alt="Crop farming"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-green-50">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your farming operations? Get in touch with our team today.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl">Get in Touch</CardTitle>
                <CardDescription>Contact us for quotes, consultations, or partnership opportunities.</CardDescription>
              </CardHeader>
              <CardContent className="px-0 space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Head Office</h4>
                    <p className="text-gray-600">
                      No. 1 Lancaster Avenue, Belvedere
                      <br />
                      Harare, Zimbabwe
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-gray-600">
                      +263 778 179 409
                      <br />
                      +263 717 166 002
                      <br />
                      +263 781 413 309
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-600">info@cultiveightint.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Globe className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Website</h4>
                    <p className="text-gray-600">www.cultiveightint.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl">Request a Quote</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent className="px-0">
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <NewsletterSignup />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Sprout className="h-6 w-6 text-green-400" />
                <div>
                  <h3 className="font-bold">CULTIVEIGHT</h3>
                  <p className="text-xs text-gray-400">(PRIVATE) LIMITED</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Transforming agriculture in Zimbabwe through innovation, sustainability, and excellence.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Tillage Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Livestock Supply
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Crop Management
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contract Growing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Divisions</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Tillage Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Animal Husbandry
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Horticulture
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Crop Farming
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>No. 1 Lancaster Avenue</li>
                <li>Belvedere, Harare</li>
                <li>+263 778 179 409</li>
                <li>info@cultiveightint.com</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Cultiveight (Pvt) Ltd. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
