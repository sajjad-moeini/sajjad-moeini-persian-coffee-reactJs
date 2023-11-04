import React from 'react'
import './Login.css'
import {  useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useContext } from 'react'
import ProjectContext from '../../Context/Context'
import { useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import siteContext from '../../Context/Context'


export default function Login() {
  const MySwal = withReactContent(Swal)
  const context = useContext(siteContext)
const [userName,setUserName]=useState('')
const [passsword,setPassword]=useState('')
const navigate = useNavigate()
const allUsers = context.users
const {navlogo, setNavLogo} = context

const loginHandler =()=>{

  const filtredUser = []
allUsers.length > 0 && allUsers.forEach((user)=>{

  if(user.userName == userName && user.password == passsword){
    filtredUser.push(user)
    projectContext.setIsLogin(true)
    MySwal.fire({
      title: 
       `${user.name} عزیز خوش آمدید`
      ,
      icon:'success',
      confirmButtonText:'ادامه',
      confirmButtonColor:'#0d50b5', 
    }).then(res=>res.isConfirmed &&  navigate("/"))
   
    
  }else{
    MySwal.fire({
      title: 
       'اطلاعات نادرست می باشد'
      ,
      icon:'error',
      confirmButtonText:'عضویت',
      confirmButtonColor:'#0d50b5',
      showCancelButton: true,
      cancelButtonText:'ادامه'
    }).then(res=>res.isConfirmed && navigate('/account/register'))
  }
})
}


  useEffect(()=>{
    setNavLogo(`../${navlogo}`)
})


  return (
    <div className='login-container mx-auto my-5'>
<div className="d-flex justify-content-around align-items-center flex-column w-100 h-100">
       <input type="text" value={userName} onChange={(e)=>{setUserName(e.target.value)}} className='form-control ' placeholder='نام کاربری خود را وارد کنید'/>
       <input type="password" className='form-control ' value={passsword} onChange={(e)=>{setPassword(e.target.value)}} placeholder='رمز عبور خود را وارد کنید' />
       <button className='btn btn-primary align-self-end' onClick={()=>{loginHandler()}}>ورود</button>
</div>
    </div>
  )
}
