"use client";
import React from "react";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <div
      id="MenuBarRoot"
      className="flex justify-between items-center w-[60%] mx-auto xs:max-md:w-[100vw] xs:max-md:px-[1.2rem] absolute top-12 z-10"
    >
      <div
        id="Logo"
        className="bg-white shadow-lg rounded-br-3xl rounded-bl-3xl flex justify-center items-start w-1/5 h-16 pt-2 xs:max-md:w-[25vw] xs:max-md:h-[3.5rem]"
      >
        <img
          src="https://file.rendit.io/n/vmtPznwaFOixQ5PjiNL7.png"
          alt="TextOne Logo"
          className="h-12 xs:max-md:w-[22vw] xs:max-md:h-auto"
        />
      </div>
      <div className="md:hidden mt-[0.6rem]">
        <MobileNav />
      </div>
      <div className="flex justify-center gap-[4rem] items-center w-3/5 mt-4  font-barlow xs:max-md:hidden">
        <a href="/">
          <span className="relative text-sm font-bold text-white cursor-pointer">
            HOME
          </span>
        </a>
        <span className="relative text-sm font-bold text-white cursor-pointer">
          <a href="/about">ABOUT</a>
        </span>
        <span className="relative text-sm font-bold text-white cursor-pointer">
          <a href="/products">PRODUCTS</a>
        </span>
        <span className="relative text-sm font-bold text-white cursor-pointer">
          <a href="/career">CAREER</a>
        </span>
        <button className="bg-orange-600 relative w-1/6 rounded flex justify-center items-center h-8 font-bold text-white px-[3rem]">
          <a href="/contact">CONTACT</a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
