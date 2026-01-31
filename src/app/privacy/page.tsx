import { Shield } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50">
          <div className="floating-orb w-[400px] h-[400px] -top-32 -right-32 opacity-15" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan/10 to-green/10 mb-8">
            <Shield size={32} className="text-cyan" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-500">Last updated: January 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="glass-card rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                Avantia Health Optimization LLC (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy and is committed
                to protecting your personal information. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
                <p className="text-gray-600 mb-4">We may collect information about you in various ways, including:</p>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-cyan mt-2 flex-shrink-0" />
                    <span>
                      <strong className="text-gray-900">Personal Data:</strong> Name, email address, phone number, and other contact
                      information you provide when booking appointments or contacting us.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-cyan mt-2 flex-shrink-0" />
                    <span>
                      <strong className="text-gray-900">Health Information:</strong> Health history, goals, and lifestyle information
                      you share during coaching sessions or through intake forms.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-cyan mt-2 flex-shrink-0" />
                    <span>
                      <strong className="text-gray-900">Usage Data:</strong> Information about how you interact with our website,
                      including IP address, browser type, and pages visited.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
                <p className="text-gray-600 mb-4">We use the information we collect to:</p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-green mt-2 flex-shrink-0" />
                    <span>Provide and improve our health coaching services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-green mt-2 flex-shrink-0" />
                    <span>Communicate with you about appointments and services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-green mt-2 flex-shrink-0" />
                    <span>Send you relevant health and wellness information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-green mt-2 flex-shrink-0" />
                    <span>Respond to your inquiries and support requests</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-green mt-2 flex-shrink-0" />
                    <span>Analyze website usage to improve user experience</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing</h2>
                <p className="text-gray-600 leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties.
                  We may share information with service providers who assist us in operating our
                  business (such as scheduling software and payment processors), but only to the
                  extent necessary for them to provide their services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
                <p className="text-gray-600 leading-relaxed">
                  We implement appropriate security measures to protect your personal information.
                  However, no method of transmission over the Internet or electronic storage is
                  100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
                <p className="text-gray-600 mb-4">You have the right to:</p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-cyan mt-2 flex-shrink-0" />
                    <span>Access the personal information we hold about you</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-cyan mt-2 flex-shrink-0" />
                    <span>Request correction of inaccurate information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-cyan mt-2 flex-shrink-0" />
                    <span>Request deletion of your personal information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-cyan mt-2 flex-shrink-0" />
                    <span>Opt out of marketing communications</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card rounded-2xl p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have questions about this Privacy Policy or our data practices, please
                  contact us at{' '}
                  <a
                    href="mailto:contact@avantiahealthoptimization.com"
                    className="gradient-text font-medium hover:opacity-80 transition-opacity"
                  >
                    contact@avantiahealthoptimization.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
