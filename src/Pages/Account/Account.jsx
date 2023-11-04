import React from 'react'
import './Account.css'
import { NavLink, Outlet } from 'react-router-dom'
import { useEffect } from 'react'
export default function Account() {
  useEffect(()=>{
    document.title ='حساب کاربری'
  })
  return (
    <>
    <div className="account-page-container">
    <div className="account-bg  h1 d-flex-centering text-light">
      حساب کاربری
    </div>
    <div className="row account-sections-container my-5">
       <NavLink to={'login'} className={(item)=>item.isActive ? ("col-6 d-flex-centering h5 account-sections-title  account-sections-title-active") :("col-6 d-flex-centering h5 account-sections-title  ")}>      
              ورود
       </NavLink>
       <NavLink to={'register'} className={(item)=>item.isActive ? ("col-6 d-flex-centering h5 account-sections-title  account-sections-title-active") :("col-6 d-flex-centering h5 account-sections-title  ")}>
              عضویت
       </NavLink>
    </div>
    <Outlet />
    </div>
    </>
  )
}
