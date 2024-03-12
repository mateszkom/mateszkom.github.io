import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'

const meta = {
  title: 'About Me',
  description: 'I like to blog about UX/UI design',
  url: `${WEBSITE_HOST_URL}/about`,
}

export const metadata: Metadata = {
  metadataBase: new URL('http://mateszkom.com'),

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
    <div className=" space-y-7	">
      <h1 className="leading-12">About me </h1>
      <p className="leading-12">
        Hello, I’m Mateusz. Currently, I work as an e-commerce graphic designer
        at the Polish company LPP S.A. My responsibilities include creating
        promotional materials for various online channels, social media, as well
        as designing graphics for websites and mobile applications.
      </p>
      <p>
        I’ve been interested in UX/UI for several years, starting around
        2018-19. I’m creating this website to document my journey in this field,
        showcase my work, and perhaps share some aspects of my personal life. I
        plan to write numerous text tutorials, possibly building my own
        knowledge base on UX for both myself and others.
      </p>
      Feel free to reach out via email at{' '}
      <a className="underline" href="mailto:contact@mateszkom.com">
        contact@mateszkom.com
      </a>
      <p>
        In the future, I’ll update this page with information about the tools I
        use, hardware, and other topics that interest me. Additionally, my
        resume will be available for download soon.
      </p>
    </div>
  )
}
