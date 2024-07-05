import React from 'react'
import { ReducerText } from '../../../../functions/ReducerText'

const RequestList = () => {
    const fullName = 'Akib Hossain Shuvo'
    const reduceText = ReducerText(fullName, 12)
  return (
    <div className='w-[340px] h-[350px] bg-page_color  py-7 shadow-xl rounded-xl  overflow-auto'>
        <div className='flex justify-between items-center px-4 mb-3'>
            <h4 className='text-textColor font-girloy_bold text-xl'>Request List</h4>
            <button className=' hover:font-girloy_medium'>See All</button>
        </div>
       

 
        <div className='flex justify-between items-center mt-2 px-4 hover:bg-main_bg py-3'>
            <div className='flex gap-x-2 items-center'>
                <div className='w-12 h-12 bg-button_color rounded-full'></div>
                <div>
                <h4 className='font-girloy_medium'>{reduceText}</h4>
                <p className='font-girloy_light'>2h ago.</p>
                </div>
            </div>
            <div className='flex gap-x-2 items-center'>
                <button className=' py-1 px-3 rounded-3xl bg-nav text-page_color hover:bg-bHover' >Add</button>
                <button className=' py-1 px-2 rounded-3xl bg-errorColor text-page_color hover:bg-deleteHover' >Delete</button>
            </div>
        </div>
        
        <div className='flex justify-between items-center mt-2 px-4 hover:bg-main_bg py-3'>
            <div className='flex gap-x-2 items-center'>
                <div className='w-12 h-12 bg-button_color rounded-full'></div>
                <div>
                <h4 className='font-girloy_medium'>{reduceText}</h4>
                <p className='font-girloy_light'>2h ago.</p>
                </div>
            </div>
            <div className='flex gap-x-2 items-center'>
                <button className=' py-1 px-3 rounded-3xl bg-nav text-page_color hover:bg-bHover' >Add</button>
                <button className=' py-1 px-2 rounded-3xl bg-errorColor text-page_color hover:bg-deleteHover' >Delete</button>
            </div>
        </div>

        <div className='flex justify-between items-center mt-2 px-4 hover:bg-main_bg py-3'>
            <div className='flex gap-x-2 items-center'>
                <div className='w-12 h-12 bg-button_color rounded-full'></div>
                <div>
                <h4 className='font-girloy_medium'>{reduceText}</h4>
                <p className='font-girloy_light'>2h ago.</p>
                </div>
            </div>
            <div className='flex gap-x-2 items-center'>
                <button className=' py-1 px-3 rounded-3xl bg-nav text-page_color hover:bg-bHover' >Add</button>
                <button className=' py-1 px-2 rounded-3xl bg-errorColor text-page_color hover:bg-deleteHover' >Delete</button>
            </div>
        </div>
        
        
        

    </div>
  )
}

export default RequestList