import React, { useEffect, useRef, useState } from "react";
import { logo1 } from "../assets/images";
import { navLinks } from "../constants";
import { Menu } from "../components";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(null);
  const headerRef = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();

    return () => window.addEventListener("scroll", handleStickyHeader);
  }, []);

  const handleActive = (label) => {
    setActive(label);
  };

  const handToggle = () => {
    setToggle(!toggle);
  };

  return (
    <header
      ref={headerRef}
      className="flex justify-between items-center w-ful lg:px-[80px] md:px-[40px] px-[30px] py-[30px] "
    >
      <div className="lg:w-[220px] md:w-[180px] w-[160px] h-auto ">
        <a href="/">
          <img src={logo1} alt="logo" className="w-full" />
        </a>
      </div>

      <nav
        className={`justify-between items-center left-0 max-w-[1440px] gap-x-8 ml-0 ${
          toggle ? "flex " : "hidden"
        } lg:flex  `}
      >
        <ul
          className={`flex flex-1 py-5 justify-between md:gap-8 md:text-[22px] gap-16 lg:text-[28px] capitalize text-[18px] ${
            toggle
              ? "flex-col absolute top-24 left-0   justify-evenly items-center rounded-[10px]   w-full h-auto bg-dark text-white "
              : ""
          } `}
        >
          {navLinks.map((items) => (
            <li
              key={items.label}
              className={`hover:text-green  duration-200 hover:scale-105 cursor-pointer ${
                active == items.label ? "text-green " : ""
              } `}
              onClick={() => {
                handleActive(items.label);
                setToggle(false);
              }}
            >
              <a href={items.href}>{items.label}</a>
            </li>
          ))}
        </ul>
        <button className="px-[2rem] py-[1rem] border-[1px] border-black rounded-[20px] capitalize hover:scale-125 duration-150 hidden lg:flex">
          request
        </button>
      </nav>

      <div className="block lg:hidden" onClick={handToggle}>
        <Menu toggle={toggle} />
      </div>
    </header>
  );
};

export default Nav;
