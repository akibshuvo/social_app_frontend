import React from 'react'
import { Outlet } from 'react-router-dom'
import LeftSide from '../homeComponents/leftSide'
import NavberSite from '../homeComponents/navber'
import RightSide from '../../components/homeComponents/rightSide'

const RootLayout = () => {
  return (
    <>
    <div><NavberSite/></div>
      <div className='px-52 w-full h-screen flex justify-between bg-main_bg'>
        <div className='mt-8'>
        <LeftSide/>
        </div>
        <div className='mt-8'><Outlet/></div>
        <div className='mt-8'><RightSide/></div>
      </div>
      </>
  )
}

export default RootLayout