import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[92vh] bg-[url(/header-photo-2.png)] bg-cover bg-[50%_50%] mt-[3.2rem] z-[-1] xs:max-md:h-[100vh] flex flex-col gap-[5rem] items-center md:gap-[10rem]">
      <p className="[font-family:'Barlow-Bold',Helvetica] font-bold text-white text-[50px] text-center tracking-[0] leading-[normal] xs:max-md:static xs:max-md:w-[100%] xs:max-md:text-[40px] xs:max-md:mt-[60%] mt-[17%]">
        Discover the Artistry of Textile Chemistry
      </p>
      <div className=" flex flex-col gap-5 items-center">
        <div className="[font-family:'Barlow-Light',Helvetica] font-light text-white text-[28px] text-center tracking-[0] leading-[normal] xs:max-md:text-[20px]">
          Want to know more?
        </div>
        <Image src="/arrows.png" alt="arrow" width={76} height={45} />
      </div>
    </div>
  );
};

export default Hero;
