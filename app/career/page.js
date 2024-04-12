import CareerForm from "@/components/CareerForm";
import CareerHero from "@/components/CareerHero";
import Footer from "@/components/Footer";
import React from "react";

const page = () => {
  return (
    <>
      <CareerHero />
      <CareerForm />
      <div className="absolute top-[220%]">
        <Footer />
      </div>
    </>
  );
};

export default page;
