import React from "react";
import { team } from "../constants";
import { TeamCard } from "../components";

const Team = () => {
  return (
    <div>
      <header className="flex w-full lg:flex-row flex-col items-center gap-5 mr-auto ">
        <h1 className="lg:text-[48px] text-[38px] font-bold bg-green px-4 text-kanit ">
          Team
        </h1>
        <p className="text-xl lg:max-w-[50%] lg:text-start text-center font-normal">
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </p>
      </header>
      <div className="mt-10 flex flex-1 flex-wrap justify-between w-full">
        {team.map((items, index) => (
          <div key={index} className="lg:w-[420px] m-3 h-[420px] w-full flex items-center border border-r-4 border-b-8 rounded-[50px]  px-10  py-5 hover:bg-green duration-300 group">
            <TeamCard {...items} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
