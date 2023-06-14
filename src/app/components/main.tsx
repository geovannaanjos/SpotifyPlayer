'use client'
import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Image from 'next/image';
import Artists from './lists/artists';
import Podcasts from './lists/podcasts';
import MadeFor from './lists/madeFor';
import Footer from './footer'
import Greatings from './greatings'

const Main = () => {
  return (
    <main className="w-auto flex-1 p-6 mt-2 ml-[293px] rounded-md mr-2 bg-neutral-900">

          <h1 className='font-semibold text-xl md:text-xl lg:text-4xl mt-6 mb-14 font-inter'> <Greatings/> </h1>

          <div className='font-semibold grid grid-cols-3 gap-4 mt-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3'>
              <a href='#' className='bg-black/25 group rounded flex items-center gap-4 overflow-hidden hover:bg-black/40 transition-colors'>
                <Image src="/rubel.png" width={104} height={104} quality={100} alt="Rubel - pearl album rubel"/>
                <strong>Rubel</strong>
                <button  className='w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible transition duration-500 group-hover:-translate-y-1 group-hover:visible'>
                  <PlayArrowIcon fontSize='medium'/>
                </button>
              </a>
              <a href='#' className='bg-black/25 group rounded flex items-center gap-4 overflow-hidden hover:bg-black/40 transition-colors'>
                <Image src="/twenty.png" width={104} height={104} quality={100} alt="Bluryface album twenty one pilots"/>
                <strong>Twenty One Pilots</strong>
                <button className='w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible duration-500 group-hover:-translate-y-1 group-hover:visible transition'>
                  <PlayArrowIcon fontSize='medium'/>
                </button>
              </a>
              <a href='#' className='bg-black/25 group rounded flex items-center gap-4 overflow-hidden hover:bg-black/40 transition-colors'>
                <Image src="/wallows.png" width={104} height={104} quality={100} alt="Nothing happens album wallows"/>
                <strong>Wallows</strong>
                <button className='w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible duration-500 group-hover:-translate-y-1 group-hover:visible transition '>
                  <PlayArrowIcon fontSize='medium'/>
                </button>
              </a>
              <a href='#' className='bg-black/25 group rounded flex items-center gap-4 overflow-hidden hover:bg-black/40 transition-colors'>
                <Image src="/billie.png" width={104} height={104} quality={100} alt="Bury a friend album billie eilish"/>
                <strong>Billie Eilish</strong>
                <button className='w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible duration-500 group-hover:-translate-y-1 group-hover:visible transition '>
                  <PlayArrowIcon fontSize='medium'/>
                </button>
              </a>
             
          </div>
          
          <MadeFor/>
          <Podcasts/>
          <Artists/>
          <Footer/>
        </main>
  )
}

export default Main;
