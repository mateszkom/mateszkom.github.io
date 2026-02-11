import { WEBSITE_HOST_URL } from '@/lib/constants'
import { getAllPosts, getPostBySlug } from '@/lib/content'
import { getMdxComponents, mdxOptions } from '@/lib/mdx'
import { format, parseISO } from 'date-fns'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }))
}

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata | undefined> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return
  }

  const { title, description, date, url } = post
  const canonicalUrl = `${WEBSITE_HOST_URL}${url}`
  const ogImage = `${WEBSITE_HOST_URL}/og-preview.jpg`

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
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      title,
      description,
      images: [ogImage],
      card: 'summary_large_image',
    },
    alternates: {
      canonical: canonicalUrl,
    },
  }
}

const PostLayout = async ({ params }: PageProps) => {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <time
        className="my-4 block text-base text-secondary"
        dateTime={post.date}
      >
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <article className="prose max-w-none dark:prose-invert">
        <MDXRemote
          source={post.content}
          components={getMdxComponents()}
          options={{ mdxOptions }}
        />
      </article>
    </div>
  )
}

export default PostLayout
