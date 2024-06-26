import React from 'react'

const LeftSite = () => {
  return (
    
    <div>
      <h1 className='font-girloy_bold text-4xl mb-12'>Registration</h1>
      <form>
        <input className='border-b-[2px] w-full border-main_bg py-2 mb-6 outline-none font-girloy_medium' type="text" placeholder='Enter Your First Name ' />
        <input className='border-b-[2px] w-full border-main_bg py-2 mb-6 outline-none font-girloy_medium' type="text" placeholder='Enter Your Last Name' />
        <input className='border-b-[2px] w-full border-main_bg py-2 mb-6 outline-none font-girloy_medium' type="text" placeholder='UserName' />
        <input className='border-b-[2px] w-full border-main_bg py-2 mb-6 outline-none font-girloy_medium' type="email" placeholder='www.example@mail.com' />
        <input className='border-b-[2px] w-full border-main_bg py-2 mb-6 outline-none font-girloy_medium' type="password" placeholder='Password' />
      </form>

      <div className='flex gap-x-1 mt-3'>
        <input name='gender' type="radio" id='male'/>
        <label className='font-girloy_regular' for="male">Male</label>
        <input name='gender' className='ml-3' type="radio" id='female'/>
        <label className='font-girloy_regular' for="female">Female</label>

      </div>

      <div className='mt-7 flex gap-x-5'>
        <select className='border-2 px-2 py-[2px] border-main_bg font-girloy_regular'>
          <option>Day</option>
        </select>

        <select className='border-2 px-2 py-[2px] border-main_bg'>
          <option>Month</option>
        </select>

        <select className='border-2 px-2 py-[2px] border-main_bg'>
          <option>Years</option>
        </select>
      </div>

      <button className='w-3/6 bg-buttons px-5 py-2 text-whit mt-12 font-girloy_bold rounded '>Registration</button>
    </div>
    
   
  )
}

export default LeftSite