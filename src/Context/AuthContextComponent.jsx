import { createContext } from "react";

 

export const HomeContext = createContext();
const AuthContextComponent = ({children}) => {
  const info = {name:'Sakib Sarker'};
  return (
    <HomeContext.Provider value={info}>
      {children}
    </HomeContext.Provider>
  );
};

export default AuthContextComponent;