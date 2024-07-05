import React, { useState } from 'react';
import { TbPhotoUp } from 'react-icons/tb';

const AddPicBtn = () => {

    const [images, setImages] = useState([])


  const handleImgUpload = (e) => {
    const file = Array.from(e.target.files)
    file.forEach((img)=>{
        if(img.type !== "image/jpeg" && img.type !== "image/jpg" && img.type !== "image/webp" && img.type !== "image/gif" ){
            console.log("Not allow Images")
        }
        const renderFile = new FileReader()
        renderFile.readAsDataURL(img);
        renderFile.onload = (rederImage) =>{
            setImages((images)=>[...images, rederImage.target.result])
        }

    })

  };

  console.log(images) 



  const handleButtonClick = () => {
    document.getElementById('fileInput').click();
  };

  return (
    <div className='bg-main_bg w-full h-96 mb-5 flex justify-center items-center mt-7 '>
        {images && images.length 
        ? <div className= {`${
            images.length == 1 
            ? "overflow-hidden w-full h-full"
            : images.length == 2
            ? "overflow-hidden w-full h-full grid grid-cols-2 gap-2"
            : images.length == 3
            ? "overflow-hidden w-full h-full grid grid-cols-3 gap-2"
            : images.length == 4
            ? "overflow-hidden w-full h-full grid grid-cols-2 gap-2"
            : "overflow-hidden"
        }`}>
        {
            images.map((item,index)=>(
                <img className='object-cover w-full h-full' key={index} src={item}/>
            ))
        }

        </div>
        : 
        <div className='text-center'>
        <input
          type="file"
          multiple
          accept="image/jpeg,image/jpg,image/png,image/webp,image/gif"
          id="fileInput"
          onChange={handleImgUpload}
          style={{ display: 'none' }}
        />
        <button
          onClick={handleButtonClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
        >
          <TbPhotoUp className='inline-block mr-2' />
          Add Photo/Videos
        </button>
        <p className='font-extralight mt-2'>or drag and drop</p>
      </div>
        }
      
    </div>
  );
};

export default AddPicBtn;