import React from 'react';
import { MessageSquare, Sun, Moon } from 'lucide-react';

const Navbar = ({ isDark, toggleDarkMode }: { isDark: boolean; toggleDarkMode: () => void }) => {
  return (
   
   <nav className="bg-[#dcddf5] dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src="/faviconbgr.png" alt="Logo" className="h-8 w-8" />
            <span className="ml-2 text-xl font-semibold text-gray-800 dark:text-white">Spin N Go</span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://forms.gle/p9wb8mi57UQF3vgu7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <MessageSquare size={22} className="text-purple-500 dark:text-purple-400" />
              <span className="text-lg font-medium">Feedback</span>
            </a>
            <button
              onClick={toggleDarkMode}
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 ease-in-out transform hover:scale-105"
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun size={22} /> : <Moon size={22} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
