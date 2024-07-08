import React from 'react'
import i5 from '../../allPictures/i5.jpeg'
import { IoMdPhotos } from "react-icons/io";
import { BsEmojiLaughingFill,BsEmojiSmile  } from "react-icons/bs";
import { HiMiniGift } from "react-icons/hi2";

const MsgBox = () => {
  return (
    <div className='relative'>
    <div className='bg-whit shadow-xl flex gap-x-6 px-4 py-3'>
     <div>
     <img className='w-16 h-16 rounded-full border-2 border-nav' src={i5} alt="" />
     </div>
     <div>
        <h4 className='text-textColor text-xl font-medium'>Rocona Banarji</h4>
        <p className='font-girloy_light text-textColor'>already 1258 messages</p>
     </div>
    </div>

    <div>

    <div className='flex justify-end mt-8 px-3 py-2 '>
        <p className='bg-nav px-7 py-2 shadow-md text-page_color font-medium'>Hi Dear, how are You?</p>
    </div>

    <div className=' mt-8 px-3 py-2 w-[50%] '>
        <p className='bg-bbbbb shadow-md  px-7 py-2 text-textColor font-medium'>By following these guidelines and tailoring the examples to fit your video's content.</p>
    </div>

    <div className='flex justify-end mt-8 px-3 py-2 '>
        <p className='bg-nav px-7 py-2 shadow-md text-page_color font-medium'> I’ve written a few thousand words on <br></br>why traditional “semantic class names” </p>
    </div>
    </div>


   <div className='px-4 absolute -bottom-[340px] w-full'>
    <div>
        <input className='w-full px-4 py-3 shadow-xl outline-none' type="text" placeholder='Type you messages' />
        <div className='flex justify-between items-center mt-3 px-2'>
            <div className='flex items-center gap-x-5'>
                <IoMdPhotos className='text-2xl text-[#2fb33c]'/>
                <BsEmojiSmile  className='text-2xl text-[#ccaf3aee]'/>
                <HiMiniGift  className='text-2xl text-[#3aa7ccee]'/>

            </div>
            <button className='font-girloy_bold text-md text-nav'>Send</button>
        </div>
    </div>
   </div>

    </div>
  )
}

export default MsgBox