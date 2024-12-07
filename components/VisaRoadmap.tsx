"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { RoadmapStep } from "@/components/RoadmapStep"

export function VisaRoadmap() {
  const router = useRouter()
  const steps = [
    { title: "You are here!", isActive: true },
    { title: "Submit your documents" },
    { title: "Atlys reviews your documents" },
    { title: "We submit to government" },
    { title: "Track your visa status" },
    { title: "Get your visa on time" }
  ]

  return (
    <div className="w-full max-w-3xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Here's your Georgia visa roadmap</h1>
        <p className="text-gray-600">Follow these steps to get your visa</p>
      </div>

      <div className="grid gap-4">
        {steps.map((step, index) => (
          <RoadmapStep
            key={index}
            number={index + 1}
            title={step.title}
            isActive={step.isActive}
            isCompleted={index === 0}
          />
        ))}
      </div>

      <Button 
        size="lg" 
        className="w-full max-w-md mx-auto block mt-8"
        onClick={() => router.push("/travel-history")}
      >
        Get Started
      </Button>
    </div>
  )
}