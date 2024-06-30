import React from 'react'

const FormInput = ({formik, errors, touched,}) => {
  return (
    <>
    <form onSubmit={formik.handleSubmit}>

<input 
className={errors.fName && touched.fName
  ?'border-b-[1px] w-full border-errorColor py-2 mb-6 outline-none font-girloy_medium placeholder:text-errorColor'
  :'border-b-[2px] w-full border-main_bg py-2 mb-6 outline-none font-girloy_medium'} 
type="text" 
placeholder={errors.fName && touched.fName?errors.fName :'Enter Your First Name' }
onChange={formik.handleChange}
autoComplete='off'
onBlur={formik.handleBlur}
name='fName'
value={formik.values.fName}
/>



<input 
 className={errors.lName && touched.lName
  ?'border-b-[1px] w-full border-errorColor py-2 mb-6 outline-none font-girloy_medium placeholder:text-errorColor'
  :'border-b-[2px] w-full border-main_bg py-2 mb-6 outline-none font-girloy_medium'} 
type="text" 
placeholder={errors.lName && touched.lName ?errors.lName :' Last Name' } 
onChange={formik.handleChange}
autoComplete='off'
onBlur={formik.handleBlur}
name='lName'
value={formik.values.lName}
/>

<input 
 className={errors.username && touched.username
  ?'border-b-[1px] w-full border-errorColor py-2 mb-6 outline-none font-girloy_medium placeholder:text-errorColor'
  :'border-b-[2px] w-full border-main_bg py-2 mb-6 outline-none font-girloy_medium'}  
type="text" 
placeholder={errors.username && touched.username ?errors.username :'Username' } 
onChange={formik.handleChange}
autoComplete='off'
onBlur={formik.handleBlur}
name='username'
value={formik.values.username}
/>

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
    </>
  )
}

export default FormInput