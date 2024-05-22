import React, { useEffect } from 'react'
import Page from '../assets/motionarteffect-img10.png'
import Section from '../assets/motionarteffect-img11.png'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);

function Apply() {
    let mm = gsap.matchMedia();
    
    useEffect(() => {
            mm.add("(min-width: 800px)", () => {
            gsap.to("#section", {scrollTrigger:"#section",y: -100, duration: 3 });
            gsap.to("#page", {scrollTrigger:"#page",y: 20, duration: 3 });
        })
        }, []); 
        
  return (
    <div className='flex flex-col justify-center items-center px-8 md:px-32 p-10 gap-14 md:gap-32 pointer-events-none relative'>
        <p className='text-3xl md:text-5xl font-semibold text-[#EEE5FF] text-center leading-10 md:leading-[4.5rem] md:w-[55%]'>Apply On Any Section Or Enable For Whole Page</p>
        <div className='flex flex-col md:flex-row justify-center items-center gap-10 md:gap-7'>
            <div id='section' className='md:-translate-y-0  flex flex-col justify-center items-center gap-7 gradient text-[#EEE5FF] p-10 md:w-[50%] rounded-2xl' style={{border:"1px solid #eee5ff31"}}>
                <p className='capitalize text-3xl self-start font-semibold'>Apply on section</p>
                <p className='text-[#EEE5FFBD] text-xl'>Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. </p>
                <img src={Section}  className='w-full' alt="Section"  />
            </div>
            <div id='page' className='md:-translate-y-10 flex flex-col justify-center items-center gap-7 gradient text-[#EEE5FF] p-10 md:w-[50%] rounded-2xl' style={{border:"1px solid #eee5ff31"}}>
                <p className='capitalize text-3xl self-start font-semibold'>Apply on Page</p>
                <p className='text-[#EEE5FFBD] text-xl'>Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.</p>
                <img src={Page} className='w-full'  alt="Page"  />
            </div>
        </div>
    </div>
  )
}

export default Apply