import React from 'react'
import { IoIosHelpCircle,IoMdSettings  } from "react-icons/io";
import { BsPcDisplayHorizontal } from "react-icons/bs";

const ProfileMenuSetting = () => {
  return (
    <div className='text-black mt-5'>

        <div className='flex gap-x-4 py-2 hover:bg-main_bg items-center mb-5'>
            <div className='text-2xl'><IoMdSettings/></div>
            <h4 className='font-girloy_regular text-[17px] text-textColor'>Setting & privacy</h4>
        </div>
        <div className='flex gap-x-4 py-2 hover:bg-main_bg items-center mb-5'>
            <div className='text-2xl'><BsPcDisplayHorizontal/></div>
            <h4 className='font-girloy_regular text-[17px]  text-textColor'>Display & accessibility</h4>
        </div>
        <div className='flex gap-x-4 py-2 hover:bg-main_bg items-center mb-5'>
            <div className='text-2xl'><IoIosHelpCircle/></div>
            <h4 className='font-girloy_regular text-[17px]  text-textColor'>Help & support</h4>
        </div>
        
        <button className='bg-nav w-full py-2 rounded-3xl text-whit mt-4 hover:bg-bHover'>Log Out</button>
    </div>
  )
}

export default ProfileMenuSetting