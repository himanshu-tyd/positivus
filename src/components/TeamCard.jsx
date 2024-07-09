import React from "react";

const TeamCard = ({ icon, imgURL, name, job, desc }) => {
  return (
    <div className="flex flex-col ">
      <div className="w-full flex ">
        <div>
          <img src={imgURL} alt={name} />
        </div>
        <div className="flex justify-end flex-col ml-5">
          <h1 className="text-[24px] font-bold">{name}</h1>
          <span>{job}</span>
        </div>
        <div className="ml-auto ">
          <img src={icon} alt="linkedln" className="group-hover:origin-center group-hover:-rotate-180 group-hover:scale-110 duration-200" />
        </div>
      </div>

      <div className="mt-10 border-t-2 text-kenit leading-5" >
        <p className="mt-3">{desc}</p>
      </div>
    </div>
  );
};

export default TeamCard;
