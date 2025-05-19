"use client"

import Link from "next/link"

export default function TermsOfService() {
	return (
		<div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
				<div className="text-center mb-8">
					<h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
					<p className="mt-2 text-sm text-gray-600">
						Last updated: {new Date().toLocaleDateString()}
					</p>
				</div>

				<div className="prose prose-blue max-w-none">
					<h2 className="text-xl font-semibold text-gray-700 mb-4">1. Introduction</h2>
					<p className="text-gray-700 leading-7 mb-6">
						Welcome to Oncore's SMS Updates Service. These Terms of Service ("Terms")
						govern your use of our SMS notification service. By subscribing to our SMS
						updates, you agree to these Terms. If you do not agree, please do not
						subscribe to our SMS service.
					</p>

					<h2 className="text-xl font-semibold text-gray-700 mb-4">
						2. SMS Service Description
					</h2>
					<p className="text-gray-700 leading-7 mb-6">
						Oncore provides SMS notifications to keep you informed about important
						updates, appointments, and relevant information. Message frequency varies
						based on your preferences and the type of updates you've subscribed to.
					</p>

					<h2 className="text-xl font-semibold text-gray-700 mb-4">
						3. Consent and Opt-In
					</h2>
					<p className="text-gray-700 leading-7 mb-6">
						By providing your phone number and checking the consent box, you expressly
						consent to receive SMS messages from Oncore. You understand that:
					</p>
					<ul className="list-disc pl-6 text-gray-700 leading-7 mb-6">
						<li>Message and data rates may apply</li>
						<li>You can opt-out at any time by texting STOP</li>
						<li>You can get help by texting HELP</li>
						<li>
							You are not required to consent to receive SMS messages as a condition
							of any purchase or service
						</li>
					</ul>

					<h2 className="text-xl font-semibold text-gray-700 mb-4">
						4. User Responsibilities
					</h2>
					<p className="text-gray-700 leading-7 mb-6">You agree to:</p>
					<ul className="list-disc pl-6 text-gray-700 leading-7 mb-6">
						<li>Provide accurate and current phone number information</li>
						<li>Notify us immediately of any changes to your phone number</li>
						<li>Not use the service for any illegal or unauthorized purpose</li>
						<li>Not attempt to interfere with or disrupt the service</li>
					</ul>

					<h2 className="text-xl font-semibold text-gray-700 mb-4">
						5. Privacy and Data Protection
					</h2>
					<p className="text-gray-700 leading-7 mb-6">
						We take your privacy seriously. Your phone number and related information
						are collected and processed in accordance with our Privacy Policy. We
						implement appropriate technical and organizational measures to protect your
						personal information.
					</p>

					<h2 className="text-xl font-semibold text-gray-700 mb-4">
						6. Service Limitations
					</h2>
					<p className="text-gray-700 leading-7 mb-6">
						While we strive to provide reliable service, we cannot guarantee:
					</p>
					<ul className="list-disc pl-6 text-gray-700 leading-7 mb-6">
						<li>Uninterrupted or error-free service</li>
						<li>Delivery of messages to all mobile carriers</li>
						<li>Compatibility with all mobile devices or carriers</li>
					</ul>

					<h2 className="text-xl font-semibold text-gray-700 mb-4">
						7. Changes to Terms
					</h2>
					<p className="text-gray-700 leading-7 mb-6">
						We reserve the right to modify these Terms at any time. We will notify you
						of any material changes via SMS or email. Your continued use of the service
						after such notification constitutes acceptance of the modified Terms.
					</p>

					<h2 className="text-xl font-semibold text-gray-700 mb-4">8. Termination</h2>
					<p className="text-gray-700 leading-7 mb-6">
						We may terminate or suspend the SMS service at any time without notice. You
						may terminate your subscription at any time by texting STOP to our service
						number.
					</p>

					<h2 className="text-xl font-semibold text-gray-700 mb-4">
						9. Limitation of Liability
					</h2>
					<p className="text-gray-700 leading-7 mb-6">
						To the maximum extent permitted by law, Oncore shall not be liable for any
						indirect, incidental, special, consequential, or punitive damages resulting
						from your use of or inability to use the SMS service.
					</p>

					<h2 className="text-xl font-semibold text-gray-700 mb-4">10. Governing Law</h2>
					<p className="text-gray-700 leading-7 mb-6">
						These Terms shall be governed by and construed in accordance with the laws
						of the State of Delaware, without regard to its conflict of law provisions.
					</p>

					<h2 className="text-xl font-semibold text-gray-700 mb-4">
						11. Contact Information
					</h2>
					<p className="text-gray-700 leading-7 mb-6">
						For questions about these Terms or the SMS service, please contact us at:
						<br />
						Email:{" "}
						<a
							href="mailto:info@useoncare.com"
							className="text-blue-600 hover:text-blue-500"
						>
							info@useoncare.com
						</a>
					</p>

					<div className="mt-8 pt-8 border-t border-gray-200">
						<p className="text-sm text-gray-500">
							By using our SMS service, you acknowledge that you have read and
							understood these Terms of Service. For more information about how we
							handle your data, please review our{" "}
							<Link href="/privacy" className="text-blue-600 hover:text-blue-500">
								Privacy Policy
							</Link>
							.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
