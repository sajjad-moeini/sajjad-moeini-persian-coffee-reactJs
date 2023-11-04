import React from 'react'
import './Menu.css'
import HomeMenuGerator from '../../Components/HomeMenuGerator/HomeMenuGerator'
export default function Menu() {
  return (
    <>
    <div className="menu-bg-sction d-flex-centering text-light h1">
    منوی ما
    </div>
    <div className="menu-page-menu-container py-5 row">
              <HomeMenuGerator textcolor={'black'} />
       <div className="col-12 col-md-6">
       </div>
    </div>
    </>
  )
}
