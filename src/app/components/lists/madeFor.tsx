import Image from 'next/image'
import React from 'react'

export default function madeFor() {
  return (
    <>
        <h2 className='font-semibold font-inter text-xl md:text-xl lg:text-2xl mt-10'>Made for Geovanna dos Santos Anjos</h2>

        <div className='grid grid-cols-4 gap-4 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7 mt-10 '>
        <a href='#' className='bg-black/25 h-72 w-52 p-4 rounded-md flex flex-col gap-2 hover:bg-black/40'>
            <Image src="/ultraje.png" className="w-full rounded-md" width={104} height={104} quality={100} alt="Daily Mix 1"/>
            <strong className='font-semibold mt-2'>Daily Mix 1</strong>
            <span className='text-sm text-zinc-500 font-normal'>Ultraje a rigor, Paralamas do sucesso, Titãs </span>
        </a>
        <a href='#' className='bg-black/25 h-72 w-52 p-4 rounded-md flex flex-col gap-2 hover:bg-black/40'>
            <Image src="/brunomar.webp" className="w-full rounded-md" width={104} height={104} quality={100} alt="Daily Mix 2"/>
            <strong className='font-semibold mt-2'>Daily Mix 2</strong>
            <span className='text-sm text-zinc-500 font-normal'> Bruno Mars, Gorillaz, Wallows</span>
        </a>
        <a href='#' className='bg-black/25 h-72 w-52 p-4 rounded-md flex flex-col gap-2 hover:bg-black/40'>
            <Image src="/billie.png" className="w-full rounded-md" width={104} height={104} quality={100} alt="Daily Mix 3"/>
            <strong className='font-semibold mt-2'>Daily Mix 3</strong>
            <span className='text-sm text-zinc-500 font-normal'>Billie Eilish, Aurora, Labrinth</span>
        </a>
        <a href='#' className='bg-black/25 h-72 w-52 p-4 rounded-md flex flex-col gap-2 hover:bg-black/40'>
            <Image src="/twenty.png" className="w-full rounded-md" width={104} height={104} quality={100} alt="Daily Mix 4"/>
            <strong className='font-semibold mt-2'>Daily Mix 4</strong>
            <span className='text-sm text-zinc-500 font-normal'>Twenty One Pilots, Tame Impala, 21 Pillz</span>
        </a>
        <a href='#' className='bg-black/25 h-72 w-52 p-4 rounded-md flex flex-col gap-2 hover:bg-black/40'>
            <Image src="/rubel.png" className="w-full rounded-md" width={104} height={104} quality={100} alt="Daily Mix 5"/>
            <strong className='font-semibold mt-2'>Daily Mix 5</strong>
            <span className='text-sm text-zinc-500 font-normal'>Rubel, Anavitoria, Lagum</span>
        </a>
        <a href='#' className='bg-black/25 h-auto w-52 p-4 rounded-md flex flex-col gap-2 hover:bg-black/40'>
            <Image src="/wallows.png" className="w-full rounded-md" width={104} height={104} quality={100} alt="Daily Mix 6"/>
            <strong className='font-semibold mt-2'>Daily Mix 6</strong>
            <span className='text-sm text-zinc-500 font-normal'> Wallows, Gorillaz, Blur</span>
        </a>
        <a href='#' className='bg-black/25 h-72 w-52 p-4 rounded-md flex flex-col gap-2 hover:bg-black/40'>
            <Image src="/billie.png" className="w-full rounded-md" width={104} height={104} quality={100} alt="Daily Mix 7"/>
            <strong className='font-semibold mt-2'>Daily Mix 7</strong>
            <span className='text-sm text-zinc-500 font-normal'>Billie Eilish, Aurora, Labrinth</span>
        </a>
        </div>
    </>
  )
}
