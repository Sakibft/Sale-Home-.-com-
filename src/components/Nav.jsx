import { Link } from "react-router-dom";

 

const Nav = () => {
  const n = 'Sakib Sarker'
  const navLinks = <> 
  <li><Link to='/'>Home</Link></li>
  <li><Link to='/update'>Update Profile</Link></li>
  <li><Link to='/extra'>Extra</Link></li>
   
  </>
  return (
    <div className="navbar bg-base-100 mt-8 container mx-auto">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          {navLinks}
        </ul>
      </div>
      <a className="btn btn-ghost text-xl">Homely~Habitats </a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
       {navLinks}
      </ul>
    </div>
    <div className="navbar-end">
    <div className="dropdown dropdown-end">
      <div  tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar tooltip" data-tip={n}>
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://i.ibb.co/2tgKT7v/login.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="      dropdown-content bg-base-100    ">
       <Link to='/login'>
       <li>
         <button className="btn">Login</button>
        </li></Link>
        
       
      </ul>
    </div>
    </div>
  </div>
  );
};

export default Nav;