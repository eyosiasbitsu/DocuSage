import React, { useState } from "react";

const FAQ = () => {
  // FAQ Data
  const faqs = [
    {
      question: "What is Docusage?",
      answer:
        "Docusage is an all-in-one platform that allows you to upload documents, ask questions, and receive intelligent answers powered by AI.",
    },
    {
      question: "How does the free trial work?",
      answer:
        "You get a 14-day free trial with unrestricted access to all features—no credit card required. Explore, test, and experience the platform risk-free!",
    },
    {
      question: "Can I upload multiple documents?",
      answer:
        "Yes, you can upload multiple documents, and Docusage will intelligently analyze them to provide relevant answers.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely! We prioritize your data privacy and security. All uploaded files are encrypted and stored securely.",
    },
  ];

  // State to track active FAQ
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle FAQ Item
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-10">
          Got Questions? We’ve Got Answers.
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item border-b border-gray-300"
              onClick={() => toggleFAQ(index)}
            >
              <button
                className="flex justify-between items-center w-full py-4 text-left"
                aria-expanded={activeIndex === index}
              >
                <h3 className="text-2xl font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <span
                  className={`icon text-orange-500 text-3xl transition-transform ${
                    activeIndex === index ? "rotate-45" : ""
                  }`}
                >
                  <i className="fas fa-plus"></i>
                </span>
              </button>
              <div
                className={`faq-content text-gray-600 pl-4 mt-2 text-lg ${
                  activeIndex === index ? "block" : "hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>

        {/* Signup Button */}
        <div className="mt-10 text-center">
          <a
            href="#get-started"
            className="px-6 py-3 bg-black text-white font-bold text-xl rounded-md inline-block hover:bg-gray-800 transition"
          >
            Sign Up to Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
