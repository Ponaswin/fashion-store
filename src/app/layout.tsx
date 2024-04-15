import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import LayoutDesign from './layout-design'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Male Fashion',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutDesign>{children}</LayoutDesign>
      </body>
    </html>
  )
}
