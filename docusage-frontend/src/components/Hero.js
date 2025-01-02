import React from "react";
import heroImage from "../assets/images/hero.png"; // Adjust the path based on your folder structure

const Hero = () => {
  return (
    <section id="hero" className="bg-white py-32">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-12">
        {/* Text Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <span className="px-6 py-3 bg-gray-100 rounded-lg text-gray-700 inline-block text-base mb-6">
            Simplify Document Analysis
          </span>
          <h1 className="text-6xl font-bold mb-8">
            Transform Your Files into Insights with Docusage
          </h1>
          <p className="text-gray-600 text-xl mb-8">
            Upload documents, ask questions, and get instant answers powered by cutting-edge AI—all in one seamless platform.
          </p>
          <div className="flex space-x-6">
            <a
              href="#get-started"
              className="px-10 py-5 bg-orange-500 text-white font-bold rounded-lg shadow-lg hover:bg-orange-600 text-lg"
            >
              Get Started for Free
            </a>
            <a
              href="#how-it-works"
              className="px-10 py-5 bg-white border border-gray-300 text-gray-700 font-bold rounded-lg shadow-lg hover:bg-gray-100 text-lg"
            >
              See How It Works
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={heroImage}
            alt="Docusage Hero Section showcasing intelligent document analysis"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
