import React from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface AnalysisMetric {
  label: string
  value: string
  progress: number
  color: string
}

interface LiveAnalysisCardProps {
  title?: string
  status?: string
  metrics?: AnalysisMetric[]
  processingText?: string
  className?: string
}

export function LiveAnalysisCard({
  title = "Live Audio Analysis",
  status = "Active",
  metrics = [
    { label: "Sentiment Score", value: "+0.85", progress: 85, color: "bg-green-500" },
    { label: "Confidence Level", value: "97.3%", progress: 97, color: "bg-blue-500" }
  ],
  processingText = "Processing 1.2M audio samples per second",
  className = ""
}: LiveAnalysisCardProps) {
  return (
    <Card className={`p-6 shadow-xl ${className}`}>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold">{title}</h4>
          <Badge variant="secondary">{status}</Badge>
        </div>
        
        <div className="space-y-3">
          {metrics.map((metric, index) => (
            <div key={index}>
              <div className="flex justify-between items-center">
                <span className="text-sm">{metric.label}</span>
                <span className={`text-sm font-medium ${metric.label.includes('Sentiment') ? 'text-green-600' : ''}`}>
                  {metric.value}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                <div 
                  className={`${metric.color} h-2 rounded-full transition-all duration-500`}
                  style={{ width: `${metric.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="pt-2 text-xs text-muted-foreground">
          {processingText}
        </div>
      </div>
    </Card>
  )
}