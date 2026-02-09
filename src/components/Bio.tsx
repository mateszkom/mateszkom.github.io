import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const socialIcons = [
  {
    label: '@mateszkom',
    href: 'https://x.com/mateszkom',
    img: '/images/icons/twitterx.svg',
  },
  {
    label: '@mateszkom',
    href: 'https://figma.com/@mateszkom',
    img: '/images/icons/figma.svg',
  },
  {
    label: '/mateszkom',
    href: 'https://linkedin.com/in/mateszkom',
    img: '/images/icons/linkedin.svg',
  },
  {
    label: '/mateszkom',
    href: 'https://github.com/mateszkom',
    img: '/images/icons/github.svg',
  },
  {
    label: '/mateszkom',
    href: 'https://dribbble.com/mateszkom',
    img: '/images/icons/dribbble.svg',
  },
  {
    label: '/mateszkom',
    href: 'https://behance.com/mateszkom',
    img: '/images/icons/behance.svg',
  },
]

const Bio = () => {
  return (
    <section className="mt-10 flex flex-col gap-12 sm:grid sm:grid-cols-3">
      <article className="w-full sm:col-span-2">
        <h2>Bio</h2>
        <br />
        <span className="text-secondary dark:text-secondary">
          Hello, I’m Mateusz. I’m a Senior Digital Designer at LPP S.A.,
          creating visual assets for e‑commerce, social media, websites and
          mobile apps — always with a focus on clarity, consistency and
          efficient workflows
        </span>
        <p></p>
        <span className="text-secondary dark:text-secondary">
          For a couple of years I’ve been diving into UX/UI, automation, RPA and
          AI‑driven processes, exploring how smart systems can elevate design
          and streamline the way digital products are built. This website is
          where I document that journey and share what I learn along the way.
        </span>
      </article>
      <article className="w-full sm:col-span-1">
        <h2>Find me</h2>
        <br />
        {socialIcons.map((item) => (
          <div key={item.href} className="flex items-center py-1">
            <Image
              src={item.img}
              priority={true}
              alt={item.href}
              width={24}
              height={24}
            />
            <Link
              target="_blank"
              className="ml-2 hover:text-secondary"
              href={item.href}
            >
              {item.label}
            </Link>
          </div>
        ))}
      </article>
    </section>
  )
}

export default Bio
