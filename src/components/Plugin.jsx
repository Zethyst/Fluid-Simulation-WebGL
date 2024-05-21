import React from 'react'
import Flash from '../assets/motionarteffect-img9.png'
import Thumb from '../assets/motionarteffect-img6.png'
import Moon from '../assets/motionarteffect-img7.png'

function Plugin() {
  return (
    <div className='flex flex-col justify-center items-center px-32 pb-10 gap-5 pointer-events-none relative'>
            <p className='text-5xl font-semibold text-[#EEE5FF] text-center leading-[4.5rem] w-[55%] sora'>An All-Round Plugin With Powerful Features</p>
            <p className='text-[#EEE5FFBD] text-lg w-[50%] text-center sora'>Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</p>
            <div className='flex justify-center items-center gap-5 py-10'>
                <div className='flex flex-col justify-center items-start px-9 w-[450px] h-[400px] rounded-3xl gap-5 gradient' style={{border:"1px solid #eee5ff31"}}>
                    <img src={Flash} alt="Flash" className='-translate-x-10' />
                    <p className='text-[#EEE5FF] text-3xl sora font-medium'>Light Weight</p>
                    <p className='text-[#EEE5FFBD] text-xl w-full leading-8 outfit'>Motion Art for Elementor is designed to be lightweight.</p>
                </div>
                <div className='flex flex-col justify-center items-start px-9 w-[450px] h-[400px] rounded-3xl gap-5 gradient' style={{border:"1px solid #eee5ff31"}}>
                    <img src={Thumb} alt="Thumbs Up" className='-translate-x-10' />
                    <p className='text-[#EEE5FF] text-3xl sora font-medium'>100% Responsive</p>
                    <p className='text-[#EEE5FFBD] text-xl w-full leading-8 outfit'>Create a consistent visual experience across all devices.</p>
                </div>
                <div className='flex flex-col justify-center items-start px-9 w-[450px] h-[400px] rounded-3xl gap-5 gradient' style={{border:"1px solid #eee5ff31"}}>
                    <img src={Moon} alt="Crescent" className='-translate-x-10' />
                    <p className='text-[#EEE5FF] text-3xl capitalize sora font-medium'>User friendly interface</p>
                    <p className='text-[#EEE5FFBD] text-xl w-full leading-8 outfit'>Ensure a smooth experience for both applicants and administrators.</p>
                </div>
            </div>
    </div>
  )
}

export default Plugin