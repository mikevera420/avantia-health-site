import Link from 'next/link'
import { Mail, MapPin, ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center mb-4">
              <span className="text-xl font-bold">
                <span className="text-cyan">A</span>VANTIA
              </span>
              <span className="text-xs text-slate-400 ml-2 font-medium tracking-wide">HEALTH OPTIMIZATION</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Board-certified health coaching that helps you build habits that last.
              We exist to fill the gap mainstream healthcare ignores.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Navigate</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="group inline-flex items-center text-slate-400 hover:text-white transition-colors text-sm">
                  About
                  <ArrowRight size={14} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="group inline-flex items-center text-slate-400 hover:text-white transition-colors text-sm">
                  How It Works
                  <ArrowRight size={14} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link href="/results" className="group inline-flex items-center text-slate-400 hover:text-white transition-colors text-sm">
                  Results
                  <ArrowRight size={14} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="group inline-flex items-center text-slate-400 hover:text-white transition-colors text-sm">
                  Contact
                  <ArrowRight size={14} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:contact@avantiahealthoptimization.com"
                className="flex items-center text-slate-400 hover:text-cyan transition-colors text-sm"
              >
                <Mail size={16} className="mr-2 flex-shrink-0" />
                contact@avantiahealthoptimization.com
              </a>
              <div className="flex items-start text-slate-400 text-sm">
                <MapPin size={16} className="mr-2 mt-0.5 flex-shrink-0 text-green" />
                <span>
                  Based in South Carolina.<br />
                  Coaching delivered virtually nationwide.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © 2026 Avantia Health Optimization LLC. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
          <p className="text-slate-500 text-xs mt-6 leading-relaxed">
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
