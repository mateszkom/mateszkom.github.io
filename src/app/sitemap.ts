import { WEBSITE_HOST_URL } from '@/lib/constants'
import { getAllPosts } from '@/lib/content'

export const dynamic = 'force-static'

export default async function sitemap() {
  const posts = getAllPosts().map((post) => ({
    url: `${WEBSITE_HOST_URL}${post.url}`,
    lastModified: post.date,
  }))

  const routes = ['', '/about'].map((route) => ({
    url: `${WEBSITE_HOST_URL}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...posts]
}
