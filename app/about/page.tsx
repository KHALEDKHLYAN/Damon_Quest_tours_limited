import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">About Damon Quest Tours Limited</h1>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="/images/mamaa.jpeg"
              alt="Mombasa Beach"
              width={800}
              height={600}
              className="rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="mb-4">
              Damon Quest Tours Limited was founded in 2010 with a passion for showcasing the beauty and diversity of Africa to travelers from around the world. Based in the vibrant coastal city of Mombasa, Kenya, we specialize in creating unforgettable safari experiences, beach getaways, and cultural tours across East Africa.
            </p>
            <p className="mb-4">
              Our team of experienced guides and travel experts are dedicated to providing personalized, sustainable, and responsible tourism experiences that benefit both our clients and the local communities we visit.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
            <p className="mb-4">
              We are proudly headquartered in Mombasa, Kenya's second-largest city and a major tourist destination. Our office is located in the heart of the city, easily accessible to both locals and international visitors.
            </p>
            <p>
              <strong>Address:</strong> Mwembe, Mombasa, Kenya<br />
              <strong>Phone:</strong> +254718780619 or  +96895589609<br />
              <strong>Email:</strong> damonquesttraveltourlimited@gmail.com
            </p>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Sustainable and responsible tourism practices</li>
            <li>Supporting local communities through eco-tourism initiatives</li>
            <li>Providing authentic and immersive African experiences</li>
            <li>Ensuring the highest standards of safety and comfort for our clients</li>
            <li>Continuously improving our services based on client feedback</li>
          </ul>
        </div>
      </div>
      <Footer />
    </main>
  )
}

