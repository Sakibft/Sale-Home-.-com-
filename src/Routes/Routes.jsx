import { createBrowserRouter } from "react-router-dom";
import Rot from "../Layout/Rot";
import ErrorPage from "../Pages/Errorpage/ErrorPage";
 
import Home from "../Pages/Home/Home";
import UpdateProfile from "../Pages/UpdataProfile/UpdateProfile";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import About from "../Pages/About/About";
import Viewproperty from "../Pages/View Property/Viewproperty";
import PrivateRoute from "./PrivateRoute";
import AboutPrivate from "./AboutPrivate";
import UpPrivate from "./UpPrivate";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Rot></Rot>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
{
  path:'/',
  element:<Home></Home>,
  loader:()=>fetch('/fakeData.json')
},
{
  path:'/update',
  element:
  <UpPrivate>
    <UpdateProfile></UpdateProfile>
  </UpPrivate>
  
},
{
  path:'/login',
  element:<Login></Login>
},
{
  path:'/register',
  element:<Register></Register>
},
{
  path:'/about',
  element:
  <AboutPrivate>
    <About></About>
  </AboutPrivate>
},
{
  path:'/item/:id',
  element:
  <PrivateRoute>
    <Viewproperty></Viewproperty>
  </PrivateRoute>,
  loader:()=> fetch('/fakeData.json')
}
    ]
  },
  
]);

export default router;