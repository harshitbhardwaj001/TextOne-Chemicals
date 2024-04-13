import React from "react";

const ProductHero = () => {
  return (
    <div className="w-full h-[100vh] bg-[url(/products.png)] bg-cover bg-[50%_50%]">
      <div className="w-[58vw] xs:max-md:w-[80vw] h-[654px] xs:max-md:h-[100vh] flex flex-col gap-[2rem] items-start xs:max-md:items-center md:gap-[2rem] justify-center mx-auto pt-[5rem]">
        <p className="[font-family:'Barlow-Bold',Helvetica] font-bold text-white text-[50px] text-left xs:max-md:text-center tracking-[0] leading-[normal] xs:max-md:static xs:max-md:w-[100%] xs:max-md:text-[40px]">
          Products
        </p>
        <p className="w-[58vw] xs:max-md:w-[80vw] [font-family:'Barlow-Bold',Helvetica] font-extralight text-white text-[25px] xs:max-md:text-center xs:max-md:text-[17px] text-left tracking-[0] leading-[normal]">
          TextOne Industries offers a comprehensive range of organic textile
          chemicals that cater to a wide spectrum of textile processing
          applications. Our products are designed to enhance fabric quality,
          improve processing efficiency, and reduce environmental impact. <br />
          <br />
          <span className="xs:max-md:hidden">
            We offer a carefully curated selection of organic textile chemicals,
            derived from renewable resources and biodegradable for an
            eco-friendly textile production process. Our organic dyes,
            auxiliaries, and finishing agents are meticulously formulated to
            deliver exceptional performance while minimizing environmental
            impact.
          </span>
        </p>
        <button className=" bg-[#2F70B0] text-white text-[20px] font-bold px-[2rem] py-[0.2rem] rounded-full hover:bg-[#1F5182] transition-all ease-in-out">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default ProductHero;
