import React from 'react'
import i2 from '../../allPictures/i2.jpeg'
import i3 from '../../allPictures/i3.jpeg'
import i5 from '../../allPictures/i5.jpeg'
import i7 from '../../allPictures/i7.jpeg'
import i8 from '../../allPictures/i8.jpg'
import { IoSettingsSharp } from "react-icons/io5";


const MsgUser = () => {
  return (
    <div className='relative'>
        <div className='px-4 mt-8 '>
        {/* <h1 className='text-page_color text-2xl font-bold mb-3'>Friends</h1> */}
        <input className='w-full bg-page_color px-2 py-1 shadow-xl ' type="text" placeholder='Search Friends'/>
        </div>

        <div>

        <div className='flex gap-x-3 py-2 mt-4  items-center px-4 hover:bg-bbbbb'>
            <div>
                <img className='w-12 h-12 rounded-full' src={i2} alt="" />
            </div>
            <div>
                <h4 className='text-page_color font-girloy_semiBold'>Sunny Leone</h4>
                <p className='font-girloy_light text-page_color'>active now</p>
            </div>
            <div className='w-3 h-3 bg-nav rounded-full ml-7'></div>

        </div>

        <div className='flex gap-x-3 py-2 mt-4 items-center px-4 hover:bg-bbbbb'>
            <div>
                <img className='w-12 h-12 rounded-full' src={i5} alt="" />
            </div>
            <div>
                <h4 className='text-page_color font-girloy_semiBold'>Rocona</h4>
                <p className='font-girloy_light text-page_color'>active now</p>
            </div>
            <div className='w-3 h-3 bg-nav rounded-full ml-7'></div>

        </div>

        <div className='flex gap-x-3 py-2 mt-4 items-center px-4 hover:bg-bbbbb'>
            <div>
                <img className='w-12 h-12 rounded-full' src={i7} alt="" />
            </div>
            <div>
                <h4 className='text-page_color font-girloy_semiBold'>MBBPE</h4>
                <p className='font-girloy_light text-page_color'>active now</p>
            </div>
            <div className='w-3 h-3 bg-nav rounded-full ml-7'></div>

        </div>

        <div className='flex gap-x-3 py-2 mt-4 items-center px-4 hover:bg-bbbbb'>
            <div>
                <img className='w-12 h-12 rounded-full' src={i8} alt="" />
            </div>
            <div>
                <h4 className='text-page_color font-girloy_semiBold'>Johny Signs</h4>
                <p className='font-girloy_light text-page_color'>active now</p>
            </div>
            <div className='w-3 h-3 bg-nav rounded-full ml-7'></div>

        </div>

        <div className='flex gap-x-3 py-2 mt-4 items-center px-4 hover:bg-bbbbb'>
            <div>
                <img className='w-12 h-12 rounded-full' src={i3} alt="" />
            </div>
            <div>
                <h4 className='text-page_color font-girloy_semiBold'>Imran Hasmi</h4>
                <p className='font-girloy_light text-page_color'>active now</p>
            </div>
            <div className='w-3 h-3 bg-nav rounded-full ml-7'></div>

        </div>
        </div>

        <div className='absolute -bottom-[330px] left-5 text-page_color text-2xl'>
<IoSettingsSharp/>
        </div>

    </div>
  )
}

export default MsgUser