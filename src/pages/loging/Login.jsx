import React from 'react'
import LoginImg from '../../allPictures/login.png'
import Rightsite from '../../components/loginomponents/Rightsite'

const Login = () => {
  return (
    <div class='w-full h-screen bg-main_bg flex justify-center items-center'>
      <div className='w-[55%] bg-whit rounded-2xl flex py-10 box-border'>

      <div className='w-[50%] px-24  text-center'>
        <img src={LoginImg} alt="" />
        <a href='/' className='mt-8  text-xl inline-block'>Create an <span className='underline text-buttons font-semibold'>account</span></a>
        </div>

        <div className='w-[50%] pr-14 '>
          <div>
      <Rightsite/>
        </div>
        </div>
      
      </div>
    </div>
  )
}

export default Login