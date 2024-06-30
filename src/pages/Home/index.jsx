import React from 'react'
import { useSelector } from 'react-redux'


const index = () => {
  const {userInfo}  = useSelector(state => state.regitration)
  console.log(userInfo)
  
  return (
    <>
    <h1>akib</h1>
    
    </>
    
  )
}

export default index