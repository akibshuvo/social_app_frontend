import React, { useState } from 'react'
import { useFormik } from 'formik';
import {signUp} from "../../validations"
import Gender from './Gender';
import DateOfBirth from './DateOfBirth';
import FormInput from './FormInput';
import  { useAddUserMutation }  from '../../features/api/authApi';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bars } from 'react-loader-spinner';


const initialState = {
  fName: "",
  lName: "",
  email: "",
  password: "",
  username: "",
  gender: "",
  bDay: new Date().getDate(),
  bMonth: new Date().getMonth()+1,
  bYear: new Date().getFullYear(),
}

const LeftSite = () => {
  const [addUser  , { isLoading }] = useAddUserMutation();
  let navigate = useNavigate()

  let [ btnLoader, setBtnLoader] = useState(false)

  const registrations = async ()=>{
    const signUpMutation = await addUser({
      fName: formik.values.fName,
      lName: formik.values.lName,
      email: formik.values.email,
      username: formik.values.username,
      password: formik.values.password,
      gender: formik.values.gender,
      bDay: formik.values.bDay,
      bMonth: formik.values.bMonth,
      bYear: formik.values.bYear
    });


console.log(signUpMutation,"daaaataa")
  if(signUpMutation.error){
    toast.error(signUpMutation.error.data.massege, {
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

      setBtnLoader(false)
    
  }else{
    console.log('Doneeeee')

    toast.success("Registrations Successfull, Please Check your email", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });

    setBtnLoader(false)

      navigate(`/otpVarification/${formik.values.email}`)
      console.log(formik.values.email,"eeeee")
  }
   
  };

  const formik = useFormik({
    initialValues: initialState,
    validationSchema:signUp,

      onSubmit: ()=>{
      console.log("akibdsFormik")  
      registrations();
    setBtnLoader(true)

      }
  })

  // console.log(formik)
  


  const tempYears = new Date().getFullYear();
  const years = Array.from(new Array(105), (val,index)=> tempYears - index)
  const month = Array.from(new Array(12), (val,index)=> 1 + index)
  const days = ()=>{
    return new Date(formik.values.bYear,formik.values.bMonth,0).getDate()
  }
  const getDay = Array.from(new Array(days()), (val,index)=> 1 + index) 

  const {errors, touched} = formik

  
  return (
    <div>
      <h1 className='font-girloy_bold text-4xl mb-12'>Registration</h1>

      <FormInput formik={formik} errors={errors} touched={touched}/>

      <Gender formik={formik} errors={errors} touched={touched}/>
      <DateOfBirth formik={formik} errors={errors} touched={touched} getDay={getDay} month={month} years={years}/>
     <div>
     
     {btnLoader 
     ? <button className="w-3/6 bg-buttons px-5 py-2 text-white mt-12 font-girloy_bold rounded flex justify-center items-center"
     type="submit"
>
<Bars
  height="25"
  // width="80"
  color="#fff"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
</button>
      : <button className='w-3/6 bg-buttons px-5 py-2 text-whit mt-12 font-girloy_bold rounded' onClick={formik.handleSubmit} type='submit'>Registration</button>
       }
      
      
      
    </div>

    </div>
  )
}


export default LeftSite