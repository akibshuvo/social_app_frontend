import React from 'react'

const AllFriends = () => {
  return (
    <div className='w-[340px] h-[460px] bg-page_color px-4 py-7 shadow-xl rounded-xl mt-8  overflow-auto'>
    <div className='flex justify-between items-center'>
        <h4 className='text-textColor font-girloy_medium text-xl'>All Friends</h4>
        <button className=' hover:font-medium'>See All</button>
    </div>


    <div className='flex justify-between items-center mt-8  '>
        <div className='flex gap-x-2 items-center'>
            <div className='w-12 h-12 bg-button_color rounded-full'></div>
            <div>
            <h4 className='font-girloy_medium'>Akib Hossain</h4>
            <p className='font-girloy_light'>2h ago.</p>
            </div>
        </div>
        <div className='flex gap-x-2 items-center'>
            <button className=' py-1 px-3 rounded-3xl bg-nav text-page_color' >Message</button>
            
        </div>
    </div>
   
    {/* <div className='border-b border-bbbbb mt-3 mb-3'></div> */}
    

</div>
  )
}

export default AllFriends