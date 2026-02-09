import { WEBSITE_HOST_URL } from '@/lib/constants'
import { getAllProjects, getProjectBySlug } from '@/lib/content'
import { getMdxComponents, mdxOptions } from '@/lib/mdx'
import { format, parseISO } from 'date-fns'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return getAllProjects().map((project) => ({
    slug: project.slug,
  }))
}

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata | undefined> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return
  }

  const { title, description, date, url } = project
  const canonicalUrl = `${WEBSITE_HOST_URL}${url}`

  return {
    metadataBase: new URL(WEBSITE_HOST_URL),
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: date,
      url: canonicalUrl,
    },

    alternates: {
      canonical: canonicalUrl,
    },
  }
}

const ProjectLayout = async ({ params }: PageProps) => {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="max-w-screen-lg">
      <h1>{project.title}</h1>
      <time className="text-base text-secondary" dateTime={project.date}>
        {format(parseISO(project.date), 'LLLL d, yyyy')}
      </time>

      <article className="prose w-full max-w-none pt-10 dark:prose-invert">
        <MDXRemote
          source={project.content}
          components={getMdxComponents({ imageClassName: 'w-full rounded-lg' })}
          options={{ mdxOptions }}
        />
      </article>
    </div>
  )
}

export default ProjectLayout
