import React from 'react';
import './ProjectCard.css';

export default function ProjectCard({ title, description, link }) {
    return (
        <article className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
            {link && (
                <p>
                    <a href={link} target="_blank" rel="noreferrer">View</a>
                </p>
            )}
        </article>
    );
}
