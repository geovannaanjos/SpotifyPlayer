import Image from 'next/image'
import React from 'react'

export default function artists() {
  return (
    <>
        <h2 className='font-semibold font-inter text-xl md:text-xl lg:text-2xl mt-10'>Artists</h2>

        <div className='grid grid-cols-4 gap-4 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7 mt-10 '>
        <a href='#' className='bg-black/25 h-72 w-52 p-4 rounded-md flex flex-col gap-2 hover:bg-black/40'>
            <Image src="/lab.jpg" className="w-full rounded-full" width={104} height={104} quality={100} alt="Labrinth"/>
            <strong className='font-semibold mt-2'>Labrinth</strong>
            <span className='text-sm text-zinc-500 font-normal'>Artist</span>
        </a>
        <a href='#' className='bg-black/25 h-auto w-52 p-4 rounded-md flex flex-col gap-2 hover:bg-black/40'>
            <Image src="/bruno.jpg" className="w-full rounded-full" width={104} height={104} quality={100} alt="Bruno Mars"/>
            <strong className='font-semibold mt-2'>Bruno Mars</strong>
            <span className='text-sm text-zinc-500 font-normal'> Artist</span>
        </a>
        <a href='#' className='bg-black/25 h-72 w-52 p-4 rounded-md flex flex-col gap-2 hover:bg-black/40'>
            <Image src="/post1.jpg" className="w-full rounded-full" width={104} height={104} quality={100} alt="Post Malone"/>
            <strong className='font-semibold mt-2'>Post Malone</strong>
            <span className='text-sm text-zinc-500 font-normal'>Artist</span>
        </a>
        <a href='#' className='bg-black/25 h-72 w-52 p-4 rounded-md flex flex-col gap-2 hover:bg-black/40'>
            <Image src="/billie.png" className="w-full rounded-full" width={104} height={104} quality={100} alt="Billie Eilish"/>
            <strong className='font-semibold mt-2'>Billie Eilish</strong>
            <span className='text-sm text-zinc-500 font-normal'>Artist</span>
        </a>
        <a href='#' className='bg-black/25 h-auto w-52 p-4 rounded-md flex flex-col gap-2 hover:bg-black/40'>
            <Image src="/bruno.jpg" className="w-full rounded-full" width={104} height={104} quality={100} alt="Bruno Mars"/>
            <strong className='font-semibold mt-2'>Bruno Mars</strong>
            <span className='text-sm text-zinc-500 font-normal'>Artist</span>
        </a>
        <a href='#' className='bg-black/25 h-72 w-52 p-4 rounded-md flex flex-col gap-2 hover:bg-black/40'>
            <Image src="/post1.jpg" className="w-full rounded-full" width={104} height={104} quality={100} alt="Post Malone"/>
            <strong className='font-semibold mt-2'>Post Malone</strong>
            <span className='text-sm text-zinc-500 font-normal'>Artist</span>
        </a>
        <a href='#' className='bg-black/25 h-72 w-52 p-4 rounded-md flex flex-col gap-2 hover:bg-black/40'>
            <Image src="/billie.png" className="w-full rounded-full" width={104} height={104} quality={100} alt="Billie Eilish"/>
            <strong className='font-semibold mt-2'>Billie Eilish</strong>
            <span className='text-sm text-zinc-500 font-normal'>Artist</span>
        </a>
        </div>
    </>
  )
}
