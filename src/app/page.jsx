import { IoIosArrowDown } from "react-icons/io";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-white px-8 pt-4">
        {/* Header Section */}
        <header className="flex items-center justify-between p-4 bg-white">
          <div className="flex items-center space-x-2">
            <img src="/oncore.png" alt="Oncore AI Logo" className="h-8" />
            <span className="text-2xl font-bold text-black">Oncare</span>
            <img src="/ai.png" alt="AI rectangle" className="h-6" />
          </div>

          <div className="flex items-center justify-between space-x-8">
            <nav className="flex items-center space-x-10">
              <div className="relative group text-sm">
                <div className="flex items-center py-2 cursor-pointer">
                  <a href="#" className="text-black">
                    Clinical Operations Platform
                  </a>
                  <IoIosArrowDown className="inline-block ml-1 text-[#6955EA] transition-transform duration-200 group-hover:rotate-180" />
                </div>

                {/* Dropdown Menu */}
                <div className="absolute w-48 bg-white border border-gray-200 shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-200 hidden z-10">
                  <a href="/infusion" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#6955EA]">AI Infusion Platform</a>
                </div>
              </div>
              <div className="relative group text-sm">
                <a href="#" className="text-black hover:text-[#6955EA]">
                  Use Cases
                </a>
                <IoIosArrowDown className="inline-block ml-1 text-[#6955EA] group-hover:rotate-180 transition duration-200" />
              </div>
              <div className="relative group text-sm">
                <a href="#" className="text-black hover:text-[#6955EA]">
                  Who We Serve
                </a>
                <IoIosArrowDown className="inline-block ml-1 text-[#6955EA] group-hover:rotate-180 transition duration-200" />
              </div>
              <div className="relative group text-sm">
                <a href="#" className="text-black hover:text-[#6955EA]">
                  Integrations
                </a>
                <IoIosArrowDown className="inline-block ml-1 text-[#6955EA] group-hover:rotate-180 transition duration-200" />
              </div>
              <div className="relative group text-sm">
                <a href="#" className="text-black hover:text-[#6955EA]">
                  About Us
                </a>
                <IoIosArrowDown className="inline-block ml-1 text-[#6955EA] group-hover:rotate-180 transition duration-200" />
              </div>
            </nav>

            <div className="flex items-center space-x-4">
              <a href="https://platform.withoncore.com" className="border border-button text-button font-medium px-4 py-2 rounded-full hover:bg-button hover:text-white transition">
                Log In
              </a>
              <a href="mailto:abhinav.kurada@gmail.com" className="bg-button text-white font-medium px-4 py-2 rounded-full hover:bg-darker transition">
                Schedule a Demo
              </a>
            </div>
          </div>
        </header>


        {/* Hero Section */}
        <section className="flex flex-col items-center text-center p-8 md:flex-row md:justify-between md:items-center">
          <div className="md:w-1/2 text-left">
            <h1 className="text-4xl font-[1000] text-gray-900 mb-4 leading-tight">
              Improving Access for <span className="relative inline-block">
                <span className="bg-indigo-100 text-indigo-600 px-2 py-1 rounded-md">
                  Oncology Patients
                </span></span> with AI 
              <span className="inline-block align-top">
                <img src="/sparkle.svg" alt="Sparkle Image" className="inline-block w-6 h-6 ml-1 align-top" />
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Oncare AI automates operational workflows to help treat more cancer patients while reducing administrative burden for providers.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="mailto:abhinav.kurada@gmail.com" className="bg-button text-white px-6 py-3 rounded-full hover:bg-darker transition">
                Schedule a Demo
              </a>
              <a href="https://platform.withoncore.com" target="_" className="border border-button text-button px-6 py-3 rounded-full hover:bg-button hover:text-white transition">
                Log In
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end relative">
            {/* Image with Rounded Diamond Shape */}
            <div className="relative">
              <img src="/background-image.svg" alt="Background Image"/>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
