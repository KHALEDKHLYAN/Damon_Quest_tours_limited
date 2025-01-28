import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PackageCard } from '@/components/package-card'

const tourPackages = [
  {
    slug: "nairobi-national-park",
    title: "Nairobi National Park Day Trip",
    description: "Experience a safari in the heart of Kenya's capital city",
    image: "/images/tours/nairobi-national-park.jpeg",
    duration: "1 day",
    price: "From $150"
  },
  {
    slug: "mombasa-old-town",
    title: "Mombasa Old Town & Fort Jesus Tour",
    description: "Explore the rich history and culture of coastal Kenya",
    image: "/images/tours/mombasa/Fort-Jesus-Fortress.jpeg",
    duration: "1 day",
    price: "From $100"
  },
  {
    slug: "kruger-safari-adventure",
    title: "Kruger National Park Safari Adventure",
    description: "Experience the thrill of spotting the Big Five in Kruger National Park",
    image: "/images/destinations/dubai/Kruger-National-Park-South-Africa.jpeg",
    duration: "1 day",
    price: "From $200"
  },
  {
    slug: "kampala-city-tour",
    title: "Kampala City Tour",
    description: "Discover the vibrant capital of Uganda in a day",
    image: "/images/tours/zanzibar/Entebbe_Airport_Kampala.jpeg",
    duration: "1 day",
    price: "From $120"
  },
  {
    slug: "zanzibar-spice-tour",
    title: "Zanzibar Spice Tour",
    description: "Explore the aromatic spice plantations of Zanzibar",
    image: "/images/tours/zanzibar/dune-zanzibar.jpeg",
    duration: "Half day",
    price: "From $80"
  },
  {
    slug: "dubai-desert-safari",
    title: "Dubai Desert Safari",
    description: "Experience the thrill of dune bashing and desert activities",
    image: "/images/tours/zanzibar/dubai_desert.jpeg",
    duration: "1 day",
    price: "From $200"
  }
]

export default function ToursPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Our Day Tours and Excursions</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourPackages.map((tour) => (
            <PackageCard key={tour.slug} {...tour} />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}

