import React from 'react'
import LeftSite from '../../components/regComponents/LeftSite'
import ImagesSite from '../../components/regComponents/ImagesSite'

const Registations = () => {
  return (
    <div class='w-full h-screen bg-main_bg flex justify-center items-center'>
      <div className='w-[60%] bg-whit rounded-2xl flex py-10 shadow-xl	'>

      <div className='w-[50%] pl-24  py-12'>
        <LeftSite/>
        </div>

        <div className='w-[50%] flex items-center text-center pb-10'>
          <div>
       <ImagesSite/>
        </div>
        </div>
      
      </div>
    </div>
  )
}

export default Registations