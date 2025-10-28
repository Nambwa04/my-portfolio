import React from 'react';
import './Contact.css';

export default function Contact() {
    return (
        <section className="container contact-page">
            <div className="contact-header">
                <span className="section-badge">📬 Let's Connect</span>
                <h1>Get In Touch</h1>
                <p className="section-description">
                    Have a project in mind or want to collaborate? I'd love to hear from you!
                </p>
            </div>

            <div className="contact-content">
                <div className="contact-info-section">
                    <h2>Contact Information</h2>
                    <div className="contact-info-cards">
                        <a href="mailto:nambwaberyl2018@gmail.com" className="info-card">
                            <div className="info-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#4169e1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M22 6l-10 7L2 6" stroke="#4169e1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div>
                                <h3>Email</h3>
                                <p>nambwaberyl2018@gmail.com</p>
                            </div>
                        </a>
                        <a href="https://github.com/Nambwa04" target="_blank" rel="noopener noreferrer" className="info-card">
                            <div className="info-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="#4169e1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div>
                                <h3>GitHub</h3>
                                <p>github.com/Nambwa04</p>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/beryl-nambwa/" target="_blank" rel="noopener noreferrer" className="info-card">
                            <div className="info-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" stroke="#4169e1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <circle cx="4" cy="4" r="2" stroke="#4169e1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div>
                                <h3>LinkedIn</h3>
                                <p>linkedin.com/in/beryl-nambwa</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="contact-form-section">
                    <h2>Send a Message</h2>
                    <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Thanks for reaching out! Form handling will be wired soon.'); }}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Your name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="you@example.com"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="Tell me about your project or how I can help..."
                                required
                            />
                        </div>
                        <button type="submit" className="submit-btn">
                            <span>Send Message</span>
                            <span className="btn-arrow">→</span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
