import { compareDesc } from 'date-fns'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { cache } from 'react'

const contentRoot = path.join(process.cwd(), 'content')

export type Post = {
  slug: string
  url: string
  title: string
  description: string
  date: string
  category: string[]
  content: string
}

export type Project = {
  slug: string
  url: string
  title: string
  description: string
  date: string
  category: string[]
  color: string
  image: string
  content: string
}

const getMdxFiles = (directory: string) => {
  if (!fs.existsSync(directory)) {
    return []
  }

  return fs
    .readdirSync(directory)
    .filter((fileName) => fileName.endsWith('.mdx'))
}

const readMdxFile = (filePath: string) => {
  const raw = fs.readFileSync(filePath, 'utf8')
  return matter(raw)
}

const getRequiredString = (
  data: Record<string, unknown>,
  key: string,
  filePath: string,
) => {
  const value = data[key]

  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new Error(`Missing ${key} in ${filePath}`)
  }

  return value
}

const getRequiredDateString = (
  data: Record<string, unknown>,
  key: string,
  filePath: string,
) => {
  const value = data[key]

  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().split('T')[0]
  }

  if (typeof value === 'string' && value.trim().length > 0) {
    return value
  }

  if (typeof value === 'number' && Number.isFinite(value)) {
    return new Date(value).toISOString().split('T')[0]
  }

  throw new Error(`Missing ${key} in ${filePath}`)
}

const getRequiredStringArray = (
  data: Record<string, unknown>,
  key: string,
  filePath: string,
) => {
  const value = data[key]

  if (Array.isArray(value)) {
    const cleaned = value
      .filter((item) => typeof item === 'string')
      .map((item) => item.trim())
      .filter((item) => item.length > 0)

    if (cleaned.length > 0) {
      return cleaned
    }
  }

  if (typeof value === 'string' && value.trim().length > 0) {
    return [value.trim()]
  }

  throw new Error(`Missing ${key} in ${filePath}`)
}

const isPublished = (data: Record<string, unknown>) => {
  const value = data.published

  if (typeof value === 'boolean') {
    return value
  }

  if (typeof value === 'number') {
    return value === 1
  }

  if (typeof value === 'string') {
    const normalized = value.trim().toLowerCase()

    if (['yes', 'true', '1', 'y'].includes(normalized)) {
      return true
    }

    if (['no', 'false', '0', 'n'].includes(normalized)) {
      return false
    }
  }

  return false
}

const getPostsInternal = () => {
  const postsDir = path.join(contentRoot, 'posts')
  const files = getMdxFiles(postsDir)

  const posts = files.flatMap((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '')
    const filePath = path.join(postsDir, fileName)
    const { data, content } = readMdxFile(filePath)

    if (!isPublished(data)) {
      return []
    }

    return [
      {
        slug,
        url: `/posts/${slug}`,
        title: getRequiredString(data, 'title', filePath),
        description: getRequiredString(data, 'description', filePath),
        date: getRequiredDateString(data, 'date', filePath),
        category: getRequiredStringArray(data, 'category', filePath),
        content,
      },
    ]
  })

  return posts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
}

const getProjectsInternal = () => {
  const projectsDir = path.join(contentRoot, 'projects')
  const files = getMdxFiles(projectsDir)

  const projects = files.flatMap((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '')
    const filePath = path.join(projectsDir, fileName)
    const { data, content } = readMdxFile(filePath)

    if (!isPublished(data)) {
      return []
    }

    return [
      {
        slug,
        url: `/projects/${slug}`,
        title: getRequiredString(data, 'title', filePath),
        description: getRequiredString(data, 'description', filePath),
        date: getRequiredDateString(data, 'date', filePath),
        category: getRequiredStringArray(data, 'category', filePath),
        color: getRequiredString(data, 'color', filePath),
        image: getRequiredString(data, 'image', filePath),
        content,
      },
    ]
  })

  return projects.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )
}

const getPageContentInternal = (slug: string) => {
  const filePath = path.join(contentRoot, 'pages', `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const { content } = readMdxFile(filePath)
  return content
}

export const getAllPosts = cache(getPostsInternal)
export const getAllProjects = cache(getProjectsInternal)
export const getPageContent = cache(getPageContentInternal)

export const getPostBySlug = (slug: string) =>
  getAllPosts().find((post) => post.slug === slug)

export const getProjectBySlug = (slug: string) =>
  getAllProjects().find((project) => project.slug === slug)
