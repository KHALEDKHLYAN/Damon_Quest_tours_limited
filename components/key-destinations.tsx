import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

const destinations = [
  {
    name: "Maasai Mara",
    description: "Witness the Great Migration",
    image: "/images/destinations/kenya/wildbeast-crossing-mara.jpeg"
  },
  {
    name: "Amboseli",
    description: "Elephants against Mt. Kilimanjaro",
    image: "/images/destinations/tanzania/elephants_amboseli.jpeg"
  },
  {
    name: "Serengeti",
    description: "Endless plains teeming with wildlife",
    image: "/images/destinations/tanzania/wildebeasts_water-buffalo.jpeg"
  },
  {
    name: "Zanzibar",
    description: "Pristine beaches and rich history",
    image: "/images/destinations/tanzania/zanzibar.jpeg"
  }
]

export function KeyDestinations() {
  return (
    <section className="py-24 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fade-up">Iconic African Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-up" style={{animationDelay: `${index * 100}ms`}}>
              <div className="relative h-48">
                <Image
                  src={dest.image || "/placeholder.svg"}
                  alt={dest.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2">{dest.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{dest.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

