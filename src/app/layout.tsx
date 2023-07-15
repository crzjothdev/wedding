import { Inter } from 'next/font/google'
import { cookies } from 'next/headers'

import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import { getRequestCookie } from '@/lib/session'

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
  const user = await getRequestCookie(cookies())

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar user={user} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
