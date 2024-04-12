import ChooseUs from "@/components/ChooseUs";
import Consult from "@/components/Consult";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Sustainability from "@/components/Sustainability";

export default function Home() {
  return (
    <>
      <Hero />
      <Sustainability />
      <Consult />
      <ProductCard />
      <ChooseUs />
      {/* <div className="absolute top-[450%]">
        <Footer />
      </div> */}
    </>
  );
}
