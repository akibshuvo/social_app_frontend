import React from 'react';
import s1 from '../../../../allStoriesPic/s1.jpg';
import s2 from '../../../../allStoriesPic/s2.jpg';
import s3 from '../../../../allStoriesPic/s3.jpg';
import s4 from '../../../../allStoriesPic/s4.jpg';
import s5 from '../../../../allStoriesPic/s5.jpg';

import i2 from '../../../../allPictures/i2.jpeg';
import i3 from '../../../../allPictures/i3.jpeg';
import i5 from '../../../../allPictures/i5.jpeg';
import i7 from '../../../../allPictures/i7.jpeg';
import i8 from '../../../../allPictures/i8.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';


const Index = () => {
  const slides = [
    { background: s1, profile: i2 },
    { background: s2, profile: i3 },
    { background: s3, profile: i5 },
    { background: s4, profile: i7 },
    { background: s5, profile: i8 },
    { background: s1, profile: i2 },
    { background: s2, profile: i3 },
    { background: s3, profile: i5 },
    { background: s4, profile: i7 },
    { background: s5, profile: i8 },
    

  ];

  return (
    <div className="w-[800px] h-64">
      <Swiper
        spaceBetween={10}
        slidesPerView={5}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              style={{ backgroundImage: `url(${slide.background})` }}
              className="bg-no-repeat bg-cover bg-center w-full h-64 rounded-xl shadow-2xl flex items-end p-3"
            >
              <img className="w-14 h-14 rounded-full border-2" src={slide.profile} alt={`Profile ${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Index;