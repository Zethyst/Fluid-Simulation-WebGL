import React, { useEffect } from 'react'
import Flash from '../assets/motionarteffect-img9.png'
import Thumb from '../assets/motionarteffect-img6.png'
import Moon from '../assets/motionarteffect-img7.png'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);



function Plugin() {

    let mm = gsap.matchMedia();
    
    useEffect(() => {
            mm.add("(min-width: 800px)", () => {
            gsap.to("#flash", {scrollTrigger:{trigger:"#flash"},x: 0, duration:3.4 });
            gsap.to("#thumb", {scrollTrigger:{trigger:"#thumb"},scale: 1, duration:3.4 });
            gsap.to("#moon", {scrollTrigger:{trigger:"#moon"},x: 0, duration:3.4 });
        })
        }, []); 

  return (
    <div className='flex flex-col justify-center items-center  md:px-32 p-16 gap-5 pointer-events-none relative'>
            <p className='text-3xl md:text-5xl font-medium text-[#EEE5FF] text-center leading-10 md:leading-[5rem] md:w-[55%] sora'>An All-Round Plugin With Powerful Features</p>
            <p className='text-[#EEE5FFBD] text-lg md:w-[50%] text-center sora'>Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</p>
            <div className='flex flex-col md:flex-row justify-center items-center gap-7 py-10'>
                <div id='flash' className='md:-translate-x-96 flex flex-col justify-center items-start px-9 w-[450px] h-[400px] rounded-3xl gap-5 gradient' style={{border:"1px solid #eee5ff31"}}>
                    <img src={Flash} alt="Flash" className='-translate-x-10' />
                    <p className='text-[#EEE5FF] text-3xl sora font-medium'>Light Weight</p>
                    <p className='text-[#EEE5FFBD] text-xl w-full leading-8 outfit'>Motion Art for Elementor is designed to be lightweight.</p>
                </div>
                <div id='thumb' className='md:scale-150 flex flex-col justify-center items-start px-9 w-[450px] h-[400px] rounded-3xl gap-5 gradient' style={{border:"1px solid #eee5ff31"}}>
                    <img src={Thumb} alt="Thumbs Up" className='-translate-x-10' />
                    <p className='text-[#EEE5FF] text-3xl sora font-medium'>100% Responsive</p>
                    <p className='text-[#EEE5FFBD] text-xl w-full leading-8 outfit'>Create a consistent visual experience across all devices.</p>
                </div>
                <div id='moon' className='md:translate-x-96 flex flex-col justify-center items-start px-9 w-[450px] h-[400px] rounded-3xl gap-5 gradient' style={{border:"1px solid #eee5ff31"}}>
                    <img src={Moon} alt="Crescent" className='-translate-x-10' />
                    <p className='text-[#EEE5FF] text-3xl capitalize sora font-medium'>User friendly interface</p>
                    <p className='text-[#EEE5FFBD] text-xl w-full leading-8 outfit'>Ensure a smooth experience for both applicants and administrators.</p>
                </div>
            </div>
    </div>
  )
}

export default Plugin