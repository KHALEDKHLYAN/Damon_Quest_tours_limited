'use client'

import Image from 'next/image'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star, MapPin } from 'lucide-react'

interface HotelCardProps {
  name: string
  location: string
  description: string
  image: string
  price: string
  rating: number
}

export function HotelCard({ name, location, description, image, price, rating }: HotelCardProps) {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hello, I'm interested in booking ${name} in ${location}. Please provide more information.`
    )
    window.open(`https://wa.me/+254701506538?text=${message}`, '_blank')
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{name}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm">{rating}</span>
          </div>
        </div>
        <div className="flex items-center text-gray-500 mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        <p className="font-semibold text-primary">{price}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full bg-green-500 hover:bg-green-600"
          onClick={handleWhatsAppClick}
        >
          Reserve via WhatsApp
        </Button>
      </CardFooter>
    </Card>
  )
}

