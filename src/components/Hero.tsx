import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import heroImg from '/public/images/hero.svg'
const Hero = (): JSX.Element => {
  return (
    <section className="mt-10 grid items-center justify-center  gap-6 sm:grid-cols-2 md:grid-cols-3">
      <article className="col-span-2 ">
        <h1>Hi, I’m Matt!</h1>
        <p>Welcome in my page.</p>
        <p>
          I am a graphic designer based in Gdańsk, Poland. I currently work for
          LPP S.A and work on graphic assets for paid ads along with organic
          stuff for webpage and an app.
        </p>
      </article>
      <aside>
        <Image src={heroImg} priority={true} alt="My image" />
      </aside>
    </section>
  )
}

export default Hero
