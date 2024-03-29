import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import { Skill as SkillType } from '../typings';

type Props = {
  skills: SkillType[];
}

function Skills({skills}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className='h-screen flex relative flex-col text-center md:text-left xl:flew-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl pl-[20px]'>Skills</h3>

      <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for current proficiency</h3>

      <div className='grid grid-cols-5 gap-5 pt-[20px] md:pt-[150px] md:grid-cols-7'>
        {skills.map((skill) => {
          return <Skill
            key={skill._id}
            skill={skill}
          />
        })}
      </div>
    </motion.div>
  )
}

export default Skills