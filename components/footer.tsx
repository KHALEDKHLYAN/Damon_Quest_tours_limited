import Link from 'next/link'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
return (
  <footer className="bg-primary text-white dark:bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Mail className="h-5 w-5 mr-2" />
              <a href="mailto:damonquesttraveltourlimited@gmail.com" className="hover:text-secondary">damonquesttraveltourlimited@gmail.com</a>
            </li>
            <li className="flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              <a href="+254718780619" className="hover:text-secondary">+254 718 780619 or +96895589609</a>
            </li>
            <li className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              <span>Mwembe, Mombasa, Kenya</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-secondary">About Us</Link>
            </li>
            <li>
              <Link href="/tours" className="hover:text-secondary">Our Tours</Link>
            </li>
            <li>
              <Link href="/destinations" className="hover:text-secondary">Destinations</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-secondary">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=61571966946342&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="https://www.instagram.com/damonquesttravelandtour?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-white/20">
        <p className="text-center text-sm">
          © {new Date().getFullYear()} Damon Quest Tours. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
)
}

