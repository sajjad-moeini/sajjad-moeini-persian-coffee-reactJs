import React, { useEffect } from 'react'
import './HomeCoffeTools.css'
import store from '../../Store'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HomeCoffeTools() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
    <div className="row my-5">
       {store.coffeeTools.map((tool,index)=>(
     <div className="col-12 col-sm-6 col-md-3 d-flex-centering flex-column mt-5" data-aos={tool.aos} key={index} data-aos-duration="1500">
     <img src={tool.img} className='img-fluid' alt="" />
     <div className="h4 my-3">
     {tool.title}
     </div>
     <p className='text-center w-75 mx-auto text-secondary'>
     لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
     </p>
</div>
       ))}
  
    </div>
    </>
  )
}
