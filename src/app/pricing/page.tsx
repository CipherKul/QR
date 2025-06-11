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
              <div className="absolute bottom-1 left-0 w-full h-[48px] -z-10">
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
      </div>
      <Footer />
    </div>
  );
}