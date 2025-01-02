import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-gray-50">
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;