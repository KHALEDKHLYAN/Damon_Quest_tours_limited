import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <Image 
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XH06t1BEPgyi5Ewe2kfZ8gMAc1BQAF.png"
        alt="Yellow hot air balloon floating over African savanna" 
        fill 
        className="object-cover"
        priority
        quality={100}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6 animate-fade-up">
            <span className="block">
              Experience the Magic
            </span>
            <span className="block text-yellow-400">
              of African Skies
            </span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 animate-fade-up animation-delay-200">
            Soar above the majestic landscapes of East Africa with our exclusive hot air balloon safaris. Create unforgettable memories with Damon Quest Travel and Tour Limited.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-300">
            <Link href="/tours">
              <Button size="lg" className="w-full sm:w-auto text-lg px-8 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold transition-all duration-300 transform hover:scale-105">
                Start Your Journey
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 bg-black/20 text-white hover:bg-black/40 border-white transition-all duration-300 transform hover:scale-105">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
  )
}

