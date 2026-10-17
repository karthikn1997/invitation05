import React from 'react';

export default function SikkuKolam({ size = 180, color = "#641824", className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Kolam Grid Dots */}
      {[
        [100, 30], [100, 60], [100, 90], [100, 120], [100, 150], [100, 170],
        [70, 60], [70, 90], [70, 120], [70, 140],
        [130, 60], [130, 90], [130, 120], [130, 140],
        [40, 90], [40, 110], [160, 90], [160, 110],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3.5" fill={color} />
      ))}

      {/* Intricate Sikku / Looped Continuous Lines */}
      {/* Center Diamond Interlock */}
      <path
        d="M100 45 C115 45 145 75 145 100 C145 125 115 155 100 155 C85 155 55 125 55 100 C55 75 85 45 100 45 Z"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Outer Four Petal Loops (Brahma Mudi) */}
      <path
        d="M100 45 C100 15 120 15 120 30 C120 45 100 65 100 65"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M100 45 C100 15 80 15 80 30 C80 45 100 65 100 65"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      <path
        d="M100 155 C100 185 120 185 120 170 C120 155 100 135 100 135"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M100 155 C100 185 80 185 80 170 C80 155 100 135 100 135"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      <path
        d="M145 100 C175 100 175 80 160 80 C145 80 125 100 125 100"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M145 100 C175 100 175 120 160 120 C145 120 125 100 125 100"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      <path
        d="M55 100 C25 100 25 80 40 80 C55 80 75 100 75 100"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M55 100 C25 100 25 120 40 120 C55 120 75 100 75 100"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Cross Interlacing Loops */}
      <path
        d="M70 70 L130 130 M130 70 L70 130"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
