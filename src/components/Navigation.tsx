'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigationItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/posts' },
]

export function Navigation() {
  const currentRoute = usePathname()

  return (
    <nav className=" dark:bg-primary-dark flex flex-wrap rounded-3xl border border-secondary">
      {navigationItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          passHref
          className="mx-6 my-2 rounded-3xl "
        >
          <h4
            className={` rounded-2xl ${
              currentRoute === item.href ? 'font-bold ' : ''
            }`}
          >
            {item.label}
          </h4>
        </Link>
      ))}
    </nav>
  )
}
