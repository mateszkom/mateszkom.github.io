import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import profilePicImg from '/public/images/profile-pic.jpg'
const Hero = (): JSX.Element => {
  return (
    <section className="mt-10 grid items-center justify-center  gap-6 sm:grid-cols-2 md:grid-cols-3 ">
      <article className="col-span-2">
        <Image
          src={profilePicImg}
          priority={true}
          alt="Mateusz Skomorucha"
          className="rounded-full"
          width={48}
          height={48}
        />
        <h2>Mateusz Skomorucha</h2>
        <span className="dark:text-muted">I'm a</span>
        <span> Designer</span> <span className="dark:text-muted"> from</span>
        <span> Gdańsk, Poland</span>
        <span className="dark:text-muted"> specialised with digital</span>
        <span className=""> e-commerce products</span>
        <span className="dark:text-muted"> in marketing</span>
        More about me{' '}
        <Link className=" link underline" href="/about">
          here
        </Link>
      </article>
      <aside></aside>
    </section>
  )
}

export default Hero
