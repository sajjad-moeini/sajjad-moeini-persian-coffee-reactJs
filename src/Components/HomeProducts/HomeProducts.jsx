import React, { useEffect } from 'react'
import './HomeProducts.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import store from '../../Store'
export default function HomeProducts() {
       useEffect(() => {
              AOS.init();
            }, [])
       return (
              <>
                     <div className="row mx-auto" style={{ width: '90%' }}>
                            {
                                   store.homeProducts.map((product, index) => (
                                          <div className="col-12 col-md-4 col-lg-3" key={index} data-aos="zoom-out">
                                                 <div className="home-product-img-container position-relative overflow-hidden">
                                                        <img src={product.img} className='img-fluid home-product-img' alt="" />
                                                        <div className=' position-absolute home-product-add-toCart text-light d-flex-centering'>
                                                               افزودن به سبد خرید
                                                        </div>
                                                        {
                                                               product.sale && <div className="home-product-sale-badge position-absolute rounded-pill px-3 py-1 text-light">
                                                                      اتمام
                                                               </div>
                                                        }

                                                 </div>
                                                 <div className="home-product-title">
                                                        {product.title}
                                                 </div>
                                                 <div className="home-product-stars-container">
                                                        {
                                                               product.fullStar.map((index) => (
                                                                      <i className=' fa fa-star home-product-stars' key={index}></i>
                                                               ))
                                                        }
                                                        {
                                                               product.halfStar.map((index) => (
                                                                      <i className=' fa fa-star home-product-stars' key={index}></i>
                                                               ))
                                                        }


                                                 </div>
                                                 <div className='home-product-price d-flex align-items-center'>
                                                        {
                                                               product.off ? (
                                                                      <>
                                                                      <div className='text-secondary text-decoration-line-through fs-5'>
                                                                      {product.price}تومان
                                                                      </div>
                                                                      <div className=' ms-2'>
                                                                             {product.oofPrice}تومان
                                                                      </div>
                                                                      </>
                                                               ): (
                                                                     ` ${product.price}تومان`
                                                               )
                                                        }
                                                 </div>
                                          </div>
                                   ))
                            }

                     </div>
              </>
       )
}
