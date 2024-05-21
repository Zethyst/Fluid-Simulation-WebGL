import React from 'react'
import BrowsersImage from '../assets/motionarteffect-img8.png'

function Browsers() {
  return (
    <div className='flex flex-col justify-center items-center p-20 gap-10 pointer-events-none relative' >
        <div className='flex flex-col justify-center items-center gap-5 w-[95%] gradient rounded-3xl p-14' style={{border:"1px solid #eee5ff31"}}>
        <p className='text-[#EEE5FF] text-3xl'>Supported by All Popular Browsers</p>
        <p className='text-[#EEE5FFBD] text-xl w-[40%] py-1 leading-8 text-center'>Rest assured, Motion Art is designed to be compatible with all major web browsers.</p>
        <img src={BrowsersImage} alt="Browsers"  />
        </div>
    </div>
  )
}

export default Browsers