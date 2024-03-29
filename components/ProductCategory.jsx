import React from "react";

const ProductCategory = () => {
  return (
    <div className="flex flex-col gap-12 absolute top-[110%] w-full justify-center">
      <div className="mt-[5rem]">
        <h1 className="[font-family:'Barlow-Bold',Helvetica] font-bold text-[#2F70B0] text-[50px] text-center tracking-[0] leading-[normal]">
          Product Categories
        </h1>
      </div>
      <div className="flex flex-col gap-8 justify-center w-full items-center">
        <div className="flex border-[#dddddd] border-[2px] rounded-lg w-[80vw]">
          <div>
            <img
              src="/image0.png"
              alt="test"
              className="w-[40vw] h-[300px] rounded-tl-lg rounded-bl-lg"
            />
          </div>
          <div className="ml-[5rem] mt-[4rem] flex flex-col gap-5">
            <h1 className="[font-family:'Barlow-Bold',Helvetica] font-bold text-[#2F70B0] text-[30px] text-left tracking-[0] leading-[normal]">
              PREPARATION
            </h1>
            <p className="[font-family:'Barlow-Bold',Helvetica] font-extralight text-[#575757] text-[25px] text-left tracking-[0] leading-[normal] w-[30vw]">
              Our pre-treatment chemicals effectively prepare fabrics for
              subsequent processing steps, ensuring optimal dye uptake and
              colorfastness.
            </p>
          </div>
        </div>
        <div className="flex border-[#dddddd] border-[2px] rounded-lg w-[80vw]">
          <div>
            <img
              src="/image0.png"
              alt="test"
              className="w-[40vw] h-[300px] rounded-tl-lg rounded-bl-lg"
            />
          </div>
          <div className="ml-[5rem] mt-[4rem] flex flex-col gap-5">
            <h1 className="[font-family:'Barlow-Bold',Helvetica] font-bold text-[#2F70B0] text-[30px] text-left tracking-[0] leading-[normal]">
              DYEING
            </h1>
            <p className="[font-family:'Barlow-Bold',Helvetica] font-extralight text-[#575757] text-[25px] text-left tracking-[0] leading-[normal] w-[30vw]">
              Our organic dyeing auxiliaries enhance dye penetration, color
              uniformity, and colorfastness, resulting in vibrant and durable
              fabrics.
            </p>
          </div>
        </div>
        <div className="flex border-[#dddddd] border-[2px] rounded-lg w-[80vw]">
          <div>
            <img
              src="/image0.png"
              alt="test"
              className="w-[40vw] h-[300px] rounded-tl-lg rounded-bl-lg"
            />
          </div>
          <div className="ml-[5rem] mt-[4rem] flex flex-col gap-5">
            <h1 className="[font-family:'Barlow-Bold',Helvetica] font-bold text-[#2F70B0] text-[30px] text-left tracking-[0] leading-[normal]">
              FINISHING
            </h1>
            <p className="[font-family:'Barlow-Bold',Helvetica] font-extralight text-[#575757] text-[25px] text-left tracking-[0] leading-[normal] w-[30vw]">
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
