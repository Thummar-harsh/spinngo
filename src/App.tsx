import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs'; // Import the AboutUs component
import Contact from './pages/Contact'; // Import the Contact component
import Disclaimer from './pages/Disclaimer'; // Import the Contact component
import Privacy from './pages/Privacy'; // Import the Contact component
import Im18 from './pages/Im18'; // Import the Contact component
// import { Feedbackss } from './pages/Feedbackss';


import { AnimatePresence } from 'framer-motion';
import AnimatedPage from './components/AnimatedPage';


function App() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleDarkMode = () => setIsDark(!isDark);
  

  useEffect(() => {
    // Automatically enable dark mode for certain routes like '/im18' or '/xnxx'
    if (location.pathname === '/im18' || location.pathname === '/xnxx') {
      document.documentElement.classList.add('dark');
      setIsDark(true); // Turn on dark mode when on these routes
    } else {
      // Turn off dark mode on other routes
    }
  }, [location]); // Dependency array to run when location changes

  

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />
        <main
  className="flex-grow transition-colors duration-300"
  style={{
    background: isDark 
      ? 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)' // Dark mode gradient
      : 'linear-gradient(135deg, #a7c7e7, #b2d7f7)' // Light mode cool gradient
  }}
>


<AnimatePresence mode="wait">
  <Routes location={location} key={location.pathname}>
    <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
    <Route path="/about" element={<AnimatedPage><AboutUs /></AnimatedPage>} />
    <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
    <Route path="/privacy" element={<AnimatedPage><Privacy /></AnimatedPage>} />
    <Route path="/disclaimer" element={<AnimatedPage><Disclaimer /></AnimatedPage>} />
    <Route path="/im18" element={<AnimatedPage><Im18 /></AnimatedPage>} />
    <Route path="/couple" element={<AnimatedPage><Im18 /></AnimatedPage>} />
    {/* <Route path="/feedback" element={<AnimatedPage><Feedbackss /></AnimatedPage>} /> */}

    <Route path="*" element={<AnimatedPage><div className="p-8 text-center">404 - Page Not Found</div></AnimatedPage>} />
  </Routes>
</AnimatePresence>

        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
