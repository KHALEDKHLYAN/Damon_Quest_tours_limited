import { Button } from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'

export function WhatsappButton() {
  const phoneNumber = '+254701506538'
  const message = encodeURIComponent('Hello, I would like to inquire about your tours.')

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50"
    >
      <Button className="bg-green-500 hover:bg-green-600 text-white">
        <MessageCircle className="w-5 h-5 mr-2" />
        Chat on WhatsApp
      </Button>
    </a>
  )
}

