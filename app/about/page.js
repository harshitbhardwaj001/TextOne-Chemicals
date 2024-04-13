import AboutHero from "@/components/AboutHero";
import ChooseUs from "@/components/ChooseUs";
import Footer from "@/components/Footer";
import Values from "@/components/Values";
import Vision from "@/components/Vision";
import React from "react";

const about = () => {
  return (
    <div>
      <AboutHero />
      <Vision />
      <Values />
      <ChooseUs />
      <Footer />
    </div>
  );
};

export default about;
