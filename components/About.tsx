import React from 'react'
import {motion} from "framer-motion"

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
    initial={{
      opacity: 0
    }}
    whileInView={{
      opacity:1
    }}
    transition={{
      duration: 1.5
    }}
    className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center ">

        <motion.img
        initial={{
          opacity: 0
        }} 
        transition={{
          duration: 1.5,
        }}
        whileInView= {{
          opacity: 1,
        }}
      
        src='https://avatars.githubusercontent.com/u/100591380?v=4' alt='aydin'
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full border-2 border-[#F7AB0A] object-cover md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px]"
        />
        <div className='space-y-5 px-0 md:px-5 text-center items-center '>
        <h1 className="uppercase tracking-[5px] text-gray-300 text-4xl pb-4 text-center md:mb-12">About</h1>
          <p className='text-sm sm:text-base md:text-lg text-gray-300'> Hi! My name is Aydin Aydemir and I am a Computer Science & Industrial Engineering student at Sabanci University. I am passionate about using technology to solve problems and create innovative solutions, and I am excited to begin my career in the field.

During my studies, I have gained a strong foundation in a variety of programming languages and technologies, and I have completed a number of projects that have allowed me to apply my skills in a practical setting.

I am a hardworking and dedicated individual, and I am eager to begin my career and make a positive impact in the tech industry.
          </p>
        </div>
    </motion.div>
  )
}