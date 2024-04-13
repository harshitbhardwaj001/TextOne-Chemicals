import React from "react";

const ProductCategory = () => {
  return (
    <div className="flex flex-col gap-12 w-full justify-center">
      <div className="mt-[5rem]">
        <h1 className="[font-family:'Barlow-Bold',Helvetica] font-bold text-[#2F70B0] text-[50px] xs:max-md:text-[35px] text-center tracking-[0] leading-[normal]">
          Product Categories
        </h1>
      </div>
      <div className="flex flex-col gap-8 justify-center w-full items-center">
        <div className="flex xs:max-md:flex-col xs:max-md:items-center xs:max-md:gap-5 xs:max-md:justify-center border-[#dddddd] border-[2px] xs:max-md:pb-[1rem] rounded-[0.5rem] w-[80vw]">
          <div>
            <img
              src="/image0.png"
              alt="test"
              className="w-[40vw] h-[300px] xs:max-md:w-[80vw] xs:max-md:h-[200px] rounded-tl-[0.5rem] rounded-bl-[0.5rem] xs:max-md:rounded-[0.5rem] xs:max-md:rounded-b-none"
            />
          </div>
          <div className="ml-[5rem] mt-[4rem] xs:max-md:mt-0 flex flex-col gap-5 xs:max-md:gap-3 xs:max-md:ml-0">
            <h1 className="[font-family:'Barlow-Bold',Helvetica] font-bold text-[#2F70B0] text-[30px] xs:max-md:text-[25px] xs:max-md:text-center text-left tracking-[0] leading-[normal]">
              PREPARATION
            </h1>
            <p className="[font-family:'Barlow-Bold',Helvetica] font-extralight text-[#575757] text-[25px] text-left tracking-[0] leading-[normal] w-[30vw] xs:max-md:w-[75vw] xs:max-md:text-[17px] xs:max-md:text-center">
              Our pre-treatment chemicals effectively prepare fabrics for
              subsequent processing steps, ensuring optimal dye uptake and
              colorfastness.
            </p>
          </div>
        </div>
        <div className="flex xs:max-md:flex-col xs:max-md:items-center xs:max-md:gap-5 xs:max-md:justify-center border-[#dddddd] border-[2px] xs:max-md:pb-[1rem] rounded-[0.5rem] w-[80vw]">
          <div>
            <img
              src="/image0.png"
              alt="test"
              className="w-[40vw] h-[300px] xs:max-md:w-[80vw] xs:max-md:h-[200px] rounded-tl-[0.5rem] rounded-bl-[0.5rem] xs:max-md:rounded-[0.5rem] xs:max-md:rounded-b-none"
            />
          </div>
          <div className="ml-[5rem] mt-[4rem] xs:max-md:mt-0 flex flex-col gap-5 xs:max-md:gap-3 xs:max-md:ml-0">
            <h1 className="[font-family:'Barlow-Bold',Helvetica] font-bold text-[#2F70B0] text-[30px] xs:max-md:text-[25px] xs:max-md:text-center text-left tracking-[0] leading-[normal]">
              DYEING
            </h1>
            <p className="[font-family:'Barlow-Bold',Helvetica] font-extralight text-[#575757] text-[25px] text-left tracking-[0] leading-[normal] w-[30vw] xs:max-md:w-[75vw] xs:max-md:text-[17px] xs:max-md:text-center">
              Our organic dyeing auxiliaries enhance dye penetration, color
              uniformity, and colorfastness, resulting in vibrant and durable
              fabrics.
            </p>
          </div>
        </div>
        <div className="flex xs:max-md:flex-col xs:max-md:items-center xs:max-md:gap-5 xs:max-md:justify-center border-[#dddddd] border-[2px] xs:max-md:pb-[1rem] rounded-[0.5rem] w-[80vw]">
          <div>
            <img
              src="/image0.png"
              alt="test"
              className="w-[40vw] h-[300px] xs:max-md:w-[80vw] xs:max-md:h-[200px] rounded-tl-[0.5rem] rounded-bl-[0.5rem] xs:max-md:rounded-[0.5rem] xs:max-md:rounded-b-none"
            />
          </div>
          <div className="ml-[5rem] mt-[4rem] xs:max-md:mt-0 flex flex-col gap-5 xs:max-md:gap-3 xs:max-md:ml-0">
            <h1 className="[font-family:'Barlow-Bold',Helvetica] font-bold text-[#2F70B0] text-[30px] xs:max-md:text-[25px] xs:max-md:text-center text-left tracking-[0] leading-[normal]">
              FINISHING
            </h1>
            <p className="[font-family:'Barlow-Bold',Helvetica] font-extralight text-[#575757] text-[25px] text-left tracking-[0] leading-[normal] w-[30vw] xs:max-md:w-[62vw] xs:max-md:text-[17px] xs:max-md:text-center">
              Our finishing agents impart desirable properties to fabrics, such
              as water and stain resistance, wrinkle resistance, and enhanced
              softness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
