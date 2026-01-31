import Link from 'next/link'
import { ArrowRight, Star, Award, ShieldCheck, Users, BadgeCheck, Heart, Sparkles } from 'lucide-react'
import CTAButton from '@/components/CTAButton'

export default function Home() {
  const painPoints = [
    "I know what I should be doing — I just can't make it stick.",
    "I've tried everything. Diets, apps, gym memberships... nothing lasts.",
    "My doctor says 'eat better and exercise' but doesn't help me actually do it.",
    "I'm overwhelmed by conflicting advice and don't know where to start.",
  ]

  const differentiators = [
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
  ]

  const reviews = [
    {
      name: 'Kim',
      text: 'I have worked with Mike Vera for over five years and know him to be a fantastic coach. He has a professional...',
    },
    {
      name: 'Natalie',
      text: "Mike is truly such a wonderful coach. Highly recommend working with him, you won't regret it!",
    },
    {
      name: 'Cal',
      text: "If you are looking for something that works specifically for your health, this is the place. It's not cookie...",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-gradient-mesh">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="animate-fade-in-up">
              <span className="badge mb-6">
                <Sparkles size={16} />
                Board-Certified Health Coaching
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="animate-fade-in-up delay-100 text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-[1.1]">
              Finally Solve the
              <br />
              <span className="gradient-text">Consistency Problem</span>
            </h1>

            {/* Subheadline */}
            <p className="animate-fade-in-up delay-200 text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              You know what to do. Board-certified coaches help you actually do it —
              with personalized support that builds habits that last.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <CTAButton size="large" />
              <Link
                href="/how-it-works"
                className="group inline-flex items-center justify-center px-6 py-3 rounded-full font-medium bg-white border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200"
              >
                See How It Works
                <ArrowRight size={18} className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="animate-fade-in-up delay-400 flex flex-wrap justify-center gap-6 md:gap-10">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-medium text-slate-600">130+ Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={18} className="text-cyan" />
                <span className="text-sm font-medium text-slate-600">Board-Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-green" />
                <span className="text-sm font-medium text-slate-600">30-Day Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sound Familiar Section */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="section-container">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Sound Familiar?
            </h2>
            <p className="text-lg text-slate-500">You're not alone in this struggle.</p>
          </div>

          {/* Quote Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-10">
            {painPoints.map((quote, index) => (
              <div key={index} className="quote-card">
                <span className="quote-mark">"</span>
                <p className="text-slate-700 italic pl-2">{quote}</p>
              </div>
            ))}
          </div>

          {/* Empathy Statement */}
          <div className="text-center bg-white rounded-2xl p-8 max-w-2xl mx-auto border border-slate-100 shadow-soft">
            <p className="text-xl text-slate-800 font-medium mb-2">
              You're not broken. You don't lack willpower.
            </p>
            <p className="text-xl font-semibold gradient-text">
              You lack the right support.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes This Different */}
      <section className="py-16 md:py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              What Makes This Different
            </h2>
            <p className="text-lg text-slate-500">A fundamentally different approach to lasting change.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
            {differentiators.map((feature, index) => (
              <div key={index} className="feature-card text-center">
                <div className="icon-box mb-5 mx-auto">
                  <feature.icon size={26} className="text-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/how-it-works"
              className="group inline-flex items-center text-base font-medium text-cyan hover:text-cyan-600 transition-colors"
            >
              See How It Works
              <ArrowRight size={18} className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="section-container">
          <div className="text-center mb-10">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={28} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              130+ Five-Star Reviews
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
            {reviews.map((review, index) => (
              <div key={index} className="review-card">
                <div className="flex items-center mb-4">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-cyan to-green text-white flex items-center justify-center font-semibold text-lg">
                    {review.name[0]}
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-slate-900">{review.name}</p>
                    <div className="flex mt-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} className="text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{review.text}</p>
                <a
                  href="https://www.google.com/search?q=avantia+health+optimization+reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-cyan text-sm mt-4 font-medium hover:text-cyan-600 transition-colors"
                >
                  View on Google
                  <ArrowRight size={14} className="ml-1" />
                </a>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/results"
              className="group inline-flex items-center text-base font-medium text-cyan hover:text-cyan-600 transition-colors"
            >
              See More Results
              <ArrowRight size={18} className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-16 md:py-20 bg-slate-900 overflow-hidden">
        {/* Subtle gradient accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-green/10 rounded-full blur-3xl" />

        <div className="relative section-narrow text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Unstuck?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto">
            Start with a $1 discovery call. No pressure, no commitment — just a
            conversation to see if we're a fit.
          </p>
          <CTAButton variant="dark" size="large" />
          <p className="text-slate-400 mt-6 text-sm">
            30-day money-back guarantee on all programs
          </p>
        </div>
      </section>
    </>
  )
}
