import Image from "next/image";
import React from "react";

const Cards = () => {

  const [cardData, setCardData] = React.useState([])

  const getData = async () => {
    const res = await fetch(`https://medlabs-backend.herokuapp.com/dashboardtests/4`)
    const data = await res.json()
    console.log(data)
    setCardData(data.result)
  }

  React.useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <section className="text-gray-600 body-font w-full">
        <div className=" px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* MAPPNG WILL START FROM HERE */}
            {/* {JSON.stringify(cardData, null, 2)} */}
            {cardData && cardData.map((test, index) =>


              <div className="p-3 w-1/4 " key={index} >
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Image
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={test.testImage || "https://dummyimage.com/720x400/a1a1a1/000000"}
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
                      <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                        {test.link}
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          fill="none"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;
