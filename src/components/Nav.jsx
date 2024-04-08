import { Link, NavLink } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";

const Nav = () => {
  const {user}=UseAuth();
  console.log(user);

  const n = "Sakib Sarker";
  const navLinks = (
    <div className="space-x-8">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-[#8EA7FF]  border lg:px-2 py-1 border-[#8EA7FF] rounded-md   font-semibold text-xl  "
            : "font-semibold text-xl  "
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-[#8EA7FF]  border px-2 py-1 border-[#8EA7FF] rounded-md   font-semibold text-xl  "
            : "font-semibold text-xl  "
        }
        to="/update"
      >
        Update Profile
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-[#8EA7FF]  border px-2 py-1 border-[#8EA7FF] rounded-md   font-semibold text-xl  "
            : "font-semibold text-xl  "
        }
        to="/about"
      >
        About Us
      </NavLink>
    </div>
  );
  return (
    <div className="navbar bg-base-100 mt-8 container mx-auto">
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
        <a className="btn btn-ghost text-xl">Sale~Home</a>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {
          user ? <>
             <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle   tooltip"
            data-tip={n}
          >
            <div className="w-10 rounded-full">
              <img className="rounded-xl"
                alt="Tailwind CSS Navbar component"
                src="https://i.ibb.co/9pt0k20/login.jpg"
              />
            </div>
          </div>
          <ul tabIndex={0} className="      dropdown-content bg-base-100    ">
            <Link to="/login">
              <li>
                <button className="btn btn-sm">Logout</button>
              </li>
            </Link>
          </ul>
        </div>
          </>:
            <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle   tooltip"
              data-tip={n}
            >
              <div className="w-10 rounded-full">
                <img className="rounded-xl"
                  alt="Tailwind CSS Navbar component"
                  src="https://i.ibb.co/9pt0k20/login.jpg"
                />
              </div>
            </div>
            <ul tabIndex={0} className="      dropdown-content bg-base-100    ">
              <Link to="/login">
                <li>
                  <button className="btn btn-sm">Login</button>
                </li>
              </Link>
            </ul>
          </div>
        }
      
      </div>
    </div>
  );
};

export default Nav;
