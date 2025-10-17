"use client"

import { AlertCircle, CheckCircle, Clock } from "lucide-react"

const investigations = [
  {
    id: "ED-2024-001",
    title: "Cross-Border Fund Transfer",
    status: "Active",
    severity: "High",
    date: "2024-10-15",
    persons: 3,
  },
  {
    id: "ED-2024-002",
    title: "Suspicious Account Activity",
    status: "Under Review",
    severity: "Medium",
    date: "2024-10-10",
    persons: 2,
  },
  {
    id: "ED-2024-003",
    title: "PEP Transaction Alert",
    status: "Resolved",
    severity: "Low",
    date: "2024-10-05",
    persons: 1,
  },
]

export default function EDInvestigationsCard() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Active":
        return <AlertCircle size={16} className="text-[#ff4444]" />
      case "Under Review":
        return <Clock size={16} className="text-[#ff6b35]" />
      case "Resolved":
        return <CheckCircle size={16} className="text-[#00ff88]" />
      default:
        return null
    }
  }

  return (
    <div className="bg-card border border-border rounded-lg p-6 neon-glow-orange">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-foreground">ED Investigations</h3>
        <span className="text-xs bg-secondary px-2 py-1 rounded text-muted-foreground">3 Active</span>
      </div>

      <div className="space-y-3">
        {investigations.map((inv) => (
          <div key={inv.id} className="bg-secondary rounded-lg p-3 hover:bg-border transition-colors cursor-pointer">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  {getStatusIcon(inv.status)}
                  <p className="font-semibold text-foreground text-sm">{inv.id}</p>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{inv.title}</p>
              </div>
              <span
                className={`text-xs px-2 py-1 rounded font-medium ${
                  inv.severity === "High"
                    ? "bg-[#ff4444]/20 text-[#ff4444]"
                    : inv.severity === "Medium"
                      ? "bg-[#ff6b35]/20 text-[#ff6b35]"
                      : "bg-[#00ff88]/20 text-[#00ff88]"
                }`}
              >
                {inv.severity}
              </span>
            </div>
            <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
              <span>{inv.date}</span>
              <span>{inv.persons} persons</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
