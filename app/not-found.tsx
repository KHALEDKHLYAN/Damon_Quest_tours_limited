import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">Page Not Found</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Oops! The page you're looking for doesn't exist.</p>
          <Link href="/">
            <Button>
              Return to Homepage
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}

