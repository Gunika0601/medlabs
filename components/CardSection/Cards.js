import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

const Cards = () => {
  const [cardData, setCardData] = React.useState([]);

  const getData = async () => {
    const res = await fetch(
      `https://medlabs-backend.herokuapp.com/dashboardtests/9`
    );
    const data = await res.json();

    setCardData(data.result);
  };

  React.useEffect(() => {
    getData();
  }, []);

  const router = useRouter();

  return (
    <>
      <section className="text-gray-600 body-font w-full">
        <div className=" px-5 py-24 mx-auto">
          <div className="flex flex-wrap justify-center  ">
            {/* MAPPNG WILL START FROM HERE */}
            {/* {JSON.stringify(cardData, null, 2)} */}
            {cardData &&
              cardData.map((test, index) => (
                <div className="p-3 m-2 w-1/4 bg-indigo-200 transition  ease-in  hover:-translate-y-2 rounded-lg " key={index}>
                  <div className=" h-full  border-opacity-60overflow-hidden">
                    <Image
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={
                        test.testImage ||
                        "https://dummyimage.com/720x400/a1a1a1/000000"
                      }
                      alt="blog"
                      height={400}
                      width={720}
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        CATEGORY
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {test.testName}
                      </h1>
                      <p className="leading-relaxed mb-3">
                        {test.testDescription}
                      </p>
                      <div className="flex items-center flex-wrap">
                        <button
                          type="submit"
                          onClick={() =>{
                            router.push(`/search/${test.testName}`)
                          }}
                          className="inset-x-0 bottom-0 w-full mr-4 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Book Test
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;
