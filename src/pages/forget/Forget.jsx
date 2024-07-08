import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bars } from 'react-loader-spinner';
import { setLocale } from 'yup';

const Forget = () => {
  let navigate = useNavigate()

  let [emailAdd, setEmailAdd] = useState("")
  let [loader,setLoader] = useState(false)
  
    let handleCanCel = ()=>{
        navigate('/login')
    
    }

    let handleEmail = (e)=>{
      let mail = e.target.value;
      setEmailAdd(mail)
    }

    let handleClick = async()=>{

      setLoader(true)

      let data = await axios.post("http://localhost:8000/api/v1/auth/forgetPass",{
        email: emailAdd
      })

     

      if(data.data.errorMgs){
        toast.error(data.data.errorMgs, {
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

          setLoader(false)
      }else{
        toast.success(data.data.success, {
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

          navigate("/login")
          setLoader(false)

      }
    }



  return (
    <div className='w-full h-screen bg-nav flex justify-center items-center' >
        <div className='w-[520px] h-[265] bg-page_color shadow-xl rounded-xl px-6 py-8'>
            <h1 className='font-medium text-2xl mb-3'>Forget Password</h1>
            <p className='font-girloy_light'>Please enter your email address or mobile number to search for your account.</p>
            <input onChange={handleEmail} className='w-full py-3 px-4 mt-4 rounded-xl bg-main_bg'  type="email" placeholder='Email address or phone number.' />
            <div className='flex justify-end gap-x-3 mt-5'>

{loader
? <button className='bg-nav px-5 py-2 rounded-xl text-page_color font-medium'>
<Bars
  height="22"
  width="52"
  color="#fff"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
   />
</button>
: <button onClick={handleClick} className='bg-nav px-5 py-2 rounded-xl text-page_color font-medium'>Forget</button>
}
                
                
                <button onClick={handleCanCel} className='border border-bbbbb px-5 py-2 rounded-xl font-medium'>Cancel</button>
                
            </div>
        </div>
    </div>
  )
}

export default Forget