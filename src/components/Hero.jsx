import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const words = [
    "Computer Science Engineer",
    "Full-Stack Web Developer",
    "Creative Problem Solver",
    "AI/ML Enthusiast"
  ];
  
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  useEffect(() => {
    let timer;
    const currentWord = words[textIndex];

    if (!isDeleting) {
      if (displayText.length < currentWord.length) {
        timer = setTimeout(() => {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentWord.substring(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setTextIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex]);

  const handleExploreProjects = (e) => {
    e.preventDefault();
    const target = document.querySelector('#projects');
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const handleContactMe = (e) => {
    e.preventDefault();
    const target = document.querySelector('#contact');
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="hero-section section">
      <div className="hero-container container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-pulse"></span>
            Available for Internships & Projects
          </div>
          <h1 className="hero-greeting">
            Hi, I am <span className="gradient-text hero-name">Anish R</span>
          </h1>
          <h2 className="hero-typing-wrapper">
            I'm a <span className="hero-typed-text">{displayText}</span><span className="hero-cursor">|</span>
          </h2>
          <p className="hero-description">
            Pursuing a Bachelor of Engineering in <strong>Computer Science and Engineering</strong>. 
            I build highly optimized, secure, and visually stunning web systems, blending algorithms with user-centered design.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary" onClick={handleExploreProjects}>
              View My Work <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href="#contact" className="btn btn-secondary" onClick={handleContactMe}>
              Let's Talk <i className="fa-regular fa-envelope"></i>
            </a>
          </div>
          <div className="hero-social-strip">
            <a href="https://github.com/anishr102" target="_blank" rel="noreferrer" className="social-icon-link" aria-label="GitHub">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/anish-r-54b11437b" target="_blank" rel="noreferrer" className="social-icon-link" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="mailto:anish102anish@gmail.com" className="social-icon-link" aria-label="Email">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>

        {/* Visual Mockup - Premium Interactive Glass Coder Card */}
        <div className="hero-visual">
          <div className="coder-card-wrapper">
            <div className="coder-card-ambient"></div>
            <div className="coder-card glass-card">
              <div className="card-header">
                <div className="window-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="card-title-tab">anish.json</div>
              </div>
              <div className="card-body">
                <pre>
                  <code>
                    <span className="code-keyword">const</span> developer = &#123;<br />
                    &nbsp;&nbsp;name: <span className="code-string">"Anish R"</span>,<br />
                    &nbsp;&nbsp;role: <span className="code-string">"Computer Science Student"</span>,<br />
                    &nbsp;&nbsp;education: &#123;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;degree: <span className="code-string">"B.E. CSE"</span>,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;status: <span className="code-string">"Active Learning"</span><br />
                    &nbsp;&nbsp;&#125;,<br />
                    &nbsp;&nbsp;skills: [<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">"JavaScript"</span>, <span className="code-string">"React"</span>, <span className="code-string">"Python"</span>,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">"DSA"</span>, <span className="code-string">"Node.js"</span>, <span className="code-string">"SQL"</span><br />
                    &nbsp;&nbsp;],<br />
                    &nbsp;&nbsp;mindset: <span className="code-string">"Learn. Build. Optimize."</span><br />
                    &#125;;
                  </code>
                </pre>
              </div>
            </div>
            {/* Overlay floating shapes */}
            <div className="floating-badge badge-top-left glass-card">
              <i className="fa-solid fa-code text-indigo"></i>
              <div>
                <span>Clean Code</span>
              </div>
            </div>
            <div className="floating-badge badge-bottom-right glass-card">
              <i className="fa-solid fa-graduation-cap text-cyan"></i>
              <div>
                <span>BE CSE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
