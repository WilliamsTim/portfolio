/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCirles'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'

type Props = {
  pageInfo: PageInfo
};

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
            `Hi, My Name's ${pageInfo?.name}`,
            "Guy-who-loves-tacos.tsx",
            "<ButLovesToCodeMore />",
          ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className='h-screen flex flex-col space-y-7 items-center justify-center text-center overflow-hidden md:pt-[150px]'>
      <BackgroundCircles />
      <img
      className='relative h-40 w-40 rounded-full mx-auto object-fit'
      src={urlFor(pageInfo?.heroImage).url()}
      alt=''
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>{pageInfo?.role}</h2>
        <h1 className='text-lg md:text-4xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#F7AB0A'/>
        </h1>
        <div className='pt-5'>
          <Link href='#about'>
          <button className='heroButton'>About</button>
          </Link>
          {/* <Link href='#experience'>
          <button className='heroButton'>Experience</button>
          </Link> */}
          <Link href='#skills'>
          <button className='heroButton'>Skills</button>
          </Link>
          <Link href='#projects'>
          <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero