import React from "react";
import { services } from "../constants";
import ServicesCard from "../components/ServicesCard";

const Services = () => {
  return (
    <div className="flex w-full lg:justify-start flex-col" id="service">
      <header className="flex w-full lg:flex-row flex-col items-center gap-5 ">
        <h1 className="lg:text-[48px] text-[38px] font-bold bg-green px-4 text-kanit ">
          Services
        </h1>
        <p className="text-xl lg:max-w-[50%] lg:text-start text-center font-normal">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </header>
      <div className="mt-10 w-full flex flex-wrap flex-1 gap-7 justify-center lg:justify-start">
        {services.map((items, index ) => {
          return (
            <div
              key={index}
              className={` group w-[650px] h-[480px] md:h-[380px] flex-row flex  p-[40px] border rounded-[30px] border-b-4 border-r-4 ${items.colors} `}
            >
              <ServicesCard {...items} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
