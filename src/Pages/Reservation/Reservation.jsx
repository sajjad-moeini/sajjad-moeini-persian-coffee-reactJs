import React from 'react'
import './Reservation.css'
import SectionTitle from '../../Components/SectionTitle/SectionTitle'
export default function Reservation() {
  return (
    <>
        <div className="reservation-bg-sction d-flex-centering text-light h1">
   رزرویشن
    </div>
    <div className="row py-5 reservation-form-container">
       <div className="col-12 col-md-8">
              <SectionTitle title={'فرم رزروشن'} subTitle={''} titleColor={'black'} />
              <div className='w-75 me-auto ps-5'>
              <p className='text-secondary'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
              </p>
              </div>
              <div className="row px-5">
                     <div className="col-12 col-md-6">
                            <input type="text"  className="form-control mt-4" placeholder={'نام و نام خانوادگی'} />
                     </div>
                     <div className="col-12 col-md-6">
                            <input type="text" className="form-control mt-4"  placeholder={'شماره تماس'} />
                     </div>
                     <div className="col-12 col-md-6">
                            <input type="text" className="form-control mt-4"  placeholder={'تعداد افراد'} />
                     </div>
                     <div className="col-12 col-md-6">
                            <input type="date" className="form-control mt-4"  placeholder={'زمان'} />
                     </div>
                     <div className="col-12 col-md-6">
                            <input type="text" className="form-control mt-4"  placeholder={'زمان'} />
                     </div>
                     <div className="col-12 col-md-6">
                            <input type="text" className="form-control mt-4"  placeholder={'ایمیل'} />
                     </div>
                     <div className="col-12 ">
                            <textarea placeholder='توضیحات ...' className='form-control my-4' cols="30" rows="10"></textarea>
                     </div>
              </div>
              
       </div>
       <div className="col-12 col-md-4 overflow-hidden d-flex-centering">
              <img src="images/menu/Reservation-N-4.jpg" className='img-fluid' alt="" />
       </div>
    </div>
    </>
  )
}
