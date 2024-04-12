import React from "react";
import Image from "next/image";

function ProductCard() {
  return (
    <>
      <div className="w-[50vw] justify-center flex">
        <h1 className="[font-family:'Barlow-Bold',Helvetica] font-bold text-[#575757] text-[35px] text-left tracking-[0] leading-[normal] xs:max-md:hidden mt-[8rem] ">
          Organic Offerings
        </h1>
      </div>

      <div className="flex flex-col gap-12 md:flex-row w-full items-center mt-[5rem] md:mt-[4rem] md:justify-center md:gap-[4rem]">
        <h1 className="[font-family:'Barlow-Bold',Helvetica] font-bold text-[#575757] text-[35px] text-center tracking-[0] leading-[normal] md:hidden">
          Organic Offerings
        </h1>
        <div className="flex flex-col gap-3 items-center">
          <div className="w-[180px] h-[180px] md:w-[300px] md:h-[250px] rounded-lg overflow-hidden flex justify-center">
            <Image
              src="/image0.png"
              alt="Leaf"
              width={180}
              height={180}
              className="md:w-[300px]  "
            />
          </div>
          <div>
            <h1 className="font-bold text-[18px] text-center">Product 1</h1>
            <p className="font-light text-[15px] text-center">Organic 1</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <div className="w-[180px] h-[180px] md:w-[300px] md:h-[250px] rounded-lg overflow-hidden flex justify-center">
            <Image
              src="/image0.png"
              alt="Leaf"
              width={180}
              height={180}
              className="md:w-[300px]  "
            />
          </div>
          <div>
            <h1 className="font-bold text-[18px] text-center">Product 2</h1>
            <p className="font-light text-[15px] text-center">Organic 2</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <div className="w-[180px] h-[180px] md:w-[300px] md:h-[250px] rounded-lg overflow-hidden flex justify-center">
            <Image
              src="/image0.png"
              alt="Leaf"
              width={180}
              height={180}
              className="md:w-[300px]  "
            />
          </div>
          <div>
            <h1 className="font-bold text-[18px] text-center">Product 3</h1>
            <p className="font-light text-[15px] text-center">Organic 3</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
