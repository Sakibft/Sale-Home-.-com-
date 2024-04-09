import UseAuth from "../Hooks/UseAuth";
import {Navigate} from 'react-router-dom'
 

const PrivateRoute = ({children}) => {
  const {user,loading}=UseAuth();
  if (loading) {
    return <div className="flex justify-center min-h-screen">
       <span className="loading loading-ring loading-xs text-[#8EA7FF]"></span>
       <span className="loading loading-ring loading-sm  text-[#8EA7FF]"></span>
       <span className="loading loading-ring loading-md  text-[#8EA7FF]"></span>
       <span className="loading loading-ring loading-lg  text-[#8EA7FF]"></span>
     </div>;
   }
  if(user){
    return children
  }
 
  return (
    <div>
      <Navigate to='/login'></Navigate>
    </div>
  );
};

export default PrivateRoute;