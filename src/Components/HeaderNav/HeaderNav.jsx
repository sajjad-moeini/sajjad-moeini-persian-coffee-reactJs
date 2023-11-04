import React, { useContext, useState } from 'react'
import './HeaderNav.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import siteContext from '../../Context/Context';

export default function HeaderNav() {

       const [bgColor, setBgColor] = useState('')
       const [navItemColor, setNavItemColor] = useState('white')
       const [isShowSearchBar, setIsShowSearchBar] = useState(false)
       const context = useContext(siteContext)
       const { navlogo, setNavLogo } = context
       window.document.addEventListener('scroll', () => {
              if (window.scrollY > 0) {
                     setBgColor('white')
                     setNavItemColor('#000')
                     setNavLogo("images/home/logo1.png")

              } else {
                     setBgColor('transparent')
                     setNavItemColor('#fff')
                     setNavLogo("images/home/logo.png")
              }
       })
       return (
              <>
                     <Navbar fixed="top" className='header-nav-container' expand="lg" style={{ background: bgColor }} >
                            <div className="navbar-wrapper position-relative w-100 h-100 ">
                                   <Container className=' d-flex'>
                                          <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                          <Navbar.Collapse id="basic-navbar-nav">
                                                 <Navbar.Brand href="#home">
                                                        <img src={navlogo} className='img-fluid logo' alt="" />
                                                 </Navbar.Brand>
                                                 <Nav className="ms-auto d-flex align-items-center justify-content-around w-75">
                                                        <NavLink to={'/'} style={{ color: navItemColor }} className={(item) => (item.isActive ? 'headerNav-item-active' : 'headerNav-item')}>خانه</NavLink>
                                                        <NavLink to={'/menu'} style={{ color: navItemColor }} className={(item) => (item.isActive ? 'headerNav-item-active' : 'headerNav-item')}>منو</NavLink>
                                                        <NavLink to={'/reservation'} style={{ color: navItemColor }} className={(item) => (item.isActive ? 'headerNav-item-active' : 'headerNav-item')}>رزروشن</NavLink>
                                                        <NavLink to={'/account/login'} style={{ color: navItemColor }} className={(item) => (item.isActive ? 'headerNav-item-active' : 'headerNav-item')}>حساب کاربری</NavLink>
                                                        <NavLink to={'/cart'} style={{ color: navItemColor }} className={(item) => (item.isActive ? 'headerNav-item-active' : 'headerNav-item')}>
                                                               <i className='fa fa-shopping-cart'></i>
                                                        </NavLink>
                                                        <Link className={'headerNav-item'} style={{ color: navItemColor }} onClick={() => { setIsShowSearchBar(true) }}>
                                                               <i className='fa fa-search'></i>
                                                        </Link>
                                                        {isShowSearchBar && <div className=' position-absolute searchbar-container bg-light'>
                                                               <div className="row pt-3">
                                                                      <div className="col-10 ">
                                                                             <input type="text" className='form-control' placeholder='جستجو کنید ...' />
                                                                      </div>
                                                                      <div className="col-2 d-flex-centering ">
                                                                             <i className=' fa fa-remove searchbar-close-btn' onClick={() => { setIsShowSearchBar(false) }}></i>
                                                                      </div>
                                                               </div>
                                                        </div>}
                                                 </Nav>
                                          </Navbar.Collapse>
                                   </Container>
                            </div>
                     </Navbar>
              </>
       )
}
