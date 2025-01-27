"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Shield, Heart, Globe } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const ImageWithFallback = function ({ src, alt, ...props }) {
  return (
    <div className="relative overflow-hidden rounded-xl shadow-xl">
      <Image
        src={src}
        alt={alt}
        {...props}
        className="object-cover transition-transform duration-300 hover:scale-105"
        quality={100}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0XFyAeIRshGxsdIR0hHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
    </div>
  );
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-12">
        <motion.div 
          className="text-center mb-12"
          initial="initial"
          animate="animate"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-27%20at%2013.58.38_f7d8b94f.jpg-KXgtTi6aPymX3koTkPBuIXmfmuXDWk.jpeg"
            alt="Damon Quest Tours Logo"
            width={400}
            height={200}
            className="mx-auto mb-8 rounded-xl shadow-lg"
            priority
          />
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-400 dark:to-teal-400">
            About Damon Quest Tours Limited
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Your gateway to extraordinary African adventures since 2010
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Mombasa Beach"
              width={800}
              height={600}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Our Story</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Founded in 2010, Damon Quest Tours Limited emerged from a profound passion for showcasing Africa's 
                unparalleled beauty and rich cultural heritage. Based in the vibrant coastal city of Mombasa, Kenya, 
                we've established ourselves as pioneers in creating immersive safari experiences, luxurious beach 
                getaways, and authentic cultural tours across East Africa.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span>Mwembe-Tayari Posta, Mombasa, Kenya</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span>+254718780619, +96895589609</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span>damonquesttraveltourlimited@gmail.com</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Our Commitments</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <Globe className="h-12 w-12 mx-auto text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Sustainable Tourism</h3>
              <p className="text-gray-600 dark:text-gray-300">Promoting eco-friendly practices and responsible tourism across all our operations.</p>
            </div>
            <div className="text-center space-y-4">
              <Heart className="h-12 w-12 mx-auto text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Community Support</h3>
              <p className="text-gray-600 dark:text-gray-300">Empowering local communities through sustainable tourism initiatives and partnerships.</p>
            </div>
            <div className="text-center space-y-4">
              <Shield className="h-12 w-12 mx-auto text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Safety First</h3>
              <p className="text-gray-600 dark:text-gray-300">Ensuring the highest standards of safety and comfort for all our clients.</p>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}