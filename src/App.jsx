import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    // Default to dark mode for premium aesthetic
    return 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      {/* Background Particles & Grid overlay for Rich Visuals */}
      <div className="bg-ambient-layer">
        <div className="ambient-blob blob-1"></div>
        <div className="ambient-blob blob-2"></div>
        <div className="ambient-blob blob-3"></div>
      </div>
      <div className="bg-grid-overlay"></div>

      {/* Sticky Frosty Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Page Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-container container">
          <div className="footer-logo">
            <span className="logo-icon">&lt;/&gt;</span>
            <span className="logo-text">Anish<span className="logo-accent">.R</span></span>
          </div>
          
          <div className="footer-socials">
            <a 
              href="https://github.com/anishr102" 
              target="_blank" 
              rel="noreferrer" 
              className="footer-social-link" 
              aria-label="GitHub Profile"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/anish-r-54b11437b" 
              target="_blank" 
              rel="noreferrer" 
              className="footer-social-link" 
              aria-label="LinkedIn Profile"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a 
              href="mailto:anish102anish@gmail.com" 
              className="footer-social-link" 
              aria-label="Email Anish"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>

          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Anish R. Built with passion & React. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
