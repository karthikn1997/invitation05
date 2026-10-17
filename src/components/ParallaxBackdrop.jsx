import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const backgroundSparks = [
  { id: 1, left: '14%', top: '22%', size: 3, delay: 0.2, duration: 6.2 },
  { id: 2, left: '34%', top: '68%', size: 2.5, delay: 1.1, duration: 7 },
  { id: 3, left: '52%', top: '36%', size: 3.5, delay: 0.5, duration: 6.6 },
  { id: 4, left: '72%', top: '24%', size: 2.5, delay: 1.5, duration: 7.2 },
  { id: 5, left: '84%', top: '62%', size: 3, delay: 0.8, duration: 6.4 },
  { id: 6, left: '24%', top: '48%', size: 2.5, delay: 1.9, duration: 6.8 },
  { id: 7, left: '64%', top: '78%', size: 3, delay: 0.4, duration: 6.5 }
];

export default function ParallaxBackdrop({
  src,
  objectPosition = '50% 50%',
  variant = 'temple-dark',
  sway = true,
  brightness = 0.72
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-7%', '7%']);

  const variants = {
    'temple-dark': {
      overlay: 'linear-gradient(180deg, rgba(12, 6, 4, 0.62) 0%, rgba(16, 8, 5, 0.42) 48%, rgba(12, 6, 4, 0.86) 100%)',
      radial: 'radial-gradient(circle at 50% 42%, rgba(255, 224, 150, 0.16) 0%, rgba(12, 6, 4, 0.65) 100%)'
    },
    'temple-garland-dark': {
      overlay: 'linear-gradient(90deg, rgba(12, 6, 4, 0.88) 0%, rgba(16, 8, 5, 0.64) 55%, rgba(12, 6, 4, 0.35) 100%)',
      radial: 'radial-gradient(circle at 75% 45%, rgba(255, 226, 156, 0.22) 0%, rgba(12, 6, 4, 0.6) 80%)'
    },
    'lotus-night': {
      overlay: 'linear-gradient(180deg, rgba(12, 6, 4, 0.68) 0%, rgba(18, 9, 6, 0.50) 50%, rgba(12, 6, 4, 0.88) 100%)',
      radial: 'radial-gradient(circle at 50% 60%, rgba(255, 214, 156, 0.18) 0%, rgba(10, 5, 3, 0.7) 100%)'
    }
  };

  const currentVariant = variants[variant] || variants['temple-dark'];

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none bg-[#0E0705]" aria-hidden="true">
      <motion.div style={{ y }} className="absolute -inset-8 w-[calc(100%+4rem)] h-[calc(100%+4rem)]">
        <motion.img
          src={src}
          alt=""
          style={{ objectPosition, filter: `brightness(${brightness}) contrast(1.08)` }}
          animate={{
            scale: [1.03, 1.1, 1.03],
            rotate: sway ? [-0.5, 0.5, -0.5] : [0, 0, 0],
            x: sway ? [-4, 4, -4] : [0, 0, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0" style={{ background: currentVariant.overlay }} />
      <motion.div
        animate={{ opacity: [0.5, 0.88, 0.5], scale: [1, 1.04, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0"
        style={{ background: currentVariant.radial }}
      />
      <div className="absolute inset-0 overflow-hidden">
        {backgroundSparks.map((spark) => (
          <motion.span
            key={spark.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: [0, 0.75, 0], y: [16, -36], x: [0, 8, -4] }}
            transition={{ duration: spark.duration, delay: spark.delay, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              left: spark.left,
              top: spark.top,
              width: `${spark.size}px`,
              height: `${spark.size}px`
            }}
            className="absolute rounded-full bg-[#FFEAB3] shadow-[0_0_10px_rgba(255,224,140,0.9)]"
          />
        ))}
      </div>
    </div>
  );
}
