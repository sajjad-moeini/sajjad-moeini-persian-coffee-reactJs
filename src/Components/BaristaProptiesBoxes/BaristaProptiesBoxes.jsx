import React, { useEffect } from 'react'
import './BaristaProptiesBoxes.css'
import store from '../../Store'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function BaristaProptiesBoxes() {
       useEffect(() => {
              AOS.init();
            }, [])
  return (
    <>
    <div className="row py-5 mx-auto" style={{width:'90vw'}}  >
       {store.baristaProperties.map((box,index)=>(
 <div className="col-12 col-md-6 col-lg-4" key={index} data-aos-duration={`${index+1}000`} data-aos="zoom-in">
 <div className='barista-property-container mx-auto'>
 <div className='barista-property-img-container d-flex-centering  w-100'>
        <img src={box.img} className='barista-property-img' alt="" />
 </div>
 <div className="d-flex">
        <div className='barista-num d-flex-centering'>{index+1}</div>
        <div className='barista-zero-num d-flex-centering'>0</div>
        <div className='barista-title d-flex align-items-end mb-2'>
        {box.title}
        </div>
 </div>
 <p className='text-secondary'>
       {box.text}
 </p>
 <a href="#" className='barista-property-box-btn mb-3'> بیشتر بخوانید <i className=' fa fa-arrow-left'></i></a>
 </div>
</div>
       ))}
      
    </div>
    </>
  )
}
