import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext } from "react";
import {auth} from '../Firebase/Firebase.init'
const provider = new GithubAuthProvider();

const gProvider = new GoogleAuthProvider();
export const HomeContext = createContext();
const AuthContextComponent = ({children}) => {
  const createUser = (email,password)=>{
  return createUserWithEmailAndPassword(auth,email,password)
  }
  const loginUser = (email,password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  const loginWithGitHub = () => {
   return signInWithPopup(auth, provider)
  } 
  const loginWithGoogle = ()=>{
    return signInWithPopup(auth,gProvider)
  }

  const info = {
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