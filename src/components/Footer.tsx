import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#eaeafd] dark:bg-gray-900 shadow-inner mt-auto">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-8 flex flex-col gap-6">
        {/* Links Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          {/* Group 1 */}
          <div className="flex gap-8 flex-wrap justify-center">
            <a
              href="/about"
              className="text-gray-700 dark:text-gray-300 hover:text-[#6E52E4] dark:hover:text-[#A99BFF] font-medium text-lg transition-colors duration-200"
              aria-label="About Us"
            >
              About Us
            </a>
            <a
              href="/contact"
              className="text-gray-700 dark:text-gray-300 hover:text-[#6E52E4] dark:hover:text-[#A99BFF] font-medium text-lg transition-colors duration-200"
              aria-label="Contact Us"
            >
              Contact Us
            </a>
          </div>

          {/* Group 2 */}
          <div className="flex gap-8 flex-wrap justify-center">
            <a
              href="/privacy"
              className="text-gray-700 dark:text-gray-300 hover:text-[#6E52E4] dark:hover:text-[#A99BFF] font-medium text-lg transition-colors duration-200"
              aria-label="Privacy Policy"
            >
              Privacy Policy
            </a>
            <a
              href="/disclaimer"
              className="text-gray-700 dark:text-gray-300 hover:text-[#6E52E4] dark:hover:text-[#A99BFF] font-medium text-lg transition-colors duration-200"
              aria-label="Disclaimer"
            >
              Disclaimer
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Task Spinner. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
