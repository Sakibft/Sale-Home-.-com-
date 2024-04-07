import { useContext } from "react";
import { HomeContext } from "../Context/AuthContextComponent";

 

const FF = () => {
  const x = useContext(HomeContext);
  console.log(x);
  return (
    <div>
      <h1>ffffffffffffffffffffffffffffffff</h1>
    </div>
  );
};

export default FF;