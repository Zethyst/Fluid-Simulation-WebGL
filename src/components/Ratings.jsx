import React from 'react'
import G from '../assets/motionarteffect-img1.png'
import Leaf from '../assets/motionarteffect-img2.png'
import Wordpress from '../assets/motionarteffect-img3.png'
import stars from '../assets/motionarteffect-img4.png'

function Ratings() {
  return (
    <div className='flex flex-col justify-center items-center px-10 md:px-32 pb-10 gap-20 pointer-events-none relative'>
        <p className='text-2xl text-center md:text-start font-semibold text-gray-200 sora'>Trusted by thousands of users around the world</p>
        <div className='w-full flex flex-col md:flex-row justify-center items-center gap-16 md:gap-64 text-gray-400 sora'>
        <div className='flex justify-center items-center gap-3'>
            <img src={Leaf} alt='Leaf' />
            <div className='flex flex-col justify-center items-center gap-5 font-medium'>
                <img src={stars} alt='stars' />
                <p><span className='font-extrabold'>4.5 </span>Score, 9 Reviews</p>
            </div>
        </div>
        <div className='flex justify-center items-center gap-3'>
            <img src={G}  alt='G'/>
            <div className='flex flex-col justify-center items-center gap-5 font-medium'>
                <img src={stars} alt='stars'/>
                <p><span className='font-extrabold'>4.5 </span>Score, 9 Reviews</p>
            </div>
        </div>
        <div className='flex justify-center items-center gap-3'>
            <img src={Wordpress}  alt='wordpress'/>
            <div className='flex flex-col justify-center items-center gap-5 font-medium'>
                <img src={stars} alt='stars'/>
                <p><span className='font-extrabold'>4.5 </span>Score, 9 Reviews</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Ratings