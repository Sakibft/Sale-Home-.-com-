import { Helmet } from "react-helmet-async";
import UseAuth from "../../Hooks/UseAuth";
import ks from "../../assets/aldj.png";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
const UpdateProfile = () => {
  const { user,   updateUserProfile } = UseAuth();
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  console.log(name);
  console.log(photo);

  const handleSave = () => {
 updateUserProfile(name,photo)
 .then(()=>{
  toast.success('Successfully update!')
 })
 .catch(()=>{
  toast.error('here is some problem', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    }); 
 })
  };
  const handleform = e => {
    e.preventDefault()
  }

  return (
    <div className="container mx-auto">
      <div><Toaster/></div>
      <Helmet>
        <title>sale home-up/profile</title>
      </Helmet>

      <div className="w-full mx-auto my-12 p-6 bg-white shadow-md sm:px-8 sm:py-10 lg:px-12 lg:py-16 border-2  hover:border-[#8EA7FF] duration-1000 rounded-xl mb-40  mt-20">
        <div className="flex flex-col sm:flex-row justify-between space-x-0 sm:space-x-12">
          <div data-aos="fade-down"   data-aos-duration="1000" className="w-full sm:w-1/2 mb-8 sm:mb-0 ">
            {/* Left side form */}
            <h2  className="text-3xl text-center font-bold mb-6 animate__animated animate__pulse text-[#8EA7FF] "
             style={{animationDelay: '1s' }}
            >
              Update your Profile ❤
            </h2>
            <form onSubmit={handleform}>
              <div className="flex flex-col space-y-2 mb-4">
                <label htmlFor="username" className="block ">
                  Name
                </label>
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none"
                  placeholder="Name"
                  type="text"
                  value={name}
                  
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="username" className="block ">
                  Email
                </label>
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none"
                  placeholder="Email"
                  type="email"
                  value={user.email}
                  readOnly
                />
                <label htmlFor="username" className="block ">
                  Phot URL
                </label>
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none"
                  placeholder="PhotoURL"
                  type="text"
                  value={photo}
                  
                  onChange={(e) => setPhoto(e.target.value)}
                />
              </div>

              <button
                onClick={handleSave}
                className="btn w-full rounded-lg bg-[#8EA7E9] px-6 py-2 font-medium text-white text-xl"
              >
                Save Change
              </button>
            </form>
          </div>
          {/* Right side content */}
          <div  data-aos="fade-up"   data-aos-duration="1000" className="w-full sm:w-1/2">
            <img src={ks} alt="" />
          </div>
        </div>
      </div>
       
    </div>
  );
};

export default UpdateProfile;

 