import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import {auth} from '../Firebase/Firebase.init'
const provider = new GithubAuthProvider();
const gProvider = new GoogleAuthProvider();
export const HomeContext = createContext();
const AuthContextComponent = ({children}) =>
 {
const  [user,setUser] = useState(null);
const [loading,setLoading] = useState(true);
 console.log(user);
  const createUser = (email,password)=>{
    setLoading(true);
  return createUserWithEmailAndPassword(auth,email,password)
  }
  const loginUser = (email,password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }
  const loginWithGitHub = () => {
    setLoading(true);
   return signInWithPopup(auth, provider)
  } 
  const loginWithGoogle = ()=>{
    setLoading(true);
    return signInWithPopup(auth,gProvider)
  }
  useEffect(()=>{
 onAuthStateChanged(auth,currentUser => {
  if(currentUser){
    setUser(currentUser)
    setLoading(false);
  }
 })
  },[])

  const info = {
    user,
    createUser,
     loginUser,
     loginWithGitHub,
     loginWithGoogle
    };
  return (
    <HomeContext.Provider value={info}>
      {children}
    </HomeContext.Provider>
  );
};

export default AuthContextComponent;