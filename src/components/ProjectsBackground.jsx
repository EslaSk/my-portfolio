import React, { useEffect, useRef } from 'react';

const ProjectsBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    setTimeout(resizeCanvas, 0);

    class Orb {
      constructor() {
        this.x = Math.random() * (window.innerWidth || 1000);
        this.y = Math.random() * (window.innerHeight || 800);
        this.radius = Math.random() * 200 + 100;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
      }
      
      update(w, h) {
        this.x += this.vx;
        this.y += this.vy;
        
        if (this.x < -this.radius) this.x = w + this.radius;
        if (this.x > w + this.radius) this.x = -this.radius;
        if (this.y < -this.radius) this.y = h + this.radius;
        if (this.y > h + this.radius) this.y = -this.radius;
      }
      
      draw() {
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
        gradient.addColorStop(0, 'rgba(232, 201, 122, 0.05)');
        gradient.addColorStop(1, 'rgba(232, 201, 122, 0)');
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }

    const orbs = Array.from({ length: 5 }, () => new Orb());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      orbs.forEach(orb => {
        orb.update(canvas.width, canvas.height);
        orb.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    setTimeout(() => {
      resizeCanvas();
      animate();
    }, 50);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default ProjectsBackground;
