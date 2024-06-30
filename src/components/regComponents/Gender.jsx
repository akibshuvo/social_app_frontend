import React from 'react'

const Gender = ({formik,errors,touched}) => {
  return (
    <>
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
      {errors.gender && touched.gender &&<p className='text-errorColor'>Select Your Gender</p>}

    </>
  )
}

export default Gender