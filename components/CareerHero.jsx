import React from "react";

const CareerHero = () => {
  return (
    <div className="w-full h-[654px] bg-[url(/abouthero.png)] bg-cover bg-[50%_50%] absolute top-[3.2rem] z-[-1]">
      <p className="absolute w-[931px] top-[35%] left-[20%] [font-family:'Barlow-Bold',Helvetica] font-bold text-white text-[80px] text-left tracking-[0] leading-[normal]">
        Career
      </p>
      <p className="absolute w-[931px] top-[55%] left-[20%] [font-family:'Barlow-Bold',Helvetica] font-extralight text-white text-[35px] text-left tracking-[0] leading-[normal]">
        If you are a talented and passionate individual seeking to make a
        meaningful impact in the textile industry, we encourage you to explore
        our career opportunities.
      </p>
    </div>
  );
};

export default CareerHero;
