"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Save, Bell, Lock, Users, Zap } from "lucide-react"

export default function SettingsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState("general")

  const tabs = [
    { id: "general", label: "General", icon: Zap },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Lock },
    { id: "team", label: "Team", icon: Users },
  ]

  return (
    <div className="flex h-screen bg-background">
      <Sidebar open={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        <main className="flex-1 overflow-auto">
          <div className="p-6 space-y-6">
            {/* Header */}
            <div>
              <h1 className="text-3xl font-bold text-foreground">Settings</h1>
              <p className="text-muted-foreground mt-1">Manage your account and system preferences</p>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 border-b border-border">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
                      activeTab === tab.id
                        ? "border-[#00d9ff] text-[#00d9ff]"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon size={18} />
                    {tab.label}
                  </button>
                )
              })}
            </div>

            {/* Content */}
            <div className="max-w-2xl space-y-6">
              {activeTab === "general" && (
                <div className="space-y-6">
                  <div className="bg-card rounded-lg border border-border p-6 space-y-4">
                    <h2 className="text-lg font-semibold text-foreground">Organization Settings</h2>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Organization Name</label>
                      <Input
                        defaultValue="India AML Compliance"
                        className="bg-background border-border text-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                      <Input
                        type="email"
                        defaultValue="admin@aml.com"
                        className="bg-background border-border text-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Timezone</label>
                      <select className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground">
                        <option>IST (Indian Standard Time)</option>
                        <option>UTC</option>
                        <option>EST</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "notifications" && (
                <div className="space-y-6">
                  <div className="bg-card rounded-lg border border-border p-6 space-y-4">
                    <h2 className="text-lg font-semibold text-foreground">Notification Preferences</h2>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-foreground font-medium">High Risk Alerts</p>
                        <p className="text-muted-foreground text-sm">Get notified for high-risk transactions</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-foreground font-medium">Daily Reports</p>
                        <p className="text-muted-foreground text-sm">Receive daily compliance reports</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-foreground font-medium">System Updates</p>
                        <p className="text-muted-foreground text-sm">Get notified about system updates</p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "security" && (
                <div className="space-y-6">
                  <div className="bg-card rounded-lg border border-border p-6 space-y-4">
                    <h2 className="text-lg font-semibold text-foreground">Security Settings</h2>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Current Password</label>
                      <Input type="password" className="bg-background border-border text-foreground" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">New Password</label>
                      <Input type="password" className="bg-background border-border text-foreground" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Confirm Password</label>
                      <Input type="password" className="bg-background border-border text-foreground" />
                    </div>
                    <Button className="bg-gradient-to-r from-[#00d9ff] to-[#00ff88] text-background font-semibold">
                      Update Password
                    </Button>
                  </div>
                </div>
              )}

              {activeTab === "team" && (
                <div className="space-y-6">
                  <div className="bg-card rounded-lg border border-border p-6 space-y-4">
                    <h2 className="text-lg font-semibold text-foreground">Team Members</h2>
                    <div className="space-y-3">
                      {[
                        { name: "John Doe", email: "john@aml.com", role: "Admin" },
                        { name: "Jane Smith", email: "jane@aml.com", role: "Analyst" },
                        { name: "Mike Johnson", email: "mike@aml.com", role: "Viewer" },
                      ].map((member) => (
                        <div key={member.email} className="flex items-center justify-between p-3 bg-background rounded">
                          <div>
                            <p className="text-foreground font-medium">{member.name}</p>
                            <p className="text-muted-foreground text-sm">{member.email}</p>
                          </div>
                          <span className="text-[#00d9ff] text-sm font-medium">{member.role}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="bg-gradient-to-r from-[#00d9ff] to-[#00ff88] text-background font-semibold w-full">
                      Add Team Member
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Save Button */}
            <Button className="bg-gradient-to-r from-[#00d9ff] to-[#00ff88] text-background font-semibold">
              <Save size={18} className="mr-2" />
              Save Changes
            </Button>
          </div>
        </main>
      </div>
    </div>
  )
}
