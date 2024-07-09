import React from "react";
import { logo1, logo2 } from "../assets/images";

export const Footer = () => {
  return (
    <footer className="w-full mt-10 max-sm:px-0  lg:px-[80px] md:px-[40px] px-[30px]  ">
      <div className=" bg-dark rounded-t-[30px] flex-col max-md:p-[25px]  h-full p-[50px] ">
        <div className=" flex flex-wrap flex-row max-md:flex-col  justify-between items-center w-full">
          <div className="">
            <img src={logo2} alt="logo" className="" />
          </div>

          <nav className="flex items-center max-md:w-full max-md:mt-3">
            <ul className="flex flex-col  md:flex-row lg:justify-around w-full gap-5 max-md:gap-3 items-center">
              <li>
                <a
                  href="#"
                  className="text-white font-light text-[18px] underline hover:text-green duration-110  "
                >
                  About-us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white font-light text-[18px] underline hover:text-green duration-110  "
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white font-light text-[18px] underline hover:text-green duration-110  "
                >
                  Use Cases
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white font-light text-[18px] underline hover:text-green duration-110  "
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white font-light text-[18px] underline hover:text-green duration-110  "
                >
                  Blog
                </a>
              </li>
            </ul>
          </nav>

          <div className="lg:flex hidden gap-3 ">
            <a href="https://www.linkedin.com/in/himanshu-tyd0072/" target="_blank" className="w-10 h-10 flex justify-center items-center bg-white rounded-full text-[20px] orgiin-center hover:-rotate-90 duration-150 cursor-pointer   ">
              <i class="ri-linkedin-fill"></i>
            </a>
            <a href="https://github.com/himanshu-tyd" target="_blank" className="w-10 h-10 flex justify-center items-center bg-white rounded-full text-[20px] orgiin-center hover:-rotate-90 duration-150 cursor-pointer  ">
              <i class="ri-github-fill"></i>
            </a>
            <a href="https://www.instagram.com/codebucketht" target="_blank" className="w-10 h-10 flex justify-center items-center bg-white rounded-full text-[20px] orgiin-center hover:-rotate-90 duration-150 cursor-pointer  ">
              <i class="ri-instagram-fill"></i>
            </a>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full  mt-10">
          <div className="flex flex-col w-full max-sm:items-center">
            <div className="  bg-green w-[180px] rounded-[10px] flex justify-center  ">
              <h1 className="text-[30px] max-sm:text-[28px] font-grotesk font-bold ">
                Contact us:{" "}
              </h1>
            </div>
            <div className="text-white font-extralight mt-3">
              <span>Email:info@posivus.com</span>
              <p>Address:1234 Main st</p>
              <p>Moonstone City, Startbust State 123456</p>
            </div>
          </div>

          <div className="w-full mt-5">
            <div className="bg-[rgb(41,42,50)] max-sm:p-[20px] p-[40px] rounded-[10px] ">
              <input
                className="bg-transparent font-light py-[20px] input w-full border border-white text-white "
                placeholder="Enter your email"
              />
              <button className="bg-green mt-3 w-full py-[12px] rounded-[10px] hover:bg-black hover:text-white font-light text-[18px] duration-150">
                Subscribe to News
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex border-t-2  border-white ">
          <div  className="text-white font-extralight gap-5 mt-5 flex max-sm:text-[14px] ">
            <h4 className="">© 2023 Positivus. All Rights Reserved.</h4>
            <span>
              <a href="#">Privacy Policy</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
