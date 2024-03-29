import React from "react";

const Sustainability = () => {
  return (
    <div className="w-[900px] h-[250px] bg-[#2f70b0] shadow-[4px_4px_10px_#00000040] absolute top-[105%] left-[21%]">
      <div className="relative w-[875px] h-[207px] top-[20px] left-[20px]">
        <div className="flex flex-col w-[241px] h-[93px] items-center justify-center gap-[13px] absolute top-[95px] left-0">
          <div className="relative w-[241px] h-[19px] mt-[-0.93px] [font-family:'Barlow-Bold',Helvetica] font-bold text-white text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Renewable Raw Materials
          </div>
          <p className="relative w-[199.87px] h-[60.48px] [font-family:'Barlow-Regular',Helvetica] font-normal text-white text-[15px] text-center tracking-[0] leading-[normal]">
            We prioritize the use of renewable and sustainable raw materials in
            our production processes.
          </p>
        </div>
        <div className="flex flex-col w-[212px] h-[117px] items-center justify-center gap-[14px] absolute top-[90px] left-[321px]">
          <div className="relative w-fit ml-[-0.50px] mr-[-0.50px] [font-family:'Barlow-Bold',Helvetica] font-bold text-white text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Eco-friendly Production
          </div>
          <p className="relative w-[199.87px] [font-family:'Barlow-Regular',Helvetica] font-normal text-white text-[15px] text-center tracking-[0] leading-[normal]">
            We employ environmentally friendly production techniques to minimize
            waste generation and energy consumption.
          </p>
        </div>
        <div className="flex flex-col w-[254px] h-[93px] items-center justify-center gap-[13px] absolute top-[90px] left-[598px]">
          <div className="relative w-[254px] h-[19px] mt-[-0.93px] [font-family:'Barlow-Bold',Helvetica] font-bold text-white text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Environmental Regulations
          </div>
          <p className="relative w-[199.87px] h-[60.48px] [font-family:'Barlow-Regular',Helvetica] font-normal text-white text-[15px] text-center tracking-[0] leading-[normal]">
            We adhere to all applicable environmental regulations and strive to
            exceed industry standards.
          </p>
        </div>
        <img
          className="absolute w-[851px] h-[171px] top-[11px] left-[24px]"
          alt="Frame"
          src="frame-21.svg"
        />
        <div className="flex w-[300px] h-[200px] items-start gap-[299px] pl-[8.74e-06px] pr-0 py-0 absolute top-0 left-[280px]">
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
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
