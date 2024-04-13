import React from "react";

const CareerHero = () => {
  return (
    <div className="bg-[url(/abouthero.png)] bg-cover bg-[50%_50%]">
      <div className="w-[58vw] xs:max-md:w-[80vw] h-[654px] xs:max-md:h-[100vh] flex flex-col gap-[2rem] items-start xs:max-md:items-center md:gap-[2rem] justify-center mx-auto pt-[5rem]">
        <p className="[font-family:'Barlow-Bold',Helvetica] font-bold text-white text-[70px] text-left xs:max-md:text-center tracking-[0] leading-[normal] xs:max-md:static xs:max-md:w-[100%] xs:max-md:text-[50px]">
          Career
        </p>
        <p className="w-[58vw] xs:max-md:w-[80vw] [font-family:'Barlow-Bold',Helvetica] font-extralight text-white text-[35px] xs:max-md:text-center xs:max-md:text-[25px] text-left tracking-[0] leading-[normal]">
          If you are a talented and passionate individual seeking to make a
          meaningful impact in the textile industry, we encourage you to explore
          our career opportunities.
        </p>
      </div>
    </div>
  );
};

export default CareerHero;
