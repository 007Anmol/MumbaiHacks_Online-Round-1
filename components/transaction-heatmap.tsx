"use client"

const states = [
  { name: "Maharashtra", volume: 2450, intensity: 95 },
  { name: "Delhi", volume: 1890, intensity: 75 },
  { name: "Karnataka", volume: 1650, intensity: 65 },
  { name: "Tamil Nadu", volume: 1420, intensity: 56 },
  { name: "Gujarat", volume: 1280, intensity: 51 },
  { name: "Uttar Pradesh", volume: 980, intensity: 39 },
  { name: "West Bengal", volume: 850, intensity: 34 },
  { name: "Telangana", volume: 720, intensity: 29 },
]

export default function TransactionHeatmapCard() {
  const getIntensityColor = (intensity: number) => {
    if (intensity > 80) return "bg-[#ff4444]"
    if (intensity > 60) return "bg-[#ff6b35]"
    if (intensity > 40) return "bg-[#ffaa00]"
    return "bg-[#00d9ff]"
  }

  return (
    <div className="bg-card border border-border rounded-lg p-6 neon-glow-green">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-foreground">Transaction Heatmap</h3>
        <span className="text-xs bg-secondary px-2 py-1 rounded text-muted-foreground">By State</span>
      </div>

      <div className="space-y-2">
        {states.map((state) => (
          <div key={state.name} className="flex items-center gap-3">
            <div className="w-32 text-xs text-muted-foreground truncate">{state.name}</div>
            <div className="flex-1 bg-secondary rounded-full h-6 overflow-hidden relative">
              <div
                className={`h-full ${getIntensityColor(state.intensity)} transition-all duration-300`}
                style={{ width: `${state.intensity}%` }}
              />
            </div>
            <div className="text-right">
              <p className="text-xs font-semibold text-foreground">{state.volume}</p>
              <p className="text-xs text-muted-foreground">{state.intensity}%</p>
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-4 flex items-center justify-center gap-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#ff4444] rounded-full" />
          <span className="text-muted-foreground">Critical</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#ff6b35] rounded-full" />
          <span className="text-muted-foreground">High</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#ffaa00] rounded-full" />
          <span className="text-muted-foreground">Medium</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#00d9ff] rounded-full" />
          <span className="text-muted-foreground">Low</span>
        </div>
      </div>
    </div>
  )
}
