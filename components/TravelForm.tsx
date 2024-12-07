"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Calendar, Minus, Plus } from "lucide-react"
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

export function TravelForm() {
  const router = useRouter()
  const [travelers, setTravelers] = useState(1)
  const [paymentType, setPaymentType] = useState("now")
  const [travelDate, setTravelDate] = useState<Date>()
  const [hasTraveledBefore, setHasTraveledBefore] = useState<string>()

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
    <Card className="w-full max-w-lg p-6 space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-center">Travel Booking</h2>
        
        <div className="space-y-2">
          <Label>Number of Travelers</Label>
          <div className="flex items-center justify-between bg-secondary p-3 rounded-md">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTravelers(Math.max(1, travelers - 1))}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="text-xl font-semibold">{travelers}</span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTravelers(travelers + 1)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Travel Date</Label>
          <DatePicker date={travelDate} setDate={setTravelDate} />
        </div>

        <div className="space-y-2">
          <Label>Payment Option</Label>
          <RadioGroup
            defaultValue="now"
            onValueChange={setPaymentType}
            className="flex space-x-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="now" id="now" />
              <Label htmlFor="now">Pay Now</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="later" id="later" />
              <Label htmlFor="later">Pay Later</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="py-4 border-t">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">Total Amount:</span>
            <span className="text-2xl font-bold">${totalAmount}</span>
          </div>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full" size="lg">
              Start Application
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Travel Experience</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <p>Have you traveled with us before?</p>
              <RadioGroup
                onValueChange={setHasTraveledBefore}
                className="space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no">No</Label>
                </div>
              </RadioGroup>
              <Button 
                className="w-full"
                onClick={handleStartApplication}
              >
                Continue
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </Card>
  )
}