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

function getMobileBreadcrumbLinks(pathname: string) {
  const segments = pathname.split('/').filter(Boolean)

  if (segments.length === 0) {
    return [{ label: 'home', href: '/' }]
  }

  const firstSegment = segments[0]
  const matched = navigationItems.find(
    (item) => item.href === `/${firstSegment}`,
  )

  return [
    {
      label: matched
        ? matched.label.toLowerCase()
        : formatSegment(firstSegment),
      href: `/${firstSegment}`,
    },
  ]
}

export function Navigation() {
  const currentRoute = usePathname()
  const [contentTitle, setContentTitle] = useState<string | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const updateTitle = () => {
      const documentTitle = document.title
      const cleanTitle = documentTitle.split('|')[0].trim()
      setContentTitle(cleanTitle.length > 0 ? cleanTitle : null)
    }

    updateTitle()

    const titleElement = document.querySelector('title')
    if (!titleElement) {
      return
    }

    const observer = new MutationObserver(updateTitle)
    observer.observe(titleElement, { childList: true })

    return () => observer.disconnect()
  }, [currentRoute])

  const breadcrumbLinks = getBreadcrumbLinks(currentRoute, contentTitle)
  const mobileBreadcrumbLinks = getMobileBreadcrumbLinks(currentRoute)

  return (
    <nav className="w-full">
      <div className="flex w-full items-center justify-between gap-6">
        <div className="flex items-baseline space-x-2.5">
          <h2>
            <Link href="/" className="">
              mateszkom
            </Link>
          </h2>
          <span className="text-secondary dark:text-secondary md:hidden">
            {mobileBreadcrumbLinks.map((item) => (
              <span key={item.href}>
                /{' '}
                <Link className="hover:text-primary" href={item.href}>
                  {item.label}
                </Link>
              </span>
            ))}
          </span>
          <span className="hidden text-secondary dark:text-secondary md:inline">
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
        <div className="ml-auto hidden flex-nowrap space-x-2 md:flex md:space-x-4 lg:space-x-6">
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
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-secondary/40 text-secondary transition hover:border-secondary hover:text-primary md:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition duration-300 ${
                isMenuOpen ? 'translate-y-1.5 rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-5 rounded-full bg-current transition duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-3 h-0.5 w-5 rounded-full bg-current transition duration-300 ${
                isMenuOpen ? '-translate-y-1.5 -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </div>
      <div
        id="mobile-menu"
        className={`md:hidden ${
          isMenuOpen ? 'mt-4 max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden rounded-2xl border border-secondary/30 bg-muted/40 p-4 transition-all duration-300`}
      >
        <div className="flex flex-col space-y-3">
          {navigationItems.map((item) => {
            const isActive =
              item.href === '/'
                ? currentRoute === item.href
                : currentRoute.startsWith(item.href)
            return (
              <Link
                key={item.label}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={`rounded-xl px-4 py-2 text-base transition ${
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-secondary hover:bg-muted/70 hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
