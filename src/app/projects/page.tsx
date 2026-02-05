import { ProjectCard } from '@/components/ProjectCard'
import { WEBSITE_HOST_URL } from '@/lib/constants'
import { getAllProjects } from '@/lib/content'
import type { Metadata } from 'next'

const meta = {
  title: 'Projects',
  description: 'I like to blog about UX/UI design',
  url: `${WEBSITE_HOST_URL}/projects`,
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

export default function Projects() {
  const projects = getAllProjects()
  return (
    <div className="mb-10  space-y-4  border-gray-200 pt-10 dark:border-gray-700 dark:border-opacity-50">
      <h2 className="pb-2">My projects </h2>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.url} {...project} />
        ))}
      </div>
    </div>
  )
}
