"use client"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface SponsorshipOptionProps {
  title: string
  description: string
  icon: React.ReactNode
  isSelected?: boolean
  onClick: () => void
}

export function SponsorshipOption({ 
  title, 
  description, 
  icon, 
  isSelected, 
  onClick 
}: SponsorshipOptionProps) {
  return (
    <Card
      className={cn(
        "relative p-6 cursor-pointer transition-all duration-200 hover:scale-105",
        "border-2",
        isSelected 
          ? "border-blue-500 bg-blue-50" 
          : "hover:border-blue-200"
      )}
      onClick={onClick}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-blue-500 text-white">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Card>
  )
}