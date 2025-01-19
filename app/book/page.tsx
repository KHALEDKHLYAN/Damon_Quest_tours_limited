import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BookingForm } from '@/components/booking-form'

export const dynamic = 'force-dynamic'

export default function BookPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Book Your Adventure</h1>
        <div className="max-w-2xl mx-auto">
          <BookingForm />
        </div>
      </div>
      <Footer />
    </main>
  )
}

