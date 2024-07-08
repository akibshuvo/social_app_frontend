import React, { useState } from 'react'
import i5 from '../../../../allPictures/i5.jpeg'
import akibs from '../../../../allPictures/akibs.jpg'
import { AiFillLike } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";

const index = () => {
  let [like,setLike] =useState(false)

  let handleLike =()=>{
    if(like){
      setLike(false)
    }else{
     setLike(true)

    }
  }
  return (
    <div className='mt-6 bg-page_color h-[460px] rounded-xl shadow-xl px-8 py-4'>
      <div className='flex justify-between'>
        <div className='flex gap-x-4 items-center'>
          <img className='w-12 h-12 rounded-full' src={i5} alt="" />
          <div>
            <h4 className='text-md font-medium'>Kate Winslet</h4>
            <p className='font-extralight'>a year ago</p>
          </div>
        </div>
        <p className='font-bold text-xl'>...</p>
      </div>
      <div  style={{ backgroundImage: `url(${akibs})` }} className='bg-main_bg w-full h-[310px] mt-4 bg-cover bg-no-repeat bg-center'></div>

      <p className='text-[#4b4948c2] mt-2 font-girloy_light'>you and jera like this * 2 comment</p>
      <div className='flex gap-x-6 mt-1'>
        <div className='flex gap-x-2 items-center'>
          {like? <AiFillLike onClick={handleLike} className='text-2xl text-errorColor'/>: <AiFillLike onClick={handleLike} className='text-2xl '/>}
        
        <p className='text-md font-medium'>Like</p>
        </div>
        <div className='flex gap-x-2 items-center'>
        <FaRegCommentAlt className='text-xl'/>
        <p className='text-md font-medium'>Comments</p>
        </div>
      </div>
    </div>
  )
}

export default index