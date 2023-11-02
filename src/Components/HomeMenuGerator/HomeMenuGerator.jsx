import React, { useEffect } from 'react'
import './HomeMenuGerator.css'
import store from '../../Store'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function HomeMenuGerator() {
       useEffect(() => {
              AOS.init();
            }, [])
       return (
              <>
                     <div className="row w-75 mx-auto py-5">
                            {store.homeMenuItems.map((item, index) => (
                                   <div className="col-12 col-md-6  home-menu-item-container mt-5" data-aos={((index + 1) % 2 == 0) ? 'fade-right':'fade-left'} key={index}>
                                          <div className="row w-100 px-4">
                                                 <div className="col-2">
                                                        <img src={item.img} className='img-fluid' alt="" />
                                                 </div>
                                                 <div className="col-10 d-flex-centering flex-column align-items-start">
                                                        <div className='d-flex w-100'>
                                                               <div className="home-menu-item-title text-light ">{item.title}</div>
                                                               <div className="home-menu-item-lines align-items-end text-light ">________________________________________________</div>
                                                               <div className='home-menu-items-price text-light ms-3 ms-md-0 d-flex-centering'>{`${item.price.toLocaleString()}` }تومان</div>
                                                        </div>
                                                        <div className="d-flex justify-content-between align-items-center w-100">
                                                               <div className='home-menu-item-infos'>
                                                                      {item.infos}
                                                               </div>
                                                               {
                                                                      item.new && <div className='text-light rounded-pill home-menu-item-badge py-1 px-2'>جدید</div>
                                                               }

                                                        </div>
                                                 </div>
                                          </div>
                                   </div>
                            ))}




                     </div>

              </>
       )
}
