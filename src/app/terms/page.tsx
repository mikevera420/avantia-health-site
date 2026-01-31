export default function TermsPage() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

        <div className="prose prose-lg text-gray-600 space-y-6">
          <p className="text-sm text-gray-500">Last updated: January 2026</p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">Agreement to Terms</h2>
          <p>
            By accessing or using the services provided by Avantia Health Optimization LLC
            (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), you agree to be bound by these Terms of Service.
            If you do not agree to these terms, please do not use our services.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">Services Description</h2>
          <p>
            Avantia Health Optimization provides health and wellness coaching services.
            Our coaches are National Board Certified Health & Wellness Coaches (NBC-HWC).
            Our services are educational in nature and are not intended to replace medical advice,
            diagnosis, or treatment from licensed healthcare professionals.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">Not Medical Advice</h2>
          <p>
            <strong>Important:</strong> The information and services provided by Avantia Health
            Optimization are for educational purposes only and are not intended as medical advice.
            Our coaches are not licensed medical professionals and do not diagnose, treat, or
            prescribe for any health condition.
          </p>
          <p>
            Always consult with a qualified healthcare provider before making changes to your
            diet, exercise routine, or medication regimen. If you experience any medical
            emergency, contact your doctor or emergency services immediately.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">Payment and Refunds</h2>
          <p>
            Payment is due at the time of service unless otherwise arranged. We offer a
            30-day money-back guarantee on all coaching programs. If you are not satisfied
            with our services within the first 30 days, you may request a full refund.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">Cancellation Policy</h2>
          <p>
            We require at least 24 hours notice for session cancellations or rescheduling.
            Sessions cancelled with less than 24 hours notice may be forfeited or subject
            to a cancellation fee.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">Confidentiality</h2>
          <p>
            We treat all client information as confidential. Information shared during
            coaching sessions will not be disclosed to third parties without your consent,
            except as required by law or in cases where there is a risk of harm to yourself
            or others.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Avantia Health Optimization shall not
            be liable for any indirect, incidental, special, consequential, or punitive
            damages arising from your use of our services. Our total liability shall not
            exceed the amount you paid for services.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will notify clients
            of significant changes via email or through our website. Continued use of our
            services after changes constitutes acceptance of the modified terms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">Contact Information</h2>
          <p>
            For questions about these Terms of Service, please contact us at{' '}
            <a
              href="mailto:contact@avantiahealthoptimization.com"
              className="text-primary hover:text-primary-dark"
            >
              contact@avantiahealthoptimization.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
