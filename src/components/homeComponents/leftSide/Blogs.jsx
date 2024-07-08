import React from 'react'
import b1 from '../../../allPictures/b1.jpg'
import b2 from '../../../allPictures/b2.jpg'
import { Link } from 'react-router-dom'

const Blogs = () => {
  return (
    <div className=' box-border w-280px bg-whit mt-8 shadow-xl h-[600px]  py-8 rounded-xl'>
        <h4 className='font-medium text-xl text-textColor mb-6 px-4'>Blogs</h4>
        <Link to="/blog2">
        <div className='flex items-center gap-x-4 mb-5 px-4 hover:cursor-pointer hover:bg-main_bg'>
            <div className='w-16'><img className='rounded-md' src={b1} alt="" /></div>
            <div>
                <h5 className='font-girloy_bold'>write easily.</h5>
                <p className='font-girloy_light'>Create a unique blog <br/> and share you friend</p>
            </div>
        </div>
        </Link>

        <Link to="/blog1">
        <div className='flex items-center gap-x-4 mb-5 px-4 hover:cursor-pointer hover:bg-main_bg'>
            <div className='w-16'><img className='rounded-md' src={b2} alt="" /></div>
            <div>
                <h5 className='font-girloy_bold'>Use Laptop.</h5>
                <p className='font-girloy_light'>Create a unique blog <br/> and share you friend</p>
            </div>
        </div>
        </Link>
        <Link to="/blog2">
        <div className='flex items-center gap-x-4 mb-5 px-4 hover:cursor-pointer hover:bg-main_bg'>
            <div className='w-16'><img className='rounded-md' src={b1} alt="" /></div>
            <div>
                <h5 className='font-girloy_bold'>write easily.</h5>
                <p className='font-girloy_light'>Create a unique blog <br/> and share you friend</p>
            </div>
        </div>
        </Link>

        <Link to="/blog1">
        <div className='flex items-center gap-x-4 mb-5 px-4 hover:cursor-pointer hover:bg-main_bg'>
            <div className='w-16'><img className='rounded-md' src={b2} alt="" /></div>
            <div>
                <h5 className='font-girloy_bold'>Use Laptop.</h5>
                <p className='font-girloy_light'>Create a unique blog <br/> and share you friend</p>
            </div>
        </div>
        </Link>
        <Link to="/blog2">
        <div className='flex items-center gap-x-4 mb-5 px-4 hover:cursor-pointer hover:bg-main_bg'>
            <div className='w-16'><img className='rounded-md' src={b1} alt="" /></div>
            <div>
                <h5 className='font-girloy_bold'>write easily.</h5>
                <p className='font-girloy_light'>Create a unique blog <br/> and share you friend</p>
            </div>
        </div>
        </Link>

       

    </div>
  )
}

export default Blogs