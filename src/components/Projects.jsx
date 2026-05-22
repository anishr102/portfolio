import React, { useState } from 'react';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: "Smart Campus Student Portal",
      subtitle: "Full-Stack Web Application",
      tags: ["React.js", "Node.js", "Express", "PostgreSQL", "JWT"],
      description: "A centralized campus hub for students to register for academic courses, track exam grades, and browse university club announcements in real-time.",
      extendedDetails: "Designed with a secure authentication system utilizing JWT and password hashing. Features a responsive student dashboard and an administrative panel. PostgreSQL database triggers automatically recalculate student CGPAs upon grading. Successfully optimized API responses using caching mechanisms, lowering route latency by 35%.",
      github: "https://github.com/anishr102/smart-campus",
      live: "https://smart-campus-anish.vercel.app"
    },
    {
      id: 2,
      title: "Algorithmic Pathfinding & Sorting Visualizer",
      subtitle: "Interactive Educational Tool",
      tags: ["React.js", "Data Structures", "Algorithms", "CSS Transitions"],
      description: "An interactive, visual demonstration of key Computer Science pathfinding algorithms (Dijkstra's, A* Search) and sorting routines (QuickSort, MergeSort).",
      extendedDetails: "Enables users to draw walls, select custom speeds, and watch how search trees expand across grid systems in real time. Designed using custom timing hooks in React to guarantee smooth animation frame rates. Highly helpful project for college peers studying core DSA courses to visually comprehend spatial searching logic.",
      github: "https://github.com/anishr102/pathfinding-visualizer",
      live: "https://pathfinding-visualizer-anish.vercel.app"
    },
    {
      id: 3,
      title: "DevSpace - Collaborative Hackathon Finder",
      subtitle: "Full-Stack Student Platform",
      tags: ["React.js", "MongoDB", "Express", "Socket.io", "Cloudinary"],
      description: "A peer-to-peer collaboration platform allowing computer science students to post hackathon proposals, search for teammates by skill, and chat live.",
      extendedDetails: "Equipped with live chat utilizing Socket.io for instantaneous message delivery. Users can build professional profiles highlighting their languages, projects, and active hackathon status. Embedded a custom matchmaking algorithm to suggest relevant co-founders based on overlapping language stacks and complementary expertise.",
      github: "https://github.com/anishr102/devspace-collab",
      live: "https://devspace-anish.vercel.app"
    }
  ];

  const toggleExpand = (id) => {
    if (expandedProject === id) {
      setExpandedProject(null);
    } else {
      setExpandedProject(id);
    }
  };

  return (
    <section id="projects" className="projects-section section">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-subtitle">Showcase</span>
          <h2 className="section-title">My Projects</h2>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => {
            const isExpanded = expandedProject === project.id;
            return (
              <div 
                key={project.id} 
                className={`project-card glass-card ${isExpanded ? 'expanded' : ''}`}
              >
                <div className="project-header">
                  <span className="project-category">{project.subtitle}</span>
                  <h3 className="project-title">{project.title}</h3>
                </div>

                <p className="project-summary">{project.description}</p>

                {/* Tech Badges */}
                <div className="project-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="tag-badge">{tag}</span>
                  ))}
                </div>

                {/* Expandable Details Area */}
                <div className={`project-extended-details ${isExpanded ? 'show' : ''}`}>
                  <h4 className="extended-title">Key Implementations:</h4>
                  <p className="extended-text">{project.extendedDetails}</p>
                </div>

                {/* Actions Section */}
                <div className="project-footer">
                  <button 
                    className="btn-details-toggle" 
                    onClick={() => toggleExpand(project.id)}
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? (
                      <>Show Less <i className="fa-solid fa-chevron-up"></i></>
                    ) : (
                      <>Read Key Details <i className="fa-solid fa-chevron-down"></i></>
                    )}
                  </button>

                  <div className="project-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="project-link-btn" 
                      aria-label="View Source on GitHub"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="project-link-btn" 
                      aria-label="View Live Project Site"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
