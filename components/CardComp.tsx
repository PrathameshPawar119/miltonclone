import React from 'react'
import {Card, CardHeader, CardBody} from "@nextui-org/react";
import { motion } from 'framer-motion'
import Tag from './Tag'
import Image, { StaticImageData } from 'next/image'
import Notification from './Notification'

type Props = {
    tagline: string,
    txt: string,
    poster: StaticImageData,
    color: string
}


export default function CardComp({ tagline, txt, poster, color}: Props) {
  return (
    <div>
        <motion.div
        initial={{opacity:0, y:140}}
        transition={{duration:1}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        className='h-screen flex space-y-0 items-center justify-center overflow-hidden z-0 mx-6 min-w-[240px] max-w-[400px]'>
            <Card className="py-4">
                <CardBody className="overflow-visible py-2 w-full flex items-center">
                    <Image
                    alt="Card background"
                    className="rounded-xl object-contain bg-emerald-100"
                    src={poster}
                    width={270}
                    />
                </CardBody>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <Tag tagline={tagline} color={color}/>
                    <p className="text-[16px] text-default-500 text-left">{txt}</p>
                </CardHeader>
            </Card>
        </motion.div>
    </div>
  )
}

