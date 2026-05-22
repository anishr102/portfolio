import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: "fa-solid fa-terminal",
      skills: [
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "Python", level: 85 },
        { name: "Java", level: 80 },
        { name: "C++", level: 75 }
      ]
    },
    {
      category: "Frontend Web Development",
      icon: "fa-solid fa-code",
      skills: [
        { name: "ReactJS", level: 90 },
        { name: "HTML5 & CSS3", level: 95 },
        { name: "Vanilla JS Logic", level: 88 },
        { name: "Responsive Design", level: 92 }
      ]
    },
    {
      category: "Backend & Databases",
      icon: "fa-solid fa-server",
      skills: [
        { name: "Node.js & Express", level: 82 },
        { name: "SQL (MySQL / PostgreSQL)", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "RESTful API Integration", level: 88 }
      ]
    },
    {
      category: "Core CS & Dev Tools",
      icon: "fa-solid fa-screwdriver-wrench",
      skills: [
        { name: "Data Structures & Algorithms", level: 85 },
        { name: "Git & Version Control", level: 90 },
        { name: "Linux & Bash Commands", level: 75 },
        { name: "Vercel / Netlify Deployments", level: 88 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section section">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-subtitle">Expertise</span>
          <h2 className="section-title">My Skills</h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="skills-category-card glass-card">
              <div className="category-header">
                <div className="category-icon-wrapper">
                  <i className={`${cat.icon} category-icon`}></i>
                </div>
                <h3 className="category-title">{cat.category}</h3>
              </div>

              <div className="skills-list">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-bg">
                      <div 
                        className="skill-bar-fill" 
                        style={{ width: `${skill.level}%` }}
                        role="progressbar"
                        aria-valuenow={skill.level}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
