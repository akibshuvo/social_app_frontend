import React from 'react'
import i1 from '../../../allPictures/i3.jpeg'
import { useSelector } from 'react-redux'

const ProfileMenusProfile = () => {
  let data = useSelector(state=>state.regitration.userInfo)

  let fullName = data.fName + " " + data.lName

  console.log(fullName,"aa")
  console.log(data)
  return (
    <div>
        <h2 className='text-black font-bold text-2xl mb-4'>Profile</h2>
        <div className='flex gap-x-4'>
        <img className='w-14 h-14 rounded-full' src={i1} alt="" />
        <div>
          <h4 className='text-black font-medium'>{fullName}</h4>
          <p className='text-black font-light'>{data.email}</p>
        </div>
        </div>
        <div className='border-b border-bbbbb mt-4'></div>
      </div>
  )
}

export default ProfileMenusProfile