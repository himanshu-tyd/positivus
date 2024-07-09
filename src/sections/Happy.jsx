import React from "react";
import { banner } from "../assets/images";

const Happy = () => {
  return (
    <div className="w-full gap-5 items-center md:justify-center flex bg-slate-100 p-[30px] rounded-[30px] flex-col md:j lg:flex-row  ">
      <div className="flex flex-col justify-center gap-2">
        <h1 className="text-[32px] font-semibold">Let’s make things happen</h1>
        <p className="w-full lg:max-w-[70%] text-[18px]  ">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <div className="mt-5">
          <button className="text-white rounded-lg bg-dark px-3 py-5 hover:bg-green hover:text-dark duration-150 ease  ">
            Get your free proposal
          </button>
        </div>
      </div>
      <div className="hidden md:block">
        <img src={banner} alt="banner" className=" " />
      </div>
    </div>
  );
};

export default Happy;
