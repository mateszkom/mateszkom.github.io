import type { Post } from '@/lib/content'
import { format, parseISO } from 'date-fns'
import Link from 'next/link'

export function PostCard(post: Post) {
  return (
    <Link
      className="link flex flex-row items-start justify-between text-secondary hover:text-primary hover:underline"
      href={post.url}
    >
      <article className="flex w-full flex-row items-start justify-between gap-x-4">
        <div className="group relative min-w-0 flex-1">
          <span className="font-normal leading-6">
            <span className="absolute inset-0" />
            {post.title}
          </span>
        </div>
        <span className="flex shrink-0 items-center text-sm text-primary hover:no-underline">
          <time className="whitespace-nowrap" dateTime={post.date}>
            {format(parseISO(post.date), 'LLLL d, yyyy')}
          </time>
        </span>
      </article>
    </Link>
  )
}
