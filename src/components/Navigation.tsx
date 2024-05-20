'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const navigationItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/posts' },
]

export function Navigation() {
  const currentRoute = usePathname()

  return (
    <nav className="dark:bg-secondary-dark flex flex-nowrap space-x-4 p-2 md:space-x-6 lg:space-x-8">
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
            className="rounded-3xl"
          >
            <h4
              className={`text-secondary underline decoration-accent underline-offset-8 dark:text-secondary ${isActive ? 'font-bold text-primary decoration-primary decoration-2 transition-colors duration-300 dark:text-primary' : ''}`}
            >
              {item.label}
            </h4>
          </Link>
        )
      })}
    </nav>
  )
}
