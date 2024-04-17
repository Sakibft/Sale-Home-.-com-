import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";


const Rot = () => {
  return (
    <div className="md:p-0 p-2 overflow-x-hidden">
        <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
     
    </div>
  );
};

export default Rot;