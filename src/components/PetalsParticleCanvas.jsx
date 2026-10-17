import React, { useEffect, useRef } from 'react';

/**
 * High-performance 2D Canvas Petals & Atmospheric Particles System.
 * Renders naturally drifting red rose petals with 3D tumble, sway, and gentle physics.
 * Optimized with requestAnimationFrame and off-screen drawing.
 */
export default function PetalsParticleCanvas({
  type = 'rose-petals', // 'rose-petals' | 'temple-golden' | 'mixed'
  count = 22,
  className = 'pointer-events-none absolute inset-0 z-20 w-full h-full overflow-hidden select-none',
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle state generator
    const createPetal = (initialY = null) => {
      const isGolden = type === 'temple-golden' || (type === 'mixed' && Math.random() > 0.6);
      return {
        x: Math.random() * width,
        y: initialY !== null ? initialY : Math.random() * height,
        size: isGolden ? Math.random() * 3.5 + 2 : Math.random() * 9 + 8,
        speedY: isGolden ? Math.random() * 0.4 + 0.2 : Math.random() * 1.1 + 0.6,
        speedX: Math.random() * 0.5 - 0.25,
        swaySpeed: Math.random() * 0.02 + 0.015,
        swayAmplitude: Math.random() * 1.8 + 0.8,
        angle: Math.random() * Math.PI * 2,
        angularSpeed: (Math.random() - 0.5) * 0.03,
        flip: Math.random() * Math.PI,
        flipSpeed: Math.random() * 0.025 + 0.01,
        opacity: Math.random() * 0.4 + (isGolden ? 0.35 : 0.65),
        isGolden,
        // Crimson velvet rose hues
        colorHue: Math.random() > 0.5 ? '#9B111E' : '#C41E3A',
        shadowColor: '#580812',
      };
    };

    const particles = Array.from({ length: count }, () => createPetal());

    let tick = 0;

    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        // Update physics
        p.y += p.speedY;
        p.x += Math.sin(tick * p.swaySpeed) * p.swayAmplitude + p.speedX;
        p.angle += p.angularSpeed;
        p.flip += p.flipSpeed;

        // Reset if drifted beyond screen
        if (p.y > height + 25) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x < -30) p.x = width + 20;
        if (p.x > width + 30) p.x = -20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.globalAlpha = p.opacity;

        if (p.isGolden) {
          // Soft glowing golden particle
          const radGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size * 2);
          radGrad.addColorStop(0, 'rgba(255, 235, 175, 0.95)');
          radGrad.addColorStop(0.5, 'rgba(240, 195, 95, 0.45)');
          radGrad.addColorStop(1, 'rgba(212, 175, 55, 0)');
          ctx.fillStyle = radGrad;
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 2, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = '#FFF8E7';
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.6, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Realistic red rose petal with 3D curved perspective
          const scaleY = Math.sin(p.flip);
          ctx.scale(1, scaleY);

          // Shadow depth
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size, p.size * 1.35, 0, 0, Math.PI * 2);
          const grad = ctx.createLinearGradient(-p.size, -p.size, p.size, p.size);
          grad.addColorStop(0, '#E32636');
          grad.addColorStop(0.35, p.colorHue);
          grad.addColorStop(0.85, '#68050C');
          grad.addColorStop(1, '#3B0005');
          ctx.fillStyle = grad;
          ctx.fill();

          // Subtle organic vein/highlight
          ctx.beginPath();
          ctx.moveTo(0, -p.size * 1.1);
          ctx.quadraticCurveTo(p.size * 0.2, 0, 0, p.size * 1.1);
          ctx.strokeStyle = 'rgba(255, 160, 170, 0.25)';
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [type, count]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
