"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Download, Filter, Calendar } from "lucide-react"
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

export default function ReportsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const complianceData = [
    { month: "Jan", compliant: 95, nonCompliant: 5 },
    { month: "Feb", compliant: 96, nonCompliant: 4 },
    { month: "Mar", compliant: 97, nonCompliant: 3 },
    { month: "Apr", compliant: 96, nonCompliant: 4 },
    { month: "May", compliant: 98, nonCompliant: 2 },
    { month: "Jun", compliant: 99, nonCompliant: 1 },
  ]

  const riskData = [
    { category: "Low Risk", count: 8900 },
    { category: "Medium Risk", count: 2100 },
    { category: "High Risk", count: 450 },
  ]

  return (
    <div className="flex h-screen bg-background">
      <Sidebar open={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        <main className="flex-1 overflow-auto">
          <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Reports & Analytics</h1>
                <p className="text-muted-foreground mt-1">Comprehensive compliance and performance reports</p>
              </div>
              <Button className="bg-gradient-to-r from-[#00d9ff] to-[#00ff88] text-background font-semibold">
                <Download size={18} className="mr-2" />
                Export Report
              </Button>
            </div>

            {/* Filters */}
            <div className="flex gap-4">
              <Button variant="outline" className="border-border text-foreground hover:bg-card bg-transparent">
                <Calendar size={18} className="mr-2" />
                Last 6 Months
              </Button>
              <Button variant="outline" className="border-border text-foreground hover:bg-card bg-transparent">
                <Filter size={18} className="mr-2" />
                Filter
              </Button>
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Compliance Trend */}
              <div className="bg-card rounded-lg border border-border p-6">
                <h2 className="text-lg font-semibold text-foreground mb-4">Compliance Trend</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={complianceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis stroke="#666" />
                    <YAxis stroke="#666" />
                    <Tooltip contentStyle={{ backgroundColor: "#1a1a1a", border: "1px solid #333" }} />
                    <Legend />
                    <Line type="monotone" dataKey="compliant" stroke="#00ff88" strokeWidth={2} />
                    <Line type="monotone" dataKey="nonCompliant" stroke="#ff6b35" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Risk Distribution */}
              <div className="bg-card rounded-lg border border-border p-6">
                <h2 className="text-lg font-semibold text-foreground mb-4">Risk Distribution</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={riskData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis stroke="#666" />
                    <YAxis stroke="#666" />
                    <Tooltip contentStyle={{ backgroundColor: "#1a1a1a", border: "1px solid #333" }} />
                    <Bar dataKey="count" fill="#00d9ff" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-card rounded-lg border border-border p-4">
                <p className="text-muted-foreground text-sm">Total Transactions</p>
                <p className="text-2xl font-bold text-foreground mt-2">11,450</p>
                <p className="text-[#00ff88] text-xs mt-2">+5.2% from last month</p>
              </div>
              <div className="bg-card rounded-lg border border-border p-4">
                <p className="text-muted-foreground text-sm">Compliance Rate</p>
                <p className="text-2xl font-bold text-[#00ff88] mt-2">99%</p>
                <p className="text-[#00ff88] text-xs mt-2">+2.1% from last month</p>
              </div>
              <div className="bg-card rounded-lg border border-border p-4">
                <p className="text-muted-foreground text-sm">Alerts Generated</p>
                <p className="text-2xl font-bold text-[#ff6b35] mt-2">234</p>
                <p className="text-[#ff6b35] text-xs mt-2">-12.3% from last month</p>
              </div>
              <div className="bg-card rounded-lg border border-border p-4">
                <p className="text-muted-foreground text-sm">Cases Resolved</p>
                <p className="text-2xl font-bold text-[#00d9ff] mt-2">189</p>
                <p className="text-[#00ff88] text-xs mt-2">+8.7% from last month</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
