import React, { useRef, useState } from 'react'
import { MdOutlinePermMedia } from "react-icons/md";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { BiMessageDots } from "react-icons/bi";
import { LuNewspaper } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";
import { PiTiktokLogo } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import SearchBox from './SearchBox';
import OutSideClick from '../../../functions/click'
import { Link, NavLink } from 'react-router-dom';

const MenuSite = () => {
  let [searchBox, setSearchBox] = useState(false)

  let clickOutSide = useRef(null)

  OutSideClick(clickOutSide, ()=>{
    setSearchBox(false )
  })


  return (
    <div className='flex gap-x-16 pl-12 justify-between items-center'>

    <div className='flex justify-between w-[40%] gap-x-8 text-page_color'> 

      <NavLink to="/home">
        <div className='cursor-pointer flex items-center gap-x-2'>
          <MdOutlinePermMedia className='text-2xl'/>
          <p className='font-bold hover:border-b'>Home</p>
          </div>
          </NavLink>

          <NavLink to="/messages">
          <div className='cursor-pointer flex items-center gap-x-2'>
          <BiMessageDots className='text-2xl'/>
          <p className='font-bold active:border-b hover:border-b'>Messages</p>
          </div>
          </NavLink>

       <NavLink to="/friends"> 
       <div className='cursor-pointer flex items-center gap-x-2'>
          <MdOutlinePeopleOutline className='text-2xl'/>
          <p className='font-bold hover:border-b'>Friends</p>
        </div>
        </NavLink>
        
        {/* <div className='cursor-pointer'><FaInstagram/></div> */}
        {/* <div className='cursor-pointer flex items-center gap-x-2'>
          <LuNewspaper className='text-xl'/>
          <p className='font-medium hover:border-b'>News </p>
          </div> */}

    </div>

    <div className='w-[45%] relative flex '>
    <input onClick={()=>setSearchBox(true)} type="text" placeholder='Search Social or type ULR' className='focus:outline-none z-20 w-full py-2  px-8 rounded-3xl bg-main_bg  shadow-md'/>
    <div className='absolute right-8 top-2 z-30 '>
        <IoIosSearch className='cursor-pointer text-[22px]'/>
    </div>
<div ref={clickOutSide}>
    {searchBox &&
    <SearchBox/>
  }
  </div>
    </div>
    </div>
  )
}

export default MenuSite