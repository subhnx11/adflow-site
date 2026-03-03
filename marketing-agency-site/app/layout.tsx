import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Elite Marketing Agency | Scale Your Business 10X',
  description: 'Join thousands of businesses crushing their marketing goals. Expert strategies, proven results, personalized mentorship.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
