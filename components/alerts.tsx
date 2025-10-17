"use client"

import { TrendingUp, User, DollarSign } from "lucide-react"

const alerts = [
  {
    id: 1,
    type: "Transaction Alert",
    message: "Unusual transaction pattern detected",
    severity: "high",
    time: "2 min ago",
    icon: TrendingUp,
  },
  {
    id: 2,
    type: "PEP Alert",
    message: "Politically exposed person identified",
    severity: "critical",
    time: "15 min ago",
    icon: User,
  },
  {
    id: 3,
    type: "Threshold Alert",
    message: "Daily limit exceeded for account",
    severity: "medium",
    time: "1 hour ago",
    icon: DollarSign,
  },
]

export default function AlertsCard() {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "bg-[#ff4444]/10 border-l-4 border-l-[#ff4444]"
      case "high":
        return "bg-[#ff6b35]/10 border-l-4 border-l-[#ff6b35]"
      case "medium":
        return "bg-[#ffaa00]/10 border-l-4 border-l-[#ffaa00]"
      default:
        return "bg-[#00d9ff]/10 border-l-4 border-l-[#00d9ff]"
    }
  }

  const getSeverityTextColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "text-[#ff4444]"
      case "high":
        return "text-[#ff6b35]"
      case "medium":
        return "text-[#ffaa00]"
      default:
        return "text-[#00d9ff]"
    }
  }

  return (
    <div className="bg-card border border-border rounded-lg p-6 neon-glow-orange">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-foreground">Recent Alerts</h3>
        <span className="text-xs bg-[#ff4444]/20 text-[#ff4444] px-2 py-1 rounded font-medium">
          {alerts.length} New
        </span>
      </div>

      <div className="space-y-3">
        {alerts.map((alert) => {
          const Icon = alert.icon
          return (
            <div
              key={alert.id}
              className={`rounded-lg p-3 ${getSeverityColor(alert.severity)} hover:opacity-80 transition-opacity cursor-pointer`}
            >
              <div className="flex items-start gap-3">
                <Icon size={16} className={`flex-shrink-0 mt-0.5 ${getSeverityTextColor(alert.severity)}`} />
                <div className="flex-1 min-w-0">
                  <p className={`text-xs font-semibold ${getSeverityTextColor(alert.severity)}`}>{alert.type}</p>
                  <p className="text-xs text-foreground mt-1">{alert.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <button className="w-full mt-4 py-2 bg-secondary hover:bg-border rounded-lg text-sm font-medium text-foreground transition-colors">
        View All Alerts
      </button>
    </div>
  )
}
