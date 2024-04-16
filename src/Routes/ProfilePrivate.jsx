import { Navigate } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";

 

const ProfilePrivate = ({children}) => {
  const {user,loading}=UseAuth();
  if(loading){
    return <div className="flex justify-center min-h-screen mt-60">
    <div className="w-10 h-10 animate-[spin_2s_linear_infinite] rounded-full border-8 border-dotted border-sky-600"></div>
 </div>;
  }
  if(user){
    return children;
  }
  return  <Navigate to='/login'></Navigate>
};

export default ProfilePrivate;