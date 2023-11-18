
import Fundo from "../../assets/Fundo.jpg"
import Fundo2 from "../../assets/Fundo2.jpg"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';


export default function carrossel() {

  return (
    <>
   
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
   
        <SwiperSlide><img className="imagemCarrosel" src={Fundo2} alt="" /></SwiperSlide>
        <SwiperSlide><img className="imagemCarrosel" src={Fundo} alt="" /></SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  )
}