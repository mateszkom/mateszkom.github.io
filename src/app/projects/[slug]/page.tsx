import { WEBSITE_HOST_URL } from '@/lib/constants'
import { allProjects } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import type { MDXComponents } from 'mdx/types'
import type { Metadata } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import NextImage from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXProvider } from '@mdx-js/react'

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project._raw.flattenedPath,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata | undefined> {
  const project = allProjects.find((project) => project.slug === params.slug)

  if (!project) {
    return
  }

  const { title, description, date, url } = project

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: date,
      url: `${WEBSITE_HOST_URL}/projects/${url}`,
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `${WEBSITE_HOST_URL}/projects/${url}`,
    },
  }
}

// Define your custom MDX components.
const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
  Image: (props) => <NextImage className="rounded-lg" {...props} />,
}

const ProjectLayout = ({ params }: { params: { slug: string } }) => {
  const project = allProjects.find((project) => project.slug === params.slug)

  if (!project) {
    notFound()
  }

  const MDXContent = useMDXComponent(project.body.code)

  return (
    <div>
      <h1>{project.title}</h1>
      {/* <MDXProvider components={components} /> */}
      <time
        className="my-4 block text-sm text-zinc-400"
        dateTime={project.date}
      >
        {format(parseISO(project.date), 'LLLL d, yyyy')}
      </time>
      <article className="prose dark:prose-invert">
        <MDXContent components={mdxComponents} />
      </article>
    </div>
  )
}

export default ProjectLayout
