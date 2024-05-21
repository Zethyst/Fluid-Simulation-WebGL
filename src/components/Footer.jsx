import React from 'react'

function Footer() {
  return (
    <div className='text-[#EEE5FFBD] p-4 flex justify-around items-center relative' style={{background:"linear-gradient(90deg, #F87516 0%, #5E11FF 100%)"}}>
        <p className='mr-48 outfit'>© 2023 Copywrite. All rights reserved by QodeMatrix</p>
        <div className='flex justify-center items-center gap-5 pl-96'>
            <p className='cursor-pointer hover:text-[#EEE5FF] outfit'>Documentation</p>
            <p className='cursor-pointer hover:text-[#EEE5FF] outfit'>Support</p>
        </div>
    </div>
  )
}

export default Footer