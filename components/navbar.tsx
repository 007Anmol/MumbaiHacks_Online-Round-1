"use client"

import { Menu, Search, Bell, Settings, User, LogOut } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function Navbar({ onMenuClick }: { onMenuClick: () => void }) {
  const [notificationCount] = useState(3)
  const [showUserMenu, setShowUserMenu] = useState(false)

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-40">
      <div className="px-6 py-4 flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="p-2 hover:bg-secondary rounded-lg transition-colors"
            aria-label="Toggle sidebar"
          >
            <Menu size={20} className="text-foreground" />
          </button>

          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-secondary rounded-lg px-3 py-2 w-64">
            <Search size={18} className="text-muted-foreground" />
            <input
              type="text"
              placeholder="Search transactions, entities..."
              className="bg-transparent ml-2 outline-none text-foreground placeholder-muted-foreground w-full"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <button className="relative p-2 hover:bg-secondary rounded-lg transition-colors" aria-label="Notifications">
            <Bell size={20} className="text-foreground" />
            {notificationCount > 0 && (
              <span className="absolute top-1 right-1 bg-[#ff4444] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {notificationCount}
              </span>
            )}
          </button>

          {/* Settings Link */}
          <Link href="/settings" className="p-2 hover:bg-secondary rounded-lg transition-colors" aria-label="Settings">
            <Settings size={20} className="text-foreground" />
          </Link>

          {/* User Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-2 p-2 hover:bg-secondary rounded-lg transition-colors"
            >
              <div className="w-8 h-8 bg-[#00d9ff] rounded-full flex items-center justify-center">
                <User size={16} className="text-background" />
              </div>
              <span className="text-sm font-medium text-foreground hidden sm:inline">Admin</span>
            </button>

            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg z-50">
                <Link
                  href="/settings"
                  className="flex items-center gap-2 px-4 py-2 text-foreground hover:bg-secondary transition-colors border-b border-border"
                >
                  <Settings size={16} />
                  Settings
                </Link>
                <button
                  onClick={() => (window.location.href = "/login")}
                  className="w-full flex items-center gap-2 px-4 py-2 text-[#ff6b35] hover:bg-secondary transition-colors"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
