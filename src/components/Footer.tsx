import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-md mt-auto">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-6 flex flex-col">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex space-x-12">
            <a href="/about" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 font-semibold text-lg" aria-label="About Us">
              About Us
            </a>
            <a href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 font-semibold text-lg" aria-label="Contact Us">
              Contact Us
            </a>
          </div>
          <div className="flex space-x-12">
            <a
              href="/privacy"
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 font-semibold text-lg"
              aria-label="Privacy Policy"
            >
              Privacy Policy
            </a>
            <a
              href="/disclaimer"
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 font-semibold text-lg"
              aria-label="Disclaimer"
            >
              Disclaimer
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Task Spinner. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;