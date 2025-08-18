"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calculator, DollarSign } from "lucide-react"

const serviceRates = {
  ploughing: 130,
  discing: 90,
  planting: 90,
  spraying: 35,
  harvesting: 130,
  fertilizer: 35,
}

export default function ServiceCalculator() {
  const [hectares, setHectares] = useState("")
  const [service, setService] = useState("")
  const [estimate, setEstimate] = useState<number | null>(null)

  const calculateEstimate = () => {
    if (!hectares || !service) return

    const area = Number.parseFloat(hectares)
    const rate = serviceRates[service as keyof typeof serviceRates]

    if (area > 0 && rate) {
      setEstimate(area * rate)
    }
  }

  const resetCalculator = () => {
    setHectares("")
    setService("")
    setEstimate(null)
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5 text-green-600" />
          Service Cost Calculator
        </CardTitle>
        <CardDescription>Get an instant estimate for our tillage services based on Wet rate</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="hectares">Farm Size (Hectares)</Label>
          <Input
            id="hectares"
            type="number"
            placeholder="Enter hectares"
            value={hectares}
            onChange={(e) => setHectares(e.target.value)}
            min="0"
            step="0.1"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="service">Service Type</Label>
          <Select value={service} onValueChange={setService}>
            <SelectTrigger>
              <SelectValue placeholder="Select service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ploughing">Ploughing ($130/ha)</SelectItem>
              <SelectItem value="discing">Discing ($90/ha)</SelectItem>
              <SelectItem value="planting">Precision Planting ($90/ha)</SelectItem>
              <SelectItem value="spraying">Boom Spraying ($35/ha)</SelectItem>
              <SelectItem value="harvesting">Harvesting ($130/ha)</SelectItem>
              <SelectItem value="fertilizer">Fertilizer Spreading ($35/ha)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-2">
          <Button onClick={calculateEstimate} className="flex-1 bg-green-600 hover:bg-green-700">
            Calculate
          </Button>
          <Button onClick={resetCalculator} variant="outline" className="flex-1 bg-transparent">
            Reset
          </Button>
        </div>

        {estimate !== null && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <DollarSign className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium text-green-800">Estimated Cost</span>
            </div>
            <div className="text-2xl font-bold text-green-900">${estimate.toFixed(2)} USD</div>
            <p className="text-xs text-green-700 mt-1">
              *Estimate only. Final pricing may vary based on field conditions.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
