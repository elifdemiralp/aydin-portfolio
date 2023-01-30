import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function Experience({}: Props) {
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
                <h1 className="uppercase tracking-[5px] text-gray-300 text-4xl text-center mb-16">Experience</h1>
              

                <div className="grid gap-1">
                    <div className="flex gap-3 p-3">
                        <img
                            className="h-[20px] w-[20px] object-cover mt-1"
                            src={'https://cdn-icons-png.flaticon.com/512/556/556670.png'}
                            alt=""
                        />
                        <div>
                            <h1 className='text-xl '>{'Learning Asistant on Introduction to Computing | Sabanci University'}</h1>
                            
                        </div>
                    </div>


                    <div className="flex gap-3 p-3">
                        <img
                            className="h-[20px] w-[20px] object-cover mt-1" 
                            src={'https://cdn-icons-png.flaticon.com/512/556/556670.png'}
                            alt=""
                        />
                        <div>
                            <h1 className='text-xl '>{'Learning Asistant on Introduction to Industrial Engineering | Sabanci University'}</h1>
                            
                        </div>
                    </div>
                    <div className="flex gap-3 p-3">
                        <img
                            className="h-[20px] w-[20px] object-cover mt-1"
                            src={'https://cdn-icons-png.flaticon.com/512/556/556670.png'}
                            alt=""
                        />
                        <div>
                            <h1 className='text-xl '>{'Summer High School Assistant | Sabanci University'}</h1>
                            
                        </div>
                    </div>
                    <div className="flex gap-3 p-3">
                        <img
                            className="h-[20px] w-[20px] object-cover mt-1"
                            src={'https://cdn-icons-png.flaticon.com/512/556/556670.png'}
                            alt=""
                        />
                        <div>
                            <h1 className='text-xl '>{'Supervisor at Civic Involvement Projects | Sabanci University'}</h1>
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </motion.div>
  )
}