import React from 'react'
import { motion } from 'framer-motion'
import Tag from './Tag'
import Image, { StaticImageData } from 'next/image'
import Notification from './Notification'

type Props = {
    reverse: boolean,
    tagline: string,
    headline: string,
    txt: string,
    poster: StaticImageData,
    message: string,
    person: string,
    img: StaticImageData,
    color: string
}


export default function Feature({reverse, tagline, headline, txt, poster, message, person, img, color}: Props) {
  return (
    <div>
        <motion.div
        initial={{opacity:0, y:140}}
        transition={{duration:1}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        className='h-screen flex space-y-0 items-center justify-center overflow-hidden z-0'>
        <div className={ `flex flex-col md:flex-row w-[440px] md:w-[800px] lg:w-[1000px] z-20 ${reverse ? 'flex-col-reverse md:flex-row-reverse':''}`}>

            <div className='md:w-1/2 flex flex-col text-left'>
                <Tag tagline={tagline} color={color} />
                <h1  className=' sm:text-xl  font-extrabold pb-6 space-x-2' style={{fontSize:"38px", lineHeight:"32px"}}>
                    {headline}
                </h1>
                <p className='text-xl text-gray-500 mt-8'>
                    {txt}
                </p>
                <div className='mt-8'>
                    <Notification message={message} person={person} img={img} reverse={reverse}/>
                </div>
            </div>
            <div>
                <Image src={poster} width={600} height={1000} alt='Feature 1' />

            </div>
            
            
        </div>
        </motion.div>
    </div>
  )
}
