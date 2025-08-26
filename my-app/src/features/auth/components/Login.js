import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="bg-gray-100 min-h-screen flex justify-center items-center px-10">
      <div className="bg-[#dfa674] rounded-2xl flex flex-col md:flex-row max-w-4xl w-full p-8 md:p-10 shadow-lg">
        
        {/* Left side form */}
        <div className="md:w-1/2 md:px-8 space-y-6">
          <h2 className="font-bold text-3xl text-[#002D74]">Login</h2>
          <p className="text-sm text-[#002D74]">
            If you’re already a member, easily log in now.
          </p>

          <form className="flex flex-col gap-5">
            <input
              className="p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#002D74]"
              type="email"
              name="email"
              placeholder="Email"
            />

            {/* Password Input */}
            <div className="relative">
              <input
                className="p-3 rounded-xl border w-full focus:outline-none focus:ring-2 focus:ring-[#002D74]"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
              />
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="gray"
                  onClick={() => setShowPassword(false)}
                  className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="gray"
                  onClick={() => setShowPassword(true)}
                  className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.359 11.238C12.086 12.302 10.27 13 8 13c-5 0-8-5-8-5s.939-1.721 2.641-3.238" />
                  <path d="M10.79 12.912l-1.614-1.615A3.5 3.5 0 0 1 4.702 7.57" />
                </svg>
              )}
            </div>

            <button
              className="bg-[#002D74] text-white py-3 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium"
              type="submit"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <p className="mx-2 text-sm text-gray-600">OR</p>
            <hr className="flex-grow border-gray-300" />
          </div>

          <p className="text-sm text-[#002D74] cursor-pointer hover:underline">
            Forgot password?
          </p>

          {/* Register Button */}
          <div className="flex justify-between items-center mt-6">
            <p className="text-sm">Don’t have an account?</p>
           <Link to="/signup" >
            <button className="text-white bg-[#002D74] hover:bg-[#206ab1] rounded-xl py-2 px-5 hover:scale-110 font-semibold duration-300">
              Signup
            </button>
            </Link>
          </div>
        </div>

        {/* Right side image */}
        <div className="md:block hidden w-1/2 p-4">
          <img
            className="rounded-2xl object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1552010099-5dc86fcfaa38"
            alt="login form"
          />
        </div>
      </div>
    </section>
  );
}

export default Login;
