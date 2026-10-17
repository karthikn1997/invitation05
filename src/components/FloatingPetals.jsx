import React from 'react';
import { motion } from 'framer-motion';

export default function FloatingPetals({ count = 18, className = '' }) {
  const petals = React.useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${(i * 19) % 94 + 3}%`,
      delay: (i * 0.45) % 4,
      duration: 7 + (i % 5) * 1.5,
      size: 10 + (i % 4) * 4,
      initialRotate: (i * 45) % 360
    }));
  }, [count]);

  return (
    <div className={`pointer-events-none overflow-hidden select-none ${className}`} aria-hidden="true">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{ y: -40, x: 0, rotate: petal.initialRotate, opacity: 0 }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, (petal.id % 2 === 0 ? 1 : -1) * 35, 0],
            rotate: [petal.initialRotate, petal.initialRotate + 360],
            opacity: [0, 0.75, 0.75, 0]
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: 'linear'
          }}
          style={{
            position: 'absolute',
            left: petal.left,
            top: 0,
            width: petal.size,
            height: petal.size
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#E6C687]/65 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            <path
              d="M12 2 C8 7, 4 12, 6 18 C8 22, 16 22, 18 18 C20 12, 16 7, 12 2 Z"
              fill="currentColor"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
