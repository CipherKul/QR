import Image from "next/image";
import Footer from "@/components/layout/Footer";

export default function PricingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 ">
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-[48px] font-poppins font-bold mb-4 leading-tight">
            <span className="text-[#1F2937]">Find the </span>
            <span className="text-[#1F2937] relative inline-block">
              right plan
              <div className="absolute bottom-1 left-0 w-[250px] h-[48px] -z-10">
                <Image
                  src="/images/Highlighter.png"
                  alt="Highlight"
                  fill
                  sizes="100vw"
                  priority
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-[28px] text-[#1B152B] mb-12 max-w-5xl mx-auto font-poppins">
            Find the perfect plan for your needs with our<br /> straightforward pricing options.
          </p>
        </div>

        {/* Pricing Toggle */}
        <div className="flex justify-center items-center gap-4 mb-10">
          <p>
            <span className="text-[#3A86FF] font-semibold">Save 15%</span>
            <span className="text-[#3A86FF]"> on yearly plan!</span>
          </p>
          <div className="flex rounded-full bg-gray-100 p-1">
            <button className="py-2 px-6 rounded-full bg-[#3A86FF] text-white font-medium">Yearly</button>
            <button className="py-2 px-6 rounded-full text-gray-600 font-medium">Monthly</button>
          </div>
        </div>

        {/* Pricing Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="mb-6">
              <h3 className="font-bold text-xl">Free</h3>
              <p className="text-sm text-gray-600">Best for personal use</p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-gray-500">/month</span>
            </div>
            <button className="w-full bg-[#3A86FF] text-white py-3 rounded-md font-medium mb-6">
              Get started
            </button>
            <div>
              <p className="font-medium mb-4 text-gray-800">What you get:</p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM8.001 14.413L4.288 10.708L5.7 9.292L8.001 11.587L14.3 5.293L15.712 6.707L8.001 14.413Z" fill="currentColor" />
                    </svg>
                  </span>
                  <span>Task Management</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM8.001 14.413L4.288 10.708L5.7 9.292L8.001 11.587L14.3 5.293L15.712 6.707L8.001 14.413Z" fill="currentColor" />
                    </svg>
                  </span>
                  <span>Project Planning</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM8.001 14.413L4.288 10.708L5.7 9.292L8.001 11.587L14.3 5.293L15.712 6.707L8.001 14.413Z" fill="currentColor" />
                    </svg>
                  </span>
                  <span>Team Collaboration</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM8.001 14.413L4.288 10.708L5.7 9.292L8.001 11.587L14.3 5.293L15.712 6.707L8.001 14.413Z" fill="currentColor" />
                    </svg>
                  </span>
                  <span>Notifications and Reminders</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM8.001 14.413L4.288 10.708L5.7 9.292L8.001 11.587L14.3 5.293L15.712 6.707L8.001 14.413Z" fill="currentColor" />
                    </svg>
                  </span>
                  <span>What you get</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Second Plan - Same structure */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            {/* Same structure as first card */}
            <div className="mb-6">
              <h3 className="font-bold text-xl">Free</h3>
              <p className="text-sm text-gray-600">Best for personal use</p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-gray-500">/month</span>
            </div>
            <button className="w-full bg-[#3A86FF] text-white py-3 rounded-md font-medium mb-6">
              Get started
            </button>
            <div>
              <p className="font-medium mb-4 text-gray-800">What you get:</p>
              <ul className="space-y-3">
                {/* Same list items as first card */}
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Task Management</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Project Planning</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Team Collaboration</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Notifications and Reminders</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>What you get</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Most Popular Plan */}
          <div className="bg-white rounded-lg border-2 border-[#3A86FF] p-6 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#3A86FF] text-white px-4 py-1 rounded-full flex items-center text-sm font-medium">
              Most Popular <span className="ml-1">⭐</span>
            </div>
            <div className="mb-6">
              <h3 className="font-bold text-xl">Free</h3>
              <p className="text-sm text-gray-600">Best for personal use</p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-gray-500">/month</span>
            </div>
            <button className="w-full bg-blue-500 text-white py-3 rounded-md font-medium mb-6">
              Get started
            </button>
            <div>
              <p className="font-medium mb-4 text-gray-800">What you get:</p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Task Management</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Project Planning</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Team Collaboration</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Notifications and Reminders</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>What you get</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Fourth Plan */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            {/* Same structure as other cards */}
            <div className="mb-6">
              <h3 className="font-bold text-xl">Free</h3>
              <p className="text-sm text-gray-600">Best for personal use</p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-gray-500">/month</span>
            </div>
            <button className="w-full bg-blue-500 text-white py-3 rounded-md font-medium mb-6">
              Get started
            </button>
            <div>
              <p className="font-medium mb-4 text-gray-800">What you get:</p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Task Management</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Project Planning</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Team Collaboration</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Notifications and Reminders</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>What you get</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}