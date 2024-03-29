import React from "react";

const Showcase = () => {
  return (
    <div className="flex flex-col gap-10 absolute top-[300%] justify-center w-full items-center">
      <h1 className="[font-family:'Barlow-Bold',Helvetica] font-bold text-[#2F70B0] text-[45px] text-left tracking-[0] leading-[normal] w-[70vw]">
        A showcase of various fabrics treated with TextOne Industries&apos;
        organic textile chemicals
      </h1>
      <div className="grid grid-cols-3 gap-[5rem]">
        <div className="flex flex-col gap-8 border-[#dddddd] border-[2px] rounded-lg pb-[1.5rem]">
          <img
            src="/image0.png"
            alt="test"
            className="w-[20vw] h-[200px] rounded-t-lg"
          />
          <div className="ml-[2rem]">
            <h1 className="text-black text-[18px] font-semibold">DENIM</h1>
            <p className="text-black text-[15px] font-semibold w-[16vw]">
              Lorem Ipsum doler sample test text just to clarify the spacing of
              the paragraph here
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 border-[#dddddd] border-[2px] rounded-lg pb-[1.5rem]">
          <img
            src="/image0.png"
            alt="test"
            className="w-[20vw] h-[200px] rounded-t-lg"
          />
          <div className="ml-[2rem]">
            <h1 className="text-black text-[18px] font-semibold">COTTON</h1>
            <p className="text-black text-[15px] font-semibold w-[16vw]">
              Lorem Ipsum doler sample test text just to clarify the spacing of
              the paragraph here
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 border-[#dddddd] border-[2px] rounded-lg pb-[1.5rem]">
          <img
            src="/image0.png"
            alt="test"
            className="w-[20vw] h-[200px] rounded-t-lg"
          />
          <div className="ml-[2rem]">
            <h1 className="text-black text-[18px] font-semibold">KNITS</h1>
            <p className="text-black text-[15px] font-semibold w-[16vw]">
              Lorem Ipsum doler sample test text just to clarify the spacing of
              the paragraph here
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 border-[#dddddd] border-[2px] rounded-lg pb-[1.5rem]">
          <img
            src="/image0.png"
            alt="test"
            className="w-[20vw] h-[200px] rounded-t-lg"
          />
          <div className="ml-[2rem]">
            <h1 className="text-black text-[18px] font-semibold">POLYESTER</h1>
            <p className="text-black text-[15px] font-semibold w-[16vw]">
              Lorem Ipsum doler sample test text just to clarify the spacing of
              the paragraph here
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 border-[#dddddd] border-[2px] rounded-lg pb-[1.5rem]">
          <img
            src="/image0.png"
            alt="test"
            className="w-[20vw] h-[200px] rounded-t-lg"
          />
          <div className="ml-[2rem]">
            <h1 className="text-black text-[18px] font-semibold">WOVEN</h1>
            <p className="text-black text-[15px] font-semibold w-[16vw]">
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
