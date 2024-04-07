import { Link } from "react-router-dom";

 
const ErrorPage = () => {
  return (
    <div>
     <div className="flex justify-center flex-col min-h-screen items-center">
        <h1 className="text-6xl playfair">440</h1> 
        <h1 className="mt-3 text-6xl playfair">Page is not fount </h1>
    <Link to='/'>
    <button className="btn  bg-[#23BE0A] w-40 mt-4 text-lg font-semibold text-white">Go  Home</button></Link>
      </div>
    </div>
  );
};

export default ErrorPage;