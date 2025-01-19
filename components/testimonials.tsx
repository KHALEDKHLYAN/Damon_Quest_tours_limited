import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Visited Maasai Mara, Kenya",
    text: "Our safari with Damon Quest was beyond incredible. The wildlife sightings were spectacular, and our guide's knowledge was impressive.",
    rating: 5,
    image: "/images/testimonials/Sarah-johnson.jpeg",
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Climbed Mt. Kilimanjaro, Tanzania",
    text: "The Kilimanjaro trek was challenging but so rewarding. Damon Quest's team ensured we were safe and comfortable throughout the journey.",
    rating: 5,
    image: "/images/testimonials/MichaelChen.jpeg",
  },
  {
    id: 3,
    name: "Emma Thompson",
    location: "Explored Zanzibar, Tanzania",
    text: "From the pristine beaches to the historic Stone Town, our Zanzibar trip was the perfect mix of relaxation and cultural exploration.",
    rating: 5,
    image: "/images/testimonials/saratestimony.jpeg",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-primary/10 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl font-bold tracking-tight text-primary dark:text-white sm:text-4xl mb-2">
            Memories from the Savannah
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
            Hear what our adventurers have to say about their African experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.id} className="hover:shadow-lg transition-shadow dark:bg-gray-800 animate-fade-up" style={{animationDelay: `${index * 100}ms`}}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold dark:text-white">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

