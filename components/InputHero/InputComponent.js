import React from "react";

export default function Example() {
  const [input, setInput] = React.useState();

  const handleClick = () => {
    if (input == "") {
      alert("Please Enter any Test");
    } else {
      console.log("Por que maria", input);
    }
  };
  return (
    <div className="max-w-3xl">
      {/* <div className="mt-1 relative rounded-md py-5 px-8 sm:px-32">
        <input
          type="text"
          name="price"
          id="price"
          className="focus:ring-indigo-500 focus:border-indigo-500 pl-3 h-14 block w-80 sm:w-96 sm:text-sm rounded-md"
          placeholder="Search for Labs and Tests"
        />
      </div> */}
      <div className="w-full rounded-lg">
        <label
          htmlFor="input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Search for Labs and Tests
        </label>
        <div className="relative mt-1">
          <input
            type="text"
            id="input"
            name="input"
            onChange={(e) => setInput(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[20rem] sm:w-[40rem] py-3  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="for e.g. Complete Blood Count"
          />
          <button
            onClick={handleClick}
            className="flex absolute cursor-pointer inset-y-0 right-0 rounded-r-lg overflow-clip bg-blue-500 pl-3 items-center pr-3 pointer-events-none"
          >
            {/* <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
