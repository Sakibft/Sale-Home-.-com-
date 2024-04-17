import { BsDot } from "react-icons/bs";
import { IoHome } from "react-icons/io5";
import ksd from "../assets/undraw_cabin_hkfr.svg";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { LiaPhoneSolid } from "react-icons/lia";
import { HiOutlineMail } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";

const Footer = () => {
  return (
    <div>
      <footer className="flex flex-col text-black">
        <div className="flex flex-col items-center justify-around gap-5 bg-gray-100  md:flex-row md:gap-0">
          <aside className="flex items-center justify-center gap-3 text-xl mt-3 ">
           
            <img className="w-44 mb-2" src={ksd} alt="" />
           
          </aside>
          <div>
            <h1 className="text-3xl text-center">Our Services</h1>
            <ul className="flex flex-col justify-center items-center">
              <li className="flex text-[#8EA7E9] underline">
                <a href="">Legal Guidance</a>
              </li>
              <li className="flex text-[#8EA7E9] underline">
                <a href="">Market Analysis</a>
              </li>

              <li className="flex text-[#8EA7E9] underline">
                <a href="">Property Valuation</a>
              </li>
              <li className="flex text-[#8EA7E9] underline">
                <a href="">Investment Analysis</a>
              </li>
              <li className="flex text-[#8EA7E9] underline">
                <a href="">Property Management</a>
              </li>
              <li className="flex text-[#8EA7E9] underline">
                <a href="">Portfolio Diversification</a>
              </li>
            </ul>
          </div>
          <nav className="text-lg">
            <ul className=" flex h-full items-center justify-center gap-5 ">
              <li className="cursor-pointer">
                <a className="flex gap-1">
               <h1 className="text-[20px]">Follow Us ~</h1>
               <FaArrowRightFromBracket className="mt-1 text-xl text-[#8EA7E9]" />

                </a>
              </li>
              <li className="cursor-pointer">
                <a>
                <FaFacebook className="text-[#8EA7E9] text-4xl"/>

                </a>
              </li>
              <li className="cursor-pointer">
                <a>
                <FaInstagram className="text-4xl"/>

                </a>
              </li>
              <li className="cursor-pointer">
                <a>
                <FaYoutube  className="text-[#8EA7E9] text-4xl" />

                </a>
              </li>
            </ul>
            <div className="mt-2">
            <h1 className="flex gap-2 ">Number : 01740228022 <LiaPhoneSolid className="mt-1" /> </h1>
            <h1 className="flex gap-2">email : ssar96540@gmail.com <HiOutlineMail className="mt-2" /> </h1>
            <h1 className="flex gap-2">Office : Dhaka,Narshingdi,Shibpur <SlLocationPin className="mt-1" /></h1>
            </div>
          </nav>
        </div>
        <aside className="bg-[#8EA7E9] py-5 text-center text-sm">
          <p className="text-white text-lg">&copy; 2024 Sale ~ home. All Rights Reserved.</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
