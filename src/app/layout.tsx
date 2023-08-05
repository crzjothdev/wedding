import { Inter } from 'next/font/google'

import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import Message from '@/components/layout/message'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Wedding Zacarias Valladares',
  description: 'Official wedding website',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Message />
        {children}
        <Footer />
      </body>
    </html>
  )
}
