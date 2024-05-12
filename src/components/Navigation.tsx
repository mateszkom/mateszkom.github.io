'use client'
import Link from 'next/link'
const navigationItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/posts' },
]

export function Navigation() {
  return (
    <nav className=" dark:bg-primary-dark flex flex-wrap rounded-3xl border border-secondary">
      {navigationItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="mx-6 my-2 rounded-3xl "
        >
          <h4 className="flex items-center">{item.label}</h4>
        </Link>
      ))}
    </nav>
  )
}
