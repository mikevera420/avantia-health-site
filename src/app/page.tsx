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
      {/* Hero Section - Full Viewport */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50">
          <div className="floating-orb w-[600px] h-[600px] -top-40 -right-40 opacity-30" />
          <div className="floating-orb w-[500px] h-[500px] -bottom-32 -left-32 opacity-20" style={{ animationDelay: '-5s' }} />
          <div className="floating-orb w-[300px] h-[300px] top-1/2 left-1/4 opacity-15" style={{ animationDelay: '-10s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
              <Sparkles size={16} className="text-cyan" />
              <span className="text-sm font-medium text-gray-700">Board-Certified Health Coaching</span>
            </div>

            {/* Main Headline */}
            <h1 className="animate-fade-in-up text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 tracking-tight leading-[1.1]" style={{ animationDelay: '0.1s' }}>
              Finally Solve the
              <br />
              <span className="gradient-text">Consistency Problem</span>
            </h1>

            {/* Subheadline */}
            <p className="animate-fade-in-up text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed" style={{ animationDelay: '0.2s' }}>
              You know what to do. Board-certified coaches help you actually do it —
              with personalized support that builds habits that last.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center mb-16" style={{ animationDelay: '0.3s' }}>
              <CTAButton size="large" />
              <Link
                href="/how-it-works"
                className="group inline-flex items-center justify-center px-8 py-4 rounded-full font-medium glass-card hover:bg-white/90 text-gray-900 transition-all duration-300"
              >
                See How It Works
                <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="animate-fade-in-up flex flex-wrap justify-center gap-8 md:gap-12" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-700">130+ Five-Star Reviews</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Award size={20} className="text-cyan" />
                <span className="text-sm font-medium">Board-Certified Coaches</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <ShieldCheck size={20} className="text-green" />
                <span className="text-sm font-medium">30-Day Guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-gray-400 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Sound Familiar Section */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Sound Familiar?
            </h2>
            <p className="text-xl text-gray-500">You&apos;re not alone in this struggle.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
            {painPoints.map((quote, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-green/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative glass-card rounded-2xl p-8">
                  <span className="text-5xl gradient-text font-serif leading-none">&ldquo;</span>
                  <p className="text-gray-700 text-lg italic mt-2">{quote}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center max-w-2xl mx-auto">
            <p className="text-2xl text-gray-900 font-medium mb-3">
              You&apos;re not broken. You don&apos;t lack willpower.
            </p>
            <p className="text-2xl font-semibold gradient-text">
              You lack the right support.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes This Different */}
      <section className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan/5 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Makes This Different
            </h2>
            <p className="text-xl text-gray-500">A fundamentally different approach to lasting change.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {differentiators.map((feature, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan to-green rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <div className="relative bg-white rounded-3xl p-10 h-full shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan/10 to-green/10 mb-8">
                    <feature.icon size={32} className="text-cyan" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/how-it-works"
              className="group inline-flex items-center text-lg font-medium gradient-text transition-all"
            >
              See How It Works
              <ArrowRight size={20} className="ml-2 text-cyan transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={32} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              130+ Five-Star Reviews
            </h2>
          </div>

          <div className="max-w-5xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="group relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan to-green rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan to-green text-white flex items-center justify-center font-bold text-lg">
                        {review.name[0]}
                      </div>
                      <div className="ml-4">
                        <p className="font-semibold text-gray-900">{review.name}</p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{review.text}</p>
                    <a
                      href="https://www.google.com/search?q=avantia+health+optimization+reviews"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-cyan text-sm mt-6 font-medium hover:underline"
                    >
                      View on Google
                      <ArrowRight size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/results"
              className="group inline-flex items-center text-lg font-medium gradient-text transition-all"
            >
              Read More Results
              <ArrowRight size={20} className="ml-2 text-cyan transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800" />

        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[600px] h-[600px] -top-48 -right-48 rounded-full bg-gradient-to-br from-cyan/20 to-green/20 blur-3xl" />
          <div className="absolute w-[400px] h-[400px] -bottom-32 -left-32 rounded-full bg-gradient-to-br from-green/15 to-cyan/15 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
            Ready to Get Unstuck?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Start with a $1 discovery call. No pressure, no commitment — just a
            conversation to see if we&apos;re a fit.
          </p>
          <CTAButton variant="dark" size="large" />
          <p className="text-gray-400 mt-8 text-sm">
            30-day money-back guarantee on all programs
          </p>
        </div>
      </section>
    </>
  )
}
