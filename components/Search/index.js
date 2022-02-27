import React, { useState } from "react";
import Modal from "react-modal";
import BookaTest from "../../components/BookaTest/BookTestModal";
import useLocalStorage from "../../hooks/useLocalStorage";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Ordersum3 = ({ data }) => {
  const [object, setObject] = useLocalStorage("user", {});
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [labTestId, setLabId] = React.useState();
  const [testId, setTestId] = React.useState();
  const [userId, setUserId] = React.useState();

  function sabkaBaap(labTestId, testId, userId) {
    console.log({ labTestId, testId, userId });
    setLabId(labTestId);
    setTestId(testId);
    setUserId(userId);
    setIsOpen(true);
  }

  function openModal() {
    setIsOpen(true);
  }

  function merPyaraFunksan(id) {
    console.log(id);
  }

  function closeModal() {
    setIsOpen(false);
  }

  // console.log(data);
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <BookaTest
          closeModal={closeModal}
          labTestId={labTestId}
          testId={testId}
          userId={userId}
        />
      </Modal>
      {JSON.stringify(data, null, 2)}
      <div className="py-14 px-4 md:px-6 max-w-5xl  flex mx-auto">
        <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
          <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
            {/* CARD STARTS HERE */}
            {data?.result?.map((item, index) => {
              return (
                <div key={index}>
                  <div className="flex flex-col justify-start items-start bg-gray-50 hover:shadow-2xl px-4 py-4 md:py-6 md:p-6 xl:p-12 w-full">
                    <div className="mt-6 md:mt-0 flex justify-start flex-col md:flex-row  items-start md:items-center space-y-4  md:space-x-6 xl:space-x-8 w-full ">
                      <div className="w-full md:w-56">
                        <img
                          className="w-full hidden md:block"
                          src={item.testImage}
                          alt="dress"
                        />
                        <img
                          className="w-full md:hidden"
                          src={item.testImage}
                          alt="dress"
                        />
                      </div>
                      <div className="flex justify-between items-start w-full flex-col md:flex-row space-y-4 md:space-y-0">
                        <div className="w-full flex flex-col justify-start items-start space-y-8">
                          <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
                            {item.testName}
                          </h3>
                          <div className="flex justify-start items-start flex-col space-y-2">
                            {item.testDescription}
                            <p className="text-sm leading-none mt-5 text-gray-800">
                              <span className="text-gray-800 font-bold mr-1">
                                Home Collection:{" "}
                              </span>{" "}
                              {JSON.stringify(
                                item.homeCollection
                              ).toUpperCase()}
                            </p>
                            <p className="text-sm leading-none mt-5 text-gray-800">
                              <span className="text-gray-800 font-bold mr-1">
                                Price:{" "}
                              </span>{" "}
                              ₹{JSON.stringify(item.testPrice).toUpperCase()}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      onClick={() =>
                        sabkaBaap(item.labTestId, item.testId, item.userId)
                      }
                      className="flex justify-end space-x-8 items-start w-full"
                    >
                      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Book Your Test
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Ordersum3;
