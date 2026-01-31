'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'

const BOOKING_URL = 'https://secure.gethealthie.com/appointments/embed_appt?dietitian_id=3464974&require_offering=true&offering_id=229095&hide_package_images=false&primary_color=000000'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span className="text-xl font-bold text-slate-900">
              <span className="text-cyan">A</span>VANTIA
            </span>
            <span className="hidden sm:block text-xs text-slate-500 ml-2 font-medium tracking-wide">HEALTH OPTIMIZATION</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-slate-600 hover:text-slate-900 transition-colors font-medium text-sm">
              About
            </Link>
            <Link href="/how-it-works" className="text-slate-600 hover:text-slate-900 transition-colors font-medium text-sm">
              How It Works
            </Link>
            <Link href="/results" className="text-slate-600 hover:text-slate-900 transition-colors font-medium text-sm">
              Results
            </Link>
            <Link href="/contact" className="text-slate-600 hover:text-slate-900 transition-colors font-medium text-sm">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center text-white px-5 py-2.5 rounded-full font-semibold text-sm"
            >
              Book Discovery Call
              <ArrowRight size={16} className="ml-1.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-100 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                href="/about"
                className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/how-it-works"
                className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="/results"
                className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Results
              </Link>
              <Link
                href="/contact"
                className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-white px-5 py-3 rounded-full font-semibold text-center mt-2"
              >
                Book Your $1 Discovery Call
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
