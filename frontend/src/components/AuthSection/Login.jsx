import React, { useState } from "react";

function Login() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleOnClick(e) {
    e.preventDefault();
  }

  return (
    <>
      <h2 className="text-white text-3xl font-bold my-5 text-center"> Please Login</h2>
      <form className=" my-2 shadow-md px-8 bg-slate-500 rounded-2xl mb-4">
        <div className="my-2 h-96 select-none items-center w-80">
          <div className="userName  flex flex-col my-2">
            <label className="text-xl text-gray-100 my-2" htmlFor="username">
              Enter Your Username
            </label>
            <input
              className="px-2 py-3 rounded-xl outline-none border-none text-xl focus:bg-gray-200"
              type="text"
              id="username"
              placeholder="Username"
            />
          </div>
          <div className="passowrd flex flex-col my-2">
            <label className="text-xl text-gray-100 my-2" htmlFor="password">
              Enter Your Password
            </label>
            <input
              className="px-2 py-3 rounded-xl outline-none border-none text-xl focus:bg-gray-200"
              id="password"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="ShowPassowrd flex items-center">
            <input
              id="showPassword"
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              className="w-4 h-4 mr-2 bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
              value={showPassword}
              onChange={() => setShowPassword((prev) => !prev)}
            />
            <label
              className="text-x text-gray-100 my-2 "
              htmlFor="showPassword"
            >
              Show Password
            </label>
          </div>
          <button
            type="submit"
            onClick={handleOnClick}
            className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded-full my-2"
          >
            Login
          </button>
          <p className="text-center text-yellow-300 text-x font-semibold">
            Please Keep your Credentials Safe.
          </p>
        </div>
      </form>
    </>
  );
}

export default Login;
