import React from "react";
import { useNavigate } from "react-router-dom";

const Features = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const features = [
    {
      icon: "fas fa-file-alt",
      color: "text-yellow-500",
      title: "Document Uploads",
      description: "Easily upload PDFs and DOCX files for analysis.",
    },
    {
      icon: "fas fa-brain",
      color: "text-teal-500",
      title: "AI-Powered Insights",
      description:
        "Leverage cutting-edge AI to extract meaningful insights from your documents.",
    },
    {
      icon: "fas fa-lock",
      color: "text-orange-500",
      title: "Secure Processing",
      description:
        "All files are securely processed with robust encryption standards.",
    },
    {
      icon: "fas fa-mobile-alt",
      color: "text-green-500",
      title: "Mobile Friendly",
      description:
        "Analyze and view results seamlessly on any device, anytime, anywhere.",
    },
    {
      icon: "fas fa-users",
      color: "text-pink-500",
      title: "Collaborative Access",
      description:
        "Share insights and collaborate with your team securely and efficiently.",
    },
    {
      icon: "fas fa-chart-line",
      color: "text-blue-500",
      title: "Actionable Analytics",
      description:
        "Gain valuable analytics to optimize workflows and accelerate growth.",
    },
  ];

  const handleExploreFeatures = () => {
    navigate("/login"); // Navigate to the login page
  };

  return (
    <section id="features" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gray-500 uppercase tracking-wide text-base">
            Features That Set Us Apart
          </span>
          <h2 className="text-5xl font-bold text-gray-900 mt-4">
            Why Professionals Choose
          </h2>
          <h2 className="text-5xl font-bold text-gray-900 mt-4">Docusage</h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-item bg-gray-50 p-8 rounded-lg text-center shadow-lg"
            >
              <div className="icon mb-6">
                <span className={`${feature.color} text-5xl`}>
                  <i className={feature.icon}></i>
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-lg text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-16">
          <button
            onClick={handleExploreFeatures} // Navigate to login page on click
            className="inline-block px-10 py-5 bg-black text-white text-xl font-bold rounded-lg shadow-lg hover:bg-gray-800"
          >
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
