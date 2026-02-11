import { WEBSITE_HOST_URL } from '@/lib/constants'
import { getAllPosts, getAllProjects } from '@/lib/content'

export const dynamic = 'force-static'

export default async function sitemap() {
  const posts = getAllPosts().map((post) => ({
    url: `${WEBSITE_HOST_URL}${post.url}`,
    lastModified: post.date,
  }))

  const projects = getAllProjects().map((project) => ({
    url: `${WEBSITE_HOST_URL}${project.url}`,
    lastModified: project.date,
  }))

  const routes = ['', '/about', '/posts', '/projects', '/resume'].map(
    (route) => ({
      url: `${WEBSITE_HOST_URL}${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    }),
  )

  return [...routes, ...posts, ...projects]
}
