import UseAuth from "../Hooks/UseAuth";
import {Navigate}from 'react-router-dom'
 

const UpPrivate = ({children}) => {
  const {user} = UseAuth();
  if(user){
    return children;
  }
  return (
   <Navigate to='/login'></Navigate>
  );
};

export default UpPrivate;