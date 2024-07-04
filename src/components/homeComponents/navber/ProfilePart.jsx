import React, { useState,useRef } from 'react'
import { FaDisease } from "react-icons/fa";
import man from '../../../allPictures/man.jpg'
import b2 from '../../../allPictures/i2.jpeg'
import { FaChevronDown } from "react-icons/fa";
import ProfilesMenus from './ProfilesMenus';
import OutSideClick from '../../../functions/click'
import { IoMdNotificationsOutline } from "react-icons/io";

const ProfilePart = () => {
let [profileMenu, setProfileMenu] = useState(false)

let clickOutSide = useRef(null)

  OutSideClick(clickOutSide, ()=>{
    setProfileMenu(false )
  })

  return (
    <div  className='flex justify-end relative'> 
    <div onClick={()=>setProfileMenu(true)} className='flex gap-x-4 items-center '>

        <div className='flex mt-2 items-center gap-x-2'>
          <IoMdNotificationsOutline className='text-2xl mr-4'/>
        <h4 className='font-bold '>Akib</h4>
        <FaChevronDown/>
        </div>

        <div className='w-10 h-10 bg-buttons rounded-full'>
            <img className='rounded-full' src={b2} alt="" />
        </div>
            <div ref={clickOutSide}>
              {profileMenu &&
              <ProfilesMenus/>
            }
            </div>
       
    </div>
    </div>
  )
}

export default ProfilePart