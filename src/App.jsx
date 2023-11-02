import { useState } from 'react'
import './App.css'
import Router from './Router'
import { useRoutes } from 'react-router-dom'
import siteContext from './Context/Context'
import './../node_modules/bootstrap/dist/css/bootstrap.rtl.css'
import './css/font-awesome.css'
import HeaderNav from './Components/HeaderNav/HeaderNav'
import Footer from './Components/Footer/Footer'
function App() {
  const router = useRoutes(Router)

  return (
    <>
      <siteContext.Provider value={''}>
        <HeaderNav />
        {router}
        <Footer />
      </siteContext.Provider>
    </>
  )
}

export default App
