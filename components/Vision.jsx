import React from "react";

const Vision = () => {
  return (
    <div className="flex gap-10 xs:max-md:flex-col bg-[rgba(47,112,176,0.05)] w-full py-[7rem] justify-center items-center">
      <div>
        <img
          src="/About2.png"
          alt="vision"
          className="w-[750px] xs:max-md:w-[300px]"
        />
      </div>
      <div className="flex flex-col gap-8 xs:max-md:items-center">
        <div>
          <h1 className="[font-family:'Barlow-Bold',Helvetica] font-semibold text-[#2F70B0] text-[50px] xs:max-md:text-[30px] text-left xs:max-md:text-center tracking-[0] leading-[normal]">
            VISION
          </h1>
          <p className="[font-family:'Barlow-Bold',Helvetica] font-light text-[#575757] text-[17px] text-left tracking-[0] xs:max-md:text-center xs:max-md:text-[14px] xs:max-md:w-[85vw] leading-[normal] w-[400px] mt-[1.2rem]">
            We envision a future where textiles are not just about function, but
            also about artistry and expression. We aspire to be the world&apos;s
            leading provider of innovative and sustainable textile chemicals,
            empowering our customers to create fabrics that are not only
            beautiful and functional, but also environmentally responsible. We
            believe that the textile industry has the potential to be a force
            for good in the world, and we are committed to playing our part in
            making that vision a reality.
          </p>
        </div>
        <div>
          <h1 className="[font-family:'Barlow-Bold',Helvetica] font-semibold text-[#2F70B0] text-[50px] xs:max-md:text-[30px] text-left xs:max-md:text-center tracking-[0] leading-[normal]">
            MISSION
          </h1>
          <p className="[font-family:'Barlow-Bold',Helvetica] font-light text-[#575757] text-[17px] text-left tracking-[0] xs:max-md:text-center xs:max-md:text-[14px] xs:max-md:w-[85vw] leading-[normal] w-[400px] mt-[1.2rem]">
            To empower the textile industry with innovative, sustainable, and
            high-performance chemical solutions that elevate the quality,
            aesthetics, and environmental impact of textiles. We strive to be a
            trusted partner, collaborating with our customers to redefine the
            very fabric of fashion and contribute to a more sustainable future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
