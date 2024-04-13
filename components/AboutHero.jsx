import React from "react";

const AboutHero = () => {
  return (
    <div className="w-full h-[654px] bg-[url(/abouthero.png)] bg-cover bg-[50%_50%]">
      <div className="w-[58vw] xs:max-md:w-[80vw] h-[654px] xs:max-md:h-[100vh] flex flex-col gap-[2rem] items-start xs:max-md:items-center md:gap-[2rem] justify-center mx-auto pt-[5rem]">
        <div className="[font-family:'Barlow-Bold',Helvetica] font-bold text-white text-[50px] text-left xs:max-md:text-center tracking-[0] leading-[normal] xs:max-md:static xs:max-md:w-[100%] xs:max-md:text-[40px]">
          About Us
        </div>
        <div className="w-[58vw] xs:max-md:w-[80vw] [font-family:'Barlow-Bold',Helvetica] font-extralight text-white text-[25px] xs:max-md:text-center xs:max-md:text-[17px] text-left tracking-[0] leading-[normal]">
          TextOne Industries LLP is a provider of innovative and sustainable
          textile chemicals. We are passionate about developing solutions that
          enhance fabric quality while minimizing environmental impact. Our team
          of experienced chemists and textile experts is dedicated to providing
          our customers with the highest quality products and support.
        </div>
        <button className="bg-[#2F70B0] text-white text-[20px] font-bold px-[2rem] py-[0.2rem] rounded-full hover:bg-[#1F5182] transition-all ease-in-out">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default AboutHero;
