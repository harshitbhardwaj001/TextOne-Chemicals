import React from "react";

const ChooseUs = () => {
  return (
    <div className="absolute w-[1726px] h-[549px] top-[350%]">
      <div className="relative h-[549px]">
        <img
          className="absolute w-[1725px] h-[450px] top-0 object-cover"
          alt="Header photo"
          src="/header-photo-3.png"
        />
        <p className="absolute w-[992px] top-[20px] left-[278px] [font-family:'Barlow',Helvetica] font-bold text-white text-[40px] text-center tracking-[0] leading-[normal]">
          Why Choose Us?
        </p>
        <div className="grid grid-cols-4 absolute top-[120px] left-[80px] gap-[5rem]">
          <div className="w-[280px] h-[280px] bg-[#2F70B0] border-white shadow-[4px_4px_10px_#00000040] border-[1px] flex flex-col items-center gap-8">
            <img
              src="/choose1.png"
              alt="imagechoose"
              className="w-[100px] mt-[25px]"
            />
            <h2 className="font-bold text-[28px] text-center text-white">
              Rich Industry Experience
            </h2>
          </div>
          <div className="w-[280px] h-[280px] bg-[#2F70B0] border-white shadow-[4px_4px_10px_#00000040] border-[1px] flex flex-col items-center gap-8">
            <img
              src="/choose2.png"
              alt="imagechoose"
              className="w-[100px] mt-[25px]"
            />
            <h2 className="font-bold text-[28px] text-center text-white">
              Technical <br />
              Support
            </h2>
          </div>
          <div className="w-[280px] h-[280px] bg-[#2F70B0] border-white shadow-[4px_4px_10px_#00000040] border-[1px] flex flex-col items-center gap-8">
            <img
              src="/choose3.png"
              alt="imagechoose"
              className="w-[100px] mt-[25px]"
            />
            <h2 className="font-bold text-[28px] text-center text-white">
              Satisfied <br />
              Customer
            </h2>
          </div>
          <div className="w-[280px] h-[280px] bg-[#2F70B0] border-white shadow-[4px_4px_10px_#00000040] border-[1px] flex flex-col items-center gap-8">
            <img
              src="/choose4.png"
              alt="imagechoose"
              className="w-[100px] mt-[25px]"
            />
            <h2 className="font-bold text-[28px] text-center text-white">
              Organic <br />
              Products
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
