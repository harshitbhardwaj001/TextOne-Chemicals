import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#2F70B0] w-[100vw] h-[400px] xs:max-md:h-[100vh] mt-[15rem] xs:max-md:mt-[8rem]">
      <div className="flex gap-20 xs:max-md:flex-col xs:max-md:items-center xs:max-md:gap-12">
        <div className="flex flex-col xs:max-md:items-center">
          <img
            src="/header-photo-3.png"
            alt="map"
            className="w-[350px] h-[240px] xs:max-md:w-[85vw] xs:max-md:h-[120px] mt-[35px] ml-[25px] xs:max-md:ml-0 xs:max-md:mt-[20px]"
          />
        </div>
        <div className="flex flex-col mt-[35px] gap-12 xs:max-md:gap-6 xs:max-md:mt-[-1.5rem]">
          <h1 className="text-[20px] xs:max-md:text-[17px] font-semibold text-white">
            TextOne Chemicals
          </h1>
          <div>
            <h1 className="text-[20px] font-semibold text-white xs:max-md:text-[17px]">
              Office
            </h1>
            <p className="text-[12px] text-white">
              1234, TextOne Industries, TextOne, TextOne, TextOne
            </p>
          </div>
          <div>
            <h1 className="text-[20px] font-semibold text-white xs:max-md:text-[17px]">
              Office
            </h1>
            <p className="text-[12px] text-white">
              1234, TextOne Industries, TextOne, TextOne, TextOne
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-[35px] ml-[130px] gap-2 xs:max-md:hidden">
          <h1 className="text-[20px] font-semibold text-white mb-[1.5rem]">
            Categories
          </h1>
          <h1 className="text-[18px] font-semibold text-white">Denim</h1>
          <h1 className="text-[18px] font-semibold text-white">Cotton</h1>
          <h1 className="text-[18px] font-semibold text-white">Knits</h1>
          <h1 className="text-[18px] font-semibold text-white">Polyester</h1>
          <h1 className="text-[18px] font-semibold text-white">Woven</h1>
        </div>
        <div className="flex flex-col mt-[35px] ml-[130px] gap-2 xs:max-md:hidden">
          <h1 className="text-[20px] font-semibold text-white mb-[1.5rem]">
            Company
          </h1>
          <h1 className="text-[18px] font-semibold text-white">About Us</h1>
          <h1 className="text-[18px] font-semibold text-white">Contact</h1>
          <h1 className="text-[18px] font-semibold text-white">Products</h1>
          <h1 className="text-[18px] font-semibold text-white">Address</h1>
          <h1 className="text-[18px] font-semibold text-white">Career</h1>
        </div>
        <div className="md:hidden flex justify-between w-[78vw]">
          <div className="flex flex-col mt-[35px] xs:max-md:mt-0 gap-2">
            <h1 className="text-[20px] font-semibold text-white mb-[1.5rem] xs:max-md:mb-[0.5rem] xs:max-md:text-[17px]">
              Categories
            </h1>
            <h1 className="text-[18px] font-semibold text-white xs:max-md:text-[13px] xs:max-md:text-center">
              Denim
            </h1>
            <h1 className="text-[18px] font-semibold text-white xs:max-md:text-[13px] xs:max-md:text-center">
              Cotton
            </h1>
            <h1 className="text-[18px] font-semibold text-white xs:max-md:text-[13px] xs:max-md:text-center">
              Knits
            </h1>
            <h1 className="text-[18px] font-semibold text-white xs:max-md:text-[13px] xs:max-md:text-center">
              Polyester
            </h1>
            <h1 className="text-[18px] font-semibold text-white xs:max-md:text-[13px] xs:max-md:text-center">
              Woven
            </h1>
          </div>
          <div className="flex flex-col mt-[35px] xs:max-md:mt-0 gap-2">
            <h1 className="text-[20px] font-semibold text-white mb-[1.5rem] xs:max-md:mb-[0.5rem] xs:max-md:text-[17px]">
              Company
            </h1>
            <h1 className="text-[18px] font-semibold text-white xs:max-md:text-[13px] xs:max-md:text-center">
              About Us
            </h1>
            <h1 className="text-[18px] font-semibold text-white xs:max-md:text-[13px] xs:max-md:text-center">
              Contact
            </h1>
            <h1 className="text-[18px] font-semibold text-white xs:max-md:text-[13px] xs:max-md:text-center">
              Products
            </h1>
            <h1 className="text-[18px] font-semibold text-white xs:max-md:text-[13px] xs:max-md:text-center">
              Address
            </h1>
            <h1 className="text-[18px] font-semibold text-white xs:max-md:text-[13px] xs:max-md:text-center">
              Career
            </h1>
          </div>
        </div>
      </div>
      <div className="w-[95vw] h-[1vh] border-white border-t-[3px] mt-[2.2rem] xs:max-md:mt-[1rem] mx-auto"></div>
      <div>
        <h1 className="text-[25px] xs:max-md:text-[14px] text-center mt-[15px] text-white font-bold">
          &#169;2024 TextOne Chemicals
        </h1>
      </div>
    </div>
  );
};

export default Footer;
