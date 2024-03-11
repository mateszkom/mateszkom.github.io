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
    <div>
      <h2>My blog posts:</h2>
      <div className="mt-10 flex flex-wrap    ">
        {projects.map((post, idx) => (
          <ProjectCard key={idx} {...post} />
        ))}
      </div>
    </div>
  )
}
