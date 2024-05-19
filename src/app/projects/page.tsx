import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'
import { allProjects } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { ProjectCard } from '@/components/ProjectCard'

const meta = {
  title: 'Projects',
  description: 'I like to blog about UX/UI design',
  url: `${WEBSITE_HOST_URL}/projects`,
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

export default function Projects() {
  const projects = allProjects.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )
  return (
    <div className="mb-10  space-y-4  border-gray-200 pt-10 dark:border-gray-700 dark:border-opacity-50">
      <h2 className="pb-2">My projects </h2>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((post, idx) => (
          <ProjectCard key={idx} {...post} />
        ))}
      </div>
    </div>
  )
}
