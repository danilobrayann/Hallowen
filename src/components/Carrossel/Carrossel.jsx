import Fundo from "../../assets/Fundo.jpg";
import Fundo2 from "../../assets/Fundo2.jpg";
import Fundo3 from "../../assets/Fundo3.jpg";
import Fundo4 from "../../assets/Fundo4.jpg";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";

export default function carrossel() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img className="imagemCarrosel" src={Fundo2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="imagemCarrosel" src={Fundo} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="imagemCarrosel" src={Fundo3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="imagemCarrosel" src={Fundo4} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
