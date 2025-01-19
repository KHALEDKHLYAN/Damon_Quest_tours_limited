import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
        <div className="max-w-2xl mx-auto">
          <p className="text-center mb-8">
            Have questions about our tours or want to customize your African adventure? 
            Get in touch with us using the form below, and we'll get back to you as soon as possible.
          </p>
          <ContactForm />
        </div>
      </div>
      <Footer />
    </main>
  )
}

