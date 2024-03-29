import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[741px] bg-[url(/header-photo-2.png)] bg-cover bg-[50%_50%] absolute top-[3.2rem] z-[-1]">
      <p className="absolute w-[931px] top-[35%] left-[20%] [font-family:'Barlow-Bold',Helvetica] font-bold text-white text-[50px] text-center tracking-[0] leading-[normal]">
        Discover the Artistry of Textile Chemistry
      </p>
      <div className="absolute w-[76px] h-[45px] top-[614px] left-[730px]">
        <div className="absolute w-[76px] h-[45px] top-0 left-0">
          <div className="relative h-[46px] -top-px">
            <img
              className="w-[39px] h-[46px] absolute top-0 left-0 object-cover"
              alt="Line"
              src="line-4.svg"
            />
            <img
              className="w-[39px] h-[46px] left-[37px] absolute top-0 object-cover"
              alt="Line"
              src="line-5.svg"
            />
          </div>
        </div>
        <div className="absolute w-[42px] h-[25px] top-px left-[17px]">
          <div className="relative h-[26px] -top-px">
            <img
              className="w-[22px] h-[26px] absolute top-0 left-0 object-cover"
              alt="Line"
              src="line-4-1.svg"
            />
            <img
              className="w-[22px] h-[26px] left-[20px] absolute top-0 object-cover"
              alt="Line"
              src="line-5-1.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute w-[931px] top-[558px] left-[305px] [font-family:'Barlow-Light',Helvetica] font-light text-white text-[28px] text-center tracking-[0] leading-[normal]">
        Want to know more?
      </div>
      <div className="absolute w-[115px] h-[10px] top-[366px] left-[1403px] rotate-[90.00deg]">
        <div className="absolute w-[10px] h-[10px] top-0 left-0 bg-white rounded-[5px]" />
        <div className="absolute w-[10px] h-[10px] top-0 left-[35px] bg-[#ffffffb2] rounded-[5px]" />
        <div className="absolute w-[10px] h-[10px] top-0 left-[70px] bg-[#ffffffb2] rounded-[5px]" />
        <div className="absolute w-[10px] h-[10px] top-0 left-[105px] bg-[#ffffffb2] rounded-[5px]" />
      </div>
    </div>
  );
};

export default Hero;
