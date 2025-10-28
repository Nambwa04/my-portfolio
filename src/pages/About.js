import React from 'react';
import './About.css';
import profileImage from '../assets/profile.png';

export default function About() {
    return (
        <section className="container about-page">
            <div className="about-header">
                <div className="about-text">
                    <h1>About Me</h1>
                    <p>
                        Hello! I'm <strong>Beryl Nambwa</strong>, a passionate software engineer and computer science student
                        at Kabarak University. I specialize in building web applications that bring about impactful change
                        in the world. My focus is on creating robust, user-friendly solutions using modern technologies
                        like React, Python, and various web frameworks.
                    </p>
                </div>
                <div className="about-image-container">
                    <img src={profileImage} alt="Beryl Nambwa" className="profile-image" />
                </div>
            </div>
            <div className="about-intro">
                <p>
                    With a strong foundation in both frontend and backend development, I thrive on solving complex
                    problems and delivering solid user experiences backed by reliable engineering practices. I'm
                    constantly learning and exploring new technologies to stay at the forefront of web development.
                </p>
            </div>

            <h2>Technical Skills</h2>
            <div className="skills-showcase">
                <div className="skill-category-card">
                    <div className="category-icon">💻</div>
                    <h3>Frontend Development</h3>
                    <div className="skill-bars">
                        <div className="skill-bar-item">
                            <span className="skill-label">React & JavaScript</span>
                            <div className="skill-bar-bg">
                                <div className="skill-bar-fill" style={{ width: '70%' }}></div>
                            </div>
                        </div>
                        <div className="skill-bar-item">
                            <span className="skill-label">UI/UX Design</span>
                            <div className="skill-bar-bg">
                                <div className="skill-bar-fill" style={{ width: '95%' }}></div>
                            </div>
                        </div>
                        <div className="skill-bar-item">
                            <span className="skill-label">HTML & CSS</span>
                            <div className="skill-bar-bg">
                                <div className="skill-bar-fill" style={{ width: '85%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="skill-category-card">
                    <div className="category-icon">⚙️</div>
                    <h3>Backend Development</h3>
                    <div className="skill-bars">
                        <div className="skill-bar-item">
                            <span className="skill-label">Python</span>
                            <div className="skill-bar-bg">
                                <div className="skill-bar-fill" style={{ width: '90%' }}></div>
                            </div>
                        </div>
                        <div className="skill-bar-item">
                            <span className="skill-label">Flask & Django</span>
                            <div className="skill-bar-bg">
                                <div className="skill-bar-fill" style={{ width: '95%' }}></div>
                            </div>
                        </div>
                        <div className="skill-bar-item">
                            <span className="skill-label">REST APIs</span>
                            <div className="skill-bar-bg">
                                <div className="skill-bar-fill" style={{ width: '75%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="skill-category-card">
                    <div className="category-icon">🛠️</div>
                    <h3>Tools & Technologies</h3>
                    <div className="skill-bars">
                        <div className="skill-bar-item">
                            <span className="skill-label">Git & Version Control</span>
                            <div className="skill-bar-bg">
                                <div className="skill-bar-fill" style={{ width: '80%' }}></div>
                            </div>
                        </div>
                        <div className="skill-bar-item">
                            <span className="skill-label">Database Management</span>
                            <div className="skill-bar-bg">
                                <div className="skill-bar-fill" style={{ width: '75%' }}></div>
                            </div>
                        </div>
                        <div className="skill-bar-item">
                            <span className="skill-label">API Development</span>
                            <div className="skill-bar-bg">
                                <div className="skill-bar-fill" style={{ width: '85%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h2>Education</h2>
            <div className="education-section">
                <h3>Bachelor of Science in Computer Science</h3>
                <p className="institution">Kabarak University</p>
                <p className="duration">2022 - Expected December 2026</p>
            </div>

            <h2>What I Do</h2>
            <p>
                I develop full-stack web applications with a focus on clean code, scalability, and user experience.
                Whether it's crafting intuitive user interfaces or building robust backend systems, I'm committed
                to delivering high-quality solutions that make a difference.
            </p>
        </section>
    );
}
