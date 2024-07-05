import React, { useState,useRef } from 'react'
import { FaDisease } from "react-icons/fa";
import man from '../../../allPictures/man.jpg'
import b2 from '../../../allPictures/i2.jpeg'
import { FaChevronDown } from "react-icons/fa";
import ProfilesMenus from './ProfilesMenus';
import OutSideClick from '../../../functions/click'
import { IoMdNotificationsOutline } from "react-icons/io";
import NotificationsBox from './NotificationsBox';

const ProfilePart = () => {
let [profileMenu, setProfileMenu] = useState(false)
let [notifications, setNotifications] = useState(false)

let clickOutSide = useRef(null)
let clickOutSidesN = useRef(null)

  OutSideClick(clickOutSide, ()=>{
    setProfileMenu(false )
  })

  OutSideClick(clickOutSidesN, ()=>{
    setNotifications(false )
  })

  return (
    <div  className='flex justify-end relative items-center text-page_color'> 
          <IoMdNotificationsOutline onClick={()=>setNotifications(true)} className='text-2xl mr-4 mt-1'/>
<div ref={clickOutSidesN}>
  {notifications &&
  <NotificationsBox/>
}
</div>
    <div onClick={()=>setProfileMenu(true)} className='flex gap-x-4 items-center '>

        <div className='flex mt-2 items-center gap-x-2'>
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