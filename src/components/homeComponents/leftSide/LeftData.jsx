import React from 'react'
import { RiMessengerFill } from "react-icons/ri";
import { VscFileMedia } from "react-icons/vsc";
import { IoSettingsSharp } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { IoNewspaper } from "react-icons/io5";

const LeftData = () => {
  return (
    <div className='mt-12 '>

      <div className='flex gap-x-4 items-center  px-12 py-4 text-xl hover:bg-blackss mb-6   ' >
        <IoNewspaper/>
        <h4 className='text-[20px]'>News Feeds</h4>
      </div>
      <div className='flex gap-x-4 items-center  px-12 py-4 text-xl hover:bg-blackss mb-6 ' >
        <RiMessengerFill/>
        <h4 className='text-[20px]'>Messages</h4>
      </div>
      <div className='flex gap-x-4 items-center  px-12 py-4 text-xl hover:bg-blackss mb-6 ' >
        < FaUserFriends/>
        <h4 className=' text-[20px]'>Friends</h4>
      </div>
      <div className='flex gap-x-4 items-center  px-12 py-4 text-xl hover:bg-blackss mb-6 ' >
        <VscFileMedia/>
        <h4 className=' text-[20px]'>Media</h4>
      </div>
      <div className='flex gap-x-4 items-center px-12 py-4 text-xl hover:bg-blackss mb-6 ' >
        <IoSettingsSharp/>
        <h4 className=' text-[20px]'>Setting</h4>
      </div>
      
     
      
    </div>
  )
}

export default LeftData