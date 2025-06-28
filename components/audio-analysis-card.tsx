import React from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface MetricBar {
  width: string
  gradient: string
}

interface AudioAnalysisCardProps {
  title?: string
  status?: {
    text: string
    variant?: "default" | "secondary" | "destructive" | "outline"
  }
  metrics?: MetricBar[]
  accuracyText?: string
  className?: string
  animated?: boolean
}

export function AudioAnalysisCard({
  title = "AI Listening Active",
  status = { text: "Active", variant: "secondary" },
  metrics = [
    { width: "75%", gradient: "from-green-400 to-blue-400" },
    { width: "60%", gradient: "from-blue-400 to-purple-400" },
    { width: "85%", gradient: "from-purple-400 to-pink-400" }
  ],
  accuracyText = "Processing audio with 99.7% accuracy",
  className = "",
  animated = true
}: AudioAnalysisCardProps) {
  return (
    <div className={`relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 shadow-2xl ${className}`}>
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 space-y-4">
        <div className="flex items-center gap-3">
          <div className={`w-3 h-3 bg-green-400 rounded-full ${animated ? 'animate-pulse' : ''}`}></div>
          <span className="text-white font-medium">{title}</span>
          {status && (
            <Badge variant={status.variant} className="ml-auto">
              {status.text}
            </Badge>
          )}
        </div>
        
        <div className="space-y-2">
          {metrics.map((metric, index) => (
            <div key={index} className="h-2 bg-white/20 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${metric.gradient} rounded-full ${animated ? 'animate-pulse' : ''}`}
                style={{ width: metric.width }}
              ></div>
            </div>
          ))}
        </div>
        
        <p className="text-white/80 text-sm">{accuracyText}</p>
      </div>
    </div>
  )
}