import React, { useState } from "react";
import { sendLoginData } from "../../AxiosHttps/axiosHttpRequests";
import { useNavigate } from "react-router-dom";
import { setAuth } from "../../store/authSlice";
import { useDispatch } from "react-redux";


function Login() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [successLoggedIn, setSuccessLoggedIn] = useState(true);
  const navigate = useNavigate()
  const dispatch =useDispatch()


  async function handleOnClick(e) {
    e.preventDefault();
    // console.log(`${email password }`);
    const { data } = await sendLoginData({
      email,
      password,
    });
    console.log(data.success);
    if (!data.success) {
      setSuccessLoggedIn(false);
    }
    // user.isAuth =true
    if(data.success){
      dispatch(setAuth({ user: data, isAuth: data.isAuth }));
      navigate('/')
    }
  }

  return (
    <>
      <h2 className="text-white text-3xl font-bold my-5 text-center">
        {" "}
        Please Login
      </h2>
      {!successLoggedIn ? <p>User Wrong Credentials</p> : <></>}
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
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
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
              required
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
