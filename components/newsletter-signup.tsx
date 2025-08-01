"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes("@")) {
      setStatus("error")
      setMessage("Please enter a valid email address")
      return
    }

    setStatus("loading")

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Simulate success/failure
    if (Math.random() > 0.1) {
      setStatus("success")
      setMessage("Thank you for subscribing! You'll receive our latest agricultural insights.")
      setEmail("")
    } else {
      setStatus("error")
      setMessage("Something went wrong. Please try again.")
    }

    // Reset status after 5 seconds
    setTimeout(() => {
      setStatus("idle")
      setMessage("")
    }, 5000)
  }

  return (
    <div className="bg-green-600 text-white py-16">
      <div className="container px-4 text-center">
        <h3 className="text-2xl font-bold mb-4">Stay Updated with Agricultural Insights</h3>
        <p className="text-green-100 mb-8 max-w-2xl mx-auto">
          Get the latest farming tips, market updates, and seasonal advice delivered to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-2 mb-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "loading"}
              className="bg-white text-gray-900"
            />
            <Button
              type="submit"
              disabled={status === "loading"}
              className="bg-green-800 hover:bg-green-900 text-white"
            >
              {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : "Subscribe"}
            </Button>
          </div>

          {message && (
            <Alert
              className={`${
                status === "success" ? "border-green-300 bg-green-100" : "border-red-300 bg-red-100"
              } text-left`}
            >
              {status === "success" ? (
                <CheckCircle className="h-4 w-4 text-green-600" />
              ) : (
                <AlertCircle className="h-4 w-4 text-red-600" />
              )}
              <AlertDescription className={status === "success" ? "text-green-800" : "text-red-800"}>
                {message}
              </AlertDescription>
            </Alert>
          )}
        </form>
      </div>
    </div>
  )
}
