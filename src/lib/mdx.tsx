import { cn } from '@/lib/utils'
import type { CompileOptions } from '@mdx-js/mdx'
import type { MDXComponents } from 'mdx/types'
import NextImage from 'next/image'
import Link from 'next/link'
import type { ComponentPropsWithoutRef } from 'react'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

const Anchor = ({
  href,
  target,
  rel,
  children,
  ...props
}: ComponentPropsWithoutRef<'a'>) => {
  const isExternal =
    typeof href === 'string' &&
    (href.startsWith('http') || href.startsWith('mailto:'))
  const safeRel = target === '_blank' ? rel ?? 'noreferrer' : rel

  if (isExternal || !href) {
    return (
      <a href={href} target={target} rel={safeRel} {...props}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  )
}

export const getMdxComponents = (options?: { imageClassName?: string }) => {
  const imageClassName = options?.imageClassName ?? 'rounded-lg'

  return {
    a: Anchor,
    Image: (props) => (
      <NextImage {...props} className={cn(imageClassName, props.className)} />
    ),
  } satisfies MDXComponents
}

export const mdxOptions = {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [
    rehypeSlug,
    [
      rehypePrettyCode,
      {
        theme: 'one-dark-pro',
        onVisitLine(node: { children: Array<unknown> }) {
          if (node.children.length === 0) {
            node.children = [{ type: 'text', value: ' ' }]
          }
        },
        onVisitHighlightedLine(node: { properties: { className: string[] } }) {
          node.properties.className.push('line--highlighted')
        },
        onVisitHighlightedWord(node: { properties: { className: string[] } }) {
          node.properties.className = ['word--highlighted']
        },
      },
    ],
    [
      rehypeAutolinkHeadings,
      {
        properties: {
          className: ['anchor'],
        },
      },
    ],
  ],
} as CompileOptions
