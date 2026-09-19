import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const AboutBackground = () => {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    const isLight = theme === 'light';
    const strokeColor = isLight ? 'rgba(200, 146, 26, 0.3)' : 'rgba(232, 201, 122, 0.15)';
    
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    // Initial size setting
    setTimeout(resizeCanvas, 0);

    class Shape {
      constructor() {
        this.x = Math.random() * (window.innerWidth || 1000);
        this.y = Math.random() * (window.innerHeight || 800);
        this.size = Math.random() * 20 + 10;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        this.sides = Math.floor(Math.random() * 3) + 3; // 3 to 5 sides
      }
      
      update(w, h) {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;
        
        if (this.x < -50) this.x = w + 50;
        if (this.x > w + 50) this.x = -50;
        if (this.y < -50) this.y = h + 50;
        if (this.y > h + 50) this.y = -50;
      }
      
      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        ctx.beginPath();
        for (let i = 0; i < this.sides; i++) {
          const angle = (i * 2 * Math.PI) / this.sides;
          if (i === 0) ctx.moveTo(this.size * Math.cos(angle), this.size * Math.sin(angle));
          else ctx.lineTo(this.size * Math.cos(angle), this.size * Math.sin(angle));
        }
        ctx.closePath();
        
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      }
    }

    const shapes = Array.from({ length: 15 }, () => new Shape());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      shapes.forEach(shape => {
        shape.update(canvas.width, canvas.height);
        shape.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    // Need a slight delay to ensure canvas is properly sized before animating
    setTimeout(() => {
      resizeCanvas();
      animate();
    }, 50);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default AboutBackground;
