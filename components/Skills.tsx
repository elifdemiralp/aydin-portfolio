import { motion } from 'framer-motion'
import React from 'react'
import Skill from './Skill';

type Props = {}


export default function Skills({}: Props) {
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
     className=' h-center flex relative flex-col text-center  max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>

<h1 className="uppercase tracking-[5px] text-gray-300 text-4xl text-center mb-12">Skills</h1>

        <p className='description text-xl text-center  mx-11 md:mx-38 lg:mx-52 xl:mx-72 text-gray-200'>
       A list of some of the programming languages and technologies that I have learned during my studies and have experience with:</p>
    
        <div className="grid justify-center grid-cols-3 sm:grid-cols-4 gap-8 md:gap-10 md:grid-cols-6 gap-y-[10px] md:gap-y-[20px] pt-16">

        <Skill srcTitle='Python' srcImg='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'/>
            <Skill srcTitle='C++' srcImg='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'/>
            
            <Skill srcTitle='C#' srcImg='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg'/>
            <Skill srcTitle='Java' srcImg='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'/>
            
            <Skill srcTitle='MySQL' srcImg='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'/>
            <Skill srcTitle='HTML' srcImg='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'/>
            
            <Skill srcTitle='PHP' srcImg='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'/>
            <Skill srcTitle='JavaScript' srcImg='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'/>
            <Skill srcTitle='NodeJS' srcImg='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg'/>
            <Skill srcTitle='Spring' srcImg='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg'/>
            <Skill srcTitle='MongoDB' srcImg='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'/>
            <Skill srcTitle='Docker' srcImg='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'/>

        </div>

    </motion.div>



  )
}
