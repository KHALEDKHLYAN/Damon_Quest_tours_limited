import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plane, Hotel } from 'lucide-react'

interface PackageCardProps {
  slug: string
  title: string
  description: string
  image: string
  duration: string
  price: string
}

export function PackageCard({ slug, title, description, image, duration, price }: PackageCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
          <span>{duration}</span>
          <span className="font-semibold text-primary">{price}</span>
        </div>
        <div className="flex space-x-2 mb-4">
          <Button variant="outline" size="sm" className="flex items-center">
            <Plane className="w-4 h-4 mr-2" />
            Flight Booking
          </Button>
          <Button variant="outline" size="sm" className="flex items-center">
            <Hotel className="w-4 h-4 mr-2" />
            Hotel Reservation
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href={`/tours/${slug}`}>
          <Button variant="outline">Read More</Button>
        </Link>
        <Link href={`/book?package=${slug}`}>
          <Button>Book Now</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

