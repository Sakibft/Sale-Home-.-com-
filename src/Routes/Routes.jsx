import { createBrowserRouter } from "react-router-dom";
import Rot from "../Layout/Rot";
import ErrorPage from "../Pages/Errorpage/ErrorPage";
import FF from "../components/FF";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Rot></Rot>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
{
  path:'/ff',
  element:<FF></FF>
}
    ]
  },
  
]);

export default router;