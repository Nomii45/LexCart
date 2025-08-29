

import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="font-sans">
      <div className="relative min-h-screen flex flex-col justify-center items-center 
      bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 animate-gradient-x px-4">
        <div className="relative w-full max-w-md sm:max-w-sm">
          {/* Background tilted cards */}
          <div className="hidden sm:block card bg-blue-400 shadow-lg w-full h-full rounded-3xl absolute transform -rotate-6"></div>
          <div className="hidden sm:block card bg-red-400 shadow-lg w-full h-full rounded-3xl absolute transform rotate-6"></div>

          {/* Form container */}
          <div className="relative w-full rounded-3xl px-6 py-6 sm:py-8 bg-gray-100 shadow-md">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-700 text-center">
              Login
            </h2>

            <form method="#" action="#" className="mt-8 space-y-6">
              {/* Email */}
              <input
                type="email"
                placeholder="Enter email"
                className="pl-3 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-md 
                hover:bg-blue-100 focus:bg-blue-100 focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
              />

              {/* Password */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  className="pl-3 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-md 
                  hover:bg-blue-100 focus:bg-blue-100 focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-500 text-lg"
                >
                  {showPassword ? "👁️" : "🙈"}
                </span>
              </div>

              {/* Forgot password */}
              <div className="flex items-center justify-end">
                <Link
                  to="/forgot-password"
                  className="underline text-sm text-gray-600 hover:text-gray-900"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Login button */}
              <button
                type="submit"
                className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105 text-sm sm:text-base"
              >
                Login
              </button>

              {/* Divider */}
              <div className="flex items-center text-center">
                <hr className="border-gray-300 border-1 w-full rounded-md" />
                <span className="block font-medium text-sm text-gray-600 w-full">
                  OR
                </span>
                <hr className="border-gray-300 border-1 w-full rounded-md" />
              </div>

              {/* Signup link */}
              <div className="flex justify-center items-center mt-4 text-sm sm:text-base">
                <span className="mr-2">Not a member?</span>
                <Link
                  to="/signup"
                  className="text-blue-500 transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                >
                  Create an account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
