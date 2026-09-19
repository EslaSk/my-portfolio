import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const CanvasBackground = () => {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Choose wave color based on theme
    const isLight = theme === 'light';
    const baseColor = isLight ? '200, 146, 26' : '232, 201, 122'; // --color-accent-light vs --color-accent-dark
    
    // Wave parameters
    const waves = [
      { yOffset: 0.5, amplitude: 40, wavelength: 0.005, speed: 0.015, color: `rgba(${baseColor}, 0.15)` },
      { yOffset: 0.6, amplitude: 60, wavelength: 0.003, speed: 0.010, color: `rgba(${baseColor}, 0.1)` },
      { yOffset: 0.7, amplitude: 80, wavelength: 0.002, speed: 0.008, color: `rgba(${baseColor}, 0.05)` }
    ];

    let time = 0;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      time += 1;
      
      waves.forEach(wave => {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);
        
        for (let x = 0; x <= canvas.width; x += 10) {
          const y = (canvas.height * wave.yOffset) + Math.sin(x * wave.wavelength + time * wave.speed) * wave.amplitude;
          ctx.lineTo(x, y);
        }
        
        ctx.lineTo(canvas.width, canvas.height);
        ctx.fillStyle = wave.color;
        ctx.fill();
        ctx.closePath();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

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

export default CanvasBackground;
