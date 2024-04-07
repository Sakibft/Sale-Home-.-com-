import { createBrowserRouter } from "react-router-dom";
import Rot from "../Layout/Rot";
import ErrorPage from "../Pages/Errorpage/ErrorPage";
 
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Rot></Rot>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
{
  path:'/',
  element:<Home></Home>
}
    ]
  },
  
]);

export default router;