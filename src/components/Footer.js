import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Beryl Nambwa — Built with React.</p>
      </div>
    </footer>
  );
}
