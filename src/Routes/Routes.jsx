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
  element:<UpdateProfile></UpdateProfile>
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
  element:<About></About>
},
{
  path:'/item/:id',
  element:<PrivateRoute>
    <Viewproperty></Viewproperty>
  </PrivateRoute>
}
    ]
  },
  
]);

export default router;