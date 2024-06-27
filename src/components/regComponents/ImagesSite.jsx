import React from 'react'
import rightPic from "../../allPictures/boy.png"

const ImagesSite = () => {
  return (
    <div>
       <img src={rightPic} alt="" />
       <a className='font-girloy_regular' href='/login'>I Am Already <span className='text-buttons font-bold underline'>Member</span></a>
    </div>
  )
}

export default ImagesSite