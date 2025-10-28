import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const sampleProjects = [
    { title: 'gbv-intervention-web-app', description: 'Team project to solve GBV support flows', link: 'https://github.com/Nambwa04/gbv-intervention-web-app' },
    { title: 'telemedicine', description: 'Telemedicine system for chronic care', link: 'https://github.com/Nambwa04/telemedicine' },
    { title: 'WayneCarlW/php-bulk-sms', description: 'Bulk SMS messaging system', link: 'https://github.com/WayneCarlW/php-bulk-sms' },
    { title: 'M-Bless/Find-A-Donor', description: 'Donation / donor matching project', link: 'https://github.com/M-Bless/Find-A-Donor' },
    { title: 'FlaskMongo-Assignment', description: 'Flask + MongoDB assignment examples', link: 'https://github.com/Nambwa04/FlaskMongo-Assignment' }
];

export default function Projects() {
    return (
        <section className="container projects-page">
            <div className="projects-header">
                <h1>My Projects</h1>
            </div>
            <div className="projects-grid">
                {sampleProjects.map((p, index) => (
                    <div key={p.title} className="project-card-wrapper" style={{ animationDelay: `${index * 0.1}s` }}>
                        <ProjectCard title={p.title} description={p.description} link={p.link} />
                    </div>
                ))}
            </div>
        </section>
    );
}
