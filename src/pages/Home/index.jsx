import React from 'react'
import LeftSide from '../../components/homeComponents/leftSide/index'
import NavberSite from '../../components/homeComponents/navber'



const index = () => {
  
  return (
    <>
    <div> 
      <div><NavberSite/></div>
      <div className='px-60 w-full h-screen flex justify-between bg-main_bg'>
        <div className='mt-8'>
        <LeftSide/>
        </div>
        <div className='mt-8'>akib</div>
        <div className='mt-8'>akib</div>
      </div>
  
    
   </div>
 
    
    </>
    
  )
}

export default index