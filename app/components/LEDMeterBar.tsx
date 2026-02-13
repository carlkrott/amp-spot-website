'use client';

import { useEffect, useState, useRef } from 'react';

export default function LEDMeterBar() {
  const [meters, setMeters] = useState<number[]>(() => Array(24).fill(0));
  const animationRef = useRef<number>();

  // SSL-style color segments
  const getSegmentColor = (level: number, index: number): string => {
    const maxLevel = level;
    const segmentIndex = index;
    const totalSegments = 24;

    // SSL meter bridge colors:
    // - Green (0-70%): Normal operating range
    // - Yellow (70-85%): Headroom warning
    // - Red (85%+): Clip warning

    const activeLevel = (segmentIndex / totalSegments) * 100;
    const isActive = activeLevel <= maxLevel;

    if (!isActive) {
      return 'bg-gray-800'; // Inactive segment (dark)
    }

    if (activeLevel < 70) {
      return 'bg-green-500'; // Green for normal range
    } else if (activeLevel < 85) {
      return 'bg-yellow-500'; // Yellow for warning
    } else {
      return 'bg-red-500'; // Red for clip
    }
  };

  const getGlowClass = (level: number, index: number): string => {
    const activeLevel = (index / 24) * 100;
    if (activeLevel > level) return '';

    if (activeLevel >= 85) {
      return 'shadow-[0_0_8px_rgba(239,68,68,0.8),0_0_16px_rgba(239,68,68,0.4)]'; // Red glow
    } else if (activeLevel >= 70) {
      return 'shadow-[0_0_6px_rgba(234,179,8,0.6),0_0_12px_rgba(234,179,8,0.3)]'; // Yellow glow
    } else {
      return 'shadow-[0_0_4px_rgba(34,197,94,0.4),0_0_8px_rgba(34,197,94,0.2)]'; // Green glow
    }
  };

  useEffect(() => {
    const animateMeters = () => {
      setMeters((prevMeters) => {
        return prevMeters.map((prev, i) => {
          // Different meters have different patterns
          const meterGroup = i % 4;
          let targetLevel: number;

          switch (meterGroup) {
            case 0: // Main L/R meter - more active
              targetLevel = 30 + Math.random() * 50;
              break;
            case 1: // Bus meters - medium activity
              targetLevel = 20 + Math.random() * 35;
              break;
            case 2: // Send meters - lower activity
              targetLevel = 15 + Math.random() * 25;
              break;
            case 3: // Return meters - occasional spikes
              targetLevel = Math.random() > 0.9 ? 50 + Math.random() * 30 : 10 + Math.random() * 15;
              break;
            default:
              targetLevel = Math.random() * 50;
          }

          // Add some randomness to the target
          const noise = (Math.random() - 0.5) * 10;
          const newLevel = Math.max(0, Math.min(100, targetLevel + noise));

          // Smooth transition
          return prev + (newLevel - prev) * 0.3;
        });
      });

      animationRef.current = requestAnimationFrame(animateMeters);
    };

    animationRef.current = requestAnimationFrame(animateMeters);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Create groups of meters (6 groups of 4 LEDs each = 24 total)
  const meterGroups = [];
  for (let i = 0; i < 6; i++) {
    meterGroups.push(meters.slice(i * 4, (i + 1) * 4));
  }

  return (
    <div className="w-full bg-black/80 border-y border-[rgba(255,140,0,0.3)]">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-2">
          {/* Brand */}
          <div className="flex items-center gap-2 pr-4 border-r border-gray-800">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-[#FF8C00] to-[#CC7000] flex items-center justify-center">
              <span className="text-white text-xs font-bold">A</span>
            </div>
            <span className="text-white text-sm font-bold amp-glow-text hidden sm:block">
              Amp<span className="text-[#FF8C00]">Spot</span>
            </span>
          </div>

          {/* Meter Bridge */}
          <div className="flex-1 flex items-center justify-center gap-1 md:gap-2">
            {meterGroups.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className="flex gap-0.5 bg-black/50 px-1 py-1 rounded border border-gray-800"
              >
                {group.map((level, i) => (
                  <div
                    key={`${groupIndex}-${i}`}
                    className={`
                      w-1.5 h-4 md:w-2 md:h-6 rounded-sm transition-colors duration-75
                      ${getSegmentColor(level, groupIndex * 4 + i)}
                      ${getGlowClass(level, groupIndex * 4 + i)}
                    `}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Status */}
          <div className="flex items-center gap-3 pl-4 border-l border-gray-800">
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-gray-400 text-xs">System Online</span>
            </div>
            <div className="text-gray-500 text-xs hidden md:block">
              {new Date().toLocaleTimeString('en-US', {
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
