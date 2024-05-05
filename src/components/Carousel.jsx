import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import carousel1 from '/image/carousel1.jpg'
import carousel2 from '/image/carousel2.jpg'
import carousel3 from '/image/carousel3.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import Slide from "./Slide";

export default function Carousel() {
  return (
    <>
     <div className="container px-5 py-10 mx-auto">
     <Swiper
        // cssMode={true}
        spaceBetween={30}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        // mousewheel={true}
        // keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
         <Slide image={carousel1} text='Get Your Development Projects Done in minutes'/>
        </SwiperSlide>
        <SwiperSlide>
        <Slide image={carousel2} text='Get Your Graphics projects Design Projects in minutes '/>
        </SwiperSlide>
        <SwiperSlide>
          <Slide image={carousel3} text='Start Digital Marketing Campaigns up running'/>
        </SwiperSlide>
      </Swiper>
     </div>
    </>
  );
}
