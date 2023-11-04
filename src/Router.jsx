import Home from "./Pages/Home/Home";
import Menu from "./Pages/Menu/Menu";
import Reservation from "./Pages/Reservation/Reservation";
import Account from "./Pages/Account/Account"
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"
const Router = [
       {path:'/',element:<Home />},
       {path:'/menu',element:<Menu />},
       {path:'/reservation',element:<Reservation />},
       { path: '/account' , element: <Account /> , children:[
              { path: 'login' , element: <Login />},
              { path: 'register' , element: <Register />},
       ]},
       
]
export default Router