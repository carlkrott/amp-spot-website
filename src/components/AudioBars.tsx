'use client';

import { useMemo } from 'react';

interface AudioBarsProps {
  count?: number;
  minHeight?: number;
  maxHeight?: number;
  minOpacity?: number;
  maxOpacity?: number;
}

/**
 * AudioBars - VU meter aesthetic background component
 *
 * Uses deterministic heights and opacities to maintain React render purity.
 * All values are memoized and only computed once during initial render.
 */
export function AudioBars({
  count = 20,
  minHeight = 30,
  maxHeight = 50,
  minOpacity = 0.2,
  maxOpacity = 0.7,
}: AudioBarsProps) {
  // Generate deterministic heights and opacities using index-based calculation
  const bars = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      // Use a pseudo-random algorithm based on index for consistency
      const progress = i / count;
      const variance = Math.sin(i * 1.5) * 0.5 + 0.5; // Oscillating pattern

      return {
        height: minHeight + variance * (maxHeight - minHeight),
        opacity: minOpacity + (1 - progress) * (maxOpacity - minOpacity),
      };
    });
  }, [count, minHeight, maxHeight, minOpacity, maxOpacity]);

  return (
    <div className="flex h-full justify-around items-center">
      {bars.map((bar, i) => (
        <div
          key={i}
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
