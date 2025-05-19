"use client"

import Link from "next/link"

export default function PrivacyPolicy() {
	return (
		<div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
				<div className="text-center mb-8">
					<h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
					<p className="mt-2 text-sm text-gray-600">
						Last updated: {new Date().toLocaleDateString()}
					</p>
				</div>

				<div className="prose prose-blue max-w-none">
					<h2 className="text-xl font-semibold text-gray-700 mb-4">1. Introduction</h2>
					<p className="text-gray-700 leading-7 mb-6">
						At Oncore, we take your privacy seriously. This Privacy Policy explains how
						we collect, use, disclose, and safeguard your information when you use our
						SMS notification service. Please read this privacy policy carefully. By
						using our SMS service, you consent to the practices described in this
						policy.
					</p>

					<h2 className="text-xl font-semibold text-gray-700 mb-4">
						2. Information We Collect
					</h2>
					<p className="text-gray-700 leading-7 mb-6">
						When you subscribe to our SMS service, we collect:
					</p>
					<ul className="list-disc pl-6 text-gray-700 leading-7 mb-6">
						<li>Your phone number</li>
						<li>Your consent status and timestamp</li>
						<li>Your opt-out status (if applicable)</li>
						<li>Message delivery status</li>
						<li>Your interaction with our messages (e.g., replies to HELP)</li>
					</ul>

					<h2 className="text-xl font-semibold text-gray-700 mb-4">
						3. How We Use Your Information
					</h2>
					<p className="text-gray-700 leading-7 mb-6">
						We use the information we collect to:
					</p>
					<ul className="list-disc pl-6 text-gray-700 leading-7 mb-6">
						<li>Send you SMS notifications and updates</li>
						<li>Manage your subscription preferences</li>
						<li>Process your opt-out requests</li>
						<li>Improve our service and user experience</li>
						<li>Comply with legal obligations</li>
						<li>Prevent fraud and abuse</li>
					</ul>

					<h2 className="text-xl font-semibold text-gray-700 mb-4">
						4. Data Storage and Security
					</h2>
					<p className="text-gray-700 leading-7 mb-6">
						We implement appropriate technical and organizational measures to protect
						your personal information:
					</p>
					<ul className="list-disc pl-6 text-gray-700 leading-7 mb-6">
						<li>All data is stored in secure, encrypted databases</li>
						<li>Access to your information is restricted to authorized personnel</li>
						<li>We regularly review and update our security measures</li>
						<li>We comply with applicable data protection regulations</li>
					</ul>

					<h2 className="text-xl font-semibold text-gray-700 mb-4">5. Data Retention</h2>
					<p className="text-gray-700 leading-7 mb-6">
						We retain your information for as long as necessary to provide the SMS
						service and comply with legal obligations. When you opt out, we will:
					</p>
					<ul className="list-disc pl-6 text-gray-700 leading-7 mb-6">
						<li>Stop sending you messages</li>
						<li>Maintain a record of your opt-out status to prevent future messages</li>
						<li>Retain necessary information for legal compliance</li>
					</ul>

					<h2 className="text-xl font-semibold text-gray-700 mb-4">
						6. Third-Party Service Providers
					</h2>
					<p className="text-gray-700 leading-7 mb-6">
						We work with trusted third-party service providers to deliver SMS messages.
						These providers:
					</p>
					<ul className="list-disc pl-6 text-gray-700 leading-7 mb-6">
						<li>Are bound by confidentiality agreements</li>
						<li>Can only use your information to provide the SMS service</li>
						<li>Must implement appropriate security measures</li>
						<li>Are prohibited from using your information for other purposes</li>
					</ul>

					<h2 className="text-xl font-semibold text-gray-700 mb-4">
						7. Your Rights and Choices
					</h2>
					<p className="text-gray-700 leading-7 mb-6">You have the right to:</p>
					<ul className="list-disc pl-6 text-gray-700 leading-7 mb-6">
						<li>Opt out of SMS messages at any time by texting STOP</li>
						<li>Request information about the data we hold about you</li>
						<li>Request correction of inaccurate data</li>
						<li>Request deletion of your data (subject to legal requirements)</li>
						<li>Lodge a complaint with supervisory authorities</li>
					</ul>

					<h2 className="text-xl font-semibold text-gray-700 mb-4">
						8. Children's Privacy
					</h2>
					<p className="text-gray-700 leading-7 mb-6">
						Our SMS service is not intended for individuals under 13 years of age. We do
						not knowingly collect personal information from children under 13. If you
						are a parent or guardian and believe your child has provided us with
						personal information, please contact us.
					</p>

					<h2 className="text-xl font-semibold text-gray-700 mb-4">
						9. Changes to This Policy
					</h2>
					<p className="text-gray-700 leading-7 mb-6">
						We may update this Privacy Policy from time to time. We will notify you of
						any material changes via SMS or email. Your continued use of the service
						after such notification constitutes acceptance of the modified policy.
					</p>

					<h2 className="text-xl font-semibold text-gray-700 mb-4">10. Contact Us</h2>
					<p className="text-gray-700 leading-7 mb-6">
						If you have questions about this Privacy Policy or our SMS service, please
						contact us at:
						<br />
						Email:{" "}
						<a
							href="mailto:info@useoncare.com"
							className="text-blue-600 hover:text-blue-500"
						>
							info@useoncare.com
						</a>
						<br />
						For SMS help: Text HELP to our service number
					</p>

					<div className="mt-8 pt-8 border-t border-gray-200">
						<p className="text-sm text-gray-500">
							This Privacy Policy is part of and incorporated into our{" "}
							<Link href="/terms" className="text-blue-600 hover:text-blue-500">
								Terms of Service
							</Link>
							. By using our SMS service, you acknowledge that you have read and
							understood this Privacy Policy.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
