import { Calendar, Mail, MapPin } from 'lucide-react'

const BOOKING_URL = 'https://secure.gethealthie.com/appointments/embed_appt?dietitian_id=3464974&require_offering=true&offering_id=229095&hide_package_images=false&primary_color=000000'

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-600">We&apos;re here to help you take the next step.</p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Book a Call */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-6">
                <Calendar size={24} />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Start?</h2>
              <p className="text-gray-600 mb-6">
                Book a $1 discovery call and let&apos;s talk. No pressure, no commitment —
                just a conversation to see if we&apos;re a fit.
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium bg-primary hover:bg-primary-dark text-white transition-all"
              >
                Book Discovery Call
              </a>
            </div>

            {/* Email */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-6">
                <Mail size={24} />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">General Inquiries</h2>
              <p className="text-gray-600 mb-6">
                Questions before booking? Reach out anytime and we&apos;ll get back to you within 24 hours.
              </p>
              <a
                href="mailto:contact@avantiahealthoptimization.com"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium bg-white hover:bg-gray-100 text-gray-900 border border-gray-200 transition-all"
              >
                <Mail size={18} className="mr-2" />
                Email Us
              </a>
            </div>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Current Clients</h3>
              <p className="text-gray-600 text-sm">
                Please use your secure client portal for all communication with your coach.
                If you need help accessing your portal, email us and we&apos;ll assist you.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <MapPin size={18} className="mr-2 text-primary" />
                Location
              </h3>
              <p className="text-gray-600 text-sm">
                Based in South Carolina. Coaching delivered virtually nationwide.
                All sessions are conducted via secure video conferencing.
              </p>
            </div>
          </div>

          {/* Direct Email */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-2">Email us directly:</p>
            <a
              href="mailto:contact@avantiahealthoptimization.com"
              className="text-primary hover:text-primary-dark font-medium text-lg"
            >
              contact@avantiahealthoptimization.com
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
