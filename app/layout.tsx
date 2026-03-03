import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AdFlow.pk | Premium Marketing Agency in Pakistan',
  description: 'Scale your brand with AdFlow - Pakistan\'s leading marketing agency. Social media marketing, paid advertising, content creation & brand strategy.',
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
