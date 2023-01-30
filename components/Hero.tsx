import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Cursor, useTypewriter, Typewriter } from 'react-simple-typewriter'
import { motion } from "framer-motion";
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';



type Props = {}

export default function Hero({}: Props) {


  return (
    <div>
        
    <div className= "h-screen flex flex-col space-y-14 items-center justify-center text-center overflow-hidden">
    
        <BackgroundCircles/>
        <div>
        <motion.div 
        initial={{
            x: 0,
            opacity: 0,
            scale: 0.1,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 1.5,
        }}>
            <h1 className="uppercase text-5xl lg:text-6xl font-semibold px-10 text-gray-100">
               Aydın Aydemir
            </h1>
            <h2 className="text-base uppercase text-gray-400 tracking-[8px]">Software Engineer</h2>
            <Link href="#about">
                <button className="heroButton">About</button>
                </Link>
                <Link href="#experience">
                <button className="heroButton">Experience</button>
                </Link>
                <Link href="#skills">
                <button className="heroButton">Skills</button>
                </Link>
                <Link href="#projects"> 
                <button className="heroButton">Projects</button>
                </Link>

        </motion.div>
  
        
   
        </div>
    </div>

    </div>
  )
}