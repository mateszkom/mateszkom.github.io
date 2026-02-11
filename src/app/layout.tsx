import { BackToTop } from '@/components/BackToTop'
import { Container } from '@/components/Container'
import { Navigation } from '@/components/Navigation'
import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import siteMeta from '../../content/site-meta.json'
import './global.css'

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
  metadataBase: new URL(WEBSITE_HOST_URL),

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
    locale: 'en-US',
    type: 'website',
    images: [
      {
        url: meta.image,
      },
    ],
  },
  twitter: {
    title: meta.title,
    description: meta.description,
    images: [meta.image],
    card: 'summary_large_image',
  },
  alternates: {
    canonical: WEBSITE_HOST_URL,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans`}>
        <header className="relative py-4">
          <Container>
            <div className="flex items-center justify-center py-6">
              <Navigation />
            </div>
          </Container>
        </header>
        <main>
          <Container>{children}</Container>
        </main>
        <footer className="py-16">
          <Container>
            <div className="flex flex-col gap-2 text-secondary sm:flex-row sm:items-center sm:justify-between">
              <span>
                by{' '}
                <Link className="link" href="/about">
                  Mateusz Skomorucha
                </Link>
              </span>
              <span>{siteMeta.footerVersion}</span>
            </div>
          </Container>
        </footer>
        <BackToTop />
      </body>
    </html>
  )
}
