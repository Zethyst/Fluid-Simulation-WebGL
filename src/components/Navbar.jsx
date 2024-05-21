import React from 'react'
import Logo from '../assets/MotionArtEffect-logo.png'

function Navbar() {
  return (
    <div className='flex justify-between items-center py-10 px-7 md:px-20 relative'>
        <img src={Logo} alt="Logo" />
        <button className='bg-white rounded-lg p-2 md:p-4 w-40 md:w-56 font-semibold text-lg md:text-xl hover:text-white hover:bg-transparent' style={{border:"2px solid white"}}>Purchase Now</button>
    </div>
  )
}

export default Navbar