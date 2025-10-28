import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const loc = useLocation();
  return (
    <header className="site-header">
      <div className="container site-brand">
        <Link to="/" className="logo">Beryl Nambwa</Link>
        <nav className="main-nav">
          <Link className={loc.pathname === '/' ? 'active' : ''} to="/">Home</Link>
          <Link className={loc.pathname === '/about' ? 'active' : ''} to="/about">About</Link>
          <Link className={loc.pathname === '/resume' ? 'active' : ''} to="/resume">Resume</Link>
          <Link className={loc.pathname === '/projects' ? 'active' : ''} to="/projects">Projects</Link>
          <Link className={loc.pathname === '/contact' ? 'active' : ''} to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
