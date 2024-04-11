import { Link, NavLink } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import { useState } from "react";
import ig from "../assets/alskd.png";
const Nav = () => {
  const [success, setSuccess] = useState();
  const [error, setError] = useState();
  if (success) {
    return <Link to="/"></Link>;
  }
  console.log(success);
  console.log(error);
  const { user, logOut } = UseAuth();
  // console.log(user);
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        setSuccess(result.user);
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
            ? "text-white  lg:px-2 py-1 bg-[#8EA7FF] rounded-md p-3  font-semibold text-2xl  "
            : "font-semibold text-2xl  "
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-white  lg:px-2 py-1 bg-[#8EA7FF] rounded-md p-3  font-semibold text-2xl  "
            : "font-semibold text-2xl  "
        }
        to="/update"
      >
        Update Profile
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-white  lg:px-2 py-1 bg-[#8EA7FF] rounded-md p-3  font-semibold text-2xl  "
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
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className=" dropdown-content  z-[1]   rounded-box flex w-48  justify-between"
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
                to="/about"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl">
          Sale <span className="text-[#8EA7FF]">~</span> Home{" "}
        </a>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {/* dainami login logout */}
        {
          user ? (
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className=" m-1">
             <div className="w-10 border hover:border-blue-500 rounded-full">
             <img  className="rounded-full w-full"
                  alt="nai"
                  src={user?.photoURL}
                />

             </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[10] menu shadow bg-base-100 rounded-box "
              >
                    <li className=" rounded-md bg-[#8EA7FF] text-white">
                  <p>{user?.email}</p>
                </li>
                <li>
                <button onClick={handleLogOut} className="btn btn-sm bg-[#8EA7FF] text-white w-16">Logout</button>
                </li>
            
               
              </ul>
            </div>
          ) : (
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className=" m-1">
            <div className="w-10">
            <img  className="rounded-full"
                    alt="Tailwind CSS Navbar component"
                    src="https://i.ibb.co/9pt0k20/login.jpg"/>
            </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[10] menu  shadow bg-base-100 rounded-box "
              >
                  <Link to="/login">
                  <li>
                   <button className="btn btn-sm bg-[#8EA7FF] text-white">Login</button>
                 </li>
                 </Link>
               
              </ul>
            </div>
          )
          //   <>
          //      <div className="dropdown dropdown-end mt-1">
          //   <div
          //     tabIndex={0}
          //     role="button"
          //     className=" tooltip"
          //     data-tip={user.email}
          //   >
          //     <div className="w-10 rounded-full">
          //       <img  className="rounded-full w-full"
          //         alt="nai"
          //         src={user?.photoURL || 'Nai'}
          //       />
          //     </div>
          //   </div>
          //   <ul tabIndex={0} className=" dropdown-content bg-base-100    ">

          //       <li>
          //         <button onClick={handleLogOut} className="btn btn-sm bg-[#8EA7FF] text-white">Logout</button>
          //       </li>

          //   </ul>
          // </div>
          //   </>:
          //     <div className="dropdown dropdown-end mt-1">
          //     <div
          //       tabIndex={0}
          //       role="button"
          //       className=" tooltip"
          //       data-tip={'Please login'}
          //     >
          //       <div className="w-10 rounded-full">
          //         <img className="rounded-full"
          //           alt="Tailwind CSS Navbar component"
          //           src="https://i.ibb.co/9pt0k20/login.jpg"
          //         />
          //       </div>
          //     </div>
          //     <ul tabIndex={0} className="      dropdown-content bg-base-100    ">
          //       <Link to="/login">
          //         <li>
          //           <button className="btn btn-sm bg-[#8EA7FF] text-white">Login</button>
          //         </li>
          //       </Link>
          //     </ul>
          //   </div>
        }
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
