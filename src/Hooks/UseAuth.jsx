import { useContext } from "react";
import { HomeContext } from "../Context/AuthContextComponent";

 

const UseAuth = () => {
  const all = useContext(HomeContext)
  return all ;
};

export default UseAuth;