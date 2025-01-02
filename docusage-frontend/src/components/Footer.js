import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between">
        {/* About the Project */}
        <div className="w-full md:w-1/4 mb-8">
          <img src="/path-to-your-logo.svg" alt="Docusage Logo" className="h-10 mb-4" />
          <p className="text-gray-600 text-sm mb-4">
            Docusage: Your all-in-one platform for intelligent document analysis.
          </p>
          <a
            href="#signup"
            className="block px-6 py-3 bg-orange-500 text-white text-sm font-semibold rounded-full text-center hover:bg-orange-600"
          >
            Get Started for Free
          </a>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-1/4 mb-8">
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="#features" className="hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:underline">
                Pricing
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className="w-full md:w-1/4 mb-8">
          <h3 className="text-lg font-bold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="#upload-guide" className="hover:underline">
                How to Upload Files
              </a>
            </li>
            <li>
              <a href="#question-guide" className="hover:underline">
                How to Ask Questions
              </a>
            </li>
            <li>
              <a href="#security" className="hover:underline">
                Data Security Policies
              </a>
            </li>
            <li>
              <a href="#developer-api" className="hover:underline">
                Developer API
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="w-full md:w-1/4">
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p className="text-sm text-gray-600 mb-2">support@docusage.com</p>
          <p className="text-sm text-gray-600 mb-4">
            4.8/5 customer satisfaction on{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Trustpilot
            </a>
          </p>
          <div className="flex space-x-4 text-gray-600">
            <a href="#" className="hover:text-orange-500">
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a href="#" className="hover:text-orange-500">
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a href="#" className="hover:text-orange-500">
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
            <a href="#" className="hover:text-orange-500">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm text-gray-500 mt-8">
        <p>© {new Date().getFullYear()} Docusage | All Rights Reserved</p>
        <p className="mt-2">
          <a href="#privacy" className="hover:underline">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#terms" className="hover:underline">
            Terms of Service
          </a>{" "}
          |{" "}
          <a href="#cookies" className="hover:underline">
            Cookie Preferences
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
