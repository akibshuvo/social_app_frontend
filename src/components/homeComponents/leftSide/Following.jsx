import React from 'react';
import i2 from '../../../allPictures/i2.jpeg';
import i3 from '../../../allPictures/i3.jpeg';
import i5 from '../../../allPictures/i5.jpeg';
import i7 from '../../../allPictures/i7.jpeg';
import i8 from '../../../allPictures/i8.jpg';

const Following = () => {
  const images = [i2, i3, i5, i7, i8, i2, i3, i5, i7, i8];

  return (
    <div>
      <div className='w-[280px] h-92 shadow-xl bg-page_color rounded-xl px-5 py-8'>
        <h2 className='text-textColor font-medium text-xl mb-3'>I'm Following</h2>
        <div className='flex flex-wrap gap-x-3'>
          {images.map((image, index) => (
            <div key={index} className='w-12 h-12 mt-4 rounded-full'>
              <img src={image} className='rounded-full' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Following;