import React from "react";

const Values = () => {
  return (
    <div className="flex flex-col gap-32 justify-center absolute top-[220%] items-center w-full">
      <div className="flex flex-col gap-8 justify-center items-center ">
        <h1 className="[font-family:'Barlow-Bold',Helvetica] font-bold text-[#2F70B0] text-[50px] text-center tracking-[0] leading-[normal]">
          VALUES / INNOVATION
        </h1>
        <p className="[font-family:'Barlow-Bold',Helvetica] font-bold text-[#575757] text-[25px] text-center tracking-[0] leading-[normal] w-[70vw]">
          We embrace innovation as the driving force behind our success,
          constantly seeking new and better ways to create textile chemicals
          that are not only effective but also environmentally responsible.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-32">
        <div className="w-[280px] h-[230px] bg-[#2F70B0] border-white shadow-[4px_4px_10px_#00000040] border-[1px] flex flex-col items-center gap-8">
          <img
            src="/choose4.png"
            alt="imagechoose"
            className="w-[100px] mt-[25px]"
          />
          <h2 className="font-bold text-[28px] text-center text-white">
            Sustainability
          </h2>
        </div>
        <div className="w-[280px] h-[230px] bg-[#2F70B0] border-white shadow-[4px_4px_10px_#00000040] border-[1px] flex flex-col items-center gap-8">
          <img
            src="/choose3.png"
            alt="imagechoose"
            className="w-[100px] mt-[25px]"
          />
          <h2 className="font-bold text-[28px] text-center text-white">
            Customer Focus
          </h2>
        </div>
        <div className="w-[280px] h-[230px] bg-[#2F70B0] border-white shadow-[4px_4px_10px_#00000040] border-[1px] flex flex-col items-center gap-8">
          <img
            src="/choose1.png"
            alt="imagechoose"
            className="w-[100px] mt-[25px]"
          />
          <h2 className="font-bold text-[28px] text-center text-white">
            Excellence
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Values;
