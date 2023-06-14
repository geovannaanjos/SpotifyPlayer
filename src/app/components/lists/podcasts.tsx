import Image from 'next/image'
import React from 'react'

export default function podcasts() {
  return (
    <>
        <h2 className='font-semibold font-inter text-xl md:text-xl lg:text-2xl mt-10'>Podcasts</h2>

        <div className='grid grid-cols-4 gap-4 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7 mt-10 '>
        <a href='#' className='bg-black/25 h-72 w-52 p-4 rounded-md flex flex-col gap-2 hover:bg-black/40'>
            <Image src="/Podpower.png" className="w-full rounded-md" width={104} height={104} quality={100} alt="Pod power"/>
            <strong className='font-semibold mt-2'>Pod <i>Power</i></strong>
            <span className='text-sm text-zinc-500 font-normal'>Pod Power</span>
        </a>
        <a href='#' className='bg-black/25 h-auto w-52 p-4 rounded-md flex flex-col gap-2 hover:bg-black/40'>
            <Image src="/Podcartoon.png" className="w-full rounded-md" width={104} height={104} quality={100} alt="Pod cartoon"/>
            <strong className='font-semibold mt-2'>Pod Cartoon</strong>
            <span className='text-sm text-zinc-500 font-normal'> Pod cartoon</span>
        </a>
        <a href='#' className='bg-black/25 h-72 w-52 p-4 rounded-md flex flex-col gap-2 hover:bg-black/40'>
            <Image src="/Podpower.png" className="w-full rounded-md" width={104} height={104} quality={100} alt="Pod power"/>
            <strong className='font-semibold mt-2'>Pod <i>Power</i></strong>
            <span className='text-sm text-zinc-500 font-normal'>Pod power</span>
        </a>
        <a href='#' className='bg-black/25 h-72 w-52 p-4 rounded-md flex flex-col gap-2 hover:bg-black/40'>
            <Image src="/Podcartoon.png" className="w-full rounded-md" width={104} height={104} quality={100} alt="Pod cartoon"/>
            <strong className='font-semibold mt-2'>Pod Cartoon</strong>
            <span className='text-sm text-zinc-500 font-normal'>Pod cartoon</span>
        </a>
        <a href='#' className='bg-black/25 h-72 w-52 p-4 rounded-md flex flex-col gap-2 hover:bg-black/40'>
            <Image src="/Podpower.png" className="w-full rounded-md" width={104} height={104} quality={100} alt="Pod power"/>
            <strong className='font-semibold mt-2'>Pod <i>Power</i></strong>
            <span className='text-sm text-zinc-500 font-normal'>Pod power</span>
        </a>
        <a href='#' className='bg-black/25 h-auto w-52 p-4 rounded-md flex flex-col gap-2 hover:bg-black/40'>
            <Image src="/Podcartoon.png" className="w-full rounded-md" width={104} height={104} quality={100} alt="Pod cartoon"/>
            <strong className='font-semibold mt-2'>Pod cartoon</strong>
            <span className='text-sm text-zinc-500 font-normal'>Pod cartoon</span>
        </a>
        <a href='#' className='bg-black/25 h-72 w-52 p-4 rounded-md flex flex-col gap-2 hover:bg-black/40'>
            <Image src="/Podpower.png" className="w-full rounded-md" width={104} height={104} quality={100} alt="Pod power"/>
            <strong className='font-semibold mt-2'>Pod <i>Power</i></strong>
            <span className='text-sm text-zinc-500 font-normal'>Pod power</span>
        </a>
        </div>
    </>
  )
}
