import { WEBSITE_HOST_URL } from '@/lib/constants'
import { allPages } from 'contentlayer/generated'
import type { Metadata } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
import NextImage from 'next/image'

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
const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
  Image: (props) => <NextImage className="rounded-lg" {...props} />,
}
export default function About() {
  const page = allPages.find((page) => page._raw.sourceFileName === 'about.mdx')
  const MDXComponent = useMDXComponent(page.body.code)

  return (
    <div className="prose-sm mt-10 space-y-12 dark:prose-invert ">
      <MDXComponent components={mdxComponents} />
    </div>
  )
}
