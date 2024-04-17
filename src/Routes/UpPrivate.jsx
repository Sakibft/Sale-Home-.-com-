import UseAuth from "../Hooks/UseAuth";
import {Navigate}from 'react-router-dom'
 

const UpPrivate = ({children}) => {
  const {user,loading} = UseAuth();
  if(loading){
    return <div className="flex justify-center min-h-screen mt-60">
    <div className="w-10 h-10 animate-[spin_2s_linear_infinite] rounded-full border-8 border-dotted border-sky-600">
      
    </div>
 </div>;
  }
  if(user){
    return children;
  }
  return (
   <Navigate to='/login'></Navigate>
  );
};

export default UpPrivate;