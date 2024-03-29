import AboutHero from "@/components/AboutHero";
import ChooseUs from "@/components/ChooseUs";
import Footer from "@/components/Footer";
import Values from "@/components/Values";
import Vision from "@/components/Vision";
import React from "react";

const about = () => {
  return (
    <>
      <AboutHero />
      <Vision />
      <Values />
      <div className="absolute top-[330%]">
        <ChooseUs />
      </div>
      <div className="absolute top-[420%]">
        <Footer />
      </div>
    </>
  );
};

export default about;
