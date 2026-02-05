/**
 * Landing Page - Entry point with video background
 * Features "MEME KART RACING" branding with full-screen video
 * Press Start button transitions to main website
 */

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { X } from "lucide-react";

export default function Landing() {
  const [, setLocation] = useLocation();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('rmg_visited');
    if (hasVisited === 'true') {
      // Skip landing page for returning users
      setLocation('/home');
      return;
    }

    // Preload video
    const video = document.createElement('video');
    video.src = 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663336128011/UVtXfyjegfxyvgYK.mp4';
    video.onloadeddata = () => setVideoLoaded(true);
  }, [setLocation]);

  useEffect(() => {
    // Countdown timer
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      // Auto-redirect when countdown reaches 0
      handleEnter();
    }
  }, [countdown]);

  const handleEnter = () => {
    // Mark user as visited
    localStorage.setItem('rmg_visited', 'true');
    
    setFadeOut(true);
    setTimeout(() => {
      setLocation('/home');
    }, 800);
  };

  return (
    <div className={`relative min-h-screen w-full overflow-hidden bg-[var(--color-void-black)] transition-opacity duration-800 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: videoLoaded ? 0.6 : 0 }}
      >
        <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663336128011/UVtXfyjegfxyvgYK.mp4" type="video/mp4" />
      </video>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-void-black)]/70 via-transparent to-[var(--color-void-black)]/90 z-10" />

      {/* CRT Scanlines */}
      <div className="absolute inset-0 crt-scanlines z-20" />

      {/* Skip Button */}
      <button
        onClick={handleEnter}
        className="fixed top-6 right-6 z-50 flex items-center gap-2 px-4 py-2 bg-[var(--color-midnight-navy)]/80 backdrop-blur-sm border-2 border-[var(--color-cyber-cyan)] text-[var(--color-cyber-cyan)] font-mono-pixel text-sm hover:bg-[var(--color-cyber-cyan)]/20 transition-all duration-300 group"
      >
        <span>SKIP ({countdown}s)</span>
        <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
      </button>

      {/* Content */}
      <div className="relative z-30 min-h-screen flex flex-col items-center justify-center px-4">
        {/* Logo Section */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="mb-8">
            {/* MK Shield Logo Recreation */}
            <div className="relative inline-block">
              <div className="w-48 h-48 mx-auto mb-6 relative">
                {/* Outer glow ring */}
                <div className="absolute inset-0 rounded-full border-4 border-[var(--color-cyber-cyan)] animate-spin-slow" 
                     style={{ 
                       animation: 'spin 20s linear infinite',
                       boxShadow: '0 0 40px rgba(0, 217, 255, 0.6), inset 0 0 40px rgba(255, 0, 110, 0.3)'
                     }} 
                />
                
                {/* Inner shield */}
                <div className="absolute inset-8 flex items-center justify-center">
                  <div className="relative">
                    <div className="font-pixel text-6xl text-[var(--color-neon-green)] neon-glow-green">
                      MK
                    </div>
                    <div className="absolute -top-4 -right-4 text-4xl">
                      🏎️
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h1 className="font-pixel text-4xl md:text-6xl lg:text-7xl mb-4">
            <span className="text-[var(--color-cyber-cyan)] neon-glow-cyan">MEME KART</span>
            <br />
            <span className="text-[var(--color-hot-magenta)] neon-glow-magenta">RACING</span>
          </h1>
          
          <p className="font-mono-pixel text-xl md:text-2xl text-[var(--color-electric-yellow)] mb-8">
            RETRO GAMING MEETS WEB3
          </p>
        </div>

        {/* Press Start Button */}
        <div className="text-center animate-fade-in-up animation-delay-400">
          <Button 
            onClick={handleEnter}
            className="btn-arcade text-lg px-12 py-6 mb-4"
          >
            PRESS START
          </Button>
          
          <div className="font-mono-pixel text-sm text-muted-foreground animate-pulse">
            INSERT COIN TO CONTINUE
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <div className="font-mono-pixel text-xs text-muted-foreground">
            © 2026 MEME KART RACING • PLAYER ONE READY
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
}
