import React from "react";

const Navbar = () => {
  return (
    <div
      id="MenuBarRoot"
      className="flex justify-between items-center w-[60%] mx-auto"
    >
      <div
        id="Logo"
        className="bg-white shadow-lg rounded-br-3xl rounded-bl-3xl flex justify-center items-start w-1/5 h-16 pt-2"
      >
        <img
          src="https://file.rendit.io/n/vmtPznwaFOixQ5PjiNL7.png"
          alt="TextOne Logo"
          className="h-12"
        />
      </div>
      <div className="flex justify-center gap-[4rem] items-center w-3/5 mt-4 font-barlow">
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
