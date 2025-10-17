"use client"

import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Verified", value: 11890, color: "#00ff88" },
  { name: "Pending", value: 560, color: "#ff6b35" },
  { name: "Flagged", value: 45, color: "#ff4444" },
]

export default function KYCComplianceCard() {
  return (
    <div className="bg-card border border-border rounded-lg p-6 neon-glow-blue">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-foreground">KYC Compliance</h3>
        <span className="text-xs bg-secondary px-2 py-1 rounded text-muted-foreground">Real-time</span>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={2} dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "#1e1e2f",
              border: "1px solid #2a2a3e",
              borderRadius: "8px",
              color: "#e0e0e0",
            }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>

      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        <div>
          <p className="text-xs text-muted-foreground">Verified</p>
          <p className="text-lg font-bold neon-text-green">11,890</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Pending</p>
          <p className="text-lg font-bold neon-text-orange">560</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Flagged</p>
          <p className="text-lg font-bold text-[#ff4444]">45</p>
        </div>
      </div>
    </div>
  )
}
