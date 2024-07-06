import React from 'react'
import { useNavigate } from 'react-router-dom'

const OtpPage = () => {
    let navigate = useNavigate()

    let handleCanCel = ()=>{
        navigate('/login')
        
    }
  return (
    <div className='w-full h-screen bg-nav flex justify-center items-center' >
        <div className='w-[520px] h-[265] bg-page_color shadow-xl rounded-xl px-6 py-8'>
            <h1 className='font-medium text-2xl mb-3'>Please check your gmail</h1>
            <p className='font-girloy_light'>We send a six dijit code for your email address.</p>
            <input className='w-full py-3 px-4 mt-4 rounded-xl bg-main_bg'  type="email" placeholder='Enter your OPT code' />
            <div className='flex justify-end gap-x-3 mt-5'>
                <button onClick={handleCanCel} className='border border-bbbbb px-5 py-2 rounded-xl font-medium'>Cancel</button>
                <button className='bg-nav px-5 py-2 rounded-xl text-page_color font-medium'>Submit</button>
                
            </div>
        </div>
    </div>
  )
}

export default OtpPage