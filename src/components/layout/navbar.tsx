'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="w-full py-4 px-6">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Logo and Brand */}
        <div className="flex items-center gap-2">
          <Image src="/nav-logo.svg" alt="Logo" width={24} height={24} />  
          <span className="text-blue-600 font-semibold text-lg">QrCode Creator</span>
        </div>

        {/* Center Links */}
        <ul className="hidden md:flex gap-8 text-gray-800 font-medium">
          <li><Link href="#">Features</Link></li>
          <li><Link href="#">Pricing</Link></li>
          <li><Link href="#">FAQ</Link></li>
        </ul>

        {/* Right Buttons */}
        <div className="flex gap-4">
          <Link
            href="#"
            className="px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition"
          >
            Login
          </Link>
          <Link
            href="#"
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Signup for free
          </Link>
        </div>
      </nav>
    </header>
  )
}
