"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search, Edit2, Play, Pause, MoreVertical } from "lucide-react"

export default function AgentsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")

  const agents = [
    {
      id: 1,
      name: "KYC Verification Agent",
      status: "active",
      transactions: 2450,
      accuracy: "98.5%",
      lastRun: "2 minutes ago",
    },
    {
      id: 2,
      name: "Transaction Monitoring Agent",
      status: "active",
      transactions: 5890,
      accuracy: "97.2%",
      lastRun: "5 minutes ago",
    },
    {
      id: 3,
      name: "Risk Assessment Agent",
      status: "paused",
      transactions: 1230,
      accuracy: "96.8%",
      lastRun: "1 hour ago",
    },
    {
      id: 4,
      name: "Sanctions Screening Agent",
      status: "active",
      transactions: 3450,
      accuracy: "99.1%",
      lastRun: "1 minute ago",
    },
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
                <h1 className="text-3xl font-bold text-foreground">AI Agents</h1>
                <p className="text-muted-foreground mt-1">Manage and monitor your AML monitoring agents</p>
              </div>
              <Button className="bg-gradient-to-r from-[#00d9ff] to-[#00ff88] text-background font-semibold hover:shadow-lg hover:shadow-[#00d9ff]/50">
                <Plus size={18} className="mr-2" />
                New Agent
              </Button>
            </div>

            {/* Search and Filter */}
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  placeholder="Search agents..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-card border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>
            </div>

            {/* Agents Table */}
            <div className="bg-card rounded-lg border border-border overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-background/50">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Agent Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Transactions</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Accuracy</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Last Run</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {agents.map((agent) => (
                    <tr key={agent.id} className="border-b border-border hover:bg-background/50 transition-colors">
                      <td className="px-6 py-4 text-foreground font-medium">{agent.name}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                            agent.status === "active"
                              ? "bg-[#00ff88]/20 text-[#00ff88]"
                              : "bg-[#ff6b35]/20 text-[#ff6b35]"
                          }`}
                        >
                          {agent.status === "active" ? (
                            <Play size={12} className="mr-1" />
                          ) : (
                            <Pause size={12} className="mr-1" />
                          )}
                          {agent.status.charAt(0).toUpperCase() + agent.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">{agent.transactions.toLocaleString()}</td>
                      <td className="px-6 py-4 text-[#00ff88] font-semibold">{agent.accuracy}</td>
                      <td className="px-6 py-4 text-muted-foreground text-sm">{agent.lastRun}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button className="p-2 hover:bg-background rounded transition-colors text-muted-foreground hover:text-foreground">
                            <Edit2 size={16} />
                          </button>
                          <button className="p-2 hover:bg-background rounded transition-colors text-muted-foreground hover:text-foreground">
                            <MoreVertical size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
