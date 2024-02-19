'use client'
import Link from 'next/link'
import HomeIcon from '@heroicons/react/24/outline/HomeIcon'
import AtSymbolIcon from '@heroicons/react/24/outline/AtSymbolIcon'
import DocumentTextIcon from '@heroicons/react/24/outline/DocumentTextIcon'
import IdentificationIcon from '@heroicons/react/24/outline/IdentificationIcon'
import Bars3Icon from '@heroicons/react/24/outline/Bars3Icon'
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon'
import { Popover } from '@headlessui/react'
const navigationHome = [{ label: 'Home', icon: HomeIcon, href: '/' }]
const navigationItems = [
  { label: 'About', icon: AtSymbolIcon, href: '/about' },
  { label: 'Projects', icon: IdentificationIcon, href: '/projects' },
  { label: 'Blog', icon: DocumentTextIcon, href: '/posts' },
]

export function Navigation() {
  return (
    <Popover>
      <nav className="flex flex-wrap">
        <div className="nav-link flex md:hidden">
          <Popover.Button>
            <Bars3Icon className="h-6 w-6" />
          </Popover.Button>
          <Popover.Panel focus className="absolute  transform   md:hidden">
            <div className="justify-left flex items-start">
              <div className="nav-link2">
                <Popover.Button>
                  <XMarkIcon className="h-6 w-6" />
                </Popover.Button>
              </div>
              <div className="absolute mt-9 flex  flex-col items-center justify-between bg-white pt-10 transition dark:bg-neutral-800">
                {navigationItems.map((item) => (
                  <div key={item.label} className="nav-link">
                    <Link href={item.href} className="flex items-center">
                      <item.icon className="mr-2 h-6 w-6" />
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </Popover.Panel>
        </div>
        <div>
          {navigationHome.map((item) => (
            <div key={item.label} className="nav-link">
              <Link href={item.href} className="flex items-center">
                <item.icon className="mr-2 h-6 w-6" />
                {item.label}
              </Link>
            </div>
          ))}
        </div>
        <div className="hidden sm:flex">
          {navigationItems.map((item) => (
            <div key={item.label} className="nav-link">
              <Link href={item.href} className="flex items-center">
                <item.icon className="mr-2 h-6 w-6" />
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      </nav>
    </Popover>
  )
}
