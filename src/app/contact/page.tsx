import { Calendar, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

const BOOKING_URL = 'https://secure.gethealthie.com/appointments/embed_appt?dietitian_id=3464974&require_offering=true&offering_id=229095&hide_package_images=false&primary_color=000000'

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-16 md:pt-24 md:pb-20 bg-gradient-mesh">
        <div className="section-narrow text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600">
            We're here to help you take the next step.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Book a Call */}
            <div className="card p-8">
              <div className="icon-box mb-6">
                <Calendar size={24} className="text-cyan" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Ready to Start?</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Book a $1 discovery call and let's talk. No pressure, no commitment —
                just a conversation to see if we're a fit.
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-full text-white font-semibold"
              >
                Book Discovery Call
              </a>
            </div>

            {/* Email */}
            <div className="card p-8">
              <div className="icon-box mb-6">
                <Mail size={24} className="text-cyan" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">General Inquiries</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Questions before booking? Reach out anytime and we'll get back to you within 24 hours.
              </p>
              <a
                href="mailto:contact@avantiahealthoptimization.com"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              >
                <Mail size={18} className="mr-2" />
                Email Us
              </a>
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
                  <MessageCircle size={18} className="text-cyan" />
                </div>
                <h3 className="font-semibold text-slate-900">Current Clients</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Please use your secure client portal for all communication with your coach.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-green/10 flex items-center justify-center">
                  <MapPin size={18} className="text-green" />
                </div>
                <h3 className="font-semibold text-slate-900">Location</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Based in South Carolina. Coaching delivered virtually nationwide.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
                  <Clock size={18} className="text-cyan" />
                </div>
                <h3 className="font-semibold text-slate-900">Response Time</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                We typically respond within 24 hours on business days.
              </p>
            </div>
          </div>

          {/* Direct Email */}
          <div className="mt-12 bg-slate-50 rounded-xl p-8 border border-slate-100 text-center">
            <p className="text-slate-600 mb-2 text-sm">Email us directly:</p>
            <a
              href="mailto:contact@avantiahealthoptimization.com"
              className="text-xl font-semibold text-cyan hover:text-cyan-600 transition-colors"
            >
              contact@avantiahealthoptimization.com
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
