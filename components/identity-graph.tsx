"use client"

import { Network } from "lucide-react"

export default function IdentityGraphCard() {
  return (
    <div className="bg-card border border-border rounded-lg p-6 neon-glow-blue">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-foreground">Identity Graph</h3>
        <span className="text-xs bg-secondary px-2 py-1 rounded text-muted-foreground">Network View</span>
      </div>

      {/* Placeholder Network Visualization */}
      <div className="bg-secondary rounded-lg h-64 flex items-center justify-center relative overflow-hidden">
        {/* SVG Network Diagram */}
        <svg className="w-full h-full" viewBox="0 0 400 300">
          {/* Edges */}
          <line x1="100" y1="100" x2="200" y2="150" stroke="#00d9ff" strokeWidth="2" opacity="0.5" />
          <line x1="100" y1="100" x2="300" y2="100" stroke="#ff6b35" strokeWidth="2" opacity="0.5" />
          <line x1="200" y1="150" x2="300" y2="100" stroke="#00ff88" strokeWidth="2" opacity="0.5" />
          <line x1="200" y1="150" x2="200" y2="250" stroke="#ff6b35" strokeWidth="2" opacity="0.5" />

          {/* Nodes */}
          <circle cx="100" cy="100" r="20" fill="#00d9ff" opacity="0.8" />
          <circle cx="200" cy="150" r="20" fill="#ff6b35" opacity="0.8" />
          <circle cx="300" cy="100" r="20" fill="#00ff88" opacity="0.8" />
          <circle cx="200" cy="250" r="20" fill="#ff00ff" opacity="0.8" />

          {/* Labels */}
          <text x="100" y="105" textAnchor="middle" fill="#121212" fontSize="12" fontWeight="bold">
            A
          </text>
          <text x="200" y="155" textAnchor="middle" fill="#121212" fontSize="12" fontWeight="bold">
            B
          </text>
          <text x="300" y="105" textAnchor="middle" fill="#121212" fontSize="12" fontWeight="bold">
            C
          </text>
          <text x="200" y="255" textAnchor="middle" fill="#121212" fontSize="12" fontWeight="bold">
            D
          </text>
        </svg>

        {/* Overlay Info */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity">
          <div className="text-center">
            <Network size={32} className="text-[#00d9ff] mx-auto mb-2" />
            <p className="text-sm text-foreground font-semibold">4 Entities Connected</p>
            <p className="text-xs text-muted-foreground">Click to expand</p>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
        <div className="bg-secondary rounded p-2">
          <p className="text-muted-foreground">Total Nodes</p>
          <p className="font-bold text-foreground">4</p>
        </div>
        <div className="bg-secondary rounded p-2">
          <p className="text-muted-foreground">Connections</p>
          <p className="font-bold text-foreground">6</p>
        </div>
      </div>
    </div>
  )
}
