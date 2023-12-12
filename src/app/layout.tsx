import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gurdt - StreamOverly',
  description: 'Just for Gurdt.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className="bg-transparent">
        {children}
      </body>
    </html>
  )
}
