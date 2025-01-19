import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

interface BlogPostProps {
  title: string
  description: string
  image: string
  slug: string
}

export function BlogPost({ title, description, image, slug }: BlogPostProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
      </CardContent>
      <CardFooter>
        <Link href={`/tours/${slug}`}>
          <Button variant="outline">Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

