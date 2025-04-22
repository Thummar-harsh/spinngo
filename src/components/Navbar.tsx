import React, { useState, useEffect } from 'react';
import { MessageSquare, Sun, Moon, Heart, Monitor } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleDarkMode }) => {
  const [isCouple, setIsCouple] = useState<boolean>(() => {
    const stored = localStorage.getItem('isCouple');
    return stored === null ? true : JSON.parse(stored);
  });

  useEffect(() => {
    localStorage.setItem('isCouple', JSON.stringify(isCouple));
  }, [isCouple]);

  const handleLinkClick = () => {
    const url = isCouple ? '/couple' : '/';
    window.open(url, '_self');
    setIsCouple(!isCouple);
  };

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

          {/* Navigation Actions */}
          <div className="flex items-center gap-4">
            {/* Toggle Button */}
            <button
              onClick={handleLinkClick}
              className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-[#6E52E4] dark:hover:text-[#A99BFF] transition transform hover:scale-105 duration-200"
            >
              {isCouple ? <Heart size={20} /> : <Monitor size={20} />}
              <span className="hidden sm:inline font-medium">{isCouple ? 'Couple' : 'Home'}</span>
            </button>

            {/* Feedback Link */}
            <a
              href="https://forms.gle/p9wb8mi57UQF3vgu7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-[#6E52E4] dark:hover:text-[#A99BFF] transition transform hover:scale-105 duration-200"
            >
              <MessageSquare size={20} />
              <span className="hidden sm:inline font-medium">Feedback</span>
            </a>

            {/* Dark Mode Toggle */}
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
