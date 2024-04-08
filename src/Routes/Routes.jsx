import { createBrowserRouter } from "react-router-dom";
import Rot from "../Layout/Rot";
import ErrorPage from "../Pages/Errorpage/ErrorPage";
 
import Home from "../Pages/Home/Home";
import UpdateProfile from "../Pages/UpdataProfile/UpdateProfile";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Rot></Rot>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
{
  path:'/',
  element:<Home></Home>
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
}
    ]
  },
  
]);

export default router;