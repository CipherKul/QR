import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <div className="bg-[#FFFFFF] min-h-screen flex items-center justify-center relative overflow-hidden">



            <div className="container mx-auto px-6 py-12 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Main Heading */}
                    <h1 className="text-[48px] font-poppins font-bold mb-4 leading-tight">
                        <span className="text-[#1F2937]">Editable. </span>
                        <span className="text-[#1F2937]">Trackable. </span>
                        <span className="text-[#1F2937]">
                            Always.
                        </span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-[28px] text-[#4B5563] mb-12 max-w-5xl mx-auto font-poppins">
                        RecodeQR gives you edit control and scan insights—no reprints needed.
                    </p>

                    {/* CTA Button */}
                    <div className="mb-3">
                        <button className="bg-[#3A86FF] hover:from-blue-600 hover:to-blue-700 text-[#FFFFFF] px-4 py-2.5 rounded-[10px] text-[16px] hover:shadow-xl">
                            Free 14-day trial
                        </button>
                    </div>

                    {/* No Credit Card Text */}
                    <p className="text-[#4B5563] text-[16px]">
                        No credit cards required
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;