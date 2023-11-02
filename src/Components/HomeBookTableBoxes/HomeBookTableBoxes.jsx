import React, { useCallback, useState } from 'react'
import './HomeBookTableBoxes.css'
import store from '../../Store'
import '@natscale/react-calendar/dist/main.css';
import { Calendar } from '@natscale/react-calendar';


export default function HomeBookTableBoxes({type}) {
       const [isShownOptions, setIsShownOptions] = useState(false)
       const [calenderValue, setCalenderValue] = useState();
       const date = new Date()
       
       const onChangeCalender = useCallback(
              (value) => {
                     setCalenderValue(value);
              },
              [setCalenderValue],
       );
       return (
              <>
                   {
                     type == 'persons' && (
                     <div className="col-12 col-md-3 home-booktable-box position-relative mx-auto">
                     <div className="row cp" onClick={() => { setIsShownOptions((prev => (!prev))) }}>
                            <div className="col-10 home-booktable-box-title">1 نفر</div>
                            <div className="col-2 d-flex-centering">
                                   <i className='fa fa-users home-booktable-box-icon '></i>
                            </div>
                     </div>
                     {
                            isShownOptions && (<div className=' position-absolute home-booktable-box-options '>
                                   {store.homeBookTablePersonCount.map((item, index) => (
                                          <div className='home-booktable-box-option px-2' key={index}>
                                                 {item}
                                          </div>
                                   ))}

                            </div>)
                     }
              </div>)
                   }  
                   {
                     type == 'date' && (
                            <div className="col-12 col-md-3 home-booktable-box position-relative mx-auto">
                            <div className="row cp" onClick={() => { setIsShownOptions((prev => (!prev))) }}>
                                   <div className="col-10 home-booktable-box-title">{`${date.getMonth()} . ${date.getDate()} . ${date.getFullYear()}`}</div>
                                   <div className="col-2 d-flex-centering">
                                          <i className='fa fa-calendar home-booktable-box-icon '></i>
                                   </div>
                            </div>
                            {
                                   isShownOptions && (<div className=' position-absolute home-booktable-box-options-calender '>
                                          <div className='w-100 mx-auto' >
                                          <Calendar value={calenderValue} onChange={onChangeCalender} />
                                          </div>

                                   </div>)
                            }
                     </div>
                     )
                   }
                    
                    {type=='time' && (
                     <div className="col-12 col-md-3 home-booktable-box position-relative mx-auto">
                            <div className="row cp" onClick={() => { setIsShownOptions((prev => (!prev))) }}>
                                   <div className="col-10 home-booktable-box-title">7:00 ب.ظ</div>
                                   <div className="col-2 d-flex-centering">
                                          <i className=' fa fa-clock-o home-booktable-box-icon '></i>
                                   </div>
                            </div>
                            {
                                   isShownOptions && (<div className=' position-absolute home-booktable-box-options '>
                                          {store.homeBookTableTimes.map((item, index) => (
                                                 <div className='home-booktable-box-option px-2' key={index}>
                                                        {item}
                                                 </div>
                                          ))}

                                   </div>)
                            }
                     </div>
                    )}

                     

              </>
       )
}
