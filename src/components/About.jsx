import React from 'react';

const About = () => {
  const academicMilestones = [
    {
      year: "2024 - Present",
      title: "Bachelor of Engineering (B.E.)",
      institution: "Computer Science & Engineering",
      description: "Deep-diving into core concepts like Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Software Engineering methodologies. Maintaining high academic standing."
    },
    {
      year: "2023 - 2024",
      title: "Full-Stack Development & Tech Bootcamps",
      institution: "Self-Paced Specialization",
      description: "Acquired industry-relevant skills in React.js, Node.js, Express, MongoDB, and Git. Built multiple mini-projects, solved 200+ algorithmic challenges on platforms like LeetCode, and explored Web API integrations."
    },
    {
      year: "2022",
      title: "Higher Secondary Education",
      institution: "Science & Mathematics Focus",
      description: "Graduated with top marks in Mathematics and Computer Science, establishing a strong foundation in programming basics (Python/C++), analytical reasoning, and scientific principles."
    }
  ];

  return (
    <section id="about" className="about-section section">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-subtitle">My Journey</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          {/* Brief Bio Card */}
          <div className="about-intro">
            <h3 className="about-headline">
              A Passionate <span className="gradient-text">Computer Science Student</span> & Innovator
            </h3>
            <p className="about-text">
              Hello! I am **Anish R**, currently pursuing my Bachelor of Engineering in Computer Science and Engineering. 
              My journey in tech began with curiosity about how complex web applications run under the hood, which quickly evolved into a deep passion for system design and clean code.
            </p>
            <p className="about-text">
              As a CSE student, I love bridges. I bridge the gap between complex backend logic (highly structured algorithms, SQL databases) and beautiful frontend aesthetics (responsive layouts, modern design tokens). I am highly self-motivated, constantly building projects to apply theoretical university coursework in real-world scenarios.
            </p>

            <div className="about-key-stats">
              <div className="stat-card glass-card">
                <span className="stat-number gradient-text">BE</span>
                <span className="stat-label">Computer Science</span>
              </div>
              <div className="stat-card glass-card">
                <span className="stat-number gradient-text">10+</span>
                <span className="stat-label">Projects Built</span>
              </div>
              <div className="stat-card glass-card">
                <span className="stat-number gradient-text">300+</span>
                <span className="stat-label">LeetCode Solved</span>
              </div>
            </div>
          </div>

          {/* Academic Timeline Card */}
          <div className="about-timeline-wrapper">
            <h3 className="timeline-heading">Education & Milestones</h3>
            <div className="timeline">
              {academicMilestones.map((milestone, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content glass-card">
                    <span className="timeline-year">{milestone.year}</span>
                    <h4 className="timeline-title">{milestone.title}</h4>
                    <span className="timeline-institution">{milestone.institution}</span>
                    <p className="timeline-desc">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
