import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { WhatsappButton } from '@/components/whatsapp-button'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Damon Quest Tours',
  description: 'Discover your next adventure with Damon Quest Tours',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <WhatsappButton />
        </ThemeProvider>
      </body>
    </html>
  )
}

