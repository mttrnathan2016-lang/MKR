import { useState } from "react";
import { X } from "lucide-react";
import WalletButton from "./WalletButton";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "POWER-UPS" },
    { href: "#gameplay", label: "GAMEPLAY" },
    { href: "#tokenomics", label: "TOKENOMICS" },
    { href: "#nft", label: "NFT BENEFITS" },
    { href: "#roadmap", label: "ROADMAP" },
    { href: "#community", label: "COMMUNITY" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden relative w-10 h-10 flex flex-col justify-center items-center gap-1.5 z-50"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-[var(--color-neon-green)] transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-[var(--color-neon-green)] transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-[var(--color-neon-green)] transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-in Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[var(--color-midnight-navy)] border-l-4 border-[var(--color-neon-green)] z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="self-end mb-8 p-2 text-[var(--color-neon-green)] hover:bg-[var(--color-neon-green)]/20 rounded transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Logo */}
          <div className="text-center mb-8">
            <h2 className="font-pixel text-2xl text-[var(--color-neon-green)] neon-glow-green">
              MEME KART
            </h2>
            <p className="font-mono-pixel text-sm text-[var(--color-cyber-cyan)] mt-2">
              RACING
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="block px-4 py-3 font-mono-pixel text-sm text-[var(--color-cyber-cyan)] hover:text-[var(--color-neon-green)] hover:bg-[var(--color-neon-green)]/10 rounded border border-transparent hover:border-[var(--color-neon-green)] transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Wallet Button */}
          <div className="mt-6 pt-6 border-t border-[var(--color-neon-green)]/30">
            <WalletButton />
          </div>

          {/* Footer Text */}
          <div className="mt-6 text-center">
            <p className="font-mono-pixel text-xs text-muted-foreground">
              © 2026 MEME KART RACING
            </p>
            <p className="font-mono-pixel text-xs text-[var(--color-electric-yellow)] mt-1">
              PLAYER ONE READY
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
