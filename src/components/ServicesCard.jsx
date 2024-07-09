import React from "react";
import { arrov } from "../assets/images";

const ServicesCard = ({ imgURL, title, btn ,titleColor }) => {
  return (
    <div className="w-full flex-col  ">
        <div className=" w-[40%] h-[30%]">
            <h1 className={`text-[24px] lg:text-[28px] font-bold capitalize bg-${titleColor} `}>{title}</h1>
        </div>
        <div className="w-full flex justify-end relative mt-6 h-[30%]">
            <img src={imgURL} height={140} className="w-44 md:w-52 absolute top-0 bottom-0 "/>
        </div>
        <div className="w-full items-center justify-start flex pt-10 h-[30%]">
            <img src={arrov} alt="arrow" className="group-hover:origin-center group-hover:rotate-90 duration-200
             w-[48px] h-[48px] px-3 py-3 bg-black rounded-full hover:origin-center rotate-6 "/>
            <div className='px-5 py-2 border rounded-lg ml-3 hover:bg-black duration-150 hover:text-white'><button>{btn}</button></div>
        </div>
    </div>
  );
};

export default ServicesCard;