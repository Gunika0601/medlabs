import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

function MyApp() {
  const router = useRouter();
  const [sidebar, setsidebar] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleClick = () => {
    router.push("/login/labsignup");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("por que maria", email, password);
    const res = await fetch("https://medlabs-backend.herokuapp.com/lablogin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    // const res = await axios
    //   .get("https://medlabs-backend.herokuapp.com/lablogin", {
    //     email: email,
    //     password: password,
    //   })
    //   .then((r) => r.json());
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="h-full bg-gradient-to-b from-sky-400 to-sky-200 w-full py-16 px-4">
      <div className="flex flex-col items-center justify-center">
        <div className="rounded lg:w-1/3  md:w-1/2 w-full p-10 my-36">
          <div className="mb-6">
            <p
              tabIndex={0}
              role="heading"
              aria-level={2}
              aria-label="Login to your account"
              className="text-2xl font-extrabold leading-6 text-gray-800"
            >
              SignUp for an Account
            </p>
            <p className="text-sm mt-4 font-medium leading-none text-gray-500">
              Already have an account?{" "}
              <button
                tabIndex={0}
                role="link"
                onClick={handleClick}
                aria-label="Sign up here"
                className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer"
              >
                Login here
              </button>
            </p>
          </div>
          <div>
            <lable className="text-sm font-medium leading-none text-gray-800">
              Email
            </lable>
            <input
              aria-label="enter email adress"
              role="input"
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
            />
          </div>
          <div className="mt-6  w-full">
            <lable className="text-sm font-medium leading-none text-gray-800">
              Password
            </lable>
            <div className="relative flex items-center justify-center">
              <input
                aria-label="enter Password"
                role="input"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
            </div>
          </div>
          <div className="mt-8">
            <button
              role="button"
              onClick={handleSubmit}
              aria-label="create my account"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 w-full text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyApp;
