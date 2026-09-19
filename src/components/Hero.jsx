import React from 'react';
import CanvasBackground from './CanvasBackground';

const Hero = () => {
  return (
    <section id="hero" style={{ position: 'relative' }}>
    <CanvasBackground />
    <div className="hero-content" style={{ position: 'relative', zIndex: 10 }}>
      <div className="hero-badge reveal-fade">Available for work &nbsp;·&nbsp; 2026</div>
      <h1 className="hero-title reveal-fade">
        I build things<br/>for the <em>web</em>
      </h1>
      <p className="hero-sub reveal-fade">
        Software Engineer & Frontend Developer focused on creating fast, accessible, and visually sharp digital products. Based in Nigeria, working with the world.
      </p>
      <div className="hero-actions reveal-fade">
        <a href="#projects" className="btn-primary">View Work</a>
        <a href="#contact" className="btn-secondary">Get in Touch</a>
      </div>
    </div>
    <div className="hero-visual" style={{ position: 'relative', zIndex: 10 }}>
      <div className="hero-card reveal-fade">
        <div className="hc-label">Current stack</div>
        <div className="hc-stack">
          <span>React</span><span>TypeScript</span><span>Node.js</span><span>Tailwind</span>
        </div>
        <div className="hc-divider"></div>
        <div className="hc-label">Status</div>
        <div className="hc-status"><span className="status-dot"></span>Open to opportunities</div>
      </div>
      <div className="hero-geo"></div>
    </div>
    <div className="hero-scroll" style={{ position: 'relative', zIndex: 10 }}>
      <span></span>Scroll
    </div>
  </section>
  );
};

export default Hero;
