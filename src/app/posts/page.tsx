import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { PostCard } from '@/components/PostCard'

const meta = {
  title: 'Blog',
  description: 'I like to blog about UX/UI design',
  url: `${WEBSITE_HOST_URL}/posts`,
}

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),

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

export default function Blog() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )
  return (
    <div className="mt-10 space-y-12 ">
      <h5>My blog posts:</h5>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  )
}
