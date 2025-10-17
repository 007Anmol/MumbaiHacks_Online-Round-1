"use client"

import { LayoutDashboard, Users, BarChart3, Settings, ChevronLeft, Zap, HelpCircle, LogOut } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: Zap, label: "AI Agents", href: "/agents" },
  { icon: BarChart3, label: "Reports", href: "/reports" },
  { icon: Users, label: "User Management", href: "/users" },
  { icon: Settings, label: "Settings", href: "/settings" },
  { icon: HelpCircle, label: "Help", href: "/help" },
]

export default function Sidebar({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  const [showLogout, setShowLogout] = useState(false)

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`bg-card border-r border-border transition-all duration-300 flex flex-col ${open ? "w-64" : "w-20"}`}
      >
        {/* Header */}
        <div className="p-4 border-b border-border flex items-center justify-between">
          {open && <h2 className="text-lg font-bold neon-text-blue">AML Agent</h2>}
          <button
            onClick={onToggle}
            className="p-1 hover:bg-secondary rounded-lg transition-colors"
            aria-label="Toggle sidebar"
          >
            <ChevronLeft size={20} className="text-foreground" />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-secondary transition-colors group"
              title={!open ? item.label : ""}
            >
              <item.icon size={20} className="text-[#00d9ff] flex-shrink-0" />
              {open && (
                <span className="text-sm font-medium text-foreground group-hover:text-[#00d9ff]">{item.label}</span>
              )}
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-border space-y-2">
          <button
            onClick={() => setShowLogout(!showLogout)}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-secondary transition-colors group text-left"
          >
            <LogOut size={20} className="text-[#ff6b35] flex-shrink-0" />
            {open && <span className="text-sm font-medium text-foreground group-hover:text-[#ff6b35]">Logout</span>}
          </button>
          <div className="text-xs text-muted-foreground text-center">{open ? "v1.0.0" : "v1"}</div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {open && <div className="fixed inset-0 bg-black/50 md:hidden z-30" onClick={onToggle} />}
    </>
  )
}
