import Footer from "@/components/Footer";
import ProductCategory from "@/components/ProductCategory";
import ProductHero from "@/components/ProductHero";
import Showcase from "@/components/Showcase";
import React from "react";

const page = () => {
  return (
    <>
      <ProductHero />
      <ProductCategory />
      <Showcase />
      <div className="absolute top-[460%]">
        <Footer />
      </div>
    </>
  );
};

export default page;
