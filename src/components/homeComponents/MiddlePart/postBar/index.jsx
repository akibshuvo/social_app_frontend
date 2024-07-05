import React, { useState } from 'react'
import i3 from '../../../../allPictures/i3.jpeg'
import { FaVideo } from "react-icons/fa";
import { RiVideoChatFill } from "react-icons/ri";
import { IoMdPhotos } from "react-icons/io";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import Moral from './moral';

const index = () => {
  let [moralShow, setMoralShow] = useState(false)

  return (
    <>
    <div className='bg-page_color mt-8 h-40 px-5 py-4 shadow-xl rounded-xl'>
      <div className='flex gap-x-3'>
        <img className='w-14 rounded-full' src={i3} alt="" />
        <input onClick={()=>setMoralShow(true)} className='w-full bg-main_bg rounded-3xl px-5 outline-none font-medium' type="text" placeholder="What's on your maind, Akib?"/>
       <Moral moralShow ={moralShow} setMoralShow={setMoralShow}/>
      </div>
      <div className='w-full border-b border-bbbbb mt-3'></div>
      <div className='flex justify-between px-12 mt-6'>

        <div className='flex gap-x-3 items-center cursor-pointer'>
          <RiVideoChatFill className=' text-errorColor text-2xl '/>
          <p className='font-medium text-textColor text-md'>Live Video</p>
        </div>

        <div onClick={()=>setMoralShow(true)} className='flex gap-x-3 items-center cursor-pointer'>
          <IoMdPhotos className=' text-[#3dbe7b] text-2xl '/>
          <p className='font-medium text-textColor text-md'>Photo/Video</p>
        </div>
        
        <div onClick={()=>setMoralShow(true)} className='flex gap-x-3 items-center cursor-pointer'>
          <BsFillEmojiSmileFill className='text-[#ebc245] text-2xl '/>
          <p className='font-medium text-textColor text-md'>Feeling/activity</p>
        </div>
        

      </div>
    </div>

<Moral/>

    </>
  )
}

export default index