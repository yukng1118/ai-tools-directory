import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Tools Directory 2026 | 25+ AI Tools by Category & Use Case',
  description: 'Discover 25+ AI tools for e-commerce, marketing, legal, image & design, video, audio, developer tools, and more. Compare features, pricing & find the perfect AI tool for your workflow.',
  keywords: ['AI tools', 'AI tools directory', 'AI tools by category', 'AI tools 2026', 'AI automation', 'AI software', 'AI apps'],
  authors: [{ name: 'AI Tools Directory' }],
  creator: 'AI Tools Directory',
  publisher: 'AI Tools Directory',
  metadataBase: new URL('https://ai-directory-pearl.vercel.app'),
  alternates: {
    canonical: 'https://ai-directory-pearl.vercel.app',
  },
  openGraph: {
    title: 'AI Tools Directory 2026 | 25+ Tools by Category',
    description: 'Discover AI tools organized by use case. Filter by category, pricing, and features.',
    url: 'https://ai-directory-pearl.vercel.app',
    siteName: 'AI Tools Directory',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Tools Directory',
    description: 'Discover AI tools organized by use case',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
