import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HotelCard } from '@/components/hotel-card'

const hotels = [
  {
    id: 1,
    name: "Serena Mountain Lodge",
    location: "Mount Kenya",
    description: "Experience luxury amid nature with stunning mountain views.",
    image: "https://source.unsplash.com/1600x900/?lodge,mountain",
    price: "From $200 per night",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Mara Serena Safari Lodge",
    location: "Masai Mara",
    description: "Luxury tented camp in the heart of Masai Mara.",
    image: "https://source.unsplash.com/1600x900/?safari,lodge",
    price: "From $350 per night",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Whitesands Beach Resort",
    location: "Mombasa",
    description: "Beachfront resort with pristine white sand beaches.",
    image: "https://source.unsplash.com/1600x900/?beach,resort",
    price: "From $180 per night",
    rating: 4.7,
  },
  // Add more hotels as needed
]

export default function HotelsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Our Partner Hotels</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} {...hotel} />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}

