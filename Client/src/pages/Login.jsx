import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import { Lock, Mail } from "lucide-react";


const Login = () => {
  // eslint-disable-next-line react-hooks/immutability
  document.title = "resuCraft | Login"
  
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="absolute top-5 left-5 lg:top-10 lg:left-10">
        <Logo />
      </div>
      <div className="flex h-screen w-full">
        <div className="w-full overflow-hidden hidden md:inline-block">
          <img
            className="w-[50vw] h-full object-center object-cover"
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/leftSideImage.png"
            alt="leftSideImage"
          />
        </div>

        <div className="w-full flex flex-col items-center justify-center">
          <form className="md:w-96 w-80 flex flex-col items-center justify-center">
            <h2 className="text-4xl text-green-500 font-medium">Sign in</h2>
            <p className="text-sm text-neutral-300/90 mt-3">
              Welcome back! Please sign in to continue
            </p>

            <button
              type="button"
              className="w-full mt-8 bg-neutral-500/10 flex items-center justify-center h-12 rounded-full"
            >
              <img
                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg"
                alt="googleLogo"
              />
            </button>

            <div className="flex items-center gap-4 w-full my-5">
              <div className="w-full h-px bg-neutral-500/90"></div>
              <p className="w-full text-nowrap text-sm text-neutral-300/90">
                or sign in with email
              </p>
              <div className="w-full h-px bg-neutral-500/90"></div>
            </div>

            <div className="flex items-center w-full bg-transparent border border-neutral-500/20 h-12 rounded-full overflow-hidden pl-6 gap-2">
              <Mail size={20} className="text-green-500" />
              <input
                type="email"
                placeholder="Email id"
                className="bg-transparent text-neutral-300/80 placeholder-neutral-500/80 outline-none text-sm w-full h-full"
                required
              />
            </div>

            <div className="relative w-full mt-2">
              <a
                className="absolute w-full flex justify-end text-sm text-green-500 underline pr-2"
                href="#"
              >
                Forgot password?
              </a>
              <div className="flex items-center mt-6 w-full bg-transparent border border-neutral-500/20 h-12 rounded-full overflow-hidden pl-6 gap-2">
                <Lock size={20} className="text-green-500" />
                <input
                  type="password"
                  placeholder="Password"
                  className="bg-transparent text-neutral-300/80 placeholder-neutral-500/80 outline-none text-sm w-full h-full"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 w-full h-11 rounded-full text-white bg-green-500 hover:opacity-90 transition-opacity"
            >
              Login
            </button>
            <p className="text-neutral-500/90 text-sm mt-4">
              Don’t have an account?{" "}
              <Link to={"/signup"} className="relative z-10 text-green-500 hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
      <div className="w-72 h-72 rounded-full blur-[15rem] bg-green-500 absolute right-0 bottom-0"></div>
    </div>
  );
};

export default Login;
