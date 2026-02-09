import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className="mt-10 flex flex-col items-end gap-12 sm:grid sm:grid-cols-3">
      <article className="w-full sm:col-span-2">
        <Image
          src="/images/profile-pic.jpg"
          priority={true}
          alt="Mateusz Skomorucha"
          className="rounded-full"
          width={48}
          height={48}
        />
        <br />
        <h2>Mateusz Skomorucha</h2>
        <br />
        <span>Designer</span>
        <span className="text-secondary dark:text-secondary">
          {' '}
          from Poland, obsessed with
        </span>
        <span> optimisation</span>{' '}
        <span className="text-secondary dark:text-secondary">and</span>
        <span> automation</span>
        <span className="text-secondary dark:text-secondary">
          , crafting digital
        </span>
        <span> experiences</span>
        <span className="text-secondary dark:text-secondary">
          {' '}
          that look sharp
        </span>{' '}
        <span className="text-secondary dark:text-secondary">and</span>
        <span> work even better.</span>
        <p></p>
        <span className="text-secondary dark:text-secondary">
          Email me {'->'}{' '}
        </span>
        <span className="link">
          <Link href="mailto:mateszkom@gmail.com">mateszkom@gmail.com</Link>
        </span>
        <br />
        <span className="text-secondary dark:text-secondary">
          DM me on LinkedIn -{'>'}{' '}
        </span>
        <span className="link">
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/mateszkom/"
          >
            /in/mateszkom
          </Link>
        </span>
      </article>
      <article className="w-full sm:col-span-1">
        <span className="text-secondary dark:text-secondary">
          Currently working in LPP S.A. as an senior graphic designer
        </span>
        <br />
        <br />
        <span>
          Looking for new challenges, if you want to try my service just contact
          me.
        </span>
      </article>
    </section>
  )
}

export default Hero
