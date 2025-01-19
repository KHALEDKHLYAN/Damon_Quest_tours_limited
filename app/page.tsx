import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { KeyDestinations } from '@/components/key-destinations'
import { FeaturedDestinations } from '@/components/featured-destinations'
import { Testimonials } from '@/components/testimonials'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <KeyDestinations />
      <FeaturedDestinations />
      <Testimonials />
      <Footer />
    </main>
  )
}

