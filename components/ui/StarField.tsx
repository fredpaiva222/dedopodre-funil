"use client";

import { useMemo } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export function StarField({ count = 60 }: { count?: number }) {
  const stars = useMemo<Star[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      duration: Math.random() * 4 + 2,
      delay: Math.random() * 4,
      opacity: Math.random() * 0.6 + 0.2,
    }));
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
          }}
        />
      ))}
      {/* Constelação decorativa — linhas finas douradas */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="10%" y1="20%" x2="25%" y2="35%" stroke="#C9A96E" strokeWidth="0.5" />
        <line x1="25%" y1="35%" x2="40%" y2="25%" stroke="#C9A96E" strokeWidth="0.5" />
        <line x1="70%" y1="15%" x2="85%" y2="30%" stroke="#C9A96E" strokeWidth="0.5" />
        <line x1="85%" y1="30%" x2="75%" y2="50%" stroke="#C9A96E" strokeWidth="0.5" />
        <line x1="15%" y1="70%" x2="30%" y2="80%" stroke="#C9A96E" strokeWidth="0.5" />
        <line x1="30%" y1="80%" x2="20%" y2="90%" stroke="#C9A96E" strokeWidth="0.5" />
      </svg>
    </div>
  );
}
