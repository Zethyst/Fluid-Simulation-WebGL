import React, { useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);

function Hero() {

  // let timeline = gsap.timeline();

  useEffect(() => {
    gsap.to("#t1", {opacity: 1, duration: 10 });
  }, []); 


  return (
    <div className='flex flex-col md:flex-row justify-start items-start px-32 py-20 gap-10 md:gap-72 relative pointer-events-none'>
        <div className='flex flex-col justify-center items-center text-2xl w-full md:w-48 gap-4 relative'>
            <span className='gradient-color  capitalize font-semibold text-balance leading-[2.2rem]'>
                Transform your Website
            </span>
            <p  className='capitalize text-[#EEE5FF]'>With Motion Art Effect</p>
        </div>

        <div className='flex flex-col justify-center items-center w-full md:w-96 gap-5 relative text-[#EEE5FF] '>
            <span className='text-5xl md:text-7xl w-[500px] md:w-[650px] text-center md:text-start text-balance font-semibold leading-[5rem] tracking-wide'>Attract Your Visitors Attention With Colorful</span>
            <span id='t1' className='opacity-0 text-5xl md:text-7xl w-[500px] md:w-[650px] text-center md:text-start text-balance font-semibold gradient-color tracking-wide'>Motion Art Effect</span>
            <span className='text-xl w-[500px] md:w-[670px] text-center md:text-start text-gray-400 px-3 py-7'>Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website.</span>
        </div>
    </div>
  )
}

export default Hero