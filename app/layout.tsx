import Header from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio | Hadil Miari',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
    <body
      className={`${inter.className} text-gray-950 relative pt-4`}
    >
          <Header />
            <div className="container mx-auto py-10 min-h-[80vh]">
              {children}
            </div>
          <Footer />
    </body>
  </html>
  )
}
