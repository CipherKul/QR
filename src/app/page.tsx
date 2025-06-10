import MidSection from "@/components/home/MidSection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to QrCode Creator</h1>
      <p className="text-gray-600 max-w-md text-center mb-8">Create, customize, and download QR codes for your business or personal use.</p>
      <div className="flex gap-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
          Create QR Code
        </button>
        <button className="bg-white border border-gray-300 text-gray-700 font-medium py-2 px-6 rounded-lg hover:bg-gray-50 transition-colors">
          Learn More
        </button>
      </div>
      <MidSection />
    </main>
  )
}
