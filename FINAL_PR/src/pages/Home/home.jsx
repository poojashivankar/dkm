import React from "react";
import ImageSlider from "./slider";
import FeatureCards from "./FeatureCards";
import ServicesSection from "./ServicesSection";
import AgricultureSection from "./AgricultureSection";
import WhyChooseUs from "./WhyChooseUs";
import CounterSection from "./CounterSection";
import VidioSection from "./VidioSection";





const Home = () => {
  return (
    <div>
      <ImageSlider />
      <FeatureCards />
      <AgricultureSection />
      <ServicesSection />
      <CounterSection />
      <WhyChooseUs />
      <VidioSection />
 

    </div>
    
  );
};

export default Home;