import React from "react";
import { heroImg } from "../assets/images";


const Hero = () => {
  return (
    <section className="flex lg:flex-row flex-col-reverse ">
      <header className="lg:w-[50%] w-full">
        <div className="">
          <h1 className="lg:text-[60px] text-[48px] leading-[60px] font-bold  ">
            Navigating the{" "}
          </h1>
          <h1 className="lg:text-[60px] text-[48px] leading-[60px] font-bold  ">
            digital landscape{" "}
          </h1>
          <h1 className="lg:text-[60px] text-[48px] leading-[60px] font-bold  ">
            for success
          </h1>
          <p className="break-words text-2xl mt-10 leading-6 ">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <div className="mt-10 w-full">
            <button className="border-[1px] px-[32px] py-[24px] rounded-[25px] bg-black text-xl font-bold  text-white hover:bg-green hover:text-black hover:border-black duration-150 lg:w-[auto] tracking-wide ">
              Book a Consultation
            </button>
          </div>
        </div>
      </header>

      <div className="lg:w-[50%] w-full flex justify-center items-center ">
        <img src={heroImg} alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
