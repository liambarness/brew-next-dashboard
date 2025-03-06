"use client"

import { useState } from "react"
import { Coffee, MapPin, Send, Navigation2 } from "lucide-react"
import Image from "next/image"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import pfp from "@/public/profile.svg"

export default function EmployeeDashboard() {
  const [currentTime] = useState(new Date())
  const canSubmitReport = currentTime.getHours() >= 16 // 4 PM

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-blue-100">
      <div className="container mx-auto p-4 space-y-6">
        {/* Employee Profile Section */}
        <Card className="bg-white bg-opacity-90">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-muted flex items-center justify-center">
                                          <Image
                                              src={pfp}
                                              alt="Placehloder"
                                              width={32}
                                              height={32}
                                              className="max-h-full max-w-full" // Will ensure it fits within the container
                                          />
                                      </div>
              <div>
                <h1 className="text-2xl font-bold text-amber-900">Emma Smith</h1>
                <p className="text-amber-700">Beach Coffee Cart Operator</p>
              </div>
            </div>
          </CardContent>
        </Card>

       

        {/* Location Section */}
        <Card className="bg-white bg-opacity-90">
          <CardHeader>
            <CardTitle className="text-amber-900">Today's Location</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-amber-600" />
                <span className="text-lg text-amber-900">North Wildwood</span>
              </div>
              <div className="bg-blue-100 px-3 py-1 rounded-full">
                <span className="text-blue-800">Zone 1</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Final Report Section */}
        <Card className="bg-white bg-opacity-90">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-amber-900">Final Report</CardTitle>
            <span className="text-sm text-gray-500">{format(new Date(), "h:mm a")}</span>
          </CardHeader>
          <CardContent className="space-y-6">
            {!canSubmitReport && (
              <Alert variant="destructive" className="bg-red-50 text-red-800 border-red-200">
                <AlertDescription>Reports can only be submitted after 4:00 PM EST</AlertDescription>
              </Alert>
            )}

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm text-amber-800 block mb-2">Square Cups</label>
                <Input type="number" placeholder="0" className="bg-amber-50 border-amber-200" />
              </div>
              <div>
                <label className="text-sm text-amber-800 block mb-2">Cash Cups</label>
                <Input type="number" placeholder="0" className="bg-amber-50 border-amber-200" />
              </div>
              <div>
                <label className="text-sm text-amber-800 block mb-2">Comp Cups</label>
                <Input type="number" placeholder="0" className="bg-amber-50 border-amber-200" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-amber-800 block mb-2">Cups Given</label>
                <Input type="number" placeholder="0" className="bg-amber-50 border-amber-200" />
              </div>
              <div>
                <label className="text-sm text-amber-800 block mb-2">Cups Returned</label>
                <Input type="number" placeholder="0" className="bg-amber-50 border-amber-200" />
              </div>
            </div>

            <div>
              <label className="text-sm text-amber-800 block mb-2">Additional Notes</label>
              <Textarea
                placeholder="Any special notes about today's sales..."
                className="bg-amber-50 border-amber-200 min-h-[100px]"
              />
            </div>

            <Button className="w-full bg-amber-600 hover:bg-amber-700" size="lg" disabled={!canSubmitReport}>
              <Send className="mr-2 h-4 w-4" /> Submit Report
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

