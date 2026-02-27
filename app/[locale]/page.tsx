"use client"

import Hero from "@/app/[locale]/components/Hero";
import Navbar from "@/app/[locale]/components/Navbar";
import About from "@/app/[locale]/components/About/About";
import Line from "@/app/[locale]/components/Line";
import FactoriesCarousel from "@/app/[locale]/components/Factories/FactoriesCarousel";
import Gallery from "@/app/[locale]/components/Gallery/Gallery";
import Contact from "@/app/[locale]/components/Contact";
import Footer from "@/app/[locale]/components/Footer";

export default function HomePage() {
  //   custom-scroll overflow-y-auto h-screen bg-transparent z-99

    return (
      <div className={"custom-scroll overflow-y-auto h-screen bg-transparent z-99"}>
          <Navbar/>
          <Hero/>
          <About/>
          <Line/>
          <FactoriesCarousel/>
          <Line/>
          <Gallery/>
          <Line/>
          <Contact/>
          <Footer/>
      </div>
  );
}

