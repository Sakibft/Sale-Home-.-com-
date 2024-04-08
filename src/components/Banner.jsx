import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../src/App.css'
 

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
  return (
    <div className='container mx-auto mt-12'>
     
       <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className='slide slide1'>
      </div>
        </SwiperSlide>
        <SwiperSlide> <div className='slide slide2'>
      </div></SwiperSlide>
        <SwiperSlide>
        <div className='slide slide3'>
      </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Banner;