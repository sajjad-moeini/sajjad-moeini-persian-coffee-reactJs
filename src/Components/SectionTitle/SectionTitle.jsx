import React from 'react'
import './SectionTitle.css'
export default function SectionTitle({subTitle,title,titleColor}) {
  return (
    <>
    <div className='section-title-container d-flex-centering flex-column'>
<div className='section-subTitle'>{subTitle}</div>
<div className='section-title' style={{color:titleColor}}>{title}</div>
<div className="border"></div>
    </div>
    </>
  )
}
