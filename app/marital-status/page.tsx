"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { User, Users, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MaritalStatusOption } from "@/components/MaritalStatusOption"

export default function MaritalStatusPage() {
  const router = useRouter()
  const [selected, setSelected] = useState<string>()

  const options = [
    {
      id: "single",
      title: "Single",
      description: "I am not married",
      icon: <User className="w-8 h-8" />
    },
    {
      id: "married",
      title: "Married",
      description: "I am married without children",
      icon: <Heart className="w-8 h-8" />
    },
    {
      id: "married-with-children",
      title: "Married with Children",
      description: "I am married and have children",
      icon: <Users className="w-8 h-8" />
    }
  ]

  const handleContinue = () => {
    if (selected) {
      router.push("/sponsorship")
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="max-w-4xl mx-auto p-6 py-12">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            What is your marital status?
          </h1>
          <p className="text-xl text-gray-600">
            Documents required vary basis your persona
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {options.map((option) => (
            <MaritalStatusOption
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