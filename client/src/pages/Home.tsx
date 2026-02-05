/**
 * Cyberpunk Arcade Noir Design
 * - Deep void blacks with neon accents (green, cyan, magenta)
 * - Diagonal section breaks for visual tension
 * - CRT scanline effects on hero and cards
 * - Pixel fonts for headings, Space Grotesk for body
 * - Arcade-style interactions with press animations
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Gamepad2, Zap, Users, Coins, Trophy, Rocket, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="font-pixel text-xl text-[var(--color-neon-green)] neon-glow-green">
            $RMG
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm hover:text-[var(--color-cyber-cyan)] transition-colors">About</a>
            <a href="#gameplay" className="text-sm hover:text-[var(--color-cyber-cyan)] transition-colors">Gameplay</a>
            <a href="#tokenomics" className="text-sm hover:text-[var(--color-cyber-cyan)] transition-colors">Tokenomics</a>
            <a href="#nft" className="text-sm hover:text-[var(--color-cyber-cyan)] transition-colors">NFT Market</a>
            <a href="#community" className="text-sm hover:text-[var(--color-cyber-cyan)] transition-colors">Community</a>
          </div>
          <Button className="btn-arcade">
            CONNECT WALLET
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden crt-scanlines pt-20">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/5X8Z3VSp8EymCwVUn7V9Ce/sandbox/NAntiWJhomPzrGfXVs026u-img-1_1770291289000_na1fn_aGVyby1jeWJlcnB1bmstYXJjYWRl.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNVg4WjNWU3A4RXltQ3dWVW43VjlDZS9zYW5kYm94L05BbnRpV0pob21QenJHZlhWczAyNnUtaW1nLTFfMTc3MDI5MTI4OTAwMF9uYTFmbl9hR1Z5YnkxamVXSmxjbkIxYm1zdFlYSmpZV1JsLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=uN6VDtMN4Ryvf--6CwVIzBigjzU0qBQCjQOy0ojDgOFozX-slOv8dx7gCMm4KCLrYPOI5WwcRDQh9ujQT25uXHkNQUpiaFOIybXoR9UHyjlTe2Jr9JJ1la0VFTADTSfp8qDuPtMnEcVegwxEUVm-ov8Xi79xRbADyp4Z22YsyKJPDuPiNlIa7iLNZaIxMC-qdIotbfx0QArSeOBHsryyQsN-~LUkEpsimXONo-j4N6069cZmtLoxvNG9hRMxhQxXJvGmVwxYSkF9Ly1nrkdKwj8v2w~~zC~5w9S6PrX6MVmPAig9R2-hLxyuvgkWNyyT9tYVqkotTy~K4hQUNvsM9A__')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.4
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-0" />
        
        <div className="container relative z-10 text-center">
          <h1 className="font-pixel text-4xl md:text-6xl lg:text-7xl text-[var(--color-neon-green)] neon-glow-green mb-6 animate-fade-in-up">
            MEME GAMES
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-[var(--color-cyber-cyan)] font-mono-pixel animate-fade-in-up animation-delay-200">
            RETRO GAMING MEETS WEB3
          </p>
          <p className="text-base md:text-lg mb-12 max-w-2xl mx-auto text-muted-foreground animate-fade-in-up animation-delay-400">
            Race. Compete. Earn with $RMG Token. Classic arcade chaos re-engineered for the modern internet.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up animation-delay-600">
            <Button className="btn-arcade text-base">
              INSERT COIN
            </Button>
            <Button variant="outline" className="border-2 border-[var(--color-cyber-cyan)] text-[var(--color-cyber-cyan)] hover:bg-[var(--color-cyber-cyan)]/20 px-8 py-6 font-pixel text-sm">
              PRESS START
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="card-arcade">
              <div className="font-mono-pixel text-4xl text-[var(--color-electric-yellow)] mb-2">100M</div>
              <div className="text-sm text-muted-foreground">TOTAL SUPPLY</div>
            </div>
            <div className="card-arcade">
              <div className="font-mono-pixel text-4xl text-[var(--color-hot-magenta)] mb-2">70%</div>
              <div className="text-sm text-muted-foreground">LIQUIDITY LOCKED</div>
            </div>
            <div className="card-arcade">
              <div className="font-mono-pixel text-4xl text-[var(--color-cyber-cyan)] mb-2">50%</div>
              <div className="text-sm text-muted-foreground">REVENUE SHARE</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[var(--color-midnight-navy)] diagonal-top">
        <div className="container">
          <h2 className="font-pixel text-3xl md:text-5xl text-[var(--color-hot-magenta)] neon-glow-magenta text-center mb-16">
            POWER-UPS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-arcade text-center group">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Gamepad2 className="w-12 h-12 text-[var(--color-retro-orange)] group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-mono-pixel text-2xl mb-4 text-foreground">RETRO REVIVAL</h3>
              <p className="text-muted-foreground leading-relaxed">
                80s and 90s arcade classics reimagined with modern meme culture and blockchain tech. Nostalgia meets innovation.
              </p>
            </div>

            <div className="card-arcade text-center group">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Zap className="w-12 h-12 text-[var(--color-electric-yellow)] group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-mono-pixel text-2xl mb-4 text-foreground">WEB2 + WEB3</h3>
              <p className="text-muted-foreground leading-relaxed">
                Seamless bridge between traditional and crypto gaming. Play with classic controls or dive into NFT ownership.
              </p>
            </div>

            <div className="card-arcade text-center group">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Users className="w-12 h-12 text-[var(--color-cyber-cyan)] group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-mono-pixel text-2xl mb-4 text-foreground">COMMUNITY DRIVEN</h3>
              <p className="text-muted-foreground leading-relaxed">
                Join vibrant community of gamers. Compete in tournaments and earn rewards while enjoying nostalgic gameplay.
              </p>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-pixel text-2xl text-[var(--color-neon-green)] mb-6">OUR MISSION</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Cultivate a vibrant community where gamers connect, share, and enjoy the thrill of competition. Whether you're a seasoned player with fondness for the golden age of gaming or a newcomer eager to explore the past, Meme Games offers something for everyone.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Engage in playful contests, collaborate with fellow enthusiasts, and dive into a world where nostalgia meets innovation.
              </p>
            </div>
            <div 
              className="rounded-lg overflow-hidden border-2 border-[var(--color-cyber-cyan)] shadow-lg crt-scanlines"
              style={{
                backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/5X8Z3VSp8EymCwVUn7V9Ce/sandbox/NAntiWJhomPzrGfXVs026u-img-4_1770291281000_na1fn_d2ViMy1pbnRlZ3JhdGlvbi12aXN1YWw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNVg4WjNWU3A4RXltQ3dWVW43VjlDZS9zYW5kYm94L05BbnRpV0pob21QenJHZlhWczAyNnUtaW1nLTRfMTc3MDI5MTI4MTAwMF9uYTFmbl9kMlZpTXkxcGJuUmxaM0poZEdsdmJpMTJhWE4xWVd3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=o5g-qITKWVn8niN1xbDYwy8bLNtk6pWUOzxpBU0vjbQRYS-9XMqZMCghOaN60BqEDlis-5G-isBM~nfH-q0RcsG~KonHX~TuZavg7EAjrrnm-Uaj3wVP6AVD78wQbw3WEWiAjPh~SZFr3Dv~TYD04846ffFivs~ZzSY7Iq9cfKJ5oGp0E2Q5ZtY6JdYd4s8zU6J9ICwLalfLDkzZ9m7gIPpXzlDvFyMBcoVDOlSLH07XVnXY6uviMuYbyeCDvBmYVW5rLZAtqcYeIPAhNgl8ucqrXSFHE6mAaV8p0~Kt6aFgQ~5ufnrx~QEA-hbf4KfsQX8xHd0ZBv~PKPgfgfg__')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '400px'
              }}
            />
          </div>
        </div>
      </section>

      {/* Gameplay Section */}
      <section id="gameplay" className="py-24 bg-background diagonal-top">
        <div className="container">
          <h2 className="font-pixel text-3xl md:text-5xl text-[var(--color-cyber-cyan)] neon-glow-cyan text-center mb-16">
            GAMEPLAY SHOWCASE
          </h2>

          <div 
            className="relative rounded-lg overflow-hidden mb-12 border-4 border-[var(--color-hot-magenta)] crt-scanlines"
            style={{
              backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/5X8Z3VSp8EymCwVUn7V9Ce/sandbox/NAntiWJhomPzrGfXVs026u-img-2_1770291286000_na1fn_Z2FtZXBsYXktbmVvbi1yYWNlcg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNVg4WjNWU3A4RXltQ3dWVW43VjlDZS9zYW5kYm94L05BbnRpV0pob21QenJHZlhWczAyNnUtaW1nLTJfMTc3MDI5MTI4NjAwMF9uYTFmbl9aMkZ0WlhCc1lYa3RibVZ2YmkxeVlXTmxjZy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=oQclLLJQ5oKAWJGa3L2w2rF585IrmYdfO-urAlQJp-2Ud3ZQ-GNRJWlzlakhoo7zAIQ9Q9zKdXxUgaAmgha331MsjhYlS0BBDQQnakWmleOs4zOjGeC~ZWaGMkt4qxtmJyw5VWtay-OZLaLWZK~o7k0YJn8SVkOOzh2QFbJeEVSas3ZqBgjUiOQhKigjXXl3CikWimtdPXezmttRuPWgDr7cZdwpNSRsgAMql8oU7EMCoJ2PObf2HicD6Vns0rpBix~xu-AJXmUHYEU14F7aU2AyV6zHTU3Ltc9vIBYaR1MXU8r6XB3twVy3ALIoZfSjs7kDH1HeIqFKqFEziAOvzQ__')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '500px'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <Button className="btn-arcade">
                WATCH GAMEPLAY
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "DOGE", speed: 90, handling: 94, acceleration: 87, color: "var(--color-neon-green)" },
              { name: "PEPE", speed: 95, handling: 88, acceleration: 92, color: "var(--color-hot-magenta)" },
              { name: "PNUT", speed: 88, handling: 90, acceleration: 95, color: "var(--color-cyber-cyan)" }
            ].map((character, idx) => (
              <div key={idx} className="card-arcade crt-scanlines">
                <div className="font-pixel text-xl mb-4" style={{ color: character.color }}>
                  {character.name}
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-mono-pixel">SPEED</span>
                      <span className="font-mono-pixel">{character.speed}</span>
                    </div>
                    <Progress value={character.speed} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-mono-pixel">HANDLING</span>
                      <span className="font-mono-pixel">{character.handling}</span>
                    </div>
                    <Progress value={character.handling} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-mono-pixel">ACCELERATION</span>
                      <span className="font-mono-pixel">{character.acceleration}</span>
                    </div>
                    <Progress value={character.acceleration} className="h-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-24 bg-[var(--color-midnight-navy)] diagonal-top">
        <div className="container">
          <h2 className="font-pixel text-3xl md:text-5xl text-[var(--color-electric-yellow)] text-center mb-16">
            TOKENOMICS
          </h2>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="card-arcade text-center mb-8">
              <div className="font-pixel text-2xl text-[var(--color-neon-green)] mb-2">TOTAL SUPPLY</div>
              <div className="font-mono-pixel text-5xl text-foreground">100,000,000 $RMG</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-arcade">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono-pixel text-lg">LIQUIDITY POOL</span>
                  <span className="font-pixel text-xl text-[var(--color-neon-green)]">70%</span>
                </div>
                <p className="text-sm text-muted-foreground">70,000,000 $RMG • 100% LP Locked</p>
              </div>

              <div className="card-arcade">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono-pixel text-lg">PRE-SALE</span>
                  <span className="font-pixel text-xl text-[var(--color-hot-magenta)]">10%</span>
                </div>
                <p className="text-sm text-muted-foreground">10,000,000 $RMG • Gempad Pre-sale</p>
              </div>

              <div className="card-arcade">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono-pixel text-lg">STRATEGIC PARTNERS</span>
                  <span className="font-pixel text-xl text-[var(--color-cyber-cyan)]">5%</span>
                </div>
                <p className="text-sm text-muted-foreground">5,000,000 $RMG • Locked in Multisig</p>
              </div>

              <div className="card-arcade">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono-pixel text-lg">MARKETING</span>
                  <span className="font-pixel text-xl text-[var(--color-electric-yellow)]">10%</span>
                </div>
                <p className="text-sm text-muted-foreground">10,000,000 $RMG • Locked in Multisig</p>
              </div>

              <div className="card-arcade">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono-pixel text-lg">TEAM</span>
                  <span className="font-pixel text-xl text-[var(--color-retro-orange)]">5%</span>
                </div>
                <p className="text-sm text-muted-foreground">5,000,000 $RMG • Vested Linear 12 Months</p>
              </div>

              <div className="card-arcade">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono-pixel text-lg">TAX STRUCTURE</span>
                  <span className="font-pixel text-xl text-[var(--color-hot-magenta)]">5%</span>
                </div>
                <p className="text-sm text-muted-foreground">4% Marketing & Dev • 1% Liquidity</p>
              </div>
            </div>
          </div>

          <div className="card-arcade max-w-3xl mx-auto text-center">
            <Coins className="w-16 h-16 mx-auto mb-6 text-[var(--color-electric-yellow)]" />
            <h3 className="font-pixel text-2xl mb-4 text-[var(--color-neon-green)]">50% PROFIT SHARE</h3>
            <p className="text-muted-foreground leading-relaxed">
              Holders with 50,000+ $RMG receive 50% of gross profits from platform purchases, NFT marketplace, and brand partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* NFT Section */}
      <section id="nft" className="py-24 bg-background diagonal-top">
        <div className="container">
          <h2 className="font-pixel text-3xl md:text-5xl text-[var(--color-hot-magenta)] neon-glow-magenta text-center mb-16">
            NFT MARKETPLACE
          </h2>

          <div 
            className="relative rounded-lg overflow-hidden mb-12 border-4 border-[var(--color-neon-green)] crt-scanlines"
            style={{
              backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/5X8Z3VSp8EymCwVUn7V9Ce/sandbox/NAntiWJhomPzrGfXVs026u-img-3_1770291286000_na1fn_bmZ0LWNoYXJhY3Rlci1zaG93Y2FzZQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNVg4WjNWU3A4RXltQ3dWVW43VjlDZS9zYW5kYm94L05BbnRpV0pob21QenJHZlhWczAyNnUtaW1nLTNfMTc3MDI5MTI4NjAwMF9uYTFmbl9ibVowTFdOb1lYSmhZM1JsY2kxemFHOTNZMkZ6WlEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=IpHoz8LAxdA26A3EJAQRRgPoYWBGyut4I4SiminHLeS24oE7XsH~c1Va0rBMwAP8FAlKlOb9vFBjWCK4acxB2u1WiJTCYX~M4F4ifiABgWycQtXQ6qmOYiK4oJpskOufgU65r8h9qmW-G9Jbst03y2mKQdH6hrY45N5M6WKTwUnLDmeafJQQE997mq1rUx4lbn4yetBxz6qlbXU0L~kiOCIcYFpjvGwtCZgCRwuLPkNORbi5x7OP2Y7zcC0HYKYc5HlQVfEF319FrUWR8Hu3cAhfkf0gIZPTkms6uSUzKPobSK5nD4YUD8gN8W3cJnhIK2~B1iYUSp3aNvcw2oFA9w__')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '400px'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="card-arcade text-center">
              <Trophy className="w-12 h-12 mx-auto mb-4 text-[var(--color-electric-yellow)]" />
              <h3 className="font-mono-pixel text-xl mb-3">TRUE OWNERSHIP</h3>
              <p className="text-sm text-muted-foreground">Your NFTs, your assets. Trade freely on the blockchain.</p>
            </div>

            <div className="card-arcade text-center">
              <Rocket className="w-12 h-12 mx-auto mb-4 text-[var(--color-hot-magenta)]" />
              <h3 className="font-mono-pixel text-xl mb-3">EXCLUSIVE ACCESS</h3>
              <p className="text-sm text-muted-foreground">Unlock special tournaments, tracks, and game modes.</p>
            </div>

            <div className="card-arcade text-center">
              <Coins className="w-12 h-12 mx-auto mb-4 text-[var(--color-neon-green)]" />
              <h3 className="font-mono-pixel text-xl mb-3">PLAY TO EARN</h3>
              <p className="text-sm text-muted-foreground">Compete with your NFTs and earn $RMG tokens as rewards.</p>
            </div>
          </div>

          <div className="text-center">
            <Button className="btn-arcade">
              EXPLORE MARKETPLACE
            </Button>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-24 bg-[var(--color-midnight-navy)] diagonal-top">
        <div className="container">
          <h2 className="font-pixel text-3xl md:text-5xl text-[var(--color-cyber-cyan)] neon-glow-cyan text-center mb-16">
            JOIN THE ARCADE
          </h2>

          <div 
            className="relative rounded-lg overflow-hidden mb-12 border-4 border-[var(--color-cyber-cyan)] crt-scanlines"
            style={{
              backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/5X8Z3VSp8EymCwVUn7V9Ce/sandbox/NAntiWJhomPzrGfXVs026u-img-5_1770291285000_na1fn_Y29tbXVuaXR5LWxlYWRlcmJvYXJkLWJn.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNVg4WjNWU3A4RXltQ3dWVW43VjlDZS9zYW5kYm94L05BbnRpV0pob21QenJHZlhWczAyNnUtaW1nLTVfMTc3MDI5MTI4NTAwMF9uYTFmbl9ZMjl0YlhWdWFYUjVMV3hsWVdSbGNtSnZZWEprTFdKbi5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=eL~NFp6PNivUz~OFrFBi6lz6xHe1ZkerZr4OPb0kc6aHx4y4Zx61xMytlLYvlezAjwoi3hgv2Hl8FejLKAbsh3Lt6jlfuT7~SBcjm4PeWissBWTEPrqsSDXE6rqBtVaiTixC2EmcANLrQutcjPThFH52U3AmyUEb2S1EKN5ArkFCMB8OvYIJT8~XE4120y~Fs1ElG-X~LHmZJHM8vp3LHP9RxNp5quhViWQlXlW1zFBa9MoaIVuS0XR6Dr77dTEOp6Uc7xW6tU0ypKqukWkSQjybLBr9pgiwdmBXGqcW5JFPX4QUlbWbre9QB2Le0SOHAG55seRaf7edq~2hlHvpow__')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '400px'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-midnight-navy)] via-transparent to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a href="#" className="card-arcade text-center group hover:border-[var(--color-cyber-cyan)]">
              <div className="font-mono-pixel text-xl mb-2 text-[var(--color-cyber-cyan)]">X (TWITTER)</div>
              <p className="text-sm text-muted-foreground">Follow for updates</p>
              <ChevronRight className="w-6 h-6 mx-auto mt-4 text-[var(--color-cyber-cyan)] group-hover:translate-x-2 transition-transform" />
            </a>

            <a href="#" className="card-arcade text-center group hover:border-[var(--color-hot-magenta)]">
              <div className="font-mono-pixel text-xl mb-2 text-[var(--color-hot-magenta)]">TELEGRAM</div>
              <p className="text-sm text-muted-foreground">Join the chat</p>
              <ChevronRight className="w-6 h-6 mx-auto mt-4 text-[var(--color-hot-magenta)] group-hover:translate-x-2 transition-transform" />
            </a>

            <a href="#" className="card-arcade text-center group hover:border-[var(--color-electric-yellow)]">
              <div className="font-mono-pixel text-xl mb-2 text-[var(--color-electric-yellow)]">DISCORD</div>
              <p className="text-sm text-muted-foreground">Connect with players</p>
              <ChevronRight className="w-6 h-6 mx-auto mt-4 text-[var(--color-electric-yellow)] group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="font-pixel text-xl text-[var(--color-neon-green)] neon-glow-green mb-4">$RMG</div>
              <p className="text-sm text-muted-foreground">Classic arcade chaos re-engineered for the modern internet.</p>
            </div>

            <div>
              <h4 className="font-mono-pixel text-lg mb-4">GAME</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-[var(--color-cyber-cyan)]">About</a></li>
                <li><a href="#" className="hover:text-[var(--color-cyber-cyan)]">Gameplay</a></li>
                <li><a href="#" className="hover:text-[var(--color-cyber-cyan)]">Tokenomics</a></li>
                <li><a href="#" className="hover:text-[var(--color-cyber-cyan)]">Roadmap</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono-pixel text-lg mb-4">RESOURCES</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-[var(--color-cyber-cyan)]">Whitepaper</a></li>
                <li><a href="#" className="hover:text-[var(--color-cyber-cyan)]">Documentation</a></li>
                <li><a href="#" className="hover:text-[var(--color-cyber-cyan)]">FAQ</a></li>
                <li><a href="#" className="hover:text-[var(--color-cyber-cyan)]">Support</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono-pixel text-lg mb-4">LEGAL</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-[var(--color-cyber-cyan)]">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[var(--color-cyber-cyan)]">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[var(--color-cyber-cyan)]">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center">
            <p className="text-sm text-muted-foreground font-mono-pixel">
              © 2026 MEME GAMES. PLAYER ONE READY.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
