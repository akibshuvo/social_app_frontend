import React from 'react'
import Logoss from './Logoss'
import MenuSite from './MenuSite'
import ProfilePart from './ProfilePart'

const index = () => {
  return (
    <div className='px-60 py-2 shadow-md grid grid-cols-[1fr,3fr,1fr] gap-x-11 box-border items-center bg-nav text-textColor'>
        <div><Logoss/></div>
        <div><MenuSite/></div>
        <div><ProfilePart/></div>
        
    </div>
  )
}

export default index