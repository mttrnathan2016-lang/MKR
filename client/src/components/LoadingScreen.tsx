import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

export function LoadingScreen({ onLoadComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Wait a moment at 100% before fading out
          setTimeout(() => {
            setIsVisible(false);
            // Call onLoadComplete after fade animation
            setTimeout(onLoadComplete, 500);
          }, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[var(--color-midnight-navy)] flex flex-col items-center justify-center transition-opacity duration-500 ${
        progress >= 100 ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Scanlines effect */}
      <div className="absolute inset-0 crt-scanlines opacity-30" />

      {/* MK Logo */}
      <div className="relative mb-12 animate-pulse">
        <div className="w-32 h-32 rounded-full border-4 border-[var(--color-cyber-cyan)] flex items-center justify-center bg-[var(--color-midnight-navy)] shadow-lg shadow-[var(--color-cyber-cyan)]/50">
          <span className="font-pixel text-5xl text-[var(--color-neon-green)] neon-glow-green">
            MK
          </span>
        </div>
        {/* Spinning ring */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[var(--color-hot-magenta)] animate-spin" />
      </div>

      {/* Loading text */}
      <h2 className="font-pixel text-2xl md:text-3xl text-[var(--color-cyber-cyan)] neon-glow-cyan mb-8 animate-pulse">
        LOADING...
      </h2>

      {/* Pixel art loading bar */}
      <div className="w-80 max-w-[90%] mb-8">
        <div className="h-8 bg-[var(--color-midnight-navy)] border-4 border-[var(--color-neon-green)] rounded-lg overflow-hidden relative">
          {/* Progress fill */}
          <div
            className="h-full bg-gradient-to-r from-[var(--color-neon-green)] via-[var(--color-cyber-cyan)] to-[var(--color-hot-magenta)] transition-all duration-300 relative"
            style={{ width: `${progress}%` }}
          >
            {/* Pixel pattern overlay */}
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
            }} />
          </div>
          
          {/* Percentage text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono-pixel text-sm text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {progress}%
            </span>
          </div>
        </div>
      </div>

      {/* INSERT COIN text */}
      <div className="font-pixel text-xl text-[var(--color-electric-yellow)] neon-glow-yellow animate-bounce">
        INSERT COIN
      </div>

      {/* Blinking cursor */}
      <div className="mt-4 font-mono-pixel text-[var(--color-neon-green)] animate-pulse">
        ▂
      </div>
    </div>
  );
}
