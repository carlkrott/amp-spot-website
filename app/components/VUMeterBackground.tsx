'use client';

import { useEffect, useState } from 'react';

export default function VUMeterBackground() {
  const [meters, setMeters] = useState<number[]>(() => Array(12).fill(0));

  useEffect(() => {
    const animateMeters = () => {
      setMeters((prevMeters) => {
        return prevMeters.map((prev, i) => {
          // Create different patterns for variety
          const pattern = i % 3;
          let targetLevel: number;

          switch (pattern) {
            case 0:
              // More active
              targetLevel = 30 + Math.random() * 50;
              break;
            case 1:
              // Medium
              targetLevel = 20 + Math.random() * 40;
              break;
            case 2:
              // Lower with occasional spikes
              targetLevel = Math.random() > 0.85 ? 60 + Math.random() * 30 : 15 + Math.random() * 20;
              break;
            default:
              targetLevel = Math.random() * 60;
          }

          // Smooth transition
          return prev + (targetLevel - prev) * 0.15;
        });
      });
    };

    const interval = setInterval(animateMeters, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="flex items-end justify-between h-full gap-2 opacity-30">
        {meters.map((level, i) => (
          <div
            key={i}
            className="w-full rounded-t transition-all duration-100 ease-out"
            style={{
              height: `${level}%`,
              background: `linear-gradient(to top, rgba(255, 140, 0, 0.1), rgba(255, 167, 51, 0.2))`,
              boxShadow: level > 75 ? '0 0 20px rgba(255, 140, 0, 0.3)' : 'none',
            }}
          />
        ))}
      </div>
    </div>
  );
}
