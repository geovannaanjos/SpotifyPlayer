'use client';
import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import FastForwardIcon from '@mui/icons-material/FastForward';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

const sound = {
  title: "Leave The Door Open",
  singer: "Bruno Mars",
  music: "leaveOpen.mp3",
  type: "mp3",
  image: "/brunomar.webp"
}


export default function Player() {
  const [play, setPlay] = useState(false);
  const [duration, setDuration] = useState(0);
  const [inicioMus, setInicioMus] = useState<number>(0);
  const [volume, setVolume] = useState(10);
  const [volumeIcon, setVolumeIcon] = useState(<VolumeUpIcon fontSize='medium' />);

  const Volmax = 10;

  {/*Ref's*/}
  const playerRef = useRef<HTMLAudioElement>(null);
  const progressBar = useRef<HTMLInputElement>(null);

  {/*UseEffect*/}
  useEffect(() => {
    const seconds = Math.floor(playerRef.current?.duration ?? 0);
    setDuration(seconds);
    progressBar.current!.max = seconds.toString();

    const handleTimeUpdate = () => {
      const currentTime = Math.floor(playerRef.current?.currentTime ?? 0);
      setInicioMus(currentTime);
      progressBar.current!.value = currentTime.toString();
    };
  
    playerRef.current?.addEventListener('timeupdate', handleTimeUpdate);
  
    return () => {
      playerRef.current?.removeEventListener('timeupdate', handleTimeUpdate);
    };


  }, [playerRef?.current?.onloadedmetadata, playerRef?.current?.readyState]);
  
  {/*Tempo*/}
  const tempo = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const returnMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnMinutes} : ${returnSeconds}`;
  }

  function changeRange(e: React.ChangeEvent<HTMLInputElement>): void {
    const value = Number(e.target.value);
    setInicioMus(value);
    playerRef.current!.currentTime = value;
  }

  {/*Play e Pause*/}
  function toggleAudio(): void{
    if(play){
      playerRef.current?.pause();
      setPlay(false);
    }else{
      void playerRef.current?.play();
      setPlay(true);
      setInicioMus(playerRef.current!.currentTime);
    }
  }

  {/*Volume*/}
  function handleVolume(e: React.ChangeEvent<HTMLInputElement>): void{
    const {value} = e.target;
    const aumentoVolume = Number(value);

    setVolume(aumentoVolume);

    if (aumentoVolume === 0) {
      setVolumeIcon(<VolumeOffIcon fontSize='medium' />);
    } else if (aumentoVolume < 5) {
      setVolumeIcon(<VolumeDownIcon fontSize='medium' />);
    } else {
      setVolumeIcon(<VolumeUpIcon fontSize='medium' />);
    }

    const volumeValue = aumentoVolume / Volmax;
    playerRef.current!.volume = volumeValue;
  }

  {/*BackLittle*/}
  function backLittle (){
    const newValue = Number(progressBar.current!.value) - 30;
    progressBar.current!.value = String(newValue);
    playerRef.current!.currentTime = newValue;
  }
  
  {/*SkipLittle*/}
  function skipLittle (){
    const newValue = Number(progressBar.current!.value) + 30;
    progressBar.current!.value = String(newValue);
    playerRef.current!.currentTime = newValue;
  }
  

  return (
    <section className='font-inter overflow-x-hidden pl-4 fixed h-28 bottom-0 w-full bg-neutral-900 border-t border-neutral-800 px-0 py-0 flex justify-between items-center'>
        <div className='flex items-center gap-3'>
          <Image src={sound.image} className='w-auto' width={58} height={58} quality={100} alt="música do player atual"/>
          <div className='flex flex-col'>
            <strong className='font-semibold'>{sound.title}</strong>
            <span className='text-xs text-zinc-400 font-normal'>{sound.singer}</span>
          </div>
        </div>
        <div className='flex flex-col items-center gap-2'>
          {/*Player início*/}
            <div  className='flex items-center gap-6'>
              <ShuffleIcon fontSize='medium' className='text-zinc-500'/>

              <button onClick={backLittle} className='w-10 h-10 border-none cursor-pointer flex items-center justify-center'>
                <FastRewindIcon fontSize='medium'/>
              </button>
              
              <button onClick={toggleAudio} className='w-10 h-10 border-none cursor-pointer flex items-center justify-center rounded-full bg-white text-black '>
                {!play ? (
                  <PlayArrowIcon fontSize='medium'/>
                ): (
                  <PauseIcon fontSize='medium'/>
                )}
              </button>
                  
              <button onClick={skipLittle} className='w-10 h-10 border-none cursor-pointer flex items-center justify-center'>
                <FastForwardIcon fontSize='medium'/>
              </button>

              <RepeatIcon fontSize='medium' className='text-zinc-500'/>
            </div>
          {/*Player fim*/}
          {/* progress bar inicio*/}
            <div className='flex items-center gap-2 mt-1'>
              <span className='text-xs text-zinc-400 font-normal'>{tempo(inicioMus)}</span>
              <div className='flex justify-center center'>
                <input type='range' className='bg-zinc-200 accent-green-500 w-96 h-[6px] rounded-full [&::before-width]:w-0' defaultValue="0" ref={progressBar} onInput={changeRange}/>
              </div>
              <span className='text-xs text-zinc-400 font-normal'>{(duration && !isNaN(duration)) && tempo(duration)}</span>
            </div>
          {/* progress bar fim */}
        </div>
        {/* volume inicio */}
        <div className='flex items-end justify-end mr-6 gap-2'>
          <div className='flex items-center gap-2'>
            {volumeIcon}
            <div className='flex mr-6 justify-center center'>
              <input type='range' className='bg-zinc-200 accent-green-500 w-20 h-1 rounded-full' min={0} max={Volmax} onChange={(e) => handleVolume(e)}/>
            </div>
          </div>
          <div className='text-zinc-500'>
            <OpenInFullIcon fontSize='medium'/>
          </div>
          <audio ref={playerRef} loop src={'./leaveOpen.mp3'}/>
        </div>
        {/* volume fim */}
      </section>
  )
}
