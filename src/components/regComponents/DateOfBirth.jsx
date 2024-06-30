import React from 'react'

const DateOfBirth = ({formik,errors,touched, getDay, month,years}) => {
  return (
    <>
    <div className='mt-7 flex gap-x-5'>  
        <select
         className={errors.bDay && touched.bDay ?'border px-2 py-[2px] border-errorColor  font-girloy_regular': 'border-2 px-2 py-[2px] border-main_bg font-girloy_regular'}
         onChange={formik.handleChange}
         autoComplete='off'
         onBlur={formik.handleBlur}
         name='bDay'
         value={formik.values.bDay}
         >
          
          {getDay.map((days, index)=>(
            <option key={index}>{days}</option>
          ))}
          
        </select>

        <select 
         className={errors.bMonth && touched.bMonth ?'border px-2 py-[2px] border-errorColor  font-girloy_regular': 'border-2 px-2 py-[2px] border-main_bg font-girloy_regular'}
        onChange={formik.handleChange}
        autoComplete='off'
        onBlur={formik.handleBlur}
        name='bMonth'
        value={formik.values.bMonth}
        >
        
          {month.map((months,index)=>(
            <option key={index}>{months}</option>
          ))}
        </select>

        <select 
         className={errors.bYear && touched.bYear ?'border px-2 py-[2px] border-errorColor  font-girloy_regular': 'border-2 px-2 py-[2px] border-main_bg font-girloy_regular'}
        onChange={formik.handleChange}
        autoComplete='off'
        onBlur={formik.handleBlur}
        name='bYear'
        value={formik.values.bYear}
        >

          
          {years.map((year,index)=>(
            <option key={index}>{year}</option>
          ))}
        </select>
      </div>

     <div className='text-errorColor'> {errors.bDay && touched.bDay || errors.bMonth && touched.bMonth || errors.bYear &&  touched.bYear}</div>
    
    </>
  )
}

export default DateOfBirth