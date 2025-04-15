import React from 'react';
import { MessageSquare, Sun, Moon } from 'lucide-react';

const Navbar = ({
  isDark,
  toggleDarkMode,
}: {
  isDark: boolean;
  toggleDarkMode: () => void;
}) => {
  return (
    <nav className="bg-[#eaeafd] dark:bg-gray-900 shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Name */}
          <div className="flex items-center gap-3">
            <img src="/faviconbgr.png" alt="Logo" className="h-8 w-8 rounded-full" />
            <span className="text-xl font-bold text-gray-800 dark:text-white tracking-tight">
              Spin N Go
            </span>
          </div>

          {/* Feedback + Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="https://forms.gle/p9wb8mi57UQF3vgu7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-[#6E52E4] dark:hover:text-[#A99BFF] transition transform hover:scale-105 duration-200"
            >
              <MessageSquare size={20} />
              <span className="hidden sm:inline font-medium">Feedback</span>
            </a>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#6E52E4] transform hover:scale-105"
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
