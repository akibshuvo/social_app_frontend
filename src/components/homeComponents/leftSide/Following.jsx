import React from 'react'
import i1 from '../../../allPictures/i1.jpeg'
import i2 from '../../../allPictures/i2.jpeg'
import i3 from '../../../allPictures/i3.jpeg'
import i4 from '../../../allPictures/i4.jpeg'
import i5 from '../../../allPictures/i5.jpeg'

import i7 from '../../../allPictures/i7.jpeg'
import i8 from '../../../allPictures/i8.jpg'


const Following = () => {
  return (
    <div>
        <div className=' w-[280px] h-92 shadow-xl bg-whit rounded-xl px-5 py-8'>
          <h2 className='text-textColor font-medium text-xl mb-3'>I'm Following</h2>
          <div className='flex flex-wrap gap-x-3'>
            <div className='w-12 h-12 mt-4' ><img src={i2} alt="" className='rounded-full'  /></div>
            <div className='w-12 h-12 bg-buttons rounded-full mt-4' ><img src={i3} alt="" className='rounded-full'  /></div>
            <div className='w-12 h-12 bg-buttons rounded-full mt-4' ><img src={i5} alt="" className='rounded-full'  /></div>
            <div className='w-12 h-12 bg-buttons rounded-full mt-4' ><img src={i7} alt="" className='rounded-full'  /></div>
            <div className='w-12 h-12 bg-buttons rounded-full mt-4' ><img src={i8} alt="" className='rounded-full'  /></div>
            <div className='w-12 h-12 mt-4' ><img src={i2} alt="" className='rounded-full'  /></div>
            <div className='w-12 h-12 bg-buttons rounded-full mt-4' ><img src={i3} alt="" className='rounded-full'  /></div>
            <div className='w-12 h-12 bg-buttons rounded-full mt-4' ><img src={i5} alt="" className='rounded-full'  /></div>
            <div className='w-12 h-12 bg-buttons rounded-full mt-4' ><img src={i7} alt="" className='rounded-full'  /></div>
            <div className='w-12 h-12 bg-buttons rounded-full mt-4' ><img src={i8} alt="" className='rounded-full'  /></div>
          
          </div>

        </div>
    </div>
  )
}

export default Following