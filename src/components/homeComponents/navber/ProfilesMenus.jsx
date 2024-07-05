import React from 'react'
import ProfileMenusProfile from './ProfileMenusProfile'
import ProfileMenuSetting from './ProfileMenuSetting'

const ProfilesMenus = () => {
  return (
    <div className='w-[350px] h-[450px] bg-whit shadow-xl rounded-xl absolute top-14 right-0 px-6 py-6'>
      <ProfileMenusProfile/>
      <ProfileMenuSetting/>
    </div>
  )
}

export default ProfilesMenus