'use client';

import { useMemo } from 'react';

interface AudioBar {
  height: number;
  opacity: number;
}

// Seeded random number generator for stable values
function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// Generate stable random values based on index
function generateBars(count: number, minHeight: number, maxHeight: number, minOpacity: number, maxOpacity: number): AudioBar[] {
  return Array.from({ length: count }, (_, i) => ({
    height: minHeight + seededRandom(i) * (maxHeight - minHeight),
    opacity: minOpacity + seededRandom(i + 1000) * (maxOpacity - minOpacity),
  }));
}

export interface AudioBarsProps {
  count?: number;
  minHeight?: number;
  maxHeight?: number;
  minOpacity?: number;
  maxOpacity?: number;
  className?: string;
}

export function AudioBars({
  count = 32,
  minHeight = 30,
  maxHeight = 50,
  minOpacity = 0.2,
  maxOpacity = 0.5,
  className = '',
}: AudioBarsProps) {
  const bars = useMemo(
    () => generateBars(count, minHeight, maxHeight, minOpacity, maxOpacity),
    [count, minHeight, maxHeight, minOpacity, maxOpacity]
  );

  return (
    <div className={`flex items-center justify-center gap-0.5 ${className}`}>
      {bars.map((bar, index) => (
        <div
          key={index}
          className="w-1 bg-gradient-to-t from-green-500 via-yellow-500 to-red-500 rounded-full"
          style={{
            height: `${bar.height}%`,
            opacity: bar.opacity,
          }}
        />
      ))}
    </div>
  );
}
