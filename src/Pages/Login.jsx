import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import UseAuth from "../Hooks/UseAuth";
import { Helmet } from "react-helmet-async";
import toast, { Toaster } from "react-hot-toast";
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
                onClick={handleGoogle}
                aria-label="Log in with Google"
                className="p-3 rounded-full hover:bg-[#8EA7E9]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
              </button>
              <button
                onClick={handleGitHub}
                aria-label="Log in with GitHub"
                className="p-3 rounded-full hover:bg-[#8EA7E9]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                </svg>
              </button>

              <button
                aria-label="Log in with Twitter"
                className="p-3 rounded-full hover:bg-[#8EA7E9]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-6 h-6 fill-current"
                >
                  <path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
