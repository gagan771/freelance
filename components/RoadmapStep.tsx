"use client"

import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

interface RoadmapStepProps {
  title: string
  isActive?: boolean
  isCompleted?: boolean
  number: number
}

export function RoadmapStep({ title, isActive, isCompleted, number }: RoadmapStepProps) {
  return (
    <Card className={cn(
      "p-6 transition-all duration-200",
      isActive && "border-blue-500 shadow-lg",
      isCompleted && "bg-blue-50"
    )}>
      <div className="flex items-start gap-4">
        <div className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold",
          isActive && "bg-blue-500 text-white",
          isCompleted ? "bg-green-500 text-white" : "bg-gray-100"
        )}>
          {isCompleted ? <CheckCircle className="w-5 h-5" /> : number}
        </div>
        <div>
          <h3 className={cn(
            "font-semibold",
            isActive && "text-blue-500"
          )}>{title}</h3>
        </div>
      </div>
    </Card>
  )
}