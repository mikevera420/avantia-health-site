import { Calendar, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

const BOOKING_URL = 'https://secure.gethealthie.com/appointments/embed_appt?dietitian_id=3464974&require_offering=true&offering_id=229095&hide_package_images=false&primary_color=000000'

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50">
          <div className="floating-orb w-[500px] h-[500px] -top-32 -right-32 opacity-20" />
          <div className="floating-orb w-[400px] h-[400px] bottom-0 -left-32 opacity-15" style={{ animationDelay: '-7s' }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="animate-fade-in-up text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 tracking-tight">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="animate-fade-in-up text-xl md:text-2xl text-gray-600" style={{ animationDelay: '0.1s' }}>
            We&apos;re here to help you take the next step.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Book a Call */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan to-green rounded-3xl opacity-20 group-hover:opacity-40 blur transition-opacity duration-300" />
              <div className="relative glass-card rounded-3xl p-10 h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan/10 to-green/10 mb-8">
                  <Calendar size={28} className="text-cyan" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start?</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Book a $1 discovery call and let&apos;s talk. No pressure, no commitment —
                  just a conversation to see if we&apos;re a fit.
                </p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center px-8 py-4 rounded-full text-white font-medium hover:scale-105 transition-transform duration-300"
                >
                  Book Discovery Call
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan to-green rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
              <div className="relative bg-white rounded-3xl p-10 h-full border border-gray-100 shadow-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan/10 to-green/10 mb-8">
                  <Mail size={28} className="text-cyan" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">General Inquiries</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Questions before booking? Reach out anytime and we&apos;ll get back to you within 24 hours.
                </p>
                <a
                  href="mailto:contact@avantiahealthoptimization.com"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full font-medium glass-card hover:bg-white/90 text-gray-900 transition-all duration-300"
                >
                  <Mail size={18} className="mr-2" />
                  Email Us
                </a>
              </div>
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan/10 to-green/10 flex items-center justify-center">
                  <MessageCircle size={20} className="text-cyan" />
                </div>
                <h3 className="font-semibold text-gray-900">Current Clients</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Please use your secure client portal for all communication with your coach.
                If you need help accessing your portal, email us and we&apos;ll assist you.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan/10 to-green/10 flex items-center justify-center">
                  <MapPin size={20} className="text-green" />
                </div>
                <h3 className="font-semibold text-gray-900">Location</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Based in South Carolina. Coaching delivered virtually nationwide.
                All sessions are conducted via secure video conferencing.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan/10 to-green/10 flex items-center justify-center">
                  <Clock size={20} className="text-cyan" />
                </div>
                <h3 className="font-semibold text-gray-900">Response Time</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                We typically respond within 24 hours on business days.
                Discovery calls can usually be scheduled within a few days.
              </p>
            </div>
          </div>

          {/* Direct Email */}
          <div className="mt-16 text-center">
            <p className="text-gray-500 mb-3">Email us directly:</p>
            <a
              href="mailto:contact@avantiahealthoptimization.com"
              className="text-2xl font-medium gradient-text hover:opacity-80 transition-opacity"
            >
              contact@avantiahealthoptimization.com
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
