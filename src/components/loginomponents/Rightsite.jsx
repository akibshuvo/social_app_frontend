import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitterSquare  } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";


const Rightsite = () => {


  return (
    <div>
        <h1 className='font-girloy_bold text-4xl py-7'>Sign in</h1>
        
        <div>
            <form>
                <input className='border-b-[2px] w-full border-main_bg py-2 mb-4 outline-none font-girloy_medium mt-4' placeholder='Enter Your email' type="text" />
                <input className='border-b-[2px] w-full border-main_bg py-2 mb-4 outline-none font-girloy_medium mt-4' placeholder='Password' type="text" />
            </form>

            <button className='w-full bg-buttons px-5 py-2 text-whit mt-8 font-girloy_bold rounded '>Sign in</button>

            <div className='flex mt-8 gap-x-8'>
                <h1 className='font-girloy_medium text-blacks'>Or Login with</h1>
                <div className='flex gap-x-5 text-2xl'>
                <FaSquareFacebook className='text-[#4267B2]'/>
                <FaTwitterSquare  className='text-[#1DA1F2]'/>
                <FaGooglePlus className='text-[#DB4437]'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Rightsite