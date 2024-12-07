"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Plane, Globe2, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TravelHistoryOption } from "@/components/TravelHistoryOption"

export default function TravelHistoryPage() {
  const router = useRouter()
  const [selected, setSelected] = useState<string>()

  const options = [
    {
      id: "frequent",
      title: "Frequent Traveler",
      description: "I travel internationally multiple times a year",
      icon: <Plane className="w-8 h-8" />
    },
    {
      id: "occasional",
      title: "Occasional Traveler",
      description: "I've traveled internationally a few times",
      icon: <Globe2 className="w-8 h-8" />
    },
    {
      id: "new",
      title: "New Traveler",
      description: "This will be my first international trip",
      icon: <MapPin className="w-8 h-8" />
    }
  ]

  const handleContinue = () => {
    if (selected) {
      // Navigate to the marital status page
      router.push("/marital-status")
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-4xl mx-auto p-6 py-12">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            What is your travel history like?
          </h1>
          <p className="text-xl text-gray-600">
            Documents required vary basis your persona
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {options.map((option) => (
            <TravelHistoryOption
              key={option.id}
              title={option.title}
              description={option.description}
              icon={option.icon}
              isSelected={selected === option.id}
              onClick={() => setSelected(option.id)}
            />
          ))}
        </div>

        <Button
          size="lg"
          className="w-full max-w-md mx-auto block"
          disabled={!selected}
          onClick={handleContinue}
        >
          Continue
        </Button>
      </div>
    </main>
  )
}