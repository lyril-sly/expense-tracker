import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay } from "swiper/modules"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';

export default function Swip() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        className="mySwiper"
      >
        <SwiperSlide>Never let your expenses exceed your income, and watch where your
              money goes...</SwiperSlide>
        <SwiperSlide>Don’t ask how to budget money—ask why you want to budge</SwiperSlide>
        <SwiperSlide>Don't stay in bed unless You can make money in Bed</SwiperSlide>
        <SwiperSlide>THINK RICH</SwiperSlide>
        <SwiperSlide>Action takers are money makers</SwiperSlide>
        <SwiperSlide>You can make a million excuses or you can make a million dollars</SwiperSlide>
        <SwiperSlide>Money is like detol because it kills 99% problems</SwiperSlide>
        <SwiperSlide>Money isn't everything but, everything needs money</SwiperSlide>
        <SwiperSlide>Tracking your spending can
              help you manage your money well and make progress towards your
              goals</SwiperSlide>
      </Swiper>
    </>
  );
}