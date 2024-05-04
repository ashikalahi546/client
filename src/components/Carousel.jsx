import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

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
         <Slide/>
        </SwiperSlide>
        <SwiperSlide>
        <Slide/>
        </SwiperSlide>
        <SwiperSlide>
          <Slide/>
        </SwiperSlide>
      </Swiper>
     </div>
    </>
  );
}
