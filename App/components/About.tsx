import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'

type Props = {
  pageInfo: PageInfo
}

function About({pageInfo}: Props) {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-12 justify-evenly mx-auto items-center'>

      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl mx-auto pl-[20px] items-center justify-evenly text-center'>
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        src={urlFor(pageInfo?.profilePic).url()}
        alt=''
        className='-mb-32 md:mb-0 flex-shrink-0 h-52 object-cover rounded-xl md:h-3/5 md:mt-[75px]'
      />
      <motion.div
        initial={{
          opacity: 0
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='space-y-3 md:space-y-10 px-0 md:px-10'
      >

        <h4 className='text-xl md:text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background</h4>

        <p className='text-xs md:text-base'>
          {pageInfo?.backgroundInformation}
        </p>

      </motion.div>

    </div>
  )
}

export default About