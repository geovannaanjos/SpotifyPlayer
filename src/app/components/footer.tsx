import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function footer() {
  return (
    <section className='h-auto font-inter rounded-md p-10 mt-10 bg-neutral-900 '>
        
        <div className='flex justify-between'>
            <div className='flex flex-col md:flex-col items-start content-center justify-start p-8'>
              <h1 className='text-lg text-zinc-50 font-semibold m-0 flex-col md:flex-col items-center content-center justify-start'>Geovanna Anjos • Full Stack Dev.</h1>
              <a href="https://geodev-portfolio.vercel.app/" target='_blank' className='font-light mt-2 text-zinc-300 hover:text-zinc-400'>Web Site - Portfólio</a>
              <a href="mailto:geovanna.anjos92@gmail.com" target='_blank' className='font-light text-zinc-300 hover:text-zinc-400'>geovanna.anjos92@gmail.com</a>
            </div>
            
            <div className='flex flex-row md:flex-row items-end content-end justify-end p-8'>
              <a className='m-2 border-white p-2 ' href="https://github.com/geovannaanjos" target='_blank'><GitHubIcon fontSize='large'/></a> 
              <a className='m-2 border-white p-2 ' href="https://instagram.com/ge.anjosssss" target='_blank'><InstagramIcon fontSize='large'/></a>
              <a className='m-2 border-white p-2 ' href="https://www.linkedin.com/in/geovanna-anjos12/" target='_blank'><LinkedInIcon fontSize='large'/></a>
            </div>
        </div>
        <div className='flex flex-row items-end justify-end p-6 mt-10 border-t border-zinc-800'>
          <span className='text-zinc-300 font-thin'>© 2023 Spotify</span>
        </div>
    </section>
  )
}
