import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import UseAuth from "../Hooks/UseAuth";
import { Helmet } from "react-helmet-async";
import toast, { Toaster } from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { AiFillGoogleCircle } from "react-icons/ai";
import { RiFacebookCircleLine } from "react-icons/ri";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [googleLogin,setGoogleLogin]=useState("");
  const [googleError,setGoogleError]=useState("");
  const [githublogin,setGithubLogin]=useState("");
  const [githuberror,setGithubError]=useState("");
  const { loginUser, loginWithGitHub, loginWithGoogle } = UseAuth();
  console.log(error);
  console.log(success);
  // email and password
  if (success) {
    toast.success('Successfully Login')
  }
  if (error) {
    toast.error(error); 
  }
  // google
  if(googleLogin){
    toast.success('Successfully login with google'); 
  }
  if(googleError){
    toast.error(error); 
  }
  //  github 
  if(githublogin){
    toast.success('Successfully login with github'); 
  }
  if(githuberror){
    toast.success( githuberror); 
  }

  console.log(loginUser);
  const handleLogin = (e) => {
    // login
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    setError("");
    setSuccess("");
    loginUser(email, password)
      .then((result) => {
        setSuccess(result);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  // loginWithGitHub
  const handleGitHub = () => {
    loginWithGitHub()
      .then((result) => {
         setGithubLogin(result.user);
      })
      .catch((error) => {
         setGithubError(error.message);
      });
  };
  // loginWithGoogle
  const handleGoogle = () => {
    loginWithGoogle()
      .then((result) => {
        setGoogleLogin(result.user);
      })
      .catch((error) => {
        setGoogleError(error.message);
      });
  };

  return (
    <div>
      <div><Toaster/></div>
      <Helmet>
        <title>sale home | login</title>
      </Helmet>
      <div data-aos="fade-up"  data-aos-duration="1000" className="container mx-auto flex  h-[700px] items-center justify-center mb-10 mt-4 border hover:border-blue-300 duration-1000 rounded-2xl shadow-xl">
        <div className=" w-full overflow-hidden rounded-xl   flex justify-center items-center   lg:h-[80%] ">
          {/* input side  */}
          <div className="flex w-full flex-col justify-center bg-white py-10 lg:w-[60%]">
            <h2  data-aos="fade-down"  data-aos-duration="1000" className="pb-8 text-center text-3xl font-bold text-[#8EA7E9]">
              Login Now !
            </h2>
            <form
              onSubmit={handleLogin}
              className="flex  w-full flex-col items-center justify-center gap-4"
            >
              <input
                className="w-[80%] rounded-lg border border-[#8EA7E9] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]"
                type="email"
                placeholder="Email"
                name="email"
              />
              <div className="w-[80%] rounded-lg border border-[#8EA7E9] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%] flex justify-between">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                />
                <div>
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="z-10   "
                  >
                    {showPassword ? (
                      <IoMdEye
                        className="
                text-gray-500 text-lg mt-1"
                      />
                    ) : (
                      <IoMdEyeOff
                        className="
                text-gray-500 text-lg mt-1"
                      />
                    )}
                  </span>
                </div>
              </div>

              <p className="text-[14px] text-gray-400">
                Do not have an account ?
                <Link
                  to="/register"
                  className="text-[#8EA7E9] underline ml-1  "
                >
                  Register
                </Link>
              </p>

              <button className="btn w-[80%] rounded-lg bg-[#8EA7E9] px-6 py-2 font-medium text-white md:w-[60%] text-xl">
                Login
              </button>
            </form>
            <div className="flex items-center pt-4 space-x-2">
              <div className="flex-1 h-px bg-gray-300"></div>
              <p className="text-sm text-[#8EA7E9]">
                Login with social accounts
              </p>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>
            {/* Social icons */}
            <div className="flex justify-center space-x-6 mt-3">
            <button
                onClick={handleGitHub}
                aria-label="Log in with GitHub"
                className="p-2 rounded-full hover:bg-[#8EA7E9]"
              >
               <VscGithub className="text-[#8EA7E9] hover:text-white text-3xl" />
              </button>
              <button
                onClick={handleGoogle}
                aria-label="Log in with Google"
                className="p-2 rounded-full hover:bg-[#8EA7E9]"
              >
                <AiFillGoogleCircle className="text-[#8EA7E9] hover:text-white text-3xl"   />
              </button>
           

              <button
                aria-label="Log in with Twitter"
                className="p-3 rounded-full hover:bg-[#8EA7E9]"
              >
                <RiFacebookCircleLine className="text-[#8EA7E9] hover:text-white text-3xl"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
