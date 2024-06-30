import React from 'react'
import { useFormik } from 'formik';
import {signUp} from "../../validations"
import Gender from './Gender';
import DateOfBirth from './DateOfBirth';
import FormInput from './FormInput';
import  { useAddUserMutation }  from '../../features/api/authApi';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
    console.log(signUpMutation.error.data.massege,"eee")
  }else{
    toast.success("Registrations Successfull", {
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

      navigate("/login")
  }
   
  };

  const formik = useFormik({
    initialValues: initialState,
    validationSchema:signUp,

      onSubmit: ()=>{
      console.log("akibdsFormik")  
      registrations();
      }
  })
  


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
      <button className='w-3/6 bg-buttons px-5 py-2 text-whit mt-12 font-girloy_bold rounded' onClick={formik.handleSubmit} type='submit'>Registration</button>
    </div>

    </div>
  )
}


export default LeftSite