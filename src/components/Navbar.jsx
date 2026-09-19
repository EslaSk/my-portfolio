import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav id="navbar">
    <a href="#hero" className="nav-logo">EK<span className="logo-dot">.</span></a>
    <ul className="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Work</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div className="nav-right" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
      <button 
        id="theme-toggle" 
        aria-label="Toggle theme" 
        onClick={toggleTheme}
        style={{
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          transition: 'color 0.3s ease'
        }}
      >
        {theme === 'dark' ? (
          <Sun size={22} strokeWidth={1.5} />
        ) : (
          <Moon size={22} strokeWidth={1.5} />
        )}
      </button>
      <button className="hamburger" id="hamburger" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
  );
};

export default Navbar;
