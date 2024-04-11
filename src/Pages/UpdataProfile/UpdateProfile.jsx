import { Helmet } from "react-helmet-async";
import UseAuth from "../../Hooks/UseAuth";
import ks from "../../assets/aldj.png"
import { useState } from "react";
const UpdateProfile = () => {
  const [name,setName]=useState()
  const {user}=UseAuth();
 
  const handleName = e => {
   setName(e.target.value);

  }
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>sale home-up/profile</title>
      </Helmet>

      <div className="w-full mx-auto my-12 p-6 bg-white shadow-md sm:px-8 sm:py-10 lg:px-12 lg:py-16 border  hover:border-blue-300 duration-1000 rounded-xl mb-40  mt-20">
        <div className="flex flex-col sm:flex-row justify-between space-x-0 sm:space-x-12">
          <div className="w-full sm:w-1/2 mb-8 sm:mb-0 ">
            {/* Left side form */}
            <h2 className="text-2xl text-center font-bold mb-6">Update your Profile</h2>
            <form>
              <div className="flex flex-col space-y-2 mb-4">
                <label htmlFor="username" className="block ">
                Name
                </label>
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none"
                  placeholder="Name"
                  type="text"
                  value={user?.displayName}
                  name="name"
                  onChange={handleName}
                />
                <label htmlFor="username" className="block ">
                Email
                </label>
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none"
                  placeholder="Email"
                  type="email"
                  value={user?.email}
                  name="email"
                />
                <label htmlFor="username" className="block ">
                Phot URL
                </label>
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none"
                  placeholder="PhotoURL"
                  type="text"
                  value={user?.photoURL}
                  name="photo"
                />
              </div>
           
              <button className="btn w-full rounded-lg bg-[#8EA7E9] px-6 py-2 font-medium text-white text-xl">
                Save Change
              </button>
            </form>
     
          </div>
          {/* Right side content */}
          <div className="w-full sm:w-1/2">
            <img src={ks} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
