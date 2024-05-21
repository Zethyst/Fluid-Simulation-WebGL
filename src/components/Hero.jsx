import React from 'react'

function Hero() {
  return (
    <div className='flex justify-start items-start px-32 py-20 gap-72 relative pointer-events-none'>
        <div className='flex flex-col justify-center items-center text-2xl w-48 gap-4 relative'>
            <span className='gradient-color capitalize font-semibold text-balance leading-[2.2rem]'>
                Transform your Website
            </span>
            <p className='capitalize text-[#EEE5FF]'>With Motion Art Effect</p>
        </div>

        <div className='flex flex-col justify-center items-center  w-96 gap-5 relative text-[#EEE5FF] '>
            <span className='text-7xl w-[650px] text-balance font-semibold leading-[5rem] tracking-wide'>Attract Your Visitors Attention With Colorful</span>
            <span className='text-7xl w-[650px] text-balance font-semibold gradient-color tracking-wide'>Motion Art Effect</span>
            <span className='text-xl w-[670px] text-gray-400 px-3 py-7'>Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website.</span>
        </div>
    </div>
  )
}

export default Hero