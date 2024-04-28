import image1 from "../assets/images/8592434717_72c0b3b6d0_h.jpg"
import image2 from "../assets/images/f0393368-800px-wm.jpg"
import image3 from "../assets/images/Rangamati_hanging_Bridge-2019-12-24-12-47-02.jpg"
import image4 from "../assets/images/Tea-2.jpg"

// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';


const Slider = () => {
    return (
        <>
        <Swiper navigation={true} modules={[Navigation]} loop={true} className="mySwiper">
          <SwiperSlide><div className="max-w-[1200px]"><img className="w-full h-[500px] rounded-lg" src={image1} alt="" /></div></SwiperSlide>
          <SwiperSlide><div className="max-w-[1200px]"><img className="w-full h-[500px] rounded-lg" src={image2} alt="" /></div></SwiperSlide>
          <SwiperSlide><div className="max-w-[1200px]"><img className="w-full h-[500px] rounded-lg" src={image3} alt="" /></div></SwiperSlide>
          <SwiperSlide><div className="max-w-[1200px]"><img className="w-full h-[500px] rounded-lg" src={image4} alt="" /></div></SwiperSlide>      
        </Swiper>
      </>
    );
};
export default Slider;