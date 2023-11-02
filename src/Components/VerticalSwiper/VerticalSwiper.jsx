import React, { useRef } from 'react'
import { Swiper, SwiperSlide, } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination,Autoplay } from 'swiper/modules';
import './VerticalSwiper.css'
import store from '../../Store';
export default function VerticalSwiper() {
       const progressCircle = useRef(null);
       const progressContent = useRef(null);
       const onAutoplayTimeLeft = (s, time, progress) => {
         progressCircle.current.style.setProperty('--progress', 1 - progress);
         progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
       };
  return (
    <>
     <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
        modules={[Autoplay,Pagination]}
        className="mySwiper"
      >
       {
              store.homeVerticalSwiper.map((img,index)=>(
<SwiperSlide key={index}>
<img src={img} className='img-fluid' alt="" />
</SwiperSlide>
              ))
       }
        
        <div className="autoplay-progress " slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
        
      </Swiper>
    </>
  )
}
