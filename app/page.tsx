"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidebar"
import KYCComplianceCard from "@/components/kyc-compliance"
import STRCTRCard from "@/components/str-ctr"
import EDInvestigationsCard from "@/components/ed-investigations"
import TransactionHeatmapCard from "@/components/transaction-heatmap"
import IdentityGraphCard from "@/components/identity-graph"
import AlertsCard from "@/components/alerts"

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        {/* Content Grid */}
        <main className="flex-1 overflow-auto">
          <div className="p-6 space-y-6">
            {/* Header */}
            <div>
              <h1 className="text-3xl font-bold text-foreground">AML Monitoring Dashboard</h1>
              <p className="text-muted-foreground mt-1">Real-time Anti-Money Laundering Compliance Monitoring</p>
            </div>

            {/* KPI Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <KPICard label="Total Customers" value="12,450" trend="+2.5%" color="blue" />
              <KPICard label="Verified KYC" value="11,890" trend="+1.2%" color="green" />
              <KPICard label="Pending Checks" value="560" trend="-0.8%" color="orange" />
              <KPICard label="High Risk" value="45" trend="+3.1%" color="red" />
            </div>

            {/* Main Dashboard Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-6">
                <STRCTRCard />
                <TransactionHeatmapCard />
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <AlertsCard />
                <KYCComplianceCard />
              </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <EDInvestigationsCard />
              <IdentityGraphCard />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function KPICard({ label, value, trend, color }: { label: string; value: string; trend: string; color: string }) {
  const colorMap = {
    blue: "border-l-4 border-l-[#00d9ff]",
    green: "border-l-4 border-l-[#00ff88]",
    orange: "border-l-4 border-l-[#ff6b35]",
    red: "border-l-4 border-l-[#ff4444]",
  }

  const trendColor = trend.startsWith("+") ? "text-[#00ff88]" : "text-[#ff6b35]"

  return (
    <div className={`bg-card rounded-lg p-4 ${colorMap[color as keyof typeof colorMap]} neon-glow-blue`}>
      <p className="text-muted-foreground text-sm font-medium">{label}</p>
      <p className="text-2xl font-bold text-foreground mt-2">{value}</p>
      <p className={`text-xs mt-2 ${trendColor}`}>{trend} from last month</p>
    </div>
  )
}
