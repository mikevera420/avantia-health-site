import Link from 'next/link'
import { Mail, MapPin, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center mb-6">
              <span className="text-2xl font-bold tracking-tight">
                <span className="gradient-text">A</span>VANTIA
              </span>
              <span className="text-[10px] text-white/40 ml-2 tracking-widest uppercase">
                Health Optimization
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              Board-certified health coaching that helps you build habits that last.
              We exist to fill the gap mainstream healthcare ignores.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-semibold mb-6 text-sm tracking-wide">Navigate</h4>
            <ul className="space-y-4">
              {['About', 'How It Works', 'Results', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase().replace(/ /g, '-')}`} 
                    className="text-white/50 hover:text-white transition-colors text-sm inline-flex items-center group"
                  >
                    {item}
                    <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="font-semibold mb-6 text-sm tracking-wide">Contact</h4>
            <div className="space-y-4">
              <a
                href="mailto:contact@avantiahealthoptimization.com"
                className="flex items-center text-white/50 hover:text-white transition-colors text-sm group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center mr-3 group-hover:bg-white/10 transition-colors">
                  <Mail size={14} />
                </div>
                contact@avantiahealthoptimization.com
              </a>
              <div className="flex items-start text-white/50 text-sm">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center mr-3 flex-shrink-0">
                  <MapPin size={14} />
                </div>
                <span>
                  Based in South Carolina.<br />
                  Coaching delivered virtually nationwide.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/30 text-xs">
              &copy; {new Date().getFullYear()} Avantia Health Optimization LLC. All rights reserved.
            </p>
            <div className="flex space-x-8">
              <Link href="/privacy" className="text-white/30 hover:text-white/60 transition-colors text-xs">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/30 hover:text-white/60 transition-colors text-xs">
                Terms of Service
              </Link>
            </div>
          </div>
          <p className="text-white/20 text-[10px] mt-8 leading-relaxed max-w-4xl">
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
