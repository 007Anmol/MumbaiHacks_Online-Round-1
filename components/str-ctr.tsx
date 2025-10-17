"use client"

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { useState } from "react"

const data = [
  { month: "Jan", STR: 120, CTR: 240 },
  { month: "Feb", STR: 150, CTR: 280 },
  { month: "Mar", STR: 180, CTR: 320 },
  { month: "Apr", STR: 200, CTR: 350 },
  { month: "May", STR: 220, CTR: 380 },
  { month: "Jun", STR: 250, CTR: 420 },
]

export default function STRCTRCard() {
  const [chartType, setChartType] = useState<"line" | "bar">("line")

  return (
    <div className="bg-card border border-border rounded-lg p-6 neon-glow-blue">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-foreground">STR/CTR Statistics</h3>
        <div className="flex gap-2">
          <button
            onClick={() => setChartType("line")}
            className={`px-3 py-1 text-xs rounded transition-colors ${
              chartType === "line"
                ? "bg-[#00d9ff] text-background"
                : "bg-secondary text-muted-foreground hover:bg-border"
            }`}
          >
            Line
          </button>
          <button
            onClick={() => setChartType("bar")}
            className={`px-3 py-1 text-xs rounded transition-colors ${
              chartType === "bar"
                ? "bg-[#00d9ff] text-background"
                : "bg-secondary text-muted-foreground hover:bg-border"
            }`}
          >
            Bar
          </button>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        {chartType === "line" ? (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2a2a3e" />
            <XAxis stroke="#999999" />
            <YAxis stroke="#999999" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e1e2f",
                border: "1px solid #2a2a3e",
                borderRadius: "8px",
                color: "#e0e0e0",
              }}
            />
            <Legend />
            <Line type="monotone" dataKey="STR" stroke="#00d9ff" strokeWidth={2} dot={{ fill: "#00d9ff" }} />
            <Line type="monotone" dataKey="CTR" stroke="#ff6b35" strokeWidth={2} dot={{ fill: "#ff6b35" }} />
          </LineChart>
        ) : (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2a2a3e" />
            <XAxis stroke="#999999" />
            <YAxis stroke="#999999" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e1e2f",
                border: "1px solid #2a2a3e",
                borderRadius: "8px",
                color: "#e0e0e0",
              }}
            />
            <Legend />
            <Bar dataKey="STR" fill="#00d9ff" />
            <Bar dataKey="CTR" fill="#ff6b35" />
          </BarChart>
        )}
      </ResponsiveContainer>
    </div>
  )
}
