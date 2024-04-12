import Image from "next/image";
import React from "react";

const Sustainability = () => {
  return (
    <div className="w-[65vw] h-[36vh] bg-[#2f70b0] shadow-[4px_4px_10px_#00000040] flex gap-10 justify-center items-center absolute top-[95%] left-[17%] xs:max-md:hidden">
      <div className="flex flex-col w-[30%] items-center justify-center gap-[13px] pl-[2rem]">
        <Image src="/sustain-1.png" alt="Leaf" width={50} height={50} />
        <div className="flex flex-col items-center">
          <h1 className="[font-family:'Barlow-Bold',Helvetica] font-bold text-white text-[20px] text-center tracking-[0] leading-[3rem] whitespace-nowrap">
            Renewable Raw Materials
          </h1>
          <p className="w-[90%] h-[60.48px] [font-family:'Barlow-Regular',Helvetica] font-normal text-white text-[15px] text-center tracking-[0] leading-[normal]">
            We prioritize the use of renewable and sustainable raw materials in
            our production processes.
          </p>
        </div>
      </div>
      <img
        className="relative w-px h-[200px] object-cover"
        alt="Line"
        src="line-3.svg"
      />
      <div className="flex flex-col w-[30%] items-center justify-center gap-[13px]">
        <Image src="/sustain-2.png" alt="Leaf" width={50} height={50} />
        <div className="flex flex-col items-center">
          <h1 className="[font-family:'Barlow-Bold',Helvetica] font-bold text-white text-[20px] text-center tracking-[0] leading-[3rem] whitespace-nowrap">
            Eco-friendly Production
          </h1>
          <p className="w-[90%] h-[60.48px] [font-family:'Barlow-Regular',Helvetica] font-normal text-white text-[15px] text-center tracking-[0] leading-[normal]">
            We employ environmentally friendly production techniques to minimize
            waste generation and energy consumption.
          </p>
        </div>
      </div>
      <img
        className="relative w-px h-[200px] object-cover"
        alt="Line"
        src="line-3.svg"
      />
      <div className="flex flex-col w-[30%] items-center justify-center gap-[13px] pr-[2rem]">
        <Image src="/sustain-3.png" alt="Leaf" width={50} height={50} />
        <div className="flex flex-col items-center">
          <h1 className="[font-family:'Barlow-Bold',Helvetica] font-bold text-white text-[20px] text-center tracking-[0] leading-[3rem] whitespace-nowrap">
            Environmental Regulations
          </h1>
          <p className="w-[95%] h-[60.48px] [font-family:'Barlow-Regular',Helvetica] font-normal text-white text-[15px] text-center tracking-[0] leading-[normal]">
            We adhere to all applicable environmental regulations and strive to
            exceed industry standards.
          </p>
        </div>
      </div>
      {/* <img
        className="absolute w-[851px] h-[171px] top-[11px] left-[24px]"
        alt="Frame"
        src="frame-21.svg"
      /> */}
      {/* <div className="flex w-[300px] h-[200px] items-start gap-[299px] pl-[8.74e-06px] pr-0 py-0 absolute top-0 left-[280px]">
        <img
          className="relative w-px h-[200px] object-cover"
          alt="Line"
          src="line-3.svg"
        />
        <img
          className="relative w-px h-[200px] object-cover"
          alt="Line"
          src="line-3.svg"
        />
      </div> */}
    </div>
  );
};

export default Sustainability;
