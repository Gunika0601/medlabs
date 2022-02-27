import React, { useState } from "react";
import axios from "axios";
import useRouter from "next/router"
export default function Example({ labId, closeModal }) {
  const [testName, setTestName] = useState();
  const [testPrice, setTestPrice] = useState();
  const [testDescription, setTestDescription] = useState();
  const [homeCollection, setHomeCollection] = useState(false);
  const [testImage, setTestImage] = useState();

  // const [labTestId, setLabTestId] = useState();
  const labTestId = parseInt(labId);

  // const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const res = await fetch(
    //   "https://medlabs-backend.herokuapp.com/addlabtests",
    //   {
    //     method: "POST",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       testName: testName,
    //       testPrice: testPrice,
    //       testDescription: testDescription,
    //       homeCollection: homeCollection === "true" ? true : false,
    //       testImage: testImage,
    //       labTestId,
    //     }),
    //   }
    // );
    const res = await axios({
      method: "post",
      url: "https://medlabs-backend.herokuapp.com/addlabtests",
      data: {
        testName: testName,
        testPrice: parseInt(testPrice),
        testDescription: testDescription,
        homeCollection: homeCollection === "true" ? true : false,
        testImage: testImage,
        labTestId: parseInt(labTestId),

      },

    });
    const data = await res.data.data;
    closeModal()

  };

  return (
    <>
      <div className="max-w-5xl">
        <div className="md:grid md:grid-cols-4 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg flex font-medium leading-6 text-gray-900">
                Add Lab Test
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-3">
            <form action="#" method="POST">
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="testName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Test Name
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          Name
                        </span>
                        <input
                          type="text"
                          name="testName"
                          id="testName"
                          onChange={(e) => setTestName(e.target.value)}
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder="Complete Blood Count"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="testPrice"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Test Price
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          ₹
                        </span>
                        <input
                          type="text"
                          name="testPrice"
                          id="testPrice"
                          onChange={(e) =>
                            setTestPrice(parseInt(e.target.value))
                          }
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder="399"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="description"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                      >
                        Test Description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        onChange={(e) => setTestDescription(e.target.value)}
                        rows="4"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Leave a comment..."
                      ></textarea>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="homeCollection"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Home Collection
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <div className="flex items-center justify-start">
                          <input
                            type="radio"
                            name="homeCollection"
                            id="true"
                            value="true"
                            className="mr-1"
                            onChange={(e) => setHomeCollection(e.target.value)}
                          />{" "}
                          <span className="mr-10">True</span>
                          <input
                            type="radio"
                            name="homeCollection"
                            id="false"
                            value="false"
                            className="mr-1"
                            onChange={(e) => setHomeCollection(e.target.value)}
                          />{" "}
                          False
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="testImage"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Test Image
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          Optional
                        </span>
                        <input
                          type="text"
                          name="testImage"
                          id="testImage"
                          onChange={(e) => setTestImage(e.target.value)}
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder="Paste Your Image Link Here"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="inline-flex mr-4 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit
                  </button>
                  <button
                    type="submit"
                    onClick={closeModal}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Close
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
