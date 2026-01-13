export interface FormSubmission {
  email: string
  name: string
  feedback: string
  slug: string
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.fillingbee.com/v1"

// Simulation helper for demo purposes since we don't have a real backend yet
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const api = {
  auth: {
    sendOtp: async (email: string) => {
      // In a real app: return fetch(`${API_BASE_URL}/auth/otp`, { method: 'POST', body: JSON.stringify({ email }) })
      console.log(`[API] Sending OTP to ${email}`)
      await delay(1000)
      return { success: true, message: "OTP sent" }
    },
    verifyOtp: async (email: string, otp: string) => {
      // In a real app: return fetch(`${API_BASE_URL}/auth/verify`, ...)
      console.log(`[API] Verifying OTP ${otp} for ${email}`)
      await delay(1000)
      if (otp === "123456") return { success: true, verified: true }
      throw new Error("Invalid OTP")
    }
  },
  forms: {
    submit: async (data: FormSubmission) => {
      // In a real app: return fetch(`${API_BASE_URL}/forms/${data.slug}/submit`, ...)
      console.log(`[API] Submitting form data`, data)
      await delay(1500)
      return { success: true, id: Math.random().toString(36).substr(2, 9) }
    }
  }
}
