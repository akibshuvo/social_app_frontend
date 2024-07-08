
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast, ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bars } from 'react-loader-spinner';

const NewPassword = () => {
    let navigate = useNavigate()
    let param = useParams()

    let [newPassWords, setNewPass] = useState("")
    let [loader,setLoader] = useState(false)
    
    console.log(param)
    let handleCanCel = ()=>{
        navigate('/login')
        
    }

    let handleChange = (e)=>{
          let otpNumber = e.target.value
          setNewPass(otpNumber)
          console.log(otpNumber)
    }

    let handleSubmit = async ()=>{
        setLoader(true)
        let data = await axios.post("http://localhost:8000/api/v1/auth/newPassword",{
            token: param.token,
            newPass: newPassWords
        })

        console.log(data.data.errorMgs)

        if(data.data.errorMgs){
            toast.error(data.data.errorMgs, {
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
        }
        if(data.data.success){
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
            navigate('/login')
            setLoader(false)
        }
    }


  return (
    <div className='w-full h-screen bg-nav flex justify-center items-center' >
        <div className='w-[520px] h-[265] bg-page_color shadow-xl rounded-xl px-6 py-8'>
            <h1 className='font-medium text-2xl mb-3'>Add New Password</h1>
            {/* <p className='font-girloy_light'></p> */}
            <input onChange={handleChange} className='w-full py-3 px-4 mt-4 rounded-xl bg-main_bg'  type="email" placeholder='Add new password' />
            <div className='flex justify-end gap-x-3 mt-5'>
                <button onClick={handleCanCel} className='border border-bbbbb px-5 py-2 rounded-xl font-medium'>Cancel</button>

                {loader
                ? <button className='bg-nav px-5 py-2 rounded-xl text-page_color font-medium'>
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
                :
                <button onClick={handleSubmit} className='bg-nav px-5 py-2 rounded-xl text-page_color font-medium'>Change </button>

            }
                
                
            </div>
        </div>
    </div>
  )
}

export default NewPassword