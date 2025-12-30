import React, { useEffect, useRef } from 'react';

const CanvasBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationFrameId: number;
    let time = 0;

    // Mouse interaction
    const mouse = { x: -1000, y: -1000 };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    handleResize();

    // Line config
    const lines = 40;
    const spacing = height / lines;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1;
      // Reverted to fixed opacity color
      ctx.strokeStyle = 'rgba(238, 209, 132, 0.3)';

      // Draw flowing lines
      for (let i = 0; i < lines; i++) {
        const yBase = i * spacing + spacing / 2;
        
        ctx.beginPath();

        for (let x = 0; x < width; x += 10) {
          // Stochastic wave simulation (superposition of sines)
          const wave1 = Math.sin(x * 0.002 + time * 0.5 + i * 0.1) * 20;
          const wave2 = Math.sin(x * 0.01 - time * 0.3) * 10;
          
          // Mouse repulsion/gravity effect
          const dx = x - mouse.x;
          const dy = yBase - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          let interaction = 0;
          
          if (dist < 300) {
            interaction = (300 - dist) * 0.2 * Math.sin(x * 0.05);
          }

          const yActual = yBase + wave1 + wave2 + interaction;

          if (x === 0) {
            ctx.moveTo(x, yActual);
          } else {
            ctx.lineTo(x, yActual);
          }
        }
        ctx.stroke();
      }

      time += 0.01;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-60"
    />
  );
};

export default CanvasBackground;