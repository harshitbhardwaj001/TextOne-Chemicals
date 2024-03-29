import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#2F70B0] w-[100vw] h-[400px]">
      <div className="flex gap-20">
        <div className="flex flex-col">
          <img
            src="/header-photo-3.png"
            alt="map"
            className="w-[350px] h-[240px] mt-[35px] ml-[25px]"
          />
        </div>
        <div className="flex flex-col mt-[35px] gap-12">
          <h1 className="text-[20px] font-semibold text-white">
            TextOne Chemicals
          </h1>
          <div>
            <h1 className="text-[20px] font-semibold text-white">Office</h1>
            <p className="text-[12px] text-white">
              1234, TextOne Industries, TextOne, TextOne, TextOne
            </p>
          </div>
          <div>
            <h1 className="text-[20px] font-semibold text-white">Office</h1>
            <p className="text-[12px] text-white">
              1234, TextOne Industries, TextOne, TextOne, TextOne
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-[35px] ml-[130px] gap-2">
          <h1 className="text-[20px] font-semibold text-white mb-[1.5rem]">
            Categories
          </h1>
          <h1 className="text-[18px] font-semibold text-white">Denim</h1>
          <h1 className="text-[18px] font-semibold text-white">Cotton</h1>
          <h1 className="text-[18px] font-semibold text-white">Knits</h1>
          <h1 className="text-[18px] font-semibold text-white">Polyester</h1>
          <h1 className="text-[18px] font-semibold text-white">Woven</h1>
        </div>
        <div className="flex flex-col mt-[35px] ml-[130px] gap-2">
          <h1 className="text-[20px] font-semibold text-white mb-[1.5rem]">
            Company
          </h1>
          <h1 className="text-[18px] font-semibold text-white">About Us</h1>
          <h1 className="text-[18px] font-semibold text-white">Contact</h1>
          <h1 className="text-[18px] font-semibold text-white">Products</h1>
          <h1 className="text-[18px] font-semibold text-white">Address</h1>
          <h1 className="text-[18px] font-semibold text-white">Career</h1>
        </div>
      </div>
      <div className="w-[95vw] h-[1vh] border-white border-t-[3px] mt-[2.2rem] mx-auto"></div>
      <div>
        <h1 className="text-[25px] text-center mt-[15px] text-white font-bold">
          &#169;2024, TextOne Chemicals
        </h1>
      </div>
    </div>
  );
};

export default Footer;
