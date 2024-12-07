"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Minus, Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DatePicker } from "@/components/ui/date-picker"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { GradientBackground } from "@/components/ui/gradient-background"

export function TravelForm() {
  const router = useRouter()
  const [travelers, setTravelers] = useState(1)
  const [paymentType, setPaymentType] = useState("now")
  const [travelDate, setTravelDate] = useState<Date | undefined>(undefined)
  const [hasTraveledBefore, setHasTraveledBefore] = useState<string | undefined>(undefined)

  const basePrice = 1000
  const totalAmount = travelers * basePrice

  const handleStartApplication = () => {
    if (!travelDate) {
      alert("Please select a travel date")
      return
    }
    if (!hasTraveledBefore) {
      alert("Please select if you have traveled before")
      return
    }
    router.push("/roadmap")
  }

  return (
    <GradientBackground>
      <Card className="w-full max-w-lg p-8 space-y-8 bg-white/10 backdrop-blur-md border-white/20 shadow-xl">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center text-white">Travel Booking</h2>
          
          <div className="space-y-4">
            <Label htmlFor="travelers" className="text-white">Number of Travelers</Label>
            <div className="flex items-center justify-between bg-white/20 p-3 rounded-md">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setTravelers(Math.max(1, travelers - 1))}
                className="bg-white/50 hover:bg-white/70 transition-colors"
                aria-label="Decrease number of travelers"
              >
                <Minus className="h-4 w-4 text-purple-700" />
              </Button>
              <span id="travelers" className="text-2xl font-semibold text-white">{travelers}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setTravelers(travelers + 1)}
                className="bg-white/50 hover:bg-white/70 transition-colors"
                aria-label="Increase number of travelers"
              >
                <Plus className="h-4 w-4 text-purple-700" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <Label htmlFor="travel-date" className="text-white">Travel Date</Label>
            <DatePicker id="travel-date" date={travelDate} setDate={setTravelDate} />
          </div>

          <div className="space-y-4">
            <Label className="text-white">Payment Option</Label>
            <RadioGroup
              defaultValue="now"
              onValueChange={setPaymentType}
              className="flex space-x-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="now" id="pay-now" className="border-white text-white" />
                <Label htmlFor="pay-now" className="text-white">Pay Now</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="later" id="pay-later" className="border-white text-white" />
                <Label htmlFor="pay-later" className="text-white">Pay Later</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="py-6 border-t border-white/20">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-white">Total Amount:</span>
              <span className="text-3xl font-bold text-white">${totalAmount.toLocaleString()}</span>
            </div>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-colors" size="lg">
                Start Application
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-white/90 backdrop-blur-md">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-purple-700">Travel Experience</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <p className="text-gray-700">Have you traveled with us before?</p>
                <RadioGroup
                  onValueChange={setHasTraveledBefore}
                  className="space-y-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="traveled-yes" />
                    <Label htmlFor="traveled-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="traveled-no" />
                    <Label htmlFor="traveled-no">No</Label>
                  </div>
                </RadioGroup>
                <Button 
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-colors"
                  onClick={handleStartApplication}
                >
                  Continue
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </Card>
    </GradientBackground>
  )
}

export default TravelForm