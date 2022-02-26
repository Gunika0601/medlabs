import React, { useState } from "react";
import { useRouter } from "next/router";

function MyApp() {
  const router = useRouter();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [labName, setLabName] = useState();
  const [repPassword, setRepPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("por que maria", email, password, labName, repPassword);
    if (password !== repPassword) {
      alert("Passwords do not match");
    } else {
      const res = await fetch(
        "https://medlabs-backend.herokuapp.com/signuplabs",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            labName,
          }),
        }
      );
      const data = await res.json();
      console.log(data);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/login/labsignin");
  };

  return (
    <div className="h-full bg-gradient-to-b from-sky-400 to-sky-200 w-full py-16 px-4">
      {/* <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 my-28">
          <p
            tabIndex={0}
            role="heading"
            aria-level={2}
            aria-label="Login to your account"
            className="text-2xl font-extrabold leading-6 text-gray-800"
          >
            Login to your account
          </p>
          <p className="text-sm mt-4 font-medium leading-none text-gray-500">
            Dont have account?{" "}
            <button
              tabIndex={0}
              onClick={handleClick}
              role="link"
              aria-label="Sign up here"
              className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer"
            >
              {" "}
              Sign up here
            </button>
          </p>
          <div className="w-full flex items-center justify-between py-5">
            <hr className="w-full bg-gray-400  " />
          </div>
          <div>
            <lable
              htmlFor="labname"
              className="text-sm font-medium leading-none text-gray-800"
            >
              Lab Name
            </lable>
            <input
              aria-label="enter labname"
              role="input"
              type="labname"
              name="labname"
              onChange={(e) => setLabName(e.target.value)}
              className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mb-2 mt-2"
            />
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
                name="password"
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
              className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
            >
              Create my account
            </button>
          </div>
        </div> */}
      <div className="max-w-xl p-3 mx-auto">
        <div className="mb-6">
          <p
            tabIndex={0}
            role="heading"
            aria-level={2}
            aria-label="Login to your account"
            className="text-4xl font-extrabold leading-6 text-gray-900"
          >
            Login to your account
          </p>
          <p className="text-sm mt-4 font-medium leading-none text-gray-500">
            Dont have account?{" "}
            <button
              tabIndex={0}
              onClick={handleClick}
              role="link"
              aria-label="Sign up here"
              className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer"
            >
              {" "}
              Sign up here
            </button>
          </p>
        </div>
        <form>
          <div className="mb-6">
            <label
              htmlFor="labName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your Lab Name
            </label>
            <input
              type="text"
              id="labName"
              name="labName"
              onChange={(e) => setLabName(e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Your Lab Name"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="repeat-password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Repeat password
            </label>
            <input
              type="password"
              id="repeat-password"
              name="repeat-password"
              onChange={(e) => setRepPassword(e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="terms"
                aria-describedby="terms"
                type="checkbox"
                className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="terms"
                className="font-medium text-gray-900 dark:text-gray-300"
              >
                I agree with the{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  terms and conditions
                </a>
              </label>
            </div>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register new account
          </button>
        </form>
      </div>
    </div>
  );
}

export default MyApp;
