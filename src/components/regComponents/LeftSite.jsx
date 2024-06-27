import React from 'react'
import { useFormik } from 'formik';
import {signUp} from "../../validations"

const initialState = {
  fName: "",
  lName: "",
  email: "",
  password: "",
  username: "",
  bDay: "",
  bMonth: "",
  bYear: "",
  gender: "",
}

const LeftSite = () => {
  
  const formik = useFormik({
    initialValues: initialState,
    validationSchema:signUp,

    onSubmit:()=>{
    console.log("akibdsFormik") 
    }
  })

  console.log(formik,"aaaa")


  return (
    <div>
      <h1 className='font-girloy_bold text-4xl mb-12'>Registration</h1>
      <form onSubmit={formik.handleSubmit}>

        <input 
        className='border-b-[2px] w-full border-main_bg py-2 mb-6 outline-none font-girloy_medium' 
        type="text" 
        placeholder='Enter Your First Name' 
        onChange={formik.handleChange}
        autoComplete='off'
        onBlur={formik.handleBlur}
        name='fName'
        value={formik.values.fName}
        />

        <input 
        className='border-b-[2px] w-full border-main_bg py-2 mb-6 outline-none font-girloy_medium' 
        type="text" 
        placeholder='Enter Your Last Name' 
        onChange={formik.handleChange}
        autoComplete='off'
        onBlur={formik.handleBlur}
        name='lName'
        value={formik.values.lName}
        />

        <input 
        className='border-b-[2px] w-full border-main_bg py-2 mb-6 outline-none font-girloy_medium' 
        type="text" 
        placeholder='UserName' 
        onChange={formik.handleChange}
        autoComplete='off'
        onBlur={formik.handleBlur}
        name='username'
        value={formik.values.username}
        />

        <input 
        className='border-b-[2px] w-full border-main_bg py-2 mb-6 outline-none font-girloy_medium' 
        type="email" 
        placeholder='www.example@mail.com' 
        onChange={formik.handleChange}
        autoComplete='off'
        onBlur={formik.handleBlur}
        name='email'
        value={formik.values.email}
        />

        <input 
        className='border-b-[2px] w-full border-main_bg py-2 mb-6 outline-none font-girloy_medium' 
        type="password" 
        placeholder='Password' 
        onChange={formik.handleChange}
        autoComplete='off'
        onBlur={formik.handleBlur}
        name='password'
        value={formik.values.password}
        />
        
      </form>

      <div className='flex gap-x-1 mt-3'>
        <input 
        name='gender' 
        type="radio" 
        id='male' 
        onChange={formik.handleChange}
        autoComplete='off'
        onBlur={formik.handleBlur}
        value="male"
        />
        <label className='font-girloy_regular' for="male">Male</label>

        <input 
        name='gender' 
        className='ml-3' 
        type="radio" 
        id='female'
        onChange={formik.handleChange}
        autoComplete='off'
        onBlur={formik.handleBlur}
        value="femele"
        />
        <label className='font-girloy_regular' for="female">Female</label>

      </div>

      <div className='mt-7 flex gap-x-5'>  
        <select
         className='border-2 px-2 py-[2px] border-main_bg font-girloy_regular'
         onChange={formik.handleChange}
         autoComplete='off'
         onBlur={formik.handleBlur}
         name='bDay'
         value={formik.values.bDay}
         >
          <option>Day</option>
        </select>

        <select 
        className='border-2 px-2 py-[2px] border-main_bg'
        onChange={formik.handleChange}
        autoComplete='off'
        onBlur={formik.handleBlur}
        name='bMonth'
        value={formik.values.bMonth}
        >
          <option>Month</option>
        </select>

        <select 
        className='border-2 px-2 py-[2px] border-main_bg'
        onChange={formik.handleChange}
        autoComplete='off'
        onBlur={formik.handleBlur}
        name='bYear'
        value={formik.values.bYear}
        >

          <option>Years</option>
        </select>
      </div>

      <button className='w-3/6 bg-buttons px-5 py-2 text-whit mt-12 font-girloy_bold rounded' onClick={formik.handleSubmit}>Registration</button>
    </div>
  )
}

export default LeftSite