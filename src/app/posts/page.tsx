import { PostCard } from '@/components/PostCard'
import { WEBSITE_HOST_URL } from '@/lib/constants'
import { getAllPosts } from '@/lib/content'
import type { Metadata } from 'next'

const meta = {
  title: 'Blog',
  description: 'I like to blog about UX/UI design',
  url: `${WEBSITE_HOST_URL}/posts`,
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

export default function Blog() {
  const posts = getAllPosts()
  return (
    <div className="mb-10  space-y-4  border-accent  pt-10 dark:border-accent dark:border-opacity-50">
      <h2 className="pb-2">My blog posts</h2>
      {posts.map((post) => (
        <div key={post.url}>
          <PostCard {...post} />
          <div className=" border-t border-muted  dark:border-muted dark:border-opacity-50"></div>
        </div>
      ))}
    </div>
  )
}
