import React from "react";

const ProductHero = () => {
  return (
    <div className="w-full h-[724px] bg-[url(/products.png)] bg-cover bg-[50%_50%] absolute top-[3.2rem] z-[-1]">
      <p className="absolute w-[931px] top-[30%] left-[20%] [font-family:'Barlow-Bold',Helvetica] font-bold text-white text-[50px] text-left tracking-[0] leading-[normal]">
        Products
      </p>
      <p className="absolute w-[931px] top-[44%] left-[20%] [font-family:'Barlow-Bold',Helvetica] font-extralight text-white text-[22px] text-left tracking-[0] leading-[normal]">
        TextOne Industries offers a comprehensive range of organic textile
        chemicals that cater to a wide spectrum of textile processing
        applications. Our products are designed to enhance fabric quality,
        improve processing efficiency, and reduce environmental impact. <br />
        <br />
        We offer a carefully curated selection of organic textile chemicals,
        derived from renewable resources and biodegradable for an eco-friendly
        textile production process. Our organic dyes, auxiliaries, and finishing
        agents are meticulously formulated to deliver exceptional performance
        while minimizing environmental impact.
      </p>
      <button className="absolute top-[80%] left-[20%] bg-[#2F70B0] text-white text-[20px] font-bold px-[2rem] py-[0.2rem] rounded-full hover:bg-[#1F5182] transition-all ease-in-out">
        Contact Us
      </button>
    </div>
  );
};

export default ProductHero;
