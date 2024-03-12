'use client'
import Link from 'next/link'
import HomeIcon from '@heroicons/react/24/outline/HomeIcon'
import AtSymbolIcon from '@heroicons/react/24/outline/AtSymbolIcon'
import DocumentTextIcon from '@heroicons/react/24/outline/DocumentTextIcon'
import IdentificationIcon from '@heroicons/react/24/outline/IdentificationIcon'
import Bars3Icon from '@heroicons/react/24/outline/Bars3Icon'
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon'
import { Popover } from '@headlessui/react'
import { useState } from 'react'
const navigationItems = [
  { label: 'Home', icon: HomeIcon, href: '/' },
  { label: 'About', icon: AtSymbolIcon, href: '/about' },
  { label: 'Projects', icon: IdentificationIcon, href: '/projects' },
  { label: 'Blog', icon: DocumentTextIcon, href: '/posts' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <Popover>
      <nav className="flex flex-wrap">
        <div className="nav-link flex md:hidden">
          <Popover.Button onClick={toggleMenu}>
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </Popover.Button>
          {isOpen && (
            <Popover.Panel focus className="flex md:hidden">
              <div className="justify-left flex items-start">
                <div className="absolute left-0 mt-9 flex w-full flex-col items-start bg-white  transition dark:bg-neutral-800">
                  {navigationItems.map((item) => (
                    <div key={item.label} className="nav-link w-full">
                      <Link
                        href={item.href}
                        className=" flex w-full items-center"
                        onClick={closeMenu}
                      >
                        <item.icon className="mr-2 h-6 w-6" />
                        {item.label}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          )}
        </div>

        <div className="hidden md:flex">
          {navigationItems.map((item) => (
            <Link key={item.label} href={item.href} className="nav-link">
              <div className="flex items-center">
                <item.icon className="mr-2 h-6 w-6" />
                {item.label}
              </div>
            </Link>
          ))}
        </div>
      </nav>
    </Popover>
  )
}
