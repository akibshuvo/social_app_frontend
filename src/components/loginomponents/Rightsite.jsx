import React, { useState } from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitterSquare  } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { useFormik } from 'formik';
import {useLogedInMutation} from '../../features/api/authApi'
import { toast, ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {signIn} from '../../validations'
import { useNavigate,Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logedUser } from '../../features/userslice/authSlice';
import { Bars } from 'react-loader-spinner';

const initialState = {
  email: "",
  password: "",
  
}

const Rightsite = () => {
  const[logedIn, {loading}] = useLogedInMutation()
  let [loader, setLoader] = useState(false)

  let navigate = useNavigate()
  let dispatch = useDispatch()

 const logIn = async ()=>{
  const logInData = await logedIn({
    email: formik.values.email,
    password: formik.values.password,
  })

  if(logInData.error){
    toast.error(logInData.error.data.massage, {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
      setLoader(false)
  }else{
    const {message, ...rest} = logInData.data

    dispatch(logedUser(rest))
    localStorage.setItem("user", JSON.stringify(rest))
    setLoader(false)

    navigate("/home")
    
  }
  

 }

  const formik = useFormik({
    initialValues: initialState,
    validationSchema:signIn,
      onSubmit: ()=>{
        logIn() 
        setLoader(true)
      }
  })

  const {errors, touched} = formik


  return (
    <div>
        <h1 className='font-girloy_bold text-4xl py-7'>Sign in</h1>
        
        <div>
            <form onSubmit={formik.handleSubmit}>
                <input 
                className={errors.email && touched.email
                  ?'border-b-[1px] w-full border-errorColor py-2 mb-6 outline-none font-girloy_medium placeholder:text-errorColor'
                  :'border-b-[2px] w-full border-main_bg py-2 mb-6 outline-none font-girloy_medium'} 
                type="email" 
                placeholder={errors.email && touched.email ?errors.email :'www.example@gmail.com' }
                onChange={formik.handleChange}
                autoComplete='off'
                onBlur={formik.handleBlur}
                name='email'
                value={formik.values.email}
                />
                

                <input 
                className={errors.password && touched.password
                  ?'border-b-[1px] w-full border-errorColor py-2 mb-6 outline-none font-girloy_medium placeholder:text-errorColor'
                  :'border-b-[2px] w-full border-main_bg py-2 mb-6 outline-none font-girloy_medium'} 
                type="password" 
                placeholder={errors.password && touched.password ?errors.password :'Password' } 
                onChange={formik.handleChange}
                autoComplete='off'
                onBlur={formik.handleBlur}
                name='password'
                value={formik.values.password}
                />
            </form>


{loader
? <button className='w-full bg-buttons px-5 py-2 text-whit mt-8 font-girloy_bold rounded flex justify-center'>
<Bars
  height="22"
  width="55"
  color="#fff"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
</button>
: <button className='w-full bg-buttons px-5 py-2 text-whit mt-8 font-girloy_bold rounded ' onClick={formik.handleSubmit} type='submit'>Sign in</button>
            
}
            

<Link to="/forget"><h2 className='flex justify-center mt-2 font-light text-textColor cursor-pointer'>Forget Password</h2></Link>
            <div className='flex mt-8 gap-x-8'>
                <h1 className='font-girloy_medium text-blacks'>Or Login with</h1>
                <div className='flex gap-x-5 text-2xl'>
                <FaSquareFacebook className='text-[#4267B2]'/>
                <FaTwitterSquare  className='text-[#1DA1F2]'/>
                <FaGooglePlus className='text-[#DB4437]'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Rightsite