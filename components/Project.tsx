import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function Project({}: Props) {
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
    className='h-screen overflow-hidden flex relative flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center'>
       
        <div className="flex justify-center mx-[5vw]">
            <div className="w-full max-w-[1100px]">
                <h1 className="uppercase tracking-[5px] text-gray-300 text-4xl text-center mb-16">Projects</h1>
              

                <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
                    <div className="flex gap-3 p-3">
                        <img
                            className="h-[60px] w-[60px] object-cover"
                            src={'https://cdn-icons-png.flaticon.com/512/1162/1162499.png'}
                            alt=""
                        />
                        <div>
                            <h1 className='text-xl '>{'Advanced E-commerce Website and Mobile App'}</h1>
                            <p className="text-gray-300 my-1 hidden md:block">{'Developed a full-stack e-commerce both web and mobile applications with NodeJS & MongoDB & VueJS & Flutter, participating in backend team. Used Jira for project management.'}</p>
                            <div className="flex gap-[5px]">
                                <div className='grid grid-cols-5 gap-3'>
                                
                                    <img
                                    className="w-[30px] h-[30px]"
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                                    />
                                    <img
                                    className="w-[30px] h-[30px]"
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
                                    />
                                    <img
                                    className="w-[30px] h-[30px]"
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                                    />
                                    <img
                                    className="w-[30px] h-[30px]"
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                                    />
                                    <img
                                    className="w-[30px] h-[30px]"
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"
                                    />
                                </div>
                            </div>
                            
                        </div>
                    </div>


                    <div className="flex gap-3 p-3">
                        <img
                            className="h-[60px] w-[60px] object-cover"
                            src={'https://cdn-icons-png.flaticon.com/512/3409/3409478.png'}
                            alt=""
                        />
                        <div>
                            <h1 className='text-xl '>{'Quiz Game | Socket Programming'}</h1>
                            <p className="text-gray-300 my-1 hidden md:block">{'Implemented a client-server application with a team of 4 people, which is a quiz game to be played among some users. Built both client and server modules with C#. Used GitHub for project management.'}</p>
                            <div className="flex gap-[5px]">
                                <div className='grid grid-cols-5 gap-3'>
                                
                                    <img
                                    className="w-[30px] h-[30px]"
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                                    />
                                    <img
                                    className="w-[30px] h-[30px]"
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                    />
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    

                    <div className="flex gap-3 p-3">
                        <img
                            className="h-[60px] w-[60px] object-cover"
                            src={'https://cdn-icons-png.flaticon.com/512/2758/2758751.png'}
                            alt=""
                        />
                        <div>
                            <h1 className='text-xl '>{'E-commerce Database Project'}</h1>
                            <p className="text-gray-300 my-1 hidden md:block">{'Designed and implemented a relational database management system for an e-commerce website using MySQL & PHP & HTML & CSS'}</p>
                            <div className="flex gap-[5px]">
                                <div className='grid grid-cols-5 gap-3'>
                                
                                    <img
                                    className="w-[30px] h-[30px]"
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                                    />
                                    <img
                                    className="w-[30px] h-[30px]"
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                                    />
                                    <img
                                    className="w-[30px] h-[30px]"
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                                    />
                                    <img
                                    className="w-[30px] h-[30px]"
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                                    />
                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className="flex gap-3 p-3">
                        <img
                            className="h-[60px] w-[60px] object-cover"
                            src={'https://cdn-icons-png.flaticon.com/512/3029/3029373.png'}
                            alt=""
                        />
                        <div>
                            <h1 className='text-xl '>{'Money Transactions Microservice'}</h1>
                            <p className="text-gray-300 my-1 hidden md:block">{'Developed a full-stack money transaction microservice for a banking application. Used Java & Spring Framework for backend, and Java & Android Studio for frontend.'}</p>
                            <div className="flex gap-[5px]">
                                <div className='grid grid-cols-5 gap-3'>
                                
                                    <img
                                    className="w-[30px] h-[30px]"
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                                    />
                                    <img
                                    className="w-[30px] h-[30px]"
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
                                    />
                                    <img
                                    className="w-[30px] h-[30px]"
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg"
                                    />
                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </motion.div>
  )
}