import React from 'react';
import './Home.css';

export default function Home() {
    return (
        <section className="hero container">
            <div className="hero-content">
                <div className="hero-badge">
                    <span className="badge-icon">👋</span>
                    <span className="badge-text">Welcome to my portfolio</span>
                </div>
                <h1 className="hero-title">
                    Hi, I'm <span className="gradient-text">Beryl Nambwa</span>
                </h1>
                <h2 className="hero-subtitle">Software Engineer and Computer Science Student</h2>
                <p className="lead">
                    I’m a Computer Science student at <span className="highlight">Kabarak University</span> (graduating December 2026)
                    who enjoys building practical web apps in <span className="highlight">React</span> and <span className="highlight">Python </span>
                    using <span className="highlight">Flask</span> and <span className="highlight">Django</span>. My work spans healthcare and social impact
                    projects — from GBV support flows to telemedicine tools — with an emphasis on clean UI, reliable
                    APIs, and thoughtful user experience.
                </p>
                <div className="hero-cta">
                    <a className="cta cta-primary" href="/projects">View My Work</a>
                    <a className="cta cta-secondary" href="/contact">Get In Touch</a>
                </div>
                <div className="hero-social">
                    <a href="https://github.com/Nambwa04" target="_blank" rel="noopener noreferrer" className="social-link">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/beryl-nambwa/" target="_blank" rel="noopener noreferrer" className="social-link">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>LinkedIn</span>
                    </a>
                    <a href="mailto:nambwaberyl2018@gmail.com" className="social-link">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Email</span>
                    </a>
                </div>
            </div>
            <div className="hero-decoration">
                <div className="floating-shape shape-1"></div>
                <div className="floating-shape shape-2"></div>
                <div className="floating-shape shape-3"></div>
            </div>
        </section>
    );
}
