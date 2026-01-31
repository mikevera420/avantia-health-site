import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center mb-4">
              <span className="text-xl font-bold">
                <span className="text-primary">A</span>VANTIA
              </span>
              <span className="text-xs text-gray-400 ml-2">HEALTH OPTIMIZATION</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Board-certified health coaching that helps you build habits that last.
              We exist to fill the gap mainstream healthcare ignores.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-gray-400 hover:text-white transition-colors text-sm">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/results" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Results
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:contact@avantiahealthoptimization.com"
                className="flex items-center text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Mail size={16} className="mr-2" />
                contact@avantiahealthoptimization.com
              </a>
              <div className="flex items-start text-gray-400 text-sm">
                <MapPin size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                <span>
                  Based in South Carolina.<br />
                  Coaching delivered virtually nationwide.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Avantia Health Optimization LLC. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
          <p className="text-gray-500 text-xs mt-6">
            The information provided by Avantia Health Optimization is for educational purposes only and is not intended as medical advice.
            Our coaches are National Board Certified Health & Wellness Coaches (NBC-HWC), not licensed medical professionals.
            We do not diagnose, treat, or prescribe for any health condition. Always consult with a qualified healthcare provider
            before making changes to your diet, exercise, or medication regimen.
          </p>
        </div>
      </div>
    </footer>
  )
}
