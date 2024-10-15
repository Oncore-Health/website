import Navbar from '../components/Navbar';

export default function Careers() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <Navbar />

        {/* Hero Section */}
        <section id="careers" className="flex flex-col items-center text-center md:flex-row md:justify-between md:items-center bg-gradient-to-b from-white to-[#f5f6fc] min-h-[80vh]">
  {/* Text section */}
  <div className="md:w-1/2 text-left p-8 md:pl-[6rem]">
    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
      Careers at Oncare
    </h2>
    <p className="text-lg mb-8 max-w-md">
      At Oncare, we are dedicated to transforming the care experience for oncology patients and providers through enabling better access and care coordination.
    </p>
    <a href="/openings" className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg hover:bg-darker transition">
      View Openings
    </a>
  </div>
  
  {/* Image section */}
<div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end relative">
  <img
    src="/careers.png"
    alt="Careers"
    className="w-full max-w-[800px] h-auto object-cover ml-[-500px]"
  />
</div>
</section>



        {/* Our Culture & Core Principles */}
        <section className="bg-[#f5f6fc] py-24 px-6 md:px-16">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-gray-900">Our Culture &amp; Core Principles</h2>
  </div>

  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
    {/* Teamwork */}
    <div className="text-center bg-white p-8 rounded-xl shadow-md h-auto">
      <div className="p-6 rounded-full inline-block mb-4">
        <img src="/teamwork.png" alt="Teamwork Icon" className="w-32 h-32 mx-auto" /> {/* Increased size */}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Teamwork</h3>
      <p className="text-gray-700">
        We are in this together. Collaboration and supporting each other are in our DNA. If you are someone who enjoys rolling up your sleeves and working as part of a tight-knit team, you&apos;ll feel at home.
      </p>
    </div>

    {/* Creativity */}
    <div className="text-center bg-white p-8 rounded-xl shadow-md h-auto">
      <div className="p-6 rounded-full inline-block mb-4">
        <img src="/creativity.png" alt="Creativity Icon" className="w-32 h-32 mx-auto" /> {/* Increased size */}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Creativity</h3>
      <p className="text-gray-700">
        We love bold ideas and out-of-the-box thinking. If you enjoy experimenting and finding unconventional solutions, you&apos;ll fit right in!
      </p>
    </div>

    {/* Intellectual Curiosity */}
    <div className="text-center bg-white p-8 rounded-xl shadow-md h-auto">
      <div className="p-6 rounded-full inline-block mb-4">
        <img src="/curiosity.png" alt="Intellectual Curiosity Icon" className="w-32 h-32 mx-auto" /> {/* Increased size */}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Intellectual Curiosity</h3>
      <p className="text-gray-700">
        We&apos;re all about asking the tough questions and diving deep to figure things out. If you&apos;re always learning and eager to explore, you&apos;ll thrive here.
      </p>
    </div>
  </div>

  {/* Bottom row with two boxes side by side */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 mt-8">
    {/* Passion */}
    <div className="text-center bg-white p-8 rounded-xl shadow-md h-auto">
      <div className="p-6 rounded-full inline-block mb-4">
        <img src="/passion.png" alt="Passion Icon" className="w-32 h-32 mx-auto" /> {/* Increased size */}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Passion</h3>
      <p className="text-gray-700">
        We aim to transform care for oncology patients and their providers by addressing the problem of disjointed, uncoordinated care. Our goal is to enable oncology providers to focus on patient care rather than struggling with logistics.
      </p>
    </div>

    {/* Diversity */}
    <div className="text-center bg-white p-8 rounded-xl shadow-md h-auto">
      <div className="p-6 rounded-full inline-block mb-4">
        <img src="/diversity.png" alt="Diversity Icon" className="w-32 h-32 mx-auto" /> {/* Increased size */}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Diversity</h3>
      <p className="text-gray-700">
        We believe that solving complex healthcare challenges requires bringing together a wide range of clinical, engineering, and operational perspectives. If you value the power of different viewpoints, you&apos;ll find a place where your unique perspective is not only welcomed but essential to our success.
      </p>
    </div>
  </div>
</section>

        {/* Perks & Benefits */}
        <section className="bg-white py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Perks &amp; Benefits</h2> {/* Added mb-4 for spacing */}
          <p className="text-xl text-gray-600 max-w-xl mx-auto">
            At Oncare, we offer exciting benefits beyond a competitive compensation package to support our team members as we grow together.
          </p>
        </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center px-4">
          {/* Equity */}
          <div className="flex flex-col items-center">
            <img src="/equity_placeholder.png" alt="Equity" className="w-60 h-60 mb-0 object-contain" /> {/* Image is now larger */}
            <h3 className="text-2xl font-semibold text-gray-900">Equity</h3>
          </div>

          {/* Unlimited Paid Time Off */}
          <div className="flex flex-col items-center">
            <img src="/timeoff_placeholder.png" alt="Unlimited Paid Time Off" className="w-60 h-60 mb-0 object-contain" /> {/* Image is now larger */}
            <h3 className="text-2xl font-semibold text-gray-900">Unlimited Paid Time Off</h3>
          </div>

          {/* Free Lunch */}
          <div className="flex flex-col items-center">
            <img src="/freelunch_placeholder.png" alt="Free Lunch" className="w-60 h-60 mb-0 object-contain" /> {/* Image is now larger */}
            <h3 className="text-2xl font-semibold text-gray-900">Free Lunch</h3>
          </div>

          {/* Gym Membership */}
          <div className="flex flex-col items-center">
            <img src="/gym_placeholder.png" alt="Gym Membership" className="w-60 h-60 mb-0 object-contain" /> {/* Image is now larger */}
            <h3 className="text-2xl font-semibold text-gray-900">Gym Membership</h3>
          </div>
        </div>
      </section>

        {/* Call to Action */}
        <section className="bg-[#f3e9fd] py-32 text-center"> {/* Increased padding for vertical space */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Interested in joining the Oncare Team?</h2>
            <a href="/openings" className="bg-primary text-white px-8 py-3 rounded-full hover:bg-darker transition">
              View Openings
            </a>
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
