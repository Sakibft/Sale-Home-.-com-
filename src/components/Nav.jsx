import { Link, NavLink } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import { useState } from "react";
import ig from "../assets/alskd.png";
import { BiLogIn } from "react-icons/bi";

const Nav = () => {
  const [success, setSuccess] = useState();
  const [error, setError] = useState();
  const { user, logOut } = UseAuth();
  console.log(user);
  if (success) {
    return <Link to="/"></Link>;
  }
  console.log(success);
  console.log(error);

  console.log(user?.photoURL);
  // console.log(user);
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        setSuccess(result);
        console.log(result);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const navLinks = (
    <div className="space-x-8">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-white  lg:px-2 py-2 bg-[#8EA7FF] rounded-md p-3  font-semibold text-2xl  "
            : "font-semibold text-2xl  "
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-white  lg:px-2 py-2 bg-[#8EA7FF] rounded-md p-3  font-semibold text-2xl  "
            : "font-semibold text-2xl  "
        }
        to="/update"
      >
        Update Profile
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-white  lg:px-2 py-2 bg-[#8EA7FF] rounded-md p-3  font-semibold text-2xl  "
            : "font-semibold text-2xl  "
        }
        to="/profile"
      >
        Profile
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-white  lg:px-2 py-2 bg-[#8EA7FF] rounded-md p-3  font-semibold text-2xl  "
            : "font-semibold text-2xl  "
        }
        to="/about"
      >
        About Us
      </NavLink>
    </div>
  );
  return (
    <div className="navbar bg-base-100 mt-5 container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="  bg-white hover:bg-white lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className=" dropdown-content  z-[10]   rounded-box  w-28    bg-white flex flex-col justify-center items-center shadow-xl gap-y-1 p-1"
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[#8EA7FF]  border lg:px-2 py-1 border-[#8EA7FF] rounded-md   font-semibold md:text-xl  "
                    : "font-semibold md:text-xl  "
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[#8EA7FF]  border px-2 py-1 border-[#8EA7FF] rounded-md   font-semibold md:text-xl  "
                    : "font-semibold md:text-xl  "
                }
                to="/update"
              >
                Up-Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[#8EA7FF]  border px-2 py-1 border-[#8EA7FF] rounded-md   font-semibold md:text-xl  "
                    : "font-semibold md:text-xl  "
                }
                to="/profile"
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[#8EA7FF]  border px-2 py-1 border-[#8EA7FF] rounded-md   font-semibold md:text-xl  "
                    : "font-semibold md:text-xl  "
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
        <a className=" font-bold  ml-2 text-2xl">
          Sale <span className="text-[#8EA7FF]">~</span> Home 
        </a>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {/* dainami login logout */}

        {user ? (
          <div className="  flex justify-center items-center gap-2">
              <div className="pointer group relative mx-auto  flex   w-max justify-center">
              <div className="w-10 border hover:border-blue-500 rounded-full">
                  <img
                    className="rounded-full w-full"
                    src={user?.photoURL}
                    alt="nai"
                  />
                </div>
            {/* Hover Text */}
            <div className="absolute -bottom-12 cursor-pointer whitespace-nowrap opacity-0 duration-500 hover:hidden group-hover:-bottom-16 group-hover:opacity-100 z-10 ">
            <p className=" rounded-md bg-[#8EA7FF] text-white p-2" >
                    
                    {user?.displayName} 
                     </p>
                <span className="absolute -top-2 left-[50%] h-0 w-0 -translate-x-1/2 -rotate-[45deg] border-b-[20px] border-r-[20px] border-b-transparent border-r-[#8EA7FF]  shadow-[0px_0px_10px_0px_#8EA7FF]"></span>
            </div>
            {/* Hover button */}
        </div>
           
           
            <button
              onClick={handleLogOut}
              className="btn text-lg   bg-[#8EA7FF] text-white w-24 "
            >
               
              Logout 
              
            </button>
          </div>
        ) : (
         <Link to='/login'>
          <div className="dropdown dropdown-hover">
            <button className="btn w-24 bg-[#8EA7FF] text-white hover:bg-[#8EA7FF]">
              <BiLogIn className="text-lg" /> Login
            </button>
          </div>
         </Link>
        )}
      </div>
      <div>
        <div className="absolute left-0 w-40 mt-1 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Option 1
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Option 2
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Option 3
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
