"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search, Edit2, Trash2, Shield } from "lucide-react"

export default function UsersPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")

  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@aml.com",
      role: "Admin",
      status: "active",
      lastLogin: "2 minutes ago",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@aml.com",
      role: "Analyst",
      status: "active",
      lastLogin: "1 hour ago",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@aml.com",
      role: "Viewer",
      status: "active",
      lastLogin: "3 hours ago",
    },
    {
      id: 4,
      name: "Sarah Williams",
      email: "sarah@aml.com",
      role: "Analyst",
      status: "inactive",
      lastLogin: "2 days ago",
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
                <h1 className="text-3xl font-bold text-foreground">User Management</h1>
                <p className="text-muted-foreground mt-1">Manage team members and their permissions</p>
              </div>
              <Button className="bg-gradient-to-r from-[#00d9ff] to-[#00ff88] text-background font-semibold hover:shadow-lg hover:shadow-[#00d9ff]/50">
                <Plus size={18} className="mr-2" />
                Add User
              </Button>
            </div>

            {/* Search */}
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  placeholder="Search users..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-card border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>
            </div>

            {/* Users Table */}
            <div className="bg-card rounded-lg border border-border overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-background/50">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Email</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Role</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Last Login</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b border-border hover:bg-background/50 transition-colors">
                      <td className="px-6 py-4 text-foreground font-medium">{user.name}</td>
                      <td className="px-6 py-4 text-muted-foreground">{user.email}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-[#00d9ff]/20 text-[#00d9ff]">
                          <Shield size={12} />
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                            user.status === "active" ? "bg-[#00ff88]/20 text-[#00ff88]" : "bg-[#666]/20 text-[#999]"
                          }`}
                        >
                          {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-muted-foreground text-sm">{user.lastLogin}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button className="p-2 hover:bg-background rounded transition-colors text-muted-foreground hover:text-foreground">
                            <Edit2 size={16} />
                          </button>
                          <button className="p-2 hover:bg-background rounded transition-colors text-muted-foreground hover:text-[#ff4444]">
                            <Trash2 size={16} />
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
