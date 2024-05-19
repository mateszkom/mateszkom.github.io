import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import twitterLogoImg from '/public/images/icons/twitterx.svg'
import figmaLogoImg from '/public/images/icons/figma.svg'
import linkedinLogoImg from '/public/images/icons/linkedin.svg'
import githubLogoImg from '/public/images/icons/github.svg'
import dribbbleLogoImg from '/public/images/icons/dribbble.svg'
import behanceLogoImg from '/public/images/icons/behance.svg'
const socialIcons = [
  { label: '@mateszkom', href: 'https://x.com/mateszkom', img: twitterLogoImg },
  {
    label: '@mateszkom',
    href: 'https://figma.com/@mateszkom',
    img: figmaLogoImg,
  },
  {
    label: '/mateszkom',
    href: 'https://linkedin.com/in/mateszkom',
    img: linkedinLogoImg,
  },
  {
    label: '/mateszkom',
    href: 'https://github.com/mateszkom',
    img: githubLogoImg,
  },
  {
    label: '/mateszkom',
    href: 'https://dribbble.com/mateszkom',
    img: dribbbleLogoImg,
  },
  {
    label: '/mateszkom',
    href: 'https://behance.com/mateszkom',
    img: behanceLogoImg,
  },
]

const Bio = (): JSX.Element => {
  return (
    <section className="mt-10 flex flex-col gap-12 sm:grid sm:grid-cols-2">
      <article className="w-full sm:col-span-1">
        <h2>Bio</h2>
        <br />
        <span className="text-secondary dark:text-secondary">
          Hello, I’m Mateusz. Currently, I work as an e-commerce graphic
          designer at the Polish company LPP S.A. My responsibilities include
          creating promotional materials for various online channels, social
          media, as well as designing graphics for websites and mobile
          applications.
        </span>
        <p></p>
        <span className="text-secondary dark:text-secondary">
          I’ve been interested in UX/UI for several years, starting around
          2018-19. I’m creating this website to document my journey in this
          field, showcase my work, and perhaps share some aspects of my personal
          life.
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
              className="ml-2 text-sm hover:text-secondary"
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
