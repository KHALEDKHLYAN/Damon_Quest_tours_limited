import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const destinations = [
  {
    id: 1,
    name: "Kenya",
    image: "/images/destinations/kenya/travel-mara.jpeg",
    description: "Experience the magic of the Maasai Mara and vibrant cities",
  },
  {
    id: 2,
    name: "Uganda",
    image: "/images/destinations/uganda/MOUNTAIN_GORILLAS.jpeg",
    description: "Encounter mountain gorillas and explore lush landscapes",
  },
  {
    id: 3,
    name: "Tanzania",
    image: "/images/destinations/tanzania/Serengeti-Safari-Tanzania's-Great-Migration.jpeg",
    description: "Witness the Great Migration and relax on Zanzibar's beaches",
  },
  {
    id: 4,
    name: "Dubai",
    image: "/images/destinations/dubai/Dubai-🇦🇪.jpeg",
    description: "Discover a perfect blend of modernity and tradition",
  },
]

export function FeaturedDestinations() {
  return (
    <section className="py-24 bg-accent/10 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl font-bold tracking-tight text-primary dark:text-white sm:text-4xl mb-2">
            Our Featured Destinations
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
            Explore the best of East Africa and beyond
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <Card key={destination.id} className="overflow-hidden hover:shadow-lg transition-shadow dark:bg-gray-800 animate-fade-up" style={{animationDelay: `${index * 100}ms`}}>
              <div className="relative h-48">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold dark:text-white mb-2">{destination.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{destination.description}</p>
                <Link href={`/packages#${destination.name.toLowerCase()}`}>
                  <Button variant="outline" className="w-full">Explore Packages</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

