import Image from "next/image";

const MidSection = () => {
  return (
    <div className="flex flex-col max-w-[1460px] mx-auto px-4">
      {/* Header */}
      <section className="text-center mt-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-2 text-[#1F2937]">How do I generate a QR code?</h2>
        <p className="text-[#4B5563] text-base md:text-lg">
          Follow these three simple steps to create your own QR code:
        </p>
      </section>

      {/* Three-Step Process */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-3 text-center gap-10">
        <div>
          <Image
            src="/images/qrtype.png"
            alt="Select QR code type"
            width={293}
            height={236}
            className="mx-auto mb-4 rounded-xl"
          />
          <h3 className="text-xl font-semibold mb-4 text-[#1F2937]">Select QR code type</h3>
          <p className="text-[#4B5563] text-base">
            Choose what your code should do (link<br />to a site, show some text, share contact<br /> info, etc.).
            Pick dynamic if you want<br /> tracking and editing.
          </p>
        </div>

        {/* Step 2 */}
        <div>
          <Image
            src="/images/fill.png"
            alt="Fill in the details"
            width={293}
            height={236}
            className="mx-auto mb-4 rounded-xl"
          />
          <h3 className="text-xl font-semibold mb-4 text-[#1F2937]">Fill in the details</h3>
          <p className="text-[#4B5563] text-base">
            Enter the website link, contact details,<br /> or whatever else is needed.
            You can also<br /> customize the design so it matches your<br /> brand.
          </p>

          {/* Generate Button */}
          <button className="mt-8 bg-[#3A86FF] text-white py-3 px-6 rounded-lg">
            Generate QR Code
          </button>
          <p className="text-gray-500 text-sm mt-2">Static codes are free. No<br /> sign up required.</p>
        </div>

        {/* Step 3 */}
        <div>
          <Image
            src="/images/share.png"
            alt="Download and share"
            width={293}
            height={236}
            className="mx-auto mb-4 rounded-xl"
          />
          <h3 className="text-xl font-semibold mb-4 text-[#1F2937]">Download and share</h3>
          <p className="text-[#4B5563] text-base">
            Download the finished QR code in a<br /> high-quality format (PNG, SVG, PDF)<br /> ready for print or digital use.
          </p>
        </div>
      </section>

      {/* Static vs Dynamic QR Codes Section */}
      <section className="bg-[#ECF3FF] py-16 px-6 md:px-12 rounded-3xl mt-24 w-full max-w-[calc(100%+2rem)] -mx-4 md:max-w-[calc(100%+4rem)] md:-mx-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 text-[#1F2937]">
            Should I pick static or dynamic QR codes?
          </h2>
          <p className="text-gray-600 text-lg">
            Static codes are permanent, while dynamic codes are flexible.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 mb-12 max-w-5xl mx-auto">
          {/* Static QR Codes Box */}
          <div className="flex-1 bg-gradient-to-l from-[#3A86FF] via-[#ffffff] to-[#3A86FF] p-8 rounded-3xl shadow-lg" style={{
            backgroundImage: `
            linear-gradient(to left, #3A86FF, #FFFFFF, #3A86FF),
             url('/images/side-angle.svg')`,
            backgroundBlendMode: 'overlay',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}>
            <h3 className="text-[18px] font-bold mb-6 text-[#1F2937] text-center">Static QR Codes</h3>
            <ul className="space-y-5 text-base text-gray-700">
              <li className="flex items-center gap-4">
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <span
                  className="text-[#4B5563] text-[16px] font-[500]"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    lineHeight: '100%',
                    letterSpacing: '1.09px',
                    verticalAlign: 'middle',
                    // Cap height adjustment
                    padding: '0',
                    marginTop: '-0.14em', // Adjusts for cap height
                    marginBottom: '-0.14em', // Balances the top margin
                    display: 'block'
                  }}
                >Free and permanent</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <span
                  className="text-[#4B5563] text-[16px] font-[500]"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    lineHeight: '100%',
                    letterSpacing: '1.09px',
                    verticalAlign: 'middle',
                    // Cap height adjustment
                    padding: '0',
                    marginTop: '-0.14em', // Adjusts for cap height
                    marginBottom: '-0.14em', // Balances the top margin
                    display: 'block'
                  }}
                >Can&#39;t change after downloading</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg>
                </div>
                <span
                  className="text-[#4B5563] text-[16px] font-[500]"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    lineHeight: '100%',
                    letterSpacing: '1.09px',
                    verticalAlign: 'middle',
                    // Cap height adjustment
                    padding: '0',
                    marginTop: '-0.14em', // Adjusts for cap height
                    marginBottom: '-0.14em', // Balances the top margin
                    display: 'block'
                  }}
                >No scan tracking</span>
              </li>
            </ul>
          </div>

          {/* Dynamic QR Codes Box */}
          <div className="flex-1 bg-gradient-to-l from-[#3A86FF] via-[#ffffff] to-[#3A86FF] p-8 rounded-3xl shadow-lg" style={{
            backgroundImage: `
            linear-gradient(to left, #3A86FF, #FFFFFF, #3A86FF),
             url('/images/side-angle.svg')`,
            backgroundBlendMode: 'overlay',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}>
            <h3 className="text-[18px] font-bold mb-6 text-[#1F2937] text-center">Dynamic QR Codes</h3>
            <ul className="space-y-5 text-base text-gray-700">
              <li className="flex items-center gap-4">
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span
                  className="text-[#4B5563] text-[16px] font-[500]"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    lineHeight: '100%',
                    letterSpacing: '1.09px',
                    verticalAlign: 'middle',
                    // Cap height adjustment
                    padding: '0',
                    marginTop: '-0.14em', // Adjusts for cap height
                    marginBottom: '-0.14em', // Balances the top margin
                    display: 'block'
                  }}
                >Try free for 14 days</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </div>
                <span
                  className="text-[#4B5563] text-[16px] font-[500]"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    lineHeight: '100%',
                    letterSpacing: '1.09px',
                    verticalAlign: 'middle',
                    // Cap height adjustment
                    padding: '0',
                    marginTop: '-0.14em', // Adjusts for cap height
                    marginBottom: '-0.14em', // Balances the top margin
                    display: 'block'
                  }}
                >Edit anytime, even after printing</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <span
                  className="text-[#4B5563] text-[16px] font-[500]"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    lineHeight: '100%',
                    letterSpacing: '1.09px',
                    verticalAlign: 'middle',
                    // Cap height adjustment
                    padding: '0',
                    marginTop: '-0.14em', // Adjusts for cap height
                    marginBottom: '-0.14em', // Balances the top margin
                    display: 'block'
                  }}
                >Track scans and analyze usage</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <span
                  className="text-[#4B5563] text-[16px] font-[500]"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    lineHeight: '100%',
                    letterSpacing: '1.09px',
                    verticalAlign: 'middle',
                    // Cap height adjustment
                    padding: '0',
                    marginTop: '-0.14em', // Adjusts for cap height
                    marginBottom: '-0.14em', // Balances the top margin
                    display: 'block'
                  }}
                >
                  Full customization, domains, and more
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-[#3A86FF] text-white font-medium px-8 py-3 rounded-lg shadow-md transition-colors">
            Try dynamic for free
          </button>
          <p className="text-[16px] text-gray-600 mt-3">
            Free 14-day trial. No<br /> credit card required.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MidSection;
