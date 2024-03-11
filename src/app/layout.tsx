import { ThemeProvider } from '@/app/providers'
import { Container } from '@/components/Container'
import { Navigation } from '@/components/Navigation'
import ThemeSwitch from '@/components/ThemeSwitch'
import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'
import Link from 'next/link'
import './global.css'
import { useState } from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin-ext'],
  variable: '--font-inter',
})
const meta = {
  title: 'Mateusz Skomorucha',
  description:
    'Mateusz Skomorucha - ux/ui designer, e-commerce graphic designer',
  image: `${WEBSITE_HOST_URL}/og-preview.jpg`,
}

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),

  title: {
    default: meta.title,
    template: '%s | Mateusz Skomorucha',
  },
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: WEBSITE_HOST_URL,
    siteName: meta.title,
    locale: 'pl-PL',
    type: 'website',
    images: [
      {
        url: meta.image,
      },
    ],
  },
  // twitter: {
  //   title: meta.title,
  //   description: meta.description,
  //   images: meta.image,
  //   card: 'summary_large_image',
  // },
  // alternates: {
  //   canonical: WEBSITE_HOST_URL,
  // },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <header className="py-4">
            <Container>
              <div className="flex items-center justify-between py-6">
                <Navigation />
                <ThemeSwitch />
              </div>
            </Container>
          </header>
          <main>
            <Container>{children}</Container>
          </main>
          <footer className="py-16">
            <Container>
              <p>
                by{' '}
                <Link className="link" href="https://linkedin.com/in/mateszkom">
                  Mateusz Skomorucha
                </Link>
              </p>
            </Container>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
