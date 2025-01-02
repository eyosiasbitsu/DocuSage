import React from "react";

const About = () => {
  return (
    <div className="bg-white py-20">
      {/* Heading Section */}
      <div className="max-w-7xl mx-auto text-center px-10">
        <span className="inline-block px-6 py-3 text-gray-500 bg-gray-100 rounded-full text-base font-semibold">
          Powered by AI
        </span>
        <h2 className="text-4xl font-bold text-gray-900 mt-6">
          Docusage Empowers Businesses with Data-Driven Insights
        </h2>
      </div>

      {/* Statistics Section */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto px-10">
        {/* Quick Analysis */}
        <div className="bg-gray-50 rounded-lg shadow-lg text-center py-10 px-8">
          <h3 className="text-5xl font-bold text-teal-900 mb-3">
            95<span className="text-xl font-medium">%</span>
          </h3>
          <p className="text-xl font-semibold text-gray-700">Quick Analysis</p>
          <p className="text-lg text-gray-600 mt-3">
            Documents analyzed in seconds.
          </p>
        </div>

        {/* Accurate Answers */}
        <div className="bg-gray-50 rounded-lg shadow-lg text-center py-10 px-8">
          <h3 className="text-5xl font-bold text-teal-900 mb-3">
            90<span className="text-xl font-medium">%</span>
          </h3>
          <p className="text-xl font-semibold text-gray-700">Accurate Answers</p>
          <p className="text-lg text-gray-600 mt-3">
            High accuracy in extracting insights.
          </p>
        </div>

        {/* Enhanced Productivity */}
        <div className="bg-gray-50 rounded-lg shadow-lg text-center py-10 px-8">
          <h3 className="text-5xl font-bold text-teal-900 mb-3">
            50<span className="text-xl font-medium">%</span>
          </h3>
          <p className="text-xl font-semibold text-gray-700">
            Enhanced Productivity
          </p>
          <p className="text-lg text-gray-600 mt-3">
            Save time with automated workflows.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center px-10">
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Docusage simplifies document analysis, enhances accuracy, and boosts productivity, allowing businesses to focus on what matters most.
        </p>
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="#get-started"
            className="px-10 py-5 bg-black text-white font-bold rounded-lg shadow-lg hover:bg-gray-800 text-lg"
          >
            Get Started for Free
          </a>
          <a
            href="#pricing"
            className="px-10 py-5 bg-white border border-gray-300 text-gray-700 font-bold rounded-lg shadow-lg hover:bg-gray-100 text-lg"
          >
            See Plans & Pricing
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
