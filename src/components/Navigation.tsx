'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const navigationItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/posts' },
]

function formatSegment(segment: string) {
  return segment.replace(/-/g, ' ').toLowerCase()
}

function truncateLabel(label: string, maxLength: number) {
  if (label.length <= maxLength) {
    return label
  }

  return `${label.slice(0, maxLength).trimEnd()}...`
}

function getBreadcrumbLinks(pathname: string, contentTitle?: string | null) {
  const segments = pathname.split('/').filter(Boolean)

  if (segments.length === 0) {
    return [{ label: 'home', href: '/' }]
  }

  const firstSegment = segments[0]
  const matched = navigationItems.find(
    (item) => item.href === `/${firstSegment}`,
  )

  const links = [
    {
      label: matched
        ? matched.label.toLowerCase()
        : formatSegment(firstSegment),
      href: `/${firstSegment}`,
    },
  ]

  if (segments.length > 1) {
    const lastSegment = contentTitle
      ? contentTitle.trim()
      : formatSegment(segments[segments.length - 1])
    links.push({
      label: truncateLabel(lastSegment, 15),
      href: `/${segments.join('/')}`,
    })
  }

  return links
}

export function Navigation() {
  const currentRoute = usePathname()
  const [contentTitle, setContentTitle] = useState<string | null>(null)

  useEffect(() => {
    const documentTitle = document.title
    const cleanTitle = documentTitle.split('|')[0].trim()
    setContentTitle(cleanTitle.length > 0 ? cleanTitle : null)
  }, [currentRoute])

  const breadcrumbLinks = getBreadcrumbLinks(currentRoute, contentTitle)

  return (
    <nav className="flex w-full items-center justify-between gap-6">
      <div className="flex items-baseline space-x-2.5">
        <h2>
          <Link href="/" className="">
            mateszkom
          </Link>
        </h2>
        <span className="text-secondary dark:text-secondary">
          {' '}
          {breadcrumbLinks.map((item, index) => (
            <span key={item.href}>
              /{' '}
              <Link className="hover:text-primary" href={item.href}>
                {item.label}
              </Link>
              {index < breadcrumbLinks.length - 1 ? ' ' : ''}
            </span>
          ))}
        </span>
      </div>
      <div className="ml-auto flex flex-nowrap space-x-2 md:space-x-4 lg:space-x-6">
        {navigationItems.map((item) => {
          const isActive =
            item.href === '/'
              ? currentRoute === item.href
              : currentRoute.startsWith(item.href)
          return (
            <Link
              key={item.label}
              href={item.href}
              passHref
              aria-current={isActive ? 'page' : undefined}
            >
              <h4
                className={` ${
                  isActive
                    ? '-translate-y-px transform font-bold text-primary decoration-primary decoration-2 transition-colors duration-300 dark:text-primary'
                    : 'text-secondary dark:text-secondary'
                }`}
              >
                {item.label}
              </h4>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
