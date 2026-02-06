import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'
import Image from 'next/image'

const meta = {
  title: 'About Me',
  description: 'I like to blog about UX/UI design',
  url: `${WEBSITE_HOST_URL}/about`,
}

export const metadata: Metadata = {
  metadataBase: new URL(WEBSITE_HOST_URL),

  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.url,
  },
  twitter: {
    title: meta.title,
    description: meta.description,
  },
  alternates: {
    canonical: meta.url,
  },
}
export default function About() {
  return (
    <div className="mt-10 space-y-12">
      <section className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-start">
        <div className="space-y-4">
          <h1>About me</h1>
          <p>
            Hi, I am Mateusz. I work as an e-commerce graphic designer at the
            Polish company LPP S.A. My responsibilities include creating
            promotional materials for online channels, social media, and
            graphics for websites and mobile applications.
          </p>
          <p>
            I have been interested in UX/UI for several years, starting around
            2018-19. I am creating this website to document my journey in this
            field, showcase my work, and share some aspects of my personal life.
          </p>
          <p>
            I plan to write text tutorials and build a small knowledge base
            about UX, both for myself and others.
          </p>
          <p>
            Feel free to reach out via email at{' '}
            <a className="link" href="mailto:contact@mateszkom.com">
              contact@mateszkom.com
            </a>{' '}
            or on{' '}
            <a
              className="link"
              href="https://www.linkedin.com/in/mateuszkom/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-muted bg-muted">
          <div className="relative aspect-[2/3]">
            <Image
              src="/images/profile-pic.jpg"
              alt="Portrait of Mateusz"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 360px, (min-width: 768px) 320px, 100vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2>Software</h2>
        <ul className="ml-4 space-y-1">
          <li>
            <span className="font-medium text-primary">Design/Video:</span>{' '}
            Adobe Creative Cloud
          </li>
          <li>
            <span className="font-medium text-primary">UX/UI:</span> Figma
          </li>
          <li>
            <span className="font-medium text-primary">
              Notes/Productivity/Calendar:
            </span>{' '}
            Microsoft 365
          </li>
          <li>
            <span className="font-medium text-primary">Coding:</span> VS Code
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2>Hardware</h2>
        <ul className="ml-4 space-y-1">
          <li>
            <span className="font-medium text-primary">Laptop:</span> Dell XPS
            15 7590 i7-9750H/16GB/512/Win11 GTX1650
          </li>
          <li>
            <span className="font-medium text-primary">Mouse:</span> Logitech MX
            Master 2s
          </li>
          <li>
            <span className="font-medium text-primary">Keyboard:</span>
            Logitech K380
          </li>
          <li>
            <span className="font-medium text-primary">Phone:</span> iPhone 12
            mini
          </li>
        </ul>
      </section>
    </div>
  )
}
