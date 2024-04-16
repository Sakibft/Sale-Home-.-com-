 
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../src/App.css'
 

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Banner = () => {
  return (
    <div data-aos="zoom-in" data-aos-duration="1000" className='container mx-auto mt-8'>
     
       <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={
          {delay:3000}
        }
        navigation={true}
        modules={[Navigation,Autoplay,Pagination]}
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