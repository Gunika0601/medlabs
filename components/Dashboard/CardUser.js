import React, { useState } from "react";

export default function IndexPage(props) {
  console.log(props.data.result);
  const result = props.data.result;
  return (
    <>
      <div className="bg-gray-100 ">
        {/* Remove py-8 */}
        <div className="mx-auto container py-8">
          <div className="flex flex-wrap items-center lg:justify-between justify-center">
            {result?.map((item, index) => (
              <div key={index}>Hello</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
