import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const NoLoginUSer = () => {
  const {userInfo}  = useSelector(state => state.regitration)
  return userInfo ? <Navigate to="/home" /> : <Outlet/>
    
}

export default NoLoginUSer

