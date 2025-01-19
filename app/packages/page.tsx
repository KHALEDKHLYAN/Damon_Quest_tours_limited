import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PackageCard } from '@/components/package-card'

const packages = [
  {
    id: "kenya-safari",
    title: "Kenya Safari Adventure",
    description: "Experience the best of Kenya's wildlife and landscapes",
    image: "/images/tours/kenya_safari_adventure.jpeg",
    duration: "7 days",
    price: "From $2,499",
  },
  {
    id: "uganda-gorilla",
    title: "Uganda Gorilla Expedition",
    description: "Trek through lush forests to encounter mountain gorillas",
    image: "/images/tours/ugandagorilla.jpeg",
    duration: "5 days",
    price: "From $3,299",
  },
  {
    id: "tanzania-serengeti",
    title: "Tanzania Serengeti & Zanzibar",
    description: "Combine a thrilling safari with a relaxing beach getaway",
    image: "/images/tours/tanzania_love.jpeg",
    duration: "10 days",
    price: "From $3,999",
  },
  {
    id: "dubai-adventure",
    title: "Dubai City & Desert Adventure",
    description: "Experience the luxury of Dubai and the thrill of the desert",
    image: "/images/tours/dubai_desert_safari.jpeg",
    duration: "6 days",
    price: "From $2,799",
  },
  {
    id: "east-africa-wildlife",
    title: "East Africa Wildlife Safari",
    description: "Explore the diverse wildlife of Kenya and Tanzania",
    image: "/images/tours/east_africa_wildlife.jpeg",
    duration: "12 days",
    price: "From $4,999",
  },
  {
    id: "uganda-rwanda-primate",
    title: "Uganda & Rwanda Primate Adventure",
    description: "Encounter gorillas, chimpanzees, and golden monkeys",
    image: "/images/tours/chipanzee_monkeys.jpeg",
    duration: "8 days",
    price: "From $4,499",
  }
]

export default function PackagesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Our Tour Packages</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <PackageCard slug={''} key={index} {...pkg} />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}

