import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs'; // Import the AboutUs component
import Contact from './pages/Contact'; // Import the Contact component
import Disclaimer from './pages/Disclaimer'; // Import the Contact component
import Privacy from './pages/Privacy'; // Import the Contact component

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

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home page route */}
            <Route path="/about" element={<AboutUs />} /> {/* About Us page route */}
            <Route path="/contact" element={<Contact />} /> {/* About Us page route */}
            <Route path="/Privacy" element={<Privacy />} /> {/* About Us page route */}
            <Route path="/disclaimer" element={<Disclaimer />} /> {/* About Us page route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
