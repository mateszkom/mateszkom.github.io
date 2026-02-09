'use client'

import { getCategoryColors } from '@/lib/categories'
import type { Post } from '@/lib/content'
import { useMemo, useState } from 'react'
import { PostCard } from './PostCard'

type PostsFilterProps = {
  posts: Post[]
}

export function PostsFilter({ posts }: PostsFilterProps) {
  const [selected, setSelected] = useState<string[]>([])

  const categories = useMemo(() => {
    const set = new Set<string>()
    posts.forEach((post) => {
      post.category.forEach((category) => set.add(category))
    })
    return Array.from(set).sort((a, b) => a.localeCompare(b))
  }, [posts])

  const filteredPosts = useMemo(() => {
    if (selected.length === 0) {
      return posts
    }

    return posts.filter((post) =>
      post.category.some((category) => selected.includes(category)),
    )
  }, [posts, selected])

  const toggleCategory = (category: string) => {
    setSelected((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category],
    )
  }

  const resetFilters = () => {
    setSelected([])
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((category) => {
          const isActive = selected.includes(category)
          const colors = getCategoryColors(category)

          return (
            <button
              key={category}
              type="button"
              onClick={() => toggleCategory(category)}
              className={
                isActive
                  ? 'rounded-full border border-primary px-3 py-1 text-sm font-medium'
                  : 'rounded-full border border-secondary px-3 py-1 text-sm text-secondary'
              }
              style={
                isActive
                  ? {
                      backgroundColor: colors.bg,
                      color: colors.text,
                    }
                  : undefined
              }
            >
              {category}
            </button>
          )
        })}
        {selected.length > 0 && (
          <button
            type="button"
            onClick={resetFilters}
            className="inline-flex items-center gap-2 px-2 py-1 text-sm text-secondary hover:text-primary"
          >
            <span aria-hidden="true">×</span>
            Reset
          </button>
        )}
      </div>
      <div className="space-y-0">
        {filteredPosts.map((post, index) => (
          <div key={post.url}>
            <PostCard {...post} />
            {index < filteredPosts.length - 1 && (
              <div className="my-2 border-t border-muted border-neutral-700 dark:border dark:border-opacity-50" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
