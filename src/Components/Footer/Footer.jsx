import React from 'react'
import './Footer.css'
import store from '../../Store'
export default function Footer() {
       return (
              <>
                     <div className='footer'>
                            <div className="footer-wrapper mx-auto">
                                   <div className="row g-5">
                                          <div className="col-12 col-md-3  py-5">

                                                 <div className="footer-col-header text-light mb-4">
                                                        {store.footer.firstCol.title}
                                                 </div>
                                                 {
                                                        store.footer.firstCol.daysAndHours.map((day, index) => (
                                                               <div className='d-flex footer-open-time-box' key={index}>
                                                                      <div className="footer-item-day text-light d-flex-centering">{day.title}</div>
                                                                      <div className='footer-item-underline overflow-hidden text-secondary mx-2'>________________________________</div>
                                                                      {day.close ? (<div className='footer-item-close-time'>{day.hourText}</div>) : (
                                                                             <div className='footer-item-active-hours text-light d-flex-centering'>{day.hourText}</div>
                                                                      )}


                                                               </div>
                                                        ))
                                                 }

                                          </div>
                                          <div className="col-12 col-md-3  py-5">
                                                 <div className="footer-col-header text-light mb-4">
                                                        {store.footer.secondCol.title}
                                                 </div>

                                                 {
                                                        store.footer.secondCol.items.map((item, index) => (
                                                               <>

                                                                      <div className='footer-second-col-box'>
                                                                             <div className="footer-second-col-item-title cp text-light">
                                                                                    {item.title}
                                                                             </div>
                                                                             <div className="footer-second-col-item-subtitle my-2">
                                                                                    {item.date}
                                                                             </div>
                                                                      </div>
                                                               </>
                                                        ))
                                                 }

                                          </div>
                                          <div className="col-12 col-md-3 py-5">
                                                 <div className="footer-col-header text-light mb-4">
                                                 ارتباط با ما
                                                 </div>
                                                 <div className="footer-email text-light">
                                                        sajjadmoeini97@gmail.com
                                                 </div>
                                                 <div className="footer-phone text-secondary">
                                                        +98-9195805686
                                                 </div>
                                                 <div className="footer-location text-secondary">
                                                        Iran-Tehran-Gholhak
                                                 </div>
                                                 <div className="footer-github text-secondary">
                                                        GitHub : sajjad-moeni
                                                 </div>
                                                 <div className="footer-linkedin text-secondary">
                                                        Linkedin : sajjad-moeini
                                                 </div>
                                                 <div className="footer-telegram text-secondary">
                                                        Telegram : sajjad_moeini
                                                 </div>
                                                 <div className="footer-instagram text-secondary">
                                                        Instagram : sajjadmoeini7
                                                 </div>
                                                 <div className="footer-col-header text-light mt-5 mb-4">
                                                 آخرین مقاله استاندارد
                                                 </div>

                                                 <div className="footer-sendEmail d-flex">

                                                        <input type="text" className='form-control footer-email-input' placeholder='ایمیل خود را وارد کنید' />
                                                        <button className='footer-sendEmail-btn'>
                                                               <i className=' fa fa-angle-left '></i>
                                                        </button>
                                                 </div>

                                          </div>
                                          <div className="col-12 col-md-3 py-5">
                                          <div className="footer-col-header text-light mb-4">
                                          شعب 
                                                 </div>
                                                 <div>
                                                        <div className='footer-col-4-box-title text-light my-3'>
                                                        کافی شاپ راد
                                                        </div>
                                                        <div className='text-secondary'>تهران</div>
                                                        <div className='text-secondary'>قلهک - عطاری مقدم</div>
                                                 </div>
                                                 <div>
                                                        <div className='footer-col-4-box-title text-light my-3'>
                                                        کافی شاپ راد
                                                        </div>
                                                        <div className='text-secondary'>تهران</div>
                                                        <div className='text-secondary'>فرشته - مریم غربی</div>
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                     </div>
              </>
       )
}
