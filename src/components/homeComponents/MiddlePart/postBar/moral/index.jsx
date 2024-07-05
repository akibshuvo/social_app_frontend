import React, { useState } from 'react'
import i3 from '../../../../../allPictures/i3.jpeg'
import { IoMdPhotos } from "react-icons/io";
import { FaGift,FaLocationDot } from "react-icons/fa6";
import { BsEmojiFrown, BsEmojiSmileFill,BsPeopleFill } from "react-icons/bs";
import EmojiPicker from 'emoji-picker-react';
import AddPicBtn from './AddPicBtn';



const Moral = ({moralShow,setMoralShow}) => {
    let [showEmoji, setShowEmoji] = useState(false)
    let [picBox, setPicBox] = useState(false)
    let [boxClose, setBoxClose] = useState(true)

    let handleEmojiClick = ()=>{
        if(showEmoji){
            setShowEmoji(false)
        }else{
            setShowEmoji(true)
        }
    }
  return (
    <>
    {moralShow &&
    <div className='absolute top-0 left-0 z-50 w-full h-screen bg-blur flex justify-center items-center'>
        <div className=' relative w-[500px] bg-page_color shadow-2xl rounded-xl px-8 pt-4 pb-8'>
            <div className='relative '>
                <h4 className='font-bold text-2xl flex justify-center'>Create Post</h4>
                <button onClick={()=>setMoralShow(false)} className='text-2xl font-semibold rounded-full absolute right-0 top-0 inline-block hover:text-3xl'>x</button>
            </div>
            <div className='border-b border-bbbbb mt-4'></div>

            <div className='flex gap-x-3 mt-4'>
                <img className='w-12 h-12 rounded-full' src={i3} alt="" />
                <div>
                    <h4 className='font-bold mb-1'> Akib Hossain Shuvo</h4>
                    <p className='bg-main_bg flex justify-center w-16 px-3  font-normal'>Public</p>
                </div>
            </div>

            <div>
                {picBox ? 
            <input className='w-full bg-page_color outline-none font-light pt-8 placeholder:text-2xl ' type="text" placeholder="What's on your maind, Akib?"/>
                :
                <input  className='w-full bg-page_color outline-none font-light pt-8 pb-36 placeholder:text-2xl ' type="text" placeholder="What's on your maind, Akib?"/>
                }
            </div>

            <div >
                {
                picBox && 
                <>
                <button onClick={()=>setPicBox(false)} className='absolute right-10 px-3 py-1 font-normal text-2xl hover:font-medium'>x</button>
                <AddPicBtn/>
                </>
                }
                
            </div>

            <div className='flex   justify-between border border-bbbbb rounded-md px-3 py-3'>
                <h4 className='font-semibold'>Add to your post</h4>
                <div className='flex gap-x-5 text-2xl'>
                    <IoMdPhotos onClick={()=>setPicBox(true)} className=' text-[#3dbe7b]'/>
                    <BsPeopleFill className='text-[#6495ED]'/>
                    {
                        showEmoji ?<BsEmojiSmileFill onClick={handleEmojiClick} className='text-[#ebc245]'/>:<BsEmojiFrown onClick={handleEmojiClick} className='text-[#ebc245]'/>
                    }
                    
                    <FaLocationDot className='text-errorColor'/>
                    <FaGift className='text-[#40E0D0]'/>
                  
                    
                </div>
                
            </div>

            {picBox
            ?<div className='absolute top-28 left-3'>
            {showEmoji && <EmojiPicker/>}
        
        </div>
            :<div className='absolute -top-32 right-0'>
            {showEmoji && <EmojiPicker/>}
        
        </div>
            }
            

            

            <button className='w-full bg-nav text-whit py-2 font-girloy_bold mt-8'>POST</button>
        </div>
    </div>
}
</>
  )
}

export default Moral