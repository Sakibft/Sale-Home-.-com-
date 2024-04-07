 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
 
const firebaseConfig = {
  apiKey: "AIzaSyB2f3_LLA-7957wZF3vJuvePWTjA39I91w",
  authDomain: "b9a9-cc073.firebaseapp.com",
  projectId: "b9a9-cc073",
  storageBucket: "b9a9-cc073.appspot.com",
  messagingSenderId: "358183756272",
  appId: "1:358183756272:web:457b6e195ed5950eff3d35"
};

 
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
