import { FileText, AlertCircle, CreditCard, Clock, Lock, Shield, RefreshCw, Mail } from 'lucide-react'

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-20 bg-gradient-mesh overflow-hidden">
        <div className="section-container text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-medium mb-6">
            <FileText size={16} />
            Legal
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Please read these terms carefully before using our services.
          </p>
          <p className="text-sm text-slate-500 mt-4">Last updated: January 2026</p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="section-narrow space-y-8">

          {/* Agreement to Terms */}
          <div className="card p-8">
            <div className="flex items-start gap-4">
              <div className="icon-box flex-shrink-0">
                <FileText className="w-6 h-6 text-cyan" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">Agreement to Terms</h2>
                <p className="text-slate-600 leading-relaxed">
                  By accessing or using the services provided by Avantia Health Optimization LLC
                  ("Company," "we," "us," or "our"), you agree to be bound by these Terms of Service.
                  If you do not agree to these terms, please do not use our services.
                </p>
              </div>
            </div>
          </div>

          {/* Services Description */}
          <div className="card p-8">
            <div className="flex items-start gap-4">
              <div className="icon-box flex-shrink-0">
                <Shield className="w-6 h-6 text-cyan" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">Services Description</h2>
                <p className="text-slate-600 leading-relaxed">
                  Avantia Health Optimization provides health and wellness coaching services.
                  Our coaches are National Board Certified Health & Wellness Coaches (NBC-HWC).
                  Our services are educational in nature and are not intended to replace medical advice,
                  diagnosis, or treatment from licensed healthcare professionals.
                </p>
              </div>
            </div>
          </div>

          {/* Not Medical Advice */}
          <div className="card p-8 border-l-4 border-l-cyan">
            <div className="flex items-start gap-4">
              <div className="icon-box flex-shrink-0 bg-cyan/10">
                <AlertCircle className="w-6 h-6 text-cyan" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">Not Medical Advice</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  <strong className="text-slate-900">Important:</strong> The information and services provided by Avantia Health
                  Optimization are for educational purposes only and are not intended as medical advice.
                  Our coaches are not licensed medical professionals and do not diagnose, treat, or
                  prescribe for any health condition.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Always consult with a qualified healthcare provider before making changes to your
                  diet, exercise routine, or medication regimen. If you experience any medical
                  emergency, contact your doctor or emergency services immediately.
                </p>
              </div>
            </div>
          </div>

          {/* Payment and Refunds */}
          <div className="card p-8">
            <div className="flex items-start gap-4">
              <div className="icon-box flex-shrink-0">
                <CreditCard className="w-6 h-6 text-cyan" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">Payment and Refunds</h2>
                <p className="text-slate-600 leading-relaxed">
                  Payment is due at the time of service unless otherwise arranged. We offer a
                  30-day money-back guarantee on all coaching programs. If you are not satisfied
                  with our services within the first 30 days, you may request a full refund.
                </p>
              </div>
            </div>
          </div>

          {/* Cancellation Policy */}
          <div className="card p-8">
            <div className="flex items-start gap-4">
              <div className="icon-box flex-shrink-0">
                <Clock className="w-6 h-6 text-cyan" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">Cancellation Policy</h2>
                <p className="text-slate-600 leading-relaxed">
                  We require at least 24 hours notice for session cancellations or rescheduling.
                  Sessions cancelled with less than 24 hours notice may be forfeited or subject
                  to a cancellation fee.
                </p>
              </div>
            </div>
          </div>

          {/* Confidentiality */}
          <div className="card p-8">
            <div className="flex items-start gap-4">
              <div className="icon-box flex-shrink-0">
                <Lock className="w-6 h-6 text-cyan" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">Confidentiality</h2>
                <p className="text-slate-600 leading-relaxed">
                  We treat all client information as confidential. Information shared during
                  coaching sessions will not be disclosed to third parties without your consent,
                  except as required by law or in cases where there is a risk of harm to yourself
                  or others.
                </p>
              </div>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div className="card p-8">
            <div className="flex items-start gap-4">
              <div className="icon-box flex-shrink-0">
                <Shield className="w-6 h-6 text-cyan" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">Limitation of Liability</h2>
                <p className="text-slate-600 leading-relaxed">
                  To the fullest extent permitted by law, Avantia Health Optimization shall not
                  be liable for any indirect, incidental, special, consequential, or punitive
                  damages arising from your use of our services. Our total liability shall not
                  exceed the amount you paid for services.
                </p>
              </div>
            </div>
          </div>

          {/* Changes to Terms */}
          <div className="card p-8">
            <div className="flex items-start gap-4">
              <div className="icon-box flex-shrink-0">
                <RefreshCw className="w-6 h-6 text-cyan" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">Changes to Terms</h2>
                <p className="text-slate-600 leading-relaxed">
                  We reserve the right to modify these terms at any time. We will notify clients
                  of significant changes via email or through our website. Continued use of our
                  services after changes constitutes acceptance of the modified terms.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="card p-8 bg-slate-50">
            <div className="flex items-start gap-4">
              <div className="icon-box-lg flex-shrink-0">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">Contact Information</h2>
                <p className="text-slate-600 leading-relaxed">
                  For questions about these Terms of Service, please contact us at{' '}
                  <a
                    href="mailto:contact@avantiahealthoptimization.com"
                    className="text-cyan hover:underline font-medium"
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
