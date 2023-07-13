import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Serif, Roboto } from 'next/font/google'

const roboto_serif = Roboto_Serif({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-serif',
})
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100','300', '400', '500', '700', '900'],
  display: 'swap',
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Exercise Finder',
  description: 'Find useful exercises and add them to your daily routine',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto_serif.variable} ${roboto.variable} bg-bg`}>{children}</body>
    </html>
  )
}
