import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const handleScroll = (event, sectionId) => {
    event.preventDefault(); // Prevent default anchor behavior
    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Redirect to home first, then scroll after render
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between">
        {/* About the Project */}
        <div className="w-full md:w-1/4 mb-8">
          <img
            src="/path-to-your-logo.svg"
            alt="Docusage Logo"
            className="h-10 mb-4"
          />
          <p className="text-gray-600 text-sm mb-4">
            Docusage: Your all-in-one platform for intelligent document analysis.
          </p>
          <a
            href="#signup"
            onClick={(e) => handleScroll(e, "signup")}
            className="block px-6 py-3 bg-orange-500 text-white text-sm font-semibold rounded-full text-center hover:bg-orange-600 cursor-pointer"
          >
            Get Started for Free
          </a>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-1/4 mb-8">
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a
                href="#features"
                onClick={(e) => handleScroll(e, "features")}
                className="hover:underline cursor-pointer"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                onClick={(e) => handleScroll(e, "pricing")}
                className="hover:underline cursor-pointer"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => handleScroll(e, "about")}
                className="hover:underline cursor-pointer"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#faq"
                onClick={(e) => handleScroll(e, "faq")}
                className="hover:underline cursor-pointer"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "contact")}
                className="hover:underline cursor-pointer"
              >
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
              <a
                href="#upload-guide"
                onClick={(e) => handleScroll(e, "upload-guide")}
                className="hover:underline cursor-pointer"
              >
                How to Upload Files
              </a>
            </li>
            <li>
              <a
                href="#question-guide"
                onClick={(e) => handleScroll(e, "question-guide")}
                className="hover:underline cursor-pointer"
              >
                How to Ask Questions
              </a>
            </li>
            <li>
              <a
                href="#security"
                onClick={(e) => handleScroll(e, "security")}
                className="hover:underline cursor-pointer"
              >
                Data Security Policies
              </a>
            </li>
            <li>
              <a
                href="#developer-api"
                onClick={(e) => handleScroll(e, "developer-api")}
                className="hover:underline cursor-pointer"
              >
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
          <a
            href="#privacy"
            onClick={(e) => handleScroll(e, "privacy")}
            className="hover:underline cursor-pointer"
          >
            Privacy Policy
          </a>{" "}
          |{" "}
          <a
            href="#terms"
            onClick={(e) => handleScroll(e, "terms")}
            className="hover:underline cursor-pointer"
          >
            Terms of Service
          </a>{" "}
          |{" "}
          <a
            href="#cookies"
            onClick={(e) => handleScroll(e, "cookies")}
            className="hover:underline cursor-pointer"
          >
            Cookie Preferences
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
