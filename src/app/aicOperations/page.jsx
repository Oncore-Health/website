import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <Navbar/>

        {/* Section 1: Modernize AIC Operations */}
        <section className="flex flex-col items-center text-center md:flex-row md:justify-between md:items-center bg-gradient-to-b from-white to-gradientEnd min-h-[80vh]">
          <div className="md:w-1/2 text-left p-8 md:pl-[6rem]">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-8 leading-tight mt-10">
              Modernize 
              <span className="inline-block align-top">
                <img src="/sparkle.svg" alt="Sparkle Image" className="inline-block w-6 h-6 ml-1 align-top" />
              </span>
              <span className="relative inline-block mt-4"> {/* Added mt-4 to increase vertical space */}
                <span className="bg-indigo-100 text-indigo-600 px-2 py-1 rounded-md">
                  AIC Operations
                </span>
              </span>
            </h1>
            <p className="text-xl text-[#000000] mb-8 max-w-lg">
              Oncare helps AIC teams scale volume, improve strategic efficiency & resilience, and inform strategic growth.
            </p>
            <div className="flex space-x-4 justify-start">
              <a href="mailto:abhinav@useoncare.com" className="bg-button text-white px-6 py-3 rounded-full hover:bg-darker transition">
                Build Your Demo
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end relative">
            {/* Image Section */}
            <div className="relative">
              <img src="/aic_photo.png" alt="AIC Operations Screenshot" className="w-full max-w-xl lg:max-w-2xl xl:max-w-3xl" />
            </div>
          </div>
        </section>


        {/* Section 2: Oncare for AICs */}
        <section className="bg-white py-16 text-center">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-4xl mb-8 font-bold text-[#000000]">Oncare for AICs</h2>
            <p className="text-2xl text-[#000000] max-w-4xl mx-auto">
              Oncare augments your digital infrastructure to <span className="font-bold">improve your center's profitability, staff satisfaction, and patient experience</span> through AI-enabled capacity management.
            </p>
          </div>

          {/* Card Grid */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
            {/* First Row */}
            <div className="bg-white px-2 py-2 rounded-3xl shadow-lg">
              {/* Placeholder Image with Increased Height */}
              <div className="h-56 mb-4 rounded-3xl">
                <img src="scale.png" alt="Scale AIC Volume" className="w-full h-full object-cover rounded-3xl" />
              </div>
              <h3 className="text-2xl font-semibold text-[#000000] mb-2">Scale AIC Volume</h3>
              <p className="text-[#000000] text-lg px-4 py-4 text-left">
                Utilize AI-driven capacity management to enable scaling partnerships with health systems, allowing your AIC to handle larger patient volumes efficiently.
              </p>
            </div>

            <div className="bg-white px-2 py-2 rounded-3xl shadow-lg">
              {/* Placeholder Image with Increased Height */}
              <div className="h-56 mb-4 rounded-3xl">
                <img src="strength.png" alt="Strengthen Operational Resilience" className="w-full h-full object-cover rounded-3xl" />
              </div>
              <h3 className="text-2xl font-semibold text-[#000000] mb-2">Strengthen Operational Resilience</h3>
              <p className="text-[#000000] text-lg px-4 py-4 text-left">
                Manage daily fluctuations, same-day add-ons, no-shows, and cancellations through refined scheduling and resource allocation.
              </p>
            </div>

            <div className="bg-white px-2 py-2 rounded-3xl shadow-lg">
              {/* Placeholder Image with Increased Height */}
              <div className="h-56 mb-4 rounded-3xl">
                <img src="enhance.png" alt="Enhance Patient Experience" className="w-full h-full object-cover rounded-3xl" />
              </div>
              <h3 className="text-2xl font-semibold text-[#000000] mb-2">Enhance Patient Experience</h3>
              <p className="text-[#000000] text-lg px-4 py-4 text-left">
                Reduce wait times and ensure timely appointments, boosting satisfaction with streamlined care delivery for your patients.
              </p>
            </div>

            {/* Second Row */}
            <div className="bg-white px-2 py-2 rounded-3xl shadow-lg">
              {/* Placeholder Image with Increased Height */}
              <div className="h-56 mb-4 rounded-3xl">
                <img src="efficiency.png" alt="Improve Team Efficiency" className="w-full h-full object-cover rounded-3xl" />
              </div>
              <h3 className="text-2xl font-semibold text-[#000000] mb-2">Improve Team Efficiency</h3>
              <p className="text-[#000000] text-lg px-4 py-4 text-left">
                Prevent understaffing and burnout by optimizing schedules to ensure the right team members are available when needed.
              </p>
            </div>

            <div className="bg-white px-2 py-2 rounded-3xl shadow-lg">
              {/* Placeholder Image with Increased Height */}
              <div className="h-56 mb-4 rounded-3xl">
                <img src="satisfaction.png" alt="Improve Nursing Satisfaction" className="w-full h-full object-cover rounded-3xl" />
              </div>
              <h3 className="text-2xl font-semibold text-[#000000]0 mb-2">Improve Nursing Satisfaction</h3>
              <p className="text-[#000000] text-lg px-4 py-4 text-left">
                Balance nursing workloads, refine shift management, and dynamically adjust staffing to prevent burnout, leading to higher satisfaction and team retention.
              </p>
            </div>

            <div className="bg-white px-2 py-2 rounded-3xl shadow-lg">
              {/* Placeholder Image with Increased Height */}
              <div className="h-56 mb-4 rounded-3xl">
                <img src="inform.png" alt="Inform Data-Driven Decisions" className="w-full h-full object-cover rounded-3xl" />
              </div>
              <h3 className="text-2xl font-semibold text-[#000000] mb-2">Inform Data-Driven Decisions</h3>
              <p className="text-[#000000] text-lg px-4 py-4 text-left">
                Harness advanced analytics to make informed decisions on capital investments and resource allocation.
              </p>
            </div>
          </div>
        </section>

        
        {/* Section 3: What Sets Oncare Apart */}
        <section className="bg-gray-50 py-16 text-center">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-4xl font-bold text-gray-900">What sets Oncare apart</h2>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
            <div className="flex flex-col items-center">
              <img src="lowLift.png" alt="Low-lift implementation" className="w-56 h-56 mb-0" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Low-lift implementation</h3>
              <p className="text-gray-700 text-lg">
                Minimizes IT workload by supporting several EHR integration approaches, including flat-files, HL7, and FHIR.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img src="growth.png" alt="AI to inform practice growth" className="w-56 h-56 mb-0" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">AI to inform practice growth</h3>
              <p className="text-gray-700 text-lg">
                Leverage AI to guide investments, optimize resources, and enhance patient care.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img src="insights.png" alt="Real-time operational insights" className="w-56 h-56 mb-0" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Real-time operational insights</h3>
              <p className="text-gray-700 text-lg">
                Ongoing reporting supports continuous operational improvements.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img src="workflow.png" alt="Workflow Automation" className="w-56 h-56 mb-0" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Workflow Automation</h3>
              <p className="text-gray-700 text-lg">
                Automation combined with hands-on change management to modernize operations.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Explore how Oncare can modernize AIC */}
        <section className="flex flex-col items-center text-center md:flex-row md:justify-between md:items-center bg-white">
          {/* Left Column: Text and Buttons */}
          <div className="md:w-1/2 text-left p-8 md:pl-[6rem] mb-8 md:mb-0">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Explore how Oncare can modernize your AIC’s operations and care delivery today
            </h2>
            <div className="flex space-x-4">
              <a href="#" className="bg-primary text-white font-medium py-3 px-6 rounded-full">
                Platform
              </a>
              <a href="#" className="border-2 border-primary text-primary font-medium py-3 px-6 rounded-full hover:bg-primary hover:text-white transition">
                Get Started Today
              </a>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end relative">
            <div className="relative">
              <img src="exec.png" alt="Executive Reports" className="w-full max-w-xl lg:max-w-2xl xl:max-w-3xl" />
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
