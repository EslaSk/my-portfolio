import React, { useEffect, useRef } from 'react';

const ServicesBackground = () => {
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

    const fontSize = 14;
    let columns = 0;
    let drops = [];
    
    const initMatrix = () => {
      columns = Math.floor(canvas.width / fontSize) + 1;
      drops = [];
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100;
      }
    };

    const draw = () => {
      ctx.fillStyle = 'rgba(13, 13, 13, 0.1)'; // Fade effect
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = 'rgba(232, 201, 122, 0.15)'; // Accent color
      ctx.font = `${fontSize}px monospace`;
      
      for (let i = 0; i < drops.length; i++) {
        const text = String.fromCharCode(0x30A0 + Math.random() * 96);
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      
      animationFrameId = requestAnimationFrame(draw);
    };

    setTimeout(() => {
      resizeCanvas();
      initMatrix();
      draw();
    }, 50);

    // Re-init when resizing
    const handleResize = () => {
      resizeCanvas();
      initMatrix();
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('resize', handleResize);
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

export default ServicesBackground;
