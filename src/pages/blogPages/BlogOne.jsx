import React from 'react'
import b2 from '../../allPictures/b2.jpg'

const BlogOne = () => {
  return (
    <div className='w-full px-20 overflow-scroll'>
        <h1 className='font-girloy_bold text-3xl'> <span className='font-gilroy_extraBold text-4xl underline'>Keep it Short and Sweet:</span> Aim for a title length of 50-60 characters to ensure it displays well in search engine results.</h1>
        <img className='mt-6 mb-6' src={b2} alt="" />
        <p className='font-girloy_light'>
        <span className='font-girloy_bold text-xl'>Description: </span>
 Summarize the Content: Provide a brief overview of what the post covers.
Use Keywords Naturally: Include primary keywords for <span className='font-semibold'>SEO</span>, but make sure they fit naturally into the description.
Keep it Concise: Aim for around 150-160 characters so it fits well in search engine results.
Engage the Reader: Highlight the value or benefit readers will get from the post.
Call to Action: Encourage readers to click through by posing a question or hinting at the information they will gain.
Example:
Title: "10 Tips for Effective<span className='font-semibold'> React.</span>  Form Validation"
Description: "Discover the top 10 tips for implementing effective form validation in your React applications. Learn best practices, common pitfalls, and practical examples to improve user<span className='font-semibold'> experience.</span> "
        </p>
    </div>
  )
}

export default BlogOne