import React from "react";

const ChooseUs = () => {
  return (
    <div className="w-[100vw]">
      <div className="w-full bg-[url(/header-photo-3.png)] h-[64vh] xs:max-md:h-[90vh] bg-cover flex flex-col items-center justify-center gap-12 mt-[10rem] xs:max-md:mt-[5rem]">
        {/* <img
          className=" w-[1725px] h-[450px] top-0 object-cover"
          alt="Header photo"
          src="/header-photo-3.png"
        /> */}
        <p className="[font-family:'Barlow',Helvetica] font-bold text-white text-[40px] text-center tracking-[0] leading-[normal] xs:max-md:text-[35px]">
          Why Choose Us?
        </p>
        <div className="grid grid-cols-4 gap-[5rem] xs:max-md:grid-cols-2 xs:max-md:gap-8">
          <div className="w-[280px] h-[280px] xs:max-md:w-[150px] xs:max-md:h-[150px] bg-[#2F70B0] border-white shadow-[4px_4px_10px_#00000040] border-[1px] flex flex-col items-center gap-8 xs:max-md:gap-5">
            <img
              src="/choose1.png"
              alt="imagechoose"
              className="w-[100px] mt-[25px] xs:max-md:w-[50px] xs:max-md:mt-[10px]"
            />
            <h2 className="font-bold text-[28px] text-center text-white xs:max-md:text-[18px]">
              Rich Industry Experience
            </h2>
          </div>
          <div className="w-[280px] h-[280px] xs:max-md:w-[150px] xs:max-md:h-[150px] bg-[#2F70B0] border-white shadow-[4px_4px_10px_#00000040] border-[1px] flex flex-col items-center gap-8 xs:max-md:gap-5">
            <img
              src="/choose2.png"
              alt="imagechoose"
              className="w-[100px] mt-[25px] xs:max-md:w-[50px] xs:max-md:mt-[10px]"
            />
            <h2 className="font-bold text-[28px] text-center text-white xs:max-md:text-[18px]">
              Technical <br />
              Support
            </h2>
          </div>
          <div className="w-[280px] h-[280px] xs:max-md:w-[150px] xs:max-md:h-[150px] bg-[#2F70B0] border-white shadow-[4px_4px_10px_#00000040] border-[1px] flex flex-col items-center gap-8 xs:max-md:gap-5">
            <img
              src="/choose3.png"
              alt="imagechoose"
              className="w-[100px] mt-[25px] xs:max-md:w-[50px] xs:max-md:mt-[10px]"
            />
            <h2 className="font-bold text-[28px] text-center text-white xs:max-md:text-[18px]">
              Satisfied <br />
              Customer
            </h2>
          </div>
          <div className="w-[280px] h-[280px] xs:max-md:w-[150px] xs:max-md:h-[150px] bg-[#2F70B0] border-white shadow-[4px_4px_10px_#00000040] border-[1px] flex flex-col items-center gap-8 xs:max-md:gap-5">
            <img
              src="/choose4.png"
              alt="imagechoose"
              className="w-[100px] mt-[25px] xs:max-md:w-[50px] xs:max-md:mt-[10px]"
            />
            <h2 className="font-bold text-[28px] text-center text-white xs:max-md:text-[18px]">
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
