import { useRouter } from "next/router";
import React from "react";

export default function Example() {
  const router = useRouter();
  const [input, setInput] = React.useState();

  React.useEffect(() => {
    if (router.query.index !== undefined) {
      setInput(router.query.index);
    }
  }, [router.query.index]);

  function handleClick() {
    if (input == undefined) {
      alert("Please Enter any Test");
    } else {
      router.push("/search/" + input);
    }
  }
  return (
    <div className="max-w-3xl">
      <div className="w-full rounded-lg">
        <label
          htmlFor="input"
          className="block mb-2 text-2xl font-medium text-white dark:text-gray-300 "
        >
          Search for Labs and Tests
        </label>
        <div className="relative mt-1">
          <input
            type="text"
            id="input"
            name="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[20rem] sm:w-[40rem] py-3  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="for e.g. Complete Blood Count"
          />
          <button
            type="submit"
            onClick={handleClick}
            className="flex absolute cursor-pointer inset-y-0 right-0 rounded-r-lg overflow-clip bg-blue-500 pl-3 items-center pr-3"
          >
            {/* <svg
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
            </svg> */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
