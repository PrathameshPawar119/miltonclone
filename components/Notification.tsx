import React from 'react'
import Image, { StaticImageData } from 'next/image'

type Props = {
  message: string,
  person: string,
  img: StaticImageData,
  reverse: boolean
}

export default function Notification({message, person, img, reverse}:Props) {
  return (
    <div className='w-[400px] flex flex-col flex-nowrap text-left relative' >
        <div className={`absolute ${reverse ? 'top-0 left-0': ' top-0 right-0'}`}>
            <div className={`bg-gray-800 text-left p-3 h-fit w-[340px] rounded-tl-lg rounded-tr-lg ${reverse ? 'rounded-bl-lg': 'rounded-br-lg'}`}>
                <p  className='text-white'><b> {message}</b></p>
                <p className='text-gray-300'><b>{person}</b> </p>
            </div>
            <div className={`absolute ${reverse? 'bottom-[-68px] right-[-68px]': 'bottom-[-68px] left-[-68px]'}  `}>
                <Image src={img} width={80} height={80} alt='Character 1' />
            </div>
        </div>
    </div>
  )
}
