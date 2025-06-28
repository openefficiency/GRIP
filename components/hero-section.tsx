import React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Mic, Star } from "lucide-react"

interface HeroSectionProps {
  badge?: {
    icon?: React.ReactNode
    text: string
  }
  title: string
  subtitle?: string
  description: string
  primaryButton?: {
    text: string
    onClick?: () => void
    href?: string
  }
  secondaryButton?: {
    text: string
    onClick?: () => void
    href?: string
  }
  trustIndicator?: {
    rating?: number
    text: string
  }
  className?: string
}

export function HeroSection({
  badge = { icon: <Mic className="w-4 h-4 mr-2" />, text: "AI-Powered Listening" },
  title,
  subtitle,
  description,
  primaryButton = { text: "Get Started" },
  secondaryButton = { text: "Watch Demo" },
  trustIndicator = { rating: 5, text: "Trusted by 10,000+ businesses worldwide" },
  className = ""
}: HeroSectionProps) {
  const handleButtonClick = (button: { onClick?: () => void; href?: string }) => {
    if (button.onClick) {
      button.onClick()
    } else if (button.href) {
      window.open(button.href, '_blank')
    }
  }

  return (
    <div className={`space-y-8 ${className}`}>
      <div className="space-y-4">
        <Badge variant="secondary" className="w-fit">
          {badge.icon}
          {badge.text}
        </Badge>
        
        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
          {title}
          {subtitle && (
            <span className="block text-blue-600 dark:text-blue-400">{subtitle}</span>
          )}
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-lg">
          {description}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          size="lg" 
          className="text-lg px-8"
          onClick={() => handleButtonClick(primaryButton)}
        >
          {primaryButton.text}
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        
        {secondaryButton && (
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 bg-transparent"
            onClick={() => handleButtonClick(secondaryButton)}
          >
            {secondaryButton.text}
          </Button>
        )}
      </div>

      {trustIndicator && (
        <div className="flex items-center gap-6 pt-4">
          {trustIndicator.rating && (
            <div className="flex items-center gap-1">
              {[...Array(trustIndicator.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          )}
          <p className="text-sm text-muted-foreground">{trustIndicator.text}</p>
        </div>
      )}
    </div>
  )
}