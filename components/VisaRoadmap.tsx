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
    <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-800 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto p-4 bg-white/90 rounded-lg shadow-lg space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold text-gray-900">Here's your Georgia visa roadmap</h1>
          <p className="text-gray-700 text-sm">Follow these steps to get your visa</p>
        </div>

        <div className="grid gap-3">
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
          className="w-full max-w-md mx-auto block mt-6"
          onClick={() => router.push("/travel-history")}
        >
          Get Started
        </Button>
      </div>
    </div>
  )
}
