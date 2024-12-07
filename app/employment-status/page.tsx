"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Briefcase, Building2, UserCog, UserX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EmploymentStatusOption } from "@/components/EmploymentStatusOption"

export default function EmploymentStatusPage() {
  const router = useRouter()
  const [selected, setSelected] = useState<string>()

  const options = [
    {
      id: "independent",
      title: "I work independently",
      description: "Self-employed as a proprietor",
      icon: <UserCog className="w-8 h-8" />
    },
    {
      id: "business-owner",
      title: "I run a business",
      description: "Owner of a registered company",
      icon: <Building2 className="w-8 h-8" />
    },
    {
      id: "employed",
      title: "I am employed",
      description: "Working for an organization",
      icon: <Briefcase className="w-8 h-8" />
    },
    {
      id: "unemployed",
      title: "I am unemployed",
      description: "Currently not working",
      icon: <UserX className="w-8 h-8" />
    }
  ]

  const handleContinue = () => {
    if (selected) {
      // Add the next route here when ready
      console.log("Selected:", selected)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="max-w-4xl mx-auto p-6 py-12">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            What is your employment status?
          </h1>
          <p className="text-xl text-gray-600">
            Documents required vary basis your persona
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {options.map((option) => (
            <EmploymentStatusOption
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