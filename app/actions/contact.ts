"use server"

import { z } from "zod"

const contactSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export type ContactFormState = {
  success?: boolean
  message?: string
  errors?: {
    firstName?: string[]
    lastName?: string[]
    email?: string[]
    phone?: string[]
    service?: string[]
    message?: string[]
  }
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  // Simulate processing delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const validatedFields = contactSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    service: formData.get("service"),
    message: formData.get("message"),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please fix the errors below.",
    }
  }

  const { firstName, lastName, email, phone, service, message } = validatedFields.data

  try {
    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM

    // For demo purposes, we'll simulate success
    console.log("Contact form submission:", {
      firstName,
      lastName,
      email,
      phone,
      service,
      message,
      timestamp: new Date().toISOString(),
    })

    // Simulate potential failure (10% chance)
    if (Math.random() < 0.1) {
      throw new Error("Service temporarily unavailable")
    }

    return {
      success: true,
      message: `Thank you ${firstName}! We've received your inquiry about ${service.toLowerCase()} and will contact you within 24 hours.`,
    }
  } catch (error) {
    return {
      success: false,
      message: "Sorry, there was an error submitting your request. Please try again or contact us directly.",
    }
  }
}
