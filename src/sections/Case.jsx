import React, { useState } from "react";
import { caseStudies } from "../constants";

const Case = () => {

  const [active,setActive]=useState(false);

  const handleActive=(title)=>{
    setActive(title);
  }


  return (
    <div className="w-full" id="cases">
      <header className="flex w-full lg:flex-row flex-col items-center gap-5 ">
        <h1 className="lg:text-[48px] text-[38px] font-bold bg-green px-4 text-kenit ">
          Case Studies
        </h1>
        <p className="text-xl lg:max-w-[50%] lg:text-start text-center font-normal ">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </header>
      <div className="flex w-full h-full flex-col lg:flex-row items-center justify-center p-[50px]  bg-dark mt-10 rounded-[30px] gap-5 ">
        {caseStudies.map((items, index) => (
          <div key={index} className="flex flex-col border-r-2 border-white lg:border-b-0 md:rounded-s-sm-none rounded-full  md:border-b-2  border-b-2 px-4 py-6" >
            <div className="w-full h-full" onClick={()=>setActive(items.title)}>
              <h1 className={`${active==items.title ? 'text-green':'text-white'} cursor-pointer font-light w-[70%] leading-6`}>{items.title}</h1>
            </div>
            <div className="flex gap-5 bottom-0  items-center mt-8 hover:scale-110 duration-150 " >
              <a href="#" className="text-green font-light text-grotesk ">{items.btnLabel}</a>
              <img src={items.icon} alt={items.btnLabel} />
            </div>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Case;
