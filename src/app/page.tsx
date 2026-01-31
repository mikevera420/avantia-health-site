import Link from 'next/link'
import { ArrowRight, Star, Award, ShieldCheck, Users, BadgeCheck, Heart } from 'lucide-react'
import CTAButton from '@/components/CTAButton'

const BOOKING_URL = 'https://secure.gethealthie.com/appointments/embed_appt?dietitian_id=3464974&require_offering=true&offering_id=229095&hide_package_images=false&primary_color=000000'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Finally Solve the{' '}
              <span className="text-primary">Consistency Problem</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              You know what to do. Board-certified coaches help you actually do it —
              with personalized support that builds habits that last.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <CTAButton />
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 transition-all"
              >
                See How It Works
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              <div className="flex items-center text-gray-600">
                <div className="flex -space-x-1 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-medium">130+ Five-Star Reviews</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Award size={18} className="mr-2 text-primary" />
                <span className="text-sm font-medium">Board-Certified Coaches</span>
              </div>
              <div className="flex items-center text-gray-600">
                <ShieldCheck size={18} className="mr-2 text-primary" />
                <span className="text-sm font-medium">30-Day Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sound Familiar Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Sound Familiar?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {[
              "I know what I should be doing — I just can't make it stick.",
              "I've tried everything. Diets, apps, gym memberships... nothing lasts.",
              "My doctor says 'eat better and exercise' but doesn't help me actually do it.",
              "I'm overwhelmed by conflicting advice and don't know where to start.",
            ].map((quote, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100"
              >
                <span className="text-4xl text-primary font-serif">&ldquo;</span>
                <p className="text-gray-700 italic">{quote}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl text-gray-900 font-medium mb-2">
              You&apos;re not broken. You don&apos;t lack willpower.
            </p>
            <p className="text-xl text-primary font-semibold">
              You lack the right support.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes This Different */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            What Makes This Different
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Users,
                title: 'True Partnership',
                description:
                  "We don't hand you a plan. We work alongside you to find what actually works for your life.",
              },
              {
                icon: BadgeCheck,
                title: 'Real Credentials',
                description:
                  'Certified through the same board that credentials doctors. Not another wellness influencer.',
              },
              {
                icon: Heart,
                title: 'Personalized to You',
                description:
                  'Every strategy, every resource, every conversation — built around your specific situation.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 text-center shadow-sm border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/how-it-works"
              className="inline-flex items-center text-primary hover:text-primary-dark font-medium transition-colors"
            >
              See How It Works
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              130+ Five-Star Reviews
            </h2>
          </div>

          {/* Google Reviews Widget Placeholder */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Kim',
                  text: 'I have worked with Mike Vera for over five years and know him to be a fan, which coach. He has a professional...',
                },
                {
                  name: 'Natalie',
                  text: 'Mike is truly such a wonderful coach. Highly recommend working with him, you won\'t regret it!',
                },
                {
                  name: 'Cal',
                  text: 'If you are looking for something that works specifically for your health, this is the place. It\'s not cookie...',
                },
              ].map((review, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                      {review.name[0]}
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-gray-900">{review.name}</p>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{review.text}</p>
                  <a
                    href="https://www.google.com/search?q=avantia+health+optimization+reviews"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm mt-4 inline-flex items-center hover:underline"
                  >
                    View on Google
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/results"
              className="inline-flex items-center text-primary hover:text-primary-dark font-medium transition-colors"
            >
              Read More Results
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Unstuck?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start with a $1 discovery call. No pressure, no commitment — just a
            conversation to see if we&apos;re a fit.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-medium bg-primary hover:bg-primary-dark text-white transition-all text-lg"
          >
            Book Your $1 Discovery Call
            <ArrowRight size={20} className="ml-2" />
          </a>
          <p className="text-gray-400 mt-6 text-sm">
            30-day money-back guarantee on all programs
          </p>
        </div>
      </section>
    </>
  )
}
