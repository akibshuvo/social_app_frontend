import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Login from '../../pages/loging/Login'

const LogedInUser = () => {
    const {userInfo}  = useSelector(state => state.regitration)
  return  userInfo ? <Outlet/> : <Login/>
  
}

export default LogedInUser

