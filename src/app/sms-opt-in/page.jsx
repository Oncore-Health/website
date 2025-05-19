"use client"

import { useState } from "react"
import Link from "next/link"
import { supabase } from "@/lib/supabase"

export default function SMSOptIn() {
	const [phoneNumber, setPhoneNumber] = useState("")
	const [consent, setConsent] = useState(false)
	const [error, setError] = useState("")
	const [success, setSuccess] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	const validatePhoneNumber = number => {
		// Basic validation for US phone numbers
		const phoneRegex = /^\+?1?\d{10}$/
		return phoneRegex.test(number.replace(/\D/g, ""))
	}

	const handleSubmit = async e => {
		e.preventDefault()
		setError("")
		setIsLoading(true)

		if (!validatePhoneNumber(phoneNumber)) {
			setError("Please enter a valid 10-digit phone number")
			setIsLoading(false)
			return
		}

		if (!consent) {
			setError("You must consent to receive SMS messages")
			setIsLoading(false)
			return
		}

		try {
			// Format phone number to E.164 format
			const formattedPhone = phoneNumber.replace(/\D/g, "")
			const e164Phone = formattedPhone.startsWith("1") ? formattedPhone : `1${formattedPhone}`

			// Insert into Supabase
			const { error: supabaseError } = await supabase.from("sms_subscribers").insert([
				{
					phone_number: e164Phone,
					consent_given: true,
					consent_timestamp: new Date().toISOString(),
					status: "active"
				}
			])

			if (supabaseError) {
				if (supabaseError.code === "23505") {
					// Unique violation
					setError("This phone number is already registered")
				} else {
					throw supabaseError
				}
				return
			}

			setSuccess(true)
			setPhoneNumber("")
			setConsent(false)
		} catch (err) {
			console.error("Error saving to Supabase:", err)
			setError("Failed to process your request. Please try again.")
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
				<div className="text-center mb-8">
					<h1 className="text-2xl font-bold text-gray-900">SMS Updates Sign Up</h1>
					<p className="mt-2 text-sm text-gray-600">
						Stay informed with important updates via SMS
					</p>
				</div>

				{success ? (
					<div className="rounded-md bg-green-50 p-4">
						<div className="flex">
							<div className="flex-shrink-0">
								<svg
									className="h-5 w-5 text-green-400"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
							<div className="ml-3">
								<p className="text-sm font-medium text-green-800">
									Successfully signed up for SMS updates!
								</p>
							</div>
						</div>
					</div>
				) : (
					<form onSubmit={handleSubmit} className="space-y-6">
						<div>
							<label
								htmlFor="phone"
								className="block text-sm font-medium text-gray-700"
							>
								Phone Number
							</label>
							<div className="mt-1">
								<input
									type="tel"
									id="phone"
									name="phone"
									value={phoneNumber}
									onChange={e => setPhoneNumber(e.target.value)}
									placeholder="(555) 555-5555"
									disabled={isLoading}
									className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
								/>
							</div>
							<p className="mt-2 text-sm text-gray-500">
								Enter your phone number to receive updates via SMS
							</p>
						</div>

						<div className="flex items-start">
							<div className="flex items-center h-5">
								<input
									id="consent"
									name="consent"
									type="checkbox"
									checked={consent}
									onChange={e => setConsent(e.target.checked)}
									disabled={isLoading}
									className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded disabled:bg-gray-100 disabled:cursor-not-allowed"
								/>
							</div>
							<div className="ml-3 text-sm">
								<label htmlFor="consent" className="font-medium text-gray-700">
									I consent to receive SMS messages
								</label>
								<p className="text-gray-500 mt-1">
									By providing your phone number and checking this box, you agree
									to receive SMS messages from Oncore. Message and data rates may
									apply. Message frequency varies. Text STOP to unsubscribe or
									HELP for help.
								</p>
							</div>
						</div>

						{error && (
							<div className="rounded-md bg-red-50 p-4">
								<div className="flex">
									<div className="ml-3">
										<p className="text-sm font-medium text-red-800">{error}</p>
									</div>
								</div>
							</div>
						)}

						<div className="text-sm text-gray-500">
							By signing up, you agree to our{" "}
							<Link
								href="/terms"
								className="font-medium text-blue-600 hover:text-blue-500"
							>
								Terms of Service
							</Link>{" "}
							and{" "}
							<Link
								href="/privacy"
								className="font-medium text-blue-600 hover:text-blue-500"
							>
								Privacy Policy
							</Link>
						</div>

						<div>
							<button
								type="submit"
								disabled={isLoading}
								className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-400 disabled:cursor-not-allowed"
							>
								{isLoading ? "Signing up..." : "Sign Up for SMS Updates"}
							</button>
						</div>
					</form>
				)}
			</div>
		</div>
	)
}
