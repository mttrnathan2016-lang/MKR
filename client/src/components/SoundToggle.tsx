import { Volume2, VolumeX } from "lucide-react";
import { useSound } from "@/contexts/SoundContext";

export function SoundToggle() {
  const { isMuted, toggleMute, playSound } = useSound();

  const handleToggle = () => {
    if (isMuted) {
      // Play a sound when unmuting
      toggleMute();
      setTimeout(() => playSound("coin"), 100);
    } else {
      toggleMute();
    }
  };

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded-lg border-2 border-[var(--color-neon-green)] text-[var(--color-neon-green)] hover:bg-[var(--color-neon-green)]/20 transition-all active:scale-95"
      aria-label={isMuted ? "Unmute sound effects" : "Mute sound effects"}
      title={isMuted ? "Unmute sound effects" : "Mute sound effects"}
    >
      {isMuted ? (
        <VolumeX className="w-5 h-5" />
      ) : (
        <Volume2 className="w-5 h-5" />
      )}
    </button>
  );
}
