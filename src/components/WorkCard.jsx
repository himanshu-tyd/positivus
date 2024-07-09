import React, { useState } from "react";

const WorkCard = ({ number, title, desc }) => {

    const [toggle,setToggle]=useState(null)
    const handleToggle=(number)=>{
        setToggle(toggle===number ? null : number);
    }

  return (
    <div className="w-full h-auto items-center justify-center flex-col border p-[25px] md:p-[30px] lg:p-[50px]  rounded-[50px] mt-6">
      <div className="w-full items-center  flex gap-5 ">
        <span className="text-[38px] lg:text-[48px] font-semibold  ">{number}</span>
        <h1 className="text-[24px]  lg:text-[28px] font-ligth text-grotesk">{title}</h1>
        <div className="ml-auto">
          <button className={` w-[42px] h-[42px] rounded-full border-2 text-[28px] flex items-center justify-center hover:bg-green duration-150 hover:scale-125 origin-center ${number==toggle ? '-rotate-45 bg-green' : '-rotate-0'} `  } onClick={()=>{handleToggle(number)}}>
            <i class="ri-add-fill" ></i>
          </button>
        </div>
      </div>
      <div className={`${number==toggle ? 'block ' : ' hidden'} duration-150  leading-6 text-[18px] border-t-2 mt-5`}>
        <p className="mt-3">{desc}</p>
      </div>
    </div>
  );
};

export default WorkCard;
