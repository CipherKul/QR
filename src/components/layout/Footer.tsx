import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-24">
      {/* CTA Banner */}
      <div className="max-w-[1420px] mx-auto cta-panel rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between mb-16">
        <div className="text-left mb-6 md:mb-0 p-4 ml-24">
          <h2 className="text-2xl md:text-[38px] font-bold text-[#1F2937] mb-2">Ready to create your QR code?</h2>
          <p className="text-[#4B5563] text-[18px]">
            RecodeQR is the easiest way to create QR codes you can track and edit<br /> anytime.
          </p>
        </div>
        <div className="text-center">
          <button className="bg-white text-blue-600 font-medium px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
            Signup free
          </button>
          <p className="text-white/80 text-sm mt-2">
            Free 14-day trial. No credit<br />card required.
          </p>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Footer Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 mb-16">
          {/* Generate QR codes section */}
          <div>
            <h3 className="text-[#3A86FF] font-medium mb-4">Generate QR codes for</h3>
            <ul className="space-y-2 text-[15px]">
              {['Amazon wishlist', 'Business website', 'Crypto', 'Discord', 'Email', 'Event', 'Eventbrite', 'Facebook', 'Feedback Form'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[#1E2833] hover:text-blue-500 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Second column */}
          <div>
            <h3 className="text-blue-500 font-medium mb-4 opacity-0">Generate QR codes for</h3>
            <ul className="space-y-2 text-[15px]">
              {['Github', 'Google Drive', 'Google Form', 'Google Maps', 'Google Review', 'Instagram', 'Link', 'LinkedIn', 'MeCard'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[#1E2833] hover:text-blue-500 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Third column */}
          <div>
            <h3 className="text-blue-500 font-medium mb-4 opacity-0">Generate QR codes for</h3>
            <ul className="space-y-2 text-[15px]">
              {['PDF', 'Pay Pal', 'Phone', 'Pinterest', 'Random', 'Real estate sign', 'Reddit', 'SMS', 'Telegram'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[#1E2833] hover:text-blue-500 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Fourth column */}
          <div>
            <h3 className="text-blue-500 font-medium mb-4 opacity-0">Generate QR codes for</h3>
            <ul className="space-y-2 text-[15px]">
              {['Text', 'Tik Tock', 'Twitter', 'Wedding album', 'Wedding RSVP', 'Whatsapp', 'Wifi', 'Youtube', 'V Card'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[#1E2833] hover:text-blue-500 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-1 gap-x-8">
            {/* Right subcolumn (Reference) */}
            <div>
              <h3 className="text-blue-500 font-medium mb-4">Reference</h3>
              <ul className="space-y-2 text-[15px]">
                {[
                  'QR codes explained',
                  'How many unique QR codes are there?',
                  'How much data fits in a QR code?',
                  'Using QR codes for Amazon Wishlist',
                  'QR code ideas for teachers',
                  'Create QR codes in Google Sheets'
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className=" hover:text-blue-500 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="border-t border-gray-200 pt-12 pb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="mb-4">
              {/* Logo placeholder - you'll add this */}
              <div className="flex items-center gap-2">
                <Image src="/nav-logo.svg" alt="Logo" width={24} height={24} />
                <span className="text-[#3A86FF] font-semibold text-lg">QrCode Creator</span>
              </div>
            </div>
            <p className="text-[#1E2833] mb-4 text-[15px]">
              RecodeQR is the easiest way to <br />create QR codes you can track and<br /> edit anytime - even after printing or<br /> sharing.
            </p>
            <p className="text-[#1E2833] mb-6 text-[15px]">
              Made in Munich, hosted in the EU
            </p>
            <button className="bg-blue-500 text-white font-medium px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Signup for free
            </button>
          </div>

          {/* Help & Tools Columns */}
          <div className="grid grid-cols-3 ">
            {/* Products Column */}
            <div>
              <h3 className="text-blue-500 font-medium mb-4">Products</h3>
              <ul className="space-y-2 text-[15px]">
                {['Features', 'Usecase', 'Pricing', 'FAQs'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-[#1E2833] hover:text-blue-500 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Help and Legal */}
            <div>
              <h3 className="text-blue-500 font-medium mb-4">Helps and Legal</h3>
              <ul className="space-y-2 text-[15px]">
                {['Terms and Condition', 'Privacy policy', 'Legal Notice', 'Help', 'Support'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-[#1E2833] hover:text-blue-500 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Free tools */}
            <div>
              <h3 className="text-blue-500 font-medium mb-4">Free tools</h3>
              <ul className="space-y-2 text-[15px]">
                {['QR Code Generator', 'QR Code scanner'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-[#1E2833] hover:text-blue-500 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

