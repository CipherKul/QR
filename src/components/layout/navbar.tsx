'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="w-full py-6 px-6 bg-[#FFFFFF]">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Logo and Brand */}
        <div className="flex items-center gap-2">
          <Image src="/nav-logo.svg" alt="Logo" width={24} height={24} />
          <span className="text-[#3A86FF] font-semibold text-lg">QrCode Creator</span>
        </div>

        {/* Center Links */}
        <ul className="hidden md:flex gap-16 text-[#1F2937] font-medium text-[18px]">
          <li><Link href="/">Features</Link></li>
          <li><Link href="/pricing">Pricing</Link></li>
          <li><Link href="#">FAQ</Link></li>
        </ul>

        {/* Right Buttons */}
        <div className="flex gap-4">
          <Link
            href="#"
            className="px-4 py-1.5 border border-[#3A86FF] text-[#3A86FF] rounded-md hover:bg-blue-50 text-[15px]"
          >
            Login
          </Link>
          <Link
            href="#"
            className="px-4 py-1.5 bg-[#3A86FF] text-white rounded-md hover:bg-blue-600 transition text-[15px]"
          >
            Signup for free
          </Link>
        </div>
      </nav>
    </header>
  )
}
