import React, { useMemo } from 'react';

export default function FallingPetals() {
  const petals = useMemo(() => {
    return Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      left: `${(i * 4.2 + (i % 3) * 2) % 98}%`,
      animationDuration: `${7 + (i % 7) * 2.5}s`,
      animationDelay: `${(i * 0.4) % 8}s`,
      size: 14 + (i % 4) * 6,
      opacity: 0.55 + (i % 4) * 0.12,
      type: i % 2 === 0 ? 'rose' : 'marigold',
      rotation: (i * 45) % 360,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map((petal) => (
        <span
          key={petal.id}
          className="absolute block animate-fall"
          style={{
            left: petal.left,
            top: '-40px',
            animationDuration: petal.animationDuration,
            animationDelay: petal.animationDelay,
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear',
            opacity: petal.opacity,
          }}
        >
          {petal.type === 'rose' ? (
            <svg
              width={petal.size}
              height={petal.size}
              viewBox="0 0 24 24"
              fill="none"
              style={{
                transform: `rotate(${petal.rotation}deg)`,
                filter: 'drop-shadow(0 2px 4px rgba(180, 20, 40, 0.4))',
              }}
            >
              <path
                d="M12 2C8.5 2 4 6 4 10.5C4 16 11 21 12 21.5C13 21 20 16 20 10.5C20 6 15.5 2 12 2Z"
                fill="#d82746"
              />
              <path
                d="M12 4C9.5 4 6.5 7 6.5 10.5C6.5 14 11 18 12 18.5C13 18 17.5 14 17.5 10.5C17.5 7 14.5 4 12 4Z"
                fill="#f43f5e"
                opacity="0.8"
              />
            </svg>
          ) : (
            <svg
              width={petal.size}
              height={petal.size}
              viewBox="0 0 24 24"
              fill="none"
              style={{
                transform: `rotate(${petal.rotation}deg)`,
                filter: 'drop-shadow(0 2px 4px rgba(230, 130, 20, 0.4))',
              }}
            >
              <circle cx="12" cy="12" r="5" fill="#f59e0b" />
              <path
                d="M12 2C13 5 15 5 16 6C18 7 18 9 20 10C21 12 21 14 20 16C18 17 18 19 16 20C15 21 13 21 12 22C11 21 9 21 8 20C6 19 6 17 4 16C3 14 3 12 4 10C6 9 6 7 8 6C9 5 11 5 12 2Z"
                fill="#fbbf24"
                opacity="0.9"
              />
            </svg>
          )}
        </span>
      ))}

      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(0vh) translateX(0px) rotate(0deg);
          }
          33% {
            transform: translateY(35vh) translateX(25px) rotate(120deg);
          }
          66% {
            transform: translateY(70vh) translateX(-20px) rotate(240deg);
          }
          100% {
            transform: translateY(105vh) translateX(15px) rotate(360deg);
          }
        }
        .animate-fall {
          animation-name: fall;
        }
      `}</style>
    </div>
  );
}
