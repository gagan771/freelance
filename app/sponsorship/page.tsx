"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Wallet, Users, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SponsorshipOption } from "@/components/SponsorshipOption"

export default function SponsorshipPage() {
  const router = useRouter()
  const [selected, setSelected] = useState<string>()

  const options = [
    {
      id: "self",
      title: "I'll pay for myself",
      description: "I will be responsible for my own expenses",
      icon: <Wallet className="w-8 h-8" />
    },
    {
      id: "group",
      title: "I'll pay for everyone",
      description: "I will cover expenses for the entire group",
      icon: <Users className="w-8 h-8" />
    },
    {
      id: "sponsored",
      title: "Someone else will pay for me",
      description: "Another person will sponsor my expenses",
      icon: <UserPlus className="w-8 h-8" />
    }
  ]

  const handleContinue = () => {
    if (selected) {
      router.push("/employment-status")
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto p-6 py-12">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Who will be sponsoring this trip?
          </h1>
          <p className="text-xl text-gray-600">
            Documents required vary basis your persona
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {options.map((option) => (
            <SponsorshipOption
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