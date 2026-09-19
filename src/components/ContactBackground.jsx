import React, { useEffect, useRef } from 'react';

const ContactBackground = () => {
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

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const maxRadius = Math.max(canvas.width, canvas.height) / 1.5;
      
      time += 0.5;
      
      for (let i = 0; i < 4; i++) {
        const radius = ((time + (i * maxRadius / 4)) % maxRadius);
        const opacity = (1 - (radius / maxRadius)) * 0.15;
        
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(232, 201, 122, ${opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }
      
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

export default ContactBackground;
