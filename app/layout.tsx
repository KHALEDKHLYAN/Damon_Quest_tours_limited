import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { WhatsappButton } from "@/components/whatsapp-button"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Damon Quest Tours",
  description: "Discover your next adventure with Damon Quest Tours",
  icons: {
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capturreeee-removebg-preview-zMaUS81ZGyGzTNH4YSJuvwGI76a1ik.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capturreeee-removebg-preview-zMaUS81ZGyGzTNH4YSJuvwGI76a1ik.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capturreeee-removebg-preview-zMaUS81ZGyGzTNH4YSJuvwGI76a1ik.png",
        sizes: "48x48",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capturreeee-removebg-preview-zMaUS81ZGyGzTNH4YSJuvwGI76a1ik.png",
        sizes: "196x196",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capturreeee-removebg-preview-zMaUS81ZGyGzTNH4YSJuvwGI76a1ik.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capturreeee-removebg-preview-zMaUS81ZGyGzTNH4YSJuvwGI76a1ik.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capturreeee-removebg-preview-zMaUS81ZGyGzTNH4YSJuvwGI76a1ik.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capturreeee-removebg-preview-zMaUS81ZGyGzTNH4YSJuvwGI76a1ik.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capturreeee-removebg-preview-zMaUS81ZGyGzTNH4YSJuvwGI76a1ik.png"
        />
        <link
          rel="shortcut icon"
          type="image/png"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capturreeee-removebg-preview-zMaUS81ZGyGzTNH4YSJuvwGI76a1ik.png"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <WhatsappButton />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

