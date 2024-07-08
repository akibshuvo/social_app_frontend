import React from 'react'
import MsgUser from './MsgUser'
import MsgBox from './MsgBox'

const Messages = () => {
  return (
    <div className='w-[780px] h-[820px] flex shadow-2xl '>
      <div className='w-[35%] bg-blackz'><MsgUser/></div>
      <div className='bg-page_color w-[75%]'><MsgBox/></div>
    </div>
  )
}

export default Messages