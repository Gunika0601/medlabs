import React from "react";
import InputComponent from "./InputComponent";

const InputHero = () => {
  return (
    <>
      <div className="h-[32rem] flex bg-center items-start bg-hero-bg bg-cover justify-center bg-slate-400">
        <div className="mt-44 max-w-3xl">
          <InputComponent />
        </div>
      </div>
    </>
  );
};

export default InputHero;
