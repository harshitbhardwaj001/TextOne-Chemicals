import React from "react";

const AboutHero = () => {
  return (
    <div className="w-full h-[654px] bg-[url(/abouthero.png)] bg-cover bg-[50%_50%] absolute top-[3.2rem] z-[-1]">
      <p className="absolute w-[931px] top-[35%] left-[20%] [font-family:'Barlow-Bold',Helvetica] font-bold text-white text-[50px] text-left tracking-[0] leading-[normal]">
        About Us
      </p>
      <p className="absolute w-[931px] top-[50%] left-[20%] [font-family:'Barlow-Bold',Helvetica] font-extralight text-white text-[25px] text-left tracking-[0] leading-[normal]">
        TextOne Industries LLP is a provider of innovative and sustainable
        textile chemicals. We are passionate about developing solutions that
        enhance fabric quality while minimizing environmental impact. Our team
        of experienced chemists and textile experts is dedicated to providing
        our customers with the highest quality products and support.
      </p>
      <button className="absolute top-[80%] left-[20%] bg-[#2F70B0] text-white text-[20px] font-bold px-[2rem] py-[0.2rem] rounded-full hover:bg-[#1F5182] transition-all ease-in-out">
        Contact Us
      </button>
    </div>
  );
};

export default AboutHero;
