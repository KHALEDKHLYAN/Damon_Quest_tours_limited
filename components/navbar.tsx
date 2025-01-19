'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm z-50 border-b dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Damon Quest Travel and Tour
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/tours" className="text-gray-600 hover:text-primary transition-colors">
              Tours
            </Link>
            <Link href="/packages" className="text-gray-600 hover:text-primary transition-colors">
              Packages
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">
              Contact
            </Link>
            <ThemeToggle />
            <Link href="/book">
              <Button className="bg-primary hover:bg-primary/90 transition-colors">Book Now</Button>
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-primary transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-950">
            <Link
              href="/tours"
              className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Tours
            </Link>
            <Link
              href="/packages"
              className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Packages
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="px-3 py-2">
              <div className="flex items-center justify-between mb-4">
                <ThemeToggle />
                <Link href="/book" onClick={() => setIsOpen(false)}>
                  <Button className="w-full">Book Now</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

