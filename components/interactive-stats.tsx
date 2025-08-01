"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Leaf, Award } from "lucide-react"

const stats = [
  {
    icon: TrendingUp,
    label: "Hectares Cultivated",
    value: 2500,
    suffix: "+",
    color: "text-green-600",
  },
  {
    icon: Users,
    label: "Farmers Served",
    value: 150,
    suffix: "+",
    color: "text-blue-600",
  },
  {
    icon: Leaf,
    label: "Crops Varieties",
    value: 25,
    suffix: "+",
    color: "text-emerald-600",
  },
  {
    icon: Award,
    label: "Years Experience",
    value: 8,
    suffix: "",
    color: "text-amber-600",
  },
]

export default function InteractiveStats() {
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0))

  useEffect(() => {
    const timers = stats.map((stat, index) => {
      const increment = stat.value / 50 // Animate over 50 steps
      let current = 0

      return setInterval(() => {
        current += increment
        if (current >= stat.value) {
          current = stat.value
          clearInterval(timers[index])
        }

        setAnimatedValues((prev) => {
          const newValues = [...prev]
          newValues[index] = Math.floor(current)
          return newValues
        })
      }, 30)
    })

    return () => timers.forEach((timer) => clearInterval(timer))
  }, [])

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6">
            <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {animatedValues[index].toLocaleString()}
              {stat.suffix}
            </div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
