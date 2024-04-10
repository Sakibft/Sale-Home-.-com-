import UseAuth from "../Hooks/UseAuth";
import {Navigate} from 'react-router-dom'
 

const PrivateRoute = ({children}) => {
  const {user} = UseAuth();
  const {loading} = UseAuth();
  if (loading) {
    return <div className="flex justify-center min-h-screen">
        <div className="w-10 h-10 animate-[spin_2s_linear_infinite] rounded-full border-8 border-dotted border-sky-600"></div>
     </div>;
   }

  if(user){
    return children;
    
  }
 
 
  return (
 
      <Navigate to='/login'></Navigate>
  );
};

export default PrivateRoute;