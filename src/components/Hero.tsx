import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import profilePicImg from '/public/images/profile-pic.jpg'
const Hero = (): JSX.Element => {
  return (
    <section className="mt-10 flex  columns-2  items-center justify-center gap-12 sm:grid-cols-2 md:grid-cols-3 ">
      <article className="col-span-2 w-2/3">
        <Image
          src={profilePicImg}
          priority={true}
          alt="Mateusz Skomorucha"
          className="rounded-full"
          width={48}
          height={48}
        />
        <br />
        <h2>Mateusz Skomorucha</h2><br />
        <span className="text-secondary dark:text-secondary">I'm a</span>
        <span> Designer</span>{' '}
        <span className="text-secondary dark:text-secondary"> from</span>
        <span> Gdańsk, Poland</span>
        <span className="text-secondary dark:text-secondary">
          {' '}
          specialised with digital
        </span>
        <span className=""> e-commerce products</span>
        <span className="text-secondary dark:text-secondary">
          {' '}
          in marketing
        </span>
        <p></p>
        <span className="text-secondary dark:text-secondary">Email me -> </span>
        <span className='link'>
          <Link href="mailto:mateszkom@gmail.com">mateszkom@gmail.com</Link>
        </span>
        <br />
        <span className="text-secondary dark:text-secondary">DM me on linkedin -> </span>
        <span className='link'>
          <Link target="_blank" href="https://www.linkedin.com/in/mateszkom/">/in/mateszkom</Link>
        </span>
      </article>{' '}
      <article className="col-span-3 w-1/3">
        <span className="text-secondary dark:text-secondary">
          Currently working in LPP S.A. as a e-commerce graphic designer
        </span>
      </article>
    </section>
  )
}

export default Hero

// Email me -> mateszkom@gmail.com
//DM me on linkedin -> /mateszkom
