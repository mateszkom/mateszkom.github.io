import { WEBSITE_HOST_URL } from '@/lib/constants'
import { getPageContent } from '@/lib/content'
import { getMdxComponents, mdxOptions } from '@/lib/mdx'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'

const meta = {
  title: 'Resume',
  description: 'My resume',
  url: `${WEBSITE_HOST_URL}/resume`,
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
  const content = getPageContent('resume')

  if (!content) {
    notFound()
  }

  return (
    <div className="mt-10 space-y-12 ">
      <MDXRemote
        source={content}
        components={getMdxComponents()}
        options={{ mdxOptions }}
      />
    </div>
  )
}
