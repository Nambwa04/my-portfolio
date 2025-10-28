import React from 'react';
import './Resume.css';

export default function Resume() {
  return (
    <section className="container resume-page">
      <div className="resume-header">
        <h1>Resume</h1>
        <a href="/Beryl_Nambwa_CV.pdf" download="Beryl_Nambwa_CV.pdf" className="download-cv-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <polyline points="7 10 12 15 17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Download CV</span>
        </a>
      </div>

      <h2>Education</h2>
      <div className="education-item">
        <h3>BSc in Computer Science</h3>
        <p className="institution">Kabarak University</p>
        <p className="duration">2022 - Present</p>
        <p>Expected Graduation: December 2026</p>
      </div>

      <h2>Technical Skills</h2>
      <p className="skills-subtitle">My technical capabilities</p>

      <div className="skills-grid">
        <div className="skill-item">
          <div className="skill-header">
            <span className="skill-name">Flask & Django</span>
            <span className="skill-percentage">95%</span>
          </div>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '95%' }}></div>
          </div>
        </div>

        <div className="skill-item">
          <div className="skill-header">
            <span className="skill-name">UI/UX Design</span>
            <span className="skill-percentage">95%</span>
          </div>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '95%' }}></div>
          </div>
        </div>

        <div className="skill-item">
          <div className="skill-header">
            <span className="skill-name">Python</span>
            <span className="skill-percentage">90%</span>
          </div>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '90%' }}></div>
          </div>
        </div>

        <div className="skill-item">
          <div className="skill-header">
            <span className="skill-name">REST APIs</span>
            <span className="skill-percentage">75%</span>
          </div>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '75%' }}></div>
          </div>
        </div>

        <div className="skill-item">
          <div className="skill-header">
            <span className="skill-name">React & Next.js</span>
            <span className="skill-percentage">70%</span>
          </div>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '70%' }}></div>
          </div>
        </div>

        <div className="skill-item">
          <div className="skill-header">
            <span className="skill-name">JavaScript & TypeScript</span>
            <span className="skill-percentage">65%</span>
          </div>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '65%' }}></div>
          </div>
        </div>

        <div className="skill-item">
          <div className="skill-header">
            <span className="skill-name">Node.js</span>
            <span className="skill-percentage">65%</span>
          </div>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '65%' }}></div>
          </div>
        </div>

        <div className="skill-item">
          <div className="skill-header">
            <span className="skill-name">Tailwind CSS</span>
            <span className="skill-percentage">60%</span>
          </div>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '60%' }}></div>
          </div>
        </div>
      </div>

      <h2>Contact Information</h2>
      <div className="contact-info">
        <p>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: 'middle', marginRight: '8px' }}>
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#4169e1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 6l-10 7L2 6" stroke="#4169e1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <strong>Email:</strong> <a href="mailto:nambwaberyl2018@gmail.com">nambwaberyl2018@gmail.com</a>
        </p>
        <p>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: 'middle', marginRight: '8px' }}>
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="#4169e1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <strong>GitHub:</strong> <a href="https://github.com/Nambwa04" target="_blank" rel="noopener noreferrer">github.com/Nambwa04</a>
        </p>
        <p>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: 'middle', marginRight: '8px' }}>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" stroke="#4169e1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="4" cy="4" r="2" stroke="#4169e1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/beryl-nambwa/" target="_blank" rel="noopener noreferrer">linkedin.com/in/beryl-nambwa</a>
        </p>
      </div>
    </section>
  );
}
