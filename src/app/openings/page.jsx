"use client";

import Navbar from '../components/Navbar';

export default function Postings() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <Navbar />
        
        {/* Open Positions Section */}
        <section className="bg-white py-16">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-900">Open Positions</h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {/* Position 1 */}
            <div className="bg-[#f0f4ff] p-6 rounded-lg flex justify-between items-center shadow-md">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">Founding Engineer</h3>
                <p className="text-gray-600">Philadelphia, PA · Full-time</p>
              </div>
              <div>
                <a href="/engineer" onClick={() => handleApplyClick('Founding Engineer')} className="text-indigo-600 font-semibold hover:underline">See Details →</a>
              </div>
            </div>

            {/* Position 2 */}
            <div className="bg-[#f0f4ff] p-6 rounded-lg flex justify-between items-center shadow-md">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">Founding GTM Role</h3>
                <p className="text-gray-600">Philadelphia, PA · Full-time</p>
              </div>
              <div>
                <a href="/gtmrole" onClick={() => handleApplyClick('Founding GTM Role')} className="text-indigo-600 font-semibold hover:underline">See Details →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-footer py-16">
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center md:items-start text-center md:text-left md:ml-20">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-6">
                <img src="/oncare.png" alt="Oncore AI Logo" className="h-10" />
                <span className="text-3xl font-bold text-black">Oncare</span>
                <img src="/ai.svg" alt="AI rectangle" className="h-8" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                Get Started with Oncare Today.
              </h3>
              <a href="mailto:abhinav@useoncare.com" className="bg-primary text-white px-6 py-3 rounded-full hover:bg-darker transition mx-auto md:mx-0">
                Get Started
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center text-center md:text-left md:justify-items-start md:mr-10 px-[2vw]">
              <div>
                <h4 className="text-lg font-semibold text-button mb-4">Platform</h4>
                <ul className="space-y-2">
                  <li><a href="#about" className="text-gray-900 hover:underline">Why Oncare?</a></li>
                  <li><a href="#use-cases" className="text-gray-900 hover:underline">Use Cases</a></li>
                  <li><a href="#" className="text-gray-900 hover:underline">How it works</a></li>
                  <li><a href="https://trust.useoncare.com" target="_" className="text-gray-900 hover:underline">Security and Stability</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-button mb-4">Use Cases</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-900 hover:underline">AI for Infusion Centers</a></li>
                  <li><a href="#" className="text-gray-900 hover:underline">AI for Outpatient Clinics</a></li>
                  <li><a href="#" className="text-gray-900 hover:underline">AI for Pharmacies</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-button mb-4">Who We Serve</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-900 hover:underline">Health Systems</a></li>
                  <li><a href="#" className="text-gray-900 hover:underline">Ambulatory Infusion Centers</a></li>
                  <li><a href="#" className="text-gray-900 hover:underline">Community Oncology Clinics</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-button mb-4">About Us</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-900 hover:underline">Our Company</a></li>
                  <li><a href="/careers" className="text-gray-900 hover:underline">Careers</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
