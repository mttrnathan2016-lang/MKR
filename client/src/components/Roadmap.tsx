/**
 * Roadmap Component - Interactive 7-week launch timeline
 * Cyberpunk Arcade Noir design with expandable phase cards
 */

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface RoadmapPhase {
  week: string;
  title: string;
  deliverables: string[];
  target: string;
  status: "completed" | "in-progress" | "upcoming";
}

const roadmapData: RoadmapPhase[] = [
  {
    week: "WEEK 1",
    title: "Android Launch",
    deliverables: [
      "Production release (Google Play)",
      "Core gameplay loop stable (single-player/AI)",
      "Progression + cosmetics unlocks",
      "Analytics + crash reporting + in-game feedback"
    ],
    target: "Validate stability and core engagement metrics; form early adopter community",
    status: "upcoming"
  },
  {
    week: "WEEK 2",
    title: "iOS Launch",
    deliverables: [
      "Production release (App Store)",
      "iOS optimisation + compliance",
      "Cross-platform account logic (non-blockchain)",
      "Store assets + ASO package"
    ],
    target: "Expand reach and credibility; establish platform parity for future live-ops",
    status: "upcoming"
  },
  {
    week: "WEEKS 3-4",
    title: "Multiplayer + Advertising",
    deliverables: [
      "Real-time multiplayer racing mode",
      "Matchmaking, lobbies, and server validation",
      "Dynamic trackside advertising boards",
      "Partner-ready monetisation showcase"
    ],
    target: "Prove scalability and monetisation inventory for sponsors and brands",
    status: "upcoming"
  },
  {
    week: "WEEK 5",
    title: "Web3 Integration",
    deliverables: [
      "Non-custodial wallet integration (Privy)",
      "Secure account-to-wallet linking",
      "On-chain identity mapping (player → wallet)",
      "NFT framework ready (metadata + gating)"
    ],
    target: "Introduce Web3 without disrupting gameplay; enable ownership/reward rails",
    status: "upcoming"
  },
  {
    week: "WEEK 6",
    title: "NFT Launch",
    deliverables: [
      "NFT mint release",
      "In-game utility (cosmetics, karts, access passes)",
      "Marketplace compatibility",
      "Balance controls to avoid pay-to-win"
    ],
    target: "Open new revenue stream and ownership narrative with real utility",
    status: "upcoming"
  },
  {
    week: "WEEK 7",
    title: "Tournament Mode",
    deliverables: [
      "Scheduled tournaments + ranked ladders",
      "Leaderboards and integrity controls",
      "Prize distribution (Top 3)",
      "Custom prizes + cash/token rewards"
    ],
    target: "Establish competitive live-ops; drive retention and replayability",
    status: "upcoming"
  }
];

export default function Roadmap() {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(null);

  const togglePhase = (index: number) => {
    setExpandedPhase(expandedPhase === index ? null : index);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "var(--color-neon-green)";
      case "in-progress":
        return "var(--color-electric-yellow)";
      default:
        return "var(--color-cyber-cyan)";
    }
  };

  return (
    <div className="relative">
      {/* Vertical timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--color-cyber-cyan)] via-[var(--color-hot-magenta)] to-[var(--color-neon-green)]" 
           style={{ opacity: 0.3 }} 
      />

      <div className="space-y-6">
        {roadmapData.map((phase, index) => (
          <div key={index} className="relative pl-20">
            {/* Timeline dot */}
            <div 
              className="absolute left-6 top-6 w-5 h-5 rounded-full border-4 animate-pulse"
              style={{ 
                borderColor: getStatusColor(phase.status),
                backgroundColor: 'var(--color-void-black)',
                boxShadow: `0 0 20px ${getStatusColor(phase.status)}`
              }}
            />

            {/* Phase card */}
            <div 
              className="card-arcade cursor-pointer transition-all duration-300 hover:scale-[1.02]"
              onClick={() => togglePhase(index)}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="font-mono-pixel text-sm mb-2" style={{ color: getStatusColor(phase.status) }}>
                    {phase.week}
                  </div>
                  <h3 className="font-pixel text-2xl text-foreground">
                    {phase.title}
                  </h3>
                </div>
                <ChevronDown 
                  className={`w-6 h-6 transition-transform duration-300 ${expandedPhase === index ? 'rotate-180' : ''}`}
                  style={{ color: getStatusColor(phase.status) }}
                />
              </div>

              {/* Expandable content */}
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  expandedPhase === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pt-4 border-t border-border">
                  <h4 className="font-mono-pixel text-sm text-[var(--color-electric-yellow)] mb-3">
                    KEY DELIVERABLES
                  </h4>
                  <ul className="space-y-2 mb-4">
                    {phase.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-[var(--color-neon-green)] mt-1">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h4 className="font-mono-pixel text-sm text-[var(--color-hot-magenta)] mb-2">
                    TARGET OUTCOME
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {phase.target}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Post-launch expansion note */}
      <div className="mt-12 pl-20">
        <div className="card-arcade bg-gradient-to-br from-[var(--color-midnight-navy)] to-[var(--color-void-black)]">
          <h3 className="font-pixel text-xl text-[var(--color-electric-yellow)] mb-4">
            POST-LAUNCH EXPANSION
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground">
            <div className="flex items-start gap-2">
              <span className="text-[var(--color-cyber-cyan)]">⚡</span>
              <span>Seasonal content & battle-pass progression</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[var(--color-hot-magenta)]">🏆</span>
              <span>Sponsored tournaments & branded tracks</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[var(--color-neon-green)]">👥</span>
              <span>Creator-led expansion & partnerships</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[var(--color-electric-yellow)]">🛠️</span>
              <span>UGC track tooling & content pipeline</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
