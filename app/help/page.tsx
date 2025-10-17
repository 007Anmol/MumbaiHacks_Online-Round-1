"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidebar"
import { ChevronDown, Search, BookOpen, MessageSquare, FileText } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function HelpPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const faqs = [
    {
      id: 1,
      question: "How do I set up a new AI agent?",
      answer:
        "To set up a new AI agent, navigate to the Agents page and click 'New Agent'. Follow the configuration wizard to select the agent type, set parameters, and deploy.",
    },
    {
      id: 2,
      question: "What is the difference between high and medium risk alerts?",
      answer:
        "High-risk alerts indicate transactions that match multiple suspicious patterns or involve sanctioned entities. Medium-risk alerts are for transactions with some concerning characteristics but require further investigation.",
    },
    {
      id: 3,
      question: "How often are compliance reports generated?",
      answer:
        "Compliance reports are generated daily at 2 AM IST. You can also generate custom reports on-demand from the Reports page.",
    },
    {
      id: 4,
      question: "Can I export transaction data?",
      answer:
        "Yes, you can export transaction data in CSV or Excel format from the Reports page. Select your date range and click 'Export Report'.",
    },
    {
      id: 5,
      question: "How do I manage team member permissions?",
      answer:
        "Go to Settings > Team to manage team members. You can assign roles (Admin, Analyst, Viewer) and modify permissions for each user.",
    },
  ]

  const resources = [
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Complete guide to using the AML monitoring system",
      link: "#",
    },
    {
      icon: FileText,
      title: "API Reference",
      description: "Technical documentation for API integration",
      link: "#",
    },
    {
      icon: MessageSquare,
      title: "Support",
      description: "Contact our support team for assistance",
      link: "#",
    },
  ]

  return (
    <div className="flex h-screen bg-background">
      <Sidebar open={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        <main className="flex-1 overflow-auto">
          <div className="p-6 space-y-8">
            {/* Header */}
            <div className="text-center">
              <h1 className="text-3xl font-bold text-foreground">Help & Documentation</h1>
              <p className="text-muted-foreground mt-2">Find answers and learn how to use the AML monitoring system</p>
            </div>

            {/* Search */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  placeholder="Search help articles..."
                  className="pl-10 bg-card border-border text-foreground placeholder:text-muted-foreground h-12"
                />
              </div>
            </div>

            {/* Resources */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {resources.map((resource) => {
                const Icon = resource.icon
                return (
                  <a
                    key={resource.title}
                    href={resource.link}
                    className="bg-card rounded-lg border border-border p-6 hover:border-[#00d9ff] transition-colors group"
                  >
                    <Icon className="text-[#00d9ff] mb-4 group-hover:text-[#00ff88] transition-colors" size={32} />
                    <h3 className="text-lg font-semibold text-foreground mb-2">{resource.title}</h3>
                    <p className="text-muted-foreground text-sm">{resource.description}</p>
                  </a>
                )
              })}
            </div>

            {/* FAQs */}
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {faqs.map((faq) => (
                  <div key={faq.id} className="bg-card rounded-lg border border-border overflow-hidden">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                      className="w-full px-6 py-4 flex items-center justify-between hover:bg-background/50 transition-colors"
                    >
                      <span className="text-foreground font-medium text-left">{faq.question}</span>
                      <ChevronDown
                        size={20}
                        className={`text-[#00d9ff] transition-transform ${expandedFaq === faq.id ? "rotate-180" : ""}`}
                      />
                    </button>
                    {expandedFaq === faq.id && (
                      <div className="px-6 py-4 border-t border-border bg-background/50">
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
