'use client';
import Image from 'next/image';
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

export default function Aside() {

  return (
    <aside className="font-inter fixed h-full md:h-full 2xl:h:full top-0 left-0 bottom-0 w-72 bg-neutral-950 p-6">
        <div className="duration-300 flex items-center justify-between">
            <div className='flex items-center justify-items-center'>
              <Image width={44} height={44} src="/spoLogo.png" alt='logo' className={`cursor-pointer duration-500`}/>
              <span className='ml-2 font-bold text-2xl'>Spotify</span>
            </div>
        </div>

        <nav className='space-y-5 mt-8 cursor-pointer'>
            <div className='flex items-center gap-3'>
              <HomeIcon fontSize='medium'/>
              <span className='font-semibold text-zinc-300 text-sm'>Home</span>
            </div>

            <div className='flex items-center gap-3'>
              <SearchIcon fontSize='medium'/>
              <span className='font-semibold text-zinc-300 text-sm'>Search</span>
            </div>
            
            <div className='flex items-center gap-3'>
              <LibraryMusicIcon fontSize='medium'/>
              <span className='font-semibold text-zinc-300 text-sm'>Your Library</span>
            </div>
        </nav>

        <nav className='mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-3 cursor-pointer'>
          <span className='text-sm font-normal text-zinc-400 hover:text-zinc-100'> Twenty One Pilots</span>
          <span className='text-sm font-normal text-zinc-400 hover:text-zinc-100'> Brasil sil sil sil </span>
          <span className='text-sm font-normal text-zinc-400 hover:text-zinc-100'> Minha Supermix </span>
          <span className='text-sm font-normal text-zinc-400 hover:text-zinc-100'> Old musics </span>
        </nav>
    </aside>
  )
}

