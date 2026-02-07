import { createContext, useContext, useState, useCallback, ReactNode } from "react";

interface SoundContextType {
  isMuted: boolean;
  toggleMute: () => void;
  playSound: (type: SoundType) => void;
}

type SoundType = "click" | "hover" | "coin" | "powerup";

const SoundContext = createContext<SoundContextType | undefined>(undefined);

// Simple arcade sound generator using Web Audio API
const generateSound = (type: SoundType) => {
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  switch (type) {
    case "click":
      // Sharp click sound
      oscillator.frequency.value = 800;
      oscillator.type = "square";
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
      break;
    case "hover":
      // Subtle beep
      oscillator.frequency.value = 600;
      oscillator.type = "sine";
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);
      break;
    case "coin":
      // Coin insert sound
      oscillator.frequency.value = 1000;
      oscillator.type = "triangle";
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
      break;
    case "powerup":
      // Power-up sound
      oscillator.frequency.value = 400;
      oscillator.type = "sawtooth";
      gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
      break;
  }

  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + 0.3);
};

export function SoundProvider({ children }: { children: ReactNode }) {
  const [isMuted, setIsMuted] = useState(() => {
    // Check localStorage for saved preference
    const saved = localStorage.getItem("soundMuted");
    return saved === "true";
  });

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => {
      const newValue = !prev;
      localStorage.setItem("soundMuted", String(newValue));
      return newValue;
    });
  }, []);

  const playSound = useCallback(
    (type: SoundType) => {
      if (!isMuted) {
        try {
          generateSound(type);
        } catch (error) {
          console.error("Error playing sound:", error);
        }
      }
    },
    [isMuted]
  );

  return (
    <SoundContext.Provider value={{ isMuted, toggleMute, playSound }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  const context = useContext(SoundContext);
  if (context === undefined) {
    throw new Error("useSound must be used within a SoundProvider");
  }
  return context;
}
