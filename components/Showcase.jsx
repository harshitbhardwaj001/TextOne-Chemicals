import React from "react";

const Showcase = () => {
  return (
    <div className="flex flex-col gap-10 justify-center w-full items-center mt-[5rem] md:mt-[10rem]">
      <h1 className="[font-family:'Barlow-Bold',Helvetica] font-bold text-[#2F70B0] text-[45px] text-left tracking-[0] leading-[normal] w-[70vw] xs:max-md:text-[25px] xs:max-md:text-center xs:max-md:w-[90vw]">
        A showcase of various fabrics treated with TextOne Industries&apos;
        organic textile chemicals
      </h1>
      <div className="grid grid-cols-3 xs:max-md:grid-cols-2 gap-[5rem] xs:max-md:gap-[1rem]">
        <div className="flex flex-col gap-8 border-[#dddddd] border-[2px]  rounded-[0.5rem] pb-[1.5rem] xs:max-md:pb-[1rem] xs:max-md:items-center">
          <img
            src="/image0.png"
            alt="test"
            className="w-[20vw] xs:max-md:w-[44vw] h-[200px]  rounded-t-[0.5rem]"
          />
          <div className="ml-[2rem] xs:max-md:ml-0">
            <h1 className="text-black text-[18px] xs:max-md:text-[15px] font-semibold xs:max-md:text-center">
              DENIM
            </h1>
            <p className="text-black text-[15px] xs:max-md:text-[12px] font-semibold w-[16vw] xs:max-md:w-[26vw] xs:max-md:text-center">
              Lorem Ipsum doler sample test text just to clarify the spacing of
              the paragraph here
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 border-[#dddddd] border-[2px]  rounded-[0.5rem] pb-[1.5rem] xs:max-md:pb-[1rem] xs:max-md:items-center">
          <img
            src="/image0.png"
            alt="test"
            className="w-[20vw] xs:max-md:w-[44vw] h-[200px]  rounded-t-[0.5rem]"
          />
          <div className="ml-[2rem] xs:max-md:ml-0">
            <h1 className="text-black text-[18px] xs:max-md:text-[15px] font-semibold xs:max-md:text-center">
              COTTON
            </h1>
            <p className="text-black text-[15px] xs:max-md:text-[12px] font-semibold w-[16vw] xs:max-md:w-[26vw] xs:max-md:text-center">
              Lorem Ipsum doler sample test text just to clarify the spacing of
              the paragraph here
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 border-[#dddddd] border-[2px]  rounded-[0.5rem] pb-[1.5rem] xs:max-md:pb-[1rem] xs:max-md:items-center">
          <img
            src="/image0.png"
            alt="test"
            className="w-[20vw] xs:max-md:w-[44vw] h-[200px]  rounded-t-[0.5rem]"
          />
          <div className="ml-[2rem] xs:max-md:ml-0">
            <h1 className="text-black text-[18px] xs:max-md:text-[15px] font-semibold xs:max-md:text-center">
              KNITS
            </h1>
            <p className="text-black text-[15px] xs:max-md:text-[12px] font-semibold w-[16vw] xs:max-md:w-[26vw] xs:max-md:text-center">
              Lorem Ipsum doler sample test text just to clarify the spacing of
              the paragraph here
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 border-[#dddddd] border-[2px]  rounded-[0.5rem] pb-[1.5rem] xs:max-md:pb-[1rem] xs:max-md:items-center">
          <img
            src="/image0.png"
            alt="test"
            className="w-[20vw] xs:max-md:w-[44vw] h-[200px]  rounded-t-[0.5rem]"
          />
          <div className="ml-[2rem] xs:max-md:ml-0">
            <h1 className="text-black text-[18px] xs:max-md:text-[15px] font-semibold xs:max-md:text-center">
              POLYESTER
            </h1>
            <p className="text-black text-[15px] xs:max-md:text-[12px] font-semibold w-[16vw] xs:max-md:w-[26vw] xs:max-md:text-center">
              Lorem Ipsum doler sample test text just to clarify the spacing of
              the paragraph here
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 border-[#dddddd] border-[2px]  rounded-[0.5rem] pb-[1.5rem] xs:max-md:pb-[1rem] xs:max-md:items-center">
          <img
            src="/image0.png"
            alt="test"
            className="w-[20vw] xs:max-md:w-[44vw] h-[200px]  rounded-t-[0.5rem]"
          />
          <div className="ml-[2rem] xs:max-md:ml-0">
            <h1 className="text-black text-[18px] xs:max-md:text-[15px] font-semibold xs:max-md:text-center">
              WOVEN
            </h1>
            <p className="text-black text-[15px] xs:max-md:text-[12px] font-semibold w-[16vw] xs:max-md:w-[26vw] xs:max-md:text-center">
              Lorem Ipsum doler sample test text just to clarify the spacing of
              the paragraph here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
