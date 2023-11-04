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
  const [users, setUsers] = useState([])
  const [isLogin, setIsLogin] = useState(false)
  const [navlogo, setNavLogo] = useState("images/home/logo.png")
  return (
    <>
      <siteContext.Provider value={{
        users,
        setUsers,
        isLogin,
        setIsLogin,
navlogo,
        setNavLogo,
      }}>
        <div className="context">
        <HeaderNav />
        {router}
        <Footer />
        </div>
      </siteContext.Provider>
    </>
  )
}

export default App
