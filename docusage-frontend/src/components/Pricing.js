import React from "react";

const Pricing = () => {
  const plans = [
    {
      title: "Basic",
      description: "For individuals getting started with document analysis",
      price: "$9",
      frequency: "/month",
      features: ["Single User", "Basic Document Uploads", "Email Support"],
      buttonStyle: "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100",
    },
    {
      title: "Pro",
      description: "For growing teams + advanced features",
      price: "$15",
      frequency: "/month",
      features: [
        "Up to 5 Users",
        "Priority Processing",
        "Custom Document Storage",
      ],
      highlight: "Best Plan",
      highlightStyle: "bg-blue-100 text-blue-600",
      buttonStyle: "bg-orange-500 text-white hover:bg-orange-600",
    },
    {
      title: "Enterprise",
      description: "For enterprises with large-scale document needs",
      price: "$35",
      frequency: "/month",
      features: [
        "Unlimited Users",
        "Dedicated Support",
        "Custom AI Models",
      ],
      buttonStyle: "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100",
    },
  ];

  return (
    <section id="pricing" className="bg-gradient-to-br from-blue-50 to-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose the Perfect Plan for Your Business
          </h2>
          <p className="text-lg text-gray-600">
            Simple and transparent pricing to fit your needs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg p-6 text-center ${
                plan.highlight ? "border-4 border-orange-500 relative" : ""
              }`}
            >
              {/* Highlight Badge */}
              {plan.highlight && (
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 ${plan.highlightStyle} text-sm font-semibold rounded-full`}
                  >
                    {plan.highlight}
                  </span>
                </div>
              )}

              {/* Plan Details */}
              <h3 className="text-2xl font-semibold text-gray-800">{plan.title}</h3>
              <p className="text-gray-500 mt-2">{plan.description}</p>
              <div className="text-gray-900 mt-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-lg font-medium">{plan.frequency}</span>
              </div>

              {/* Features */}
              <ul className="text-gray-600 mt-4 space-y-2 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>

              {/* Get Started Button */}
              <a
                href="#get-started"
                className={`mt-8 inline-block px-6 py-3 font-bold rounded-lg shadow ${plan.buttonStyle}`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;