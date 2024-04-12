import React from "react";

const Consult = () => {
  return (
    <div className="w-[100vw] mt-[25%]">
      <div className="bg-[url(/header-photo-3.png)] w-[100vw] h-[300px] flex justify-center items-center">
        <p className="w-[60vw] [font-family:'Barlow',Helvetica] font-bold text-white text-[30px] text-center tracking-[0] leading-[normal] xs:max-md:text-[18px] xs:max-md:leading-6 xs:max-md:tracking-wide xs:max-md:font-medium xs:max-md:w-[90vw]">
          At TextOne, We offer a comprehensive range of organic textile
          chemicals that cater to a wide spectrum of textile processing
          applications, including preparation, dyeing, and finishing.
        </p>
      </div>
      <div className="flex w-[100vw] items-start justify-between px-[65.1px] py-[28px] bg-[#2f70b0] xs:max-md:flex-col xs:max-md:gap-10 xs:max-md:px-0">
        <div className="flex flex-col w-[100vw] items-start gap-[5px] pl-[3.05e-05px] pr-0 py-0 xs:max-md:justify-center xs:max-md:items-center">
          <div className="w-[50vw] mt-[-1.00px] [font-family:'Barlow',Helvetica] font-bold text-white text-[30px] tracking-[0] leading-[normal] xs:max-md:text-center xs:max-md:w-[80vw]">
            Consult With Us
          </div>
          <p className="w-[50vw] [font-family:'Barlow',Helvetica] font-normal text-white text-[15px] tracking-[0] leading-[normal] xs:max-md:text-center xs:max-md:w-[80vw]">
            You can ask questions and consult regarding any queries here
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-5 xs:max-md:justify-center">
            <input
              type="text"
              placeholder="Name"
              className="w-[300px] h-[40px] bg-[#fff] rounded-[5px] pl-[10px] xs:max-md:w-[40%]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-[300px] h-[40px] bg-[#fff] rounded-[5px] pl-[10px] xs:max-md:w-[40%]"
            />
          </div>
          <div className="flex gap-5 xs:max-md:justify-center">
            <input
              type="text"
              placeholder="Title"
              className="w-[300px] h-[40px] bg-[#fff] rounded-[5px] pl-[10px] xs:max-md:w-[60%]"
            />
            <button className="w-[100px] font-bold bg-[#E9F6FF] rounded-lg [font-family:'Barlow',Helvetica] xs:max-md:w-[20%]">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consult;
