import { Link } from "react-router-dom";
import oidk from "../../assets/asdod.svg"
 
const ErrorPage = () => {
  return (
    <div>
     <div className="flex justify-center flex-col min-h-screen items-center">
 
        <img src={oidk} alt="" />
        <h1 className="text-sm mt-1 text-gray-400">Page is not found</h1>
    <Link to='/'>
    <button className="btn  bg-[#8EA7FF]  w-40 mt-1 text-lg font-semibold text-white">Go  Home</button></Link>
      </div>
    </div>
  );
};

export default ErrorPage;