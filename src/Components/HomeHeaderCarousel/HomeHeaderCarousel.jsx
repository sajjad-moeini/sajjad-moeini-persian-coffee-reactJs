import React from 'react'
import './HomeHeaderCarousel.css'
import Carousel from 'react-bootstrap/Carousel';
import store from '../../Store';
import SvgGen from '../SvgGen/SvgGen';

export default function HomeHeaderCarousel() {
  return (<>
    <div className='HomeHeaderCarousel-container overflow-hidden'>
      <Carousel fade className='h-100 w-100 overflow-hidden position-relative'>
        {store.homeCarouselInfos.map((item, index) => (
          <Carousel.Item className='home-carousel-item overflow-hidden' style={item.bg && { background: `${item.bg}` }} key={index}>
            {item.hasVideo && (<div className='header-video-container'>
              <video className='header-video' loop autoPlay muted>
                <source src="images/home/vid.mp4" />
              </video>

            </div>)}
            <div className="home-carousel-item-wrapper w-100 h-100  d-flex  align-items-center flex-column z-0">
              <img src={item.icon} className='img-fluid my-5' alt="" />
              <div className="carousel-title text-light  my-4">
                {item.title}
              </div>
              <p className='carousel-subtitle  text-center text-light my-4'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،</p>
              <button className=' home-carousel-btn text-light my-5'> بیشتر بخوانید </button>
              
                <SvgGen pos={'buttom'} />



              
            </div>

          </Carousel.Item>
        ))}


      </Carousel>
    </div>
  </>
  )
}
