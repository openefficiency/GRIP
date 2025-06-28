import React from "react"
import { HeroSection, AudioAnalysisCard, LiveAnalysisCard } from "@/components"
import { Mic, Zap } from "lucide-react"

// Example usage of the extracted components
export function ComponentExamples() {
  return (
    <div className="space-y-12 p-8">
      {/* Hero Section Example */}
      <section className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <HeroSection
            badge={{ icon: <Mic className="w-4 h-4 mr-2" />, text: "AI-Powered Technology" }}
            title="Your Product Name"
            subtitle="Innovative Solution"
            description="Transform your business with cutting-edge AI technology that delivers unprecedented results and user experience."
            primaryButton={{ 
              text: "Get Started", 
              onClick: () => console.log("Primary button clicked") 
            }}
            secondaryButton={{ 
              text: "Learn More", 
              onClick: () => console.log("Secondary button clicked") 
            }}
            trustIndicator={{ 
              rating: 5, 
              text: "Trusted by 5,000+ companies worldwide" 
            }}
          />
          
          <AudioAnalysisCard
            title="AI Processing Active"
            status={{ text: "Live", variant: "secondary" }}
            metrics={[
              { width: "80%", gradient: "from-green-400 to-blue-400" },
              { width: "65%", gradient: "from-blue-400 to-purple-400" },
              { width: "90%", gradient: "from-purple-400 to-pink-400" }
            ]}
            accuracyText="Processing data with 98.5% accuracy"
            animated={true}
          />
        </div>
      </section>

      {/* Alternative Layout Example */}
      <section className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          <HeroSection
            badge={{ icon: <Zap className="w-4 h-4 mr-2" />, text: "Lightning Fast" }}
            title="Another Use Case"
            description="Showcase different configurations and use cases for maximum flexibility."
            primaryButton={{ text: "Try Now" }}
            trustIndicator={{ text: "Used by industry leaders" }}
            className="lg:order-2"
          />
          
          <LiveAnalysisCard
            title="Real-time Analytics"
            status="Processing"
            metrics={[
              { label: "Performance Score", value: "94.2%", progress: 94, color: "bg-blue-500" },
              { label: "Efficiency Rate", value: "89.7%", progress: 90, color: "bg-green-500" },
              { label: "Quality Index", value: "96.1%", progress: 96, color: "bg-purple-500" }
            ]}
            processingText="Analyzing 2.5M data points per second"
            className="lg:order-1"
          />
        </div>
      </section>
    </div>
  )
}