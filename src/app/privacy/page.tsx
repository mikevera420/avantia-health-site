export default function PrivacyPage() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

        <div className="prose prose-lg text-gray-600 space-y-6">
          <p className="text-sm text-gray-500">Last updated: January 2026</p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">Introduction</h2>
          <p>
            Avantia Health Optimization LLC (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy and is committed
            to protecting your personal information. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">Information We Collect</h2>
          <p>We may collect information about you in various ways, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Personal Data:</strong> Name, email address, phone number, and other contact
              information you provide when booking appointments or contacting us.
            </li>
            <li>
              <strong>Health Information:</strong> Health history, goals, and lifestyle information
              you share during coaching sessions or through intake forms.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you interact with our website,
              including IP address, browser type, and pages visited.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide and improve our health coaching services</li>
            <li>Communicate with you about appointments and services</li>
            <li>Send you relevant health and wellness information</li>
            <li>Respond to your inquiries and support requests</li>
            <li>Analyze website usage to improve user experience</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">Information Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties.
            We may share information with service providers who assist us in operating our
            business (such as scheduling software and payment processors), but only to the
            extent necessary for them to provide their services.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information.
            However, no method of transmission over the Internet or electronic storage is
            100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt out of marketing communications</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or our data practices, please
            contact us at{' '}
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
