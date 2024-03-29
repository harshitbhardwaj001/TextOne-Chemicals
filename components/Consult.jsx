import React from "react";

const Consult = () => {
  return (
    <div className="absolute w-[1726px] h-[549px] top-[160%]">
      <div className="relative h-[549px]">
        <img
          className="absolute w-[1725px] h-[400px] top-0 object-cover"
          alt="Header photo"
          src="/header-photo-3.png"
        />
        <p className="absolute w-[992px] top-[134px] left-[258px] [font-family:'Barlow',Helvetica] font-bold text-white text-[30px] text-center tracking-[0] leading-[normal]">
          At TextOne, We offer a comprehensive range of organic textile
          chemicals that cater to a wide spectrum of textile processing
          applications, including preparation, dyeing, and finishing.
        </p>
        <div className="flex w-[1725px] h-[150px] items-start gap-[80px] px-[65.1px] py-[28px] absolute top-[399px] left-0 bg-[#2f70b0]">
          <div className="flex flex-col w-[667.34px] h-[59px] items-start gap-[5px] pl-[3.05e-05px] pr-0 py-0 relative">
            <div className="relative w-[667.34px] mt-[-1.00px] [font-family:'Barlow',Helvetica] font-bold text-white text-[30px] tracking-[0] leading-[normal]">
              Consult With Us
            </div>
            <p className="relative w-[600.15px] [font-family:'Barlow',Helvetica] font-normal text-white text-[15px] tracking-[0] leading-[normal]">
              You can ask questions and consult regarding any queries here
            </p>
          </div>
          <div className="flex flex-col w-[642.83px] h-[82.5px] items-center justify-end relative">
            <div className="flex flex-col w-[642.83px] h-[71px] items-start gap-[11px] relative">
              <div className="flex w-[642.83px] h-[30px] items-center gap-[43px] relative">
                <div className="flex flex-col w-[299.48px] h-[30px] items-start px-[14.55px] py-[5px] relative bg-white rounded-[5px]">
                  <div className="relative w-[84.57px] mt-[-1.00px] opacity-50 [font-family:'Barlow',Helvetica] font-normal text-[#280274] text-[15px] tracking-[0] leading-[normal]">
                    Name
                  </div>
                </div>
                <div className="flex flex-col w-[299.48px] h-[30px] items-start px-[14.55px] py-[5px] relative bg-white rounded-[5px]">
                  <div className="relative w-[84.57px] mt-[-1.00px] opacity-50 [font-family:'Barlow',Helvetica] font-normal text-[#280274] text-[15px] tracking-[0] leading-[normal]">
                    Email
                  </div>
                </div>
              </div>
              <div className="flex w-[443.18px] h-[30px] items-center gap-[43px] relative">
                <div className="flex flex-col w-[299.48px] h-[30px] items-start px-[14.55px] py-[5px] relative bg-white rounded-[5px]">
                  <div className="relative w-[84.57px] mt-[-1.00px] opacity-50 [font-family:'Barlow',Helvetica] font-normal text-[#280274] text-[15px] tracking-[0] leading-[normal]">
                    Title
                  </div>
                </div>
                <div className="flex flex-col w-[99.83px] h-[30px] items-center justify-center relative bg-[#e9f6ff] rounded-[5px]">
                  <div className="relative w-[43.58px] h-[15px] [font-family:'Barlow',Helvetica] font-bold text-black text-[15px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                    Send
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consult;
