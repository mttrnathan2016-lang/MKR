import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 w-14 h-14 flex items-center justify-center rounded-lg bg-[var(--color-midnight-navy)] border-2 border-[var(--color-neon-green)] text-[var(--color-neon-green)] neon-glow-green hover:bg-[var(--color-neon-green)] hover:text-[var(--color-midnight-navy)] transition-all duration-300 active:scale-95 animate-fade-in-up shadow-lg shadow-[var(--color-neon-green)]/50"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6 animate-bounce" />
        </button>
      )}
    </>
  );
}
