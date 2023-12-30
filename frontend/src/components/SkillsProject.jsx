import React, { useState } from 'react';
import './SkillsProject.css';

function SkillsProject() {
  const [activeTab, setActiveTab] = useState('frontend');

  const tabs = [
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'database', label: 'Database' },
    { key: 'devops', label: 'DevOps' },
  ];

  const skillsData = {
    frontend: [
      { technology: 'HTML', level: 80 },
      { technology: 'CSS', level: 75 },
      { technology: 'React', level: 85 },
    ],
    backend: [
      { technology: 'Spring Boot', level: 70 },
      { technology: 'Node.js', level: 75 },
    ],
    database: [
      { technology: 'SQL', level: 80 },
      { technology: 'MongoDB', level: 70 },
    ],
    devops: [
      { technology: 'AWS', level: 75 },
      { technology: 'Jira', level: 80 },
      { technology: 'Jenkins', level: 70 },
    ],
  };

  const projectsData = [
    { projectName: 'Project 1', technologiesUsed: 'React, Node.js', githubLink: 'https://github.com/Shivji1999' },
    { projectName: 'Project 2', technologiesUsed: 'Spring Boot, MongoDB', githubLink: 'https://github.com/Shivji1999' },
    { projectName: 'Project 3', technologiesUsed: 'AWS, SQL', githubLink: 'https://github.com/Shivji1999' },
  ];

  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
  };

  const handleProjectClick = (githubLink) => {
    window.location.href = githubLink;
  };

  const handleMouseEnter= (e)=>{
        console.log(e)
  }

  return (
    <div className="skills-project-container">
      <div className="tabs-section">
        <div className="tabs">
          {tabs.map((tab) => (
            <div
              key={tab.key}
              className={`tab ${activeTab === tab.key ? 'active' : ''}`}
              onClick={() => handleTabClick(tab.key)}
            >
              {tab.label}
            </div>
          ))}
        </div>
        <div className="skills-bars">
          {skillsData[activeTab].map((skill) => (
            <div
              key={skill.technology}
              className="skill-bar"
              title={`${skill.level}%`}
            >
              <div className="technology">{skill.technology}</div>
              <div className="level-bar">
                <div className="level" style={{ width: `${skill.level}%` }} data-percent={skill.level}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="projects-section">
        <h2>Projects</h2>
        <div className="project-list">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="project-item"
              onClick={() => handleProjectClick(project.githubLink)}
            >
              <div className="project-name">{project.projectName}</div>
              <div className="technologies-used">{project.technologiesUsed}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsProject;
