import { ArrowRight, Activity, Apple, Moon, Users, Brain, Shield } from 'lucide-react'
import CTAButton from '@/components/CTAButton'

export default function AboutPage() {
  const pillars = [
    { icon: Activity, name: 'Physical Activity' },
    { icon: Apple, name: 'Nutrition' },
    { icon: Moon, name: 'Circadian Health' },
    { icon: Users, name: 'Social Support' },
    { icon: Brain, name: 'Stress Management' },
    { icon: Shield, name: 'Toxic Exposure' },
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The New Gold Standard in Health Coaching
          </h1>
          <p className="text-xl text-gray-600">
            We exist to fill the gap mainstream healthcare ignores.
          </p>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The Problem We Solve</h2>
          <div className="prose prose-lg text-gray-600 space-y-6">
            <p>
              Here&apos;s the truth: your doctor doesn&apos;t have time for you. Not because they don&apos;t care,
              but because the healthcare system is broken. The average primary care visit lasts 15-17 minutes.
              That&apos;s barely enough time to address your immediate concerns, let alone help you implement
              lasting lifestyle changes.
            </p>
            <p>
              You&apos;re told to &ldquo;eat better and exercise more&rdquo; — advice that&apos;s technically correct
              but practically useless. Where do you start? How do you fit it into your actual life?
              What happens when motivation fades?
            </p>
            <p>
              Meanwhile, insurance covers treatment but not prevention. It pays for the medication after
              you develop a chronic condition, but not the support that could have prevented it in the first place.
            </p>
            <p className="font-medium text-gray-900">
              Information isn&apos;t the problem. You already know what you should do. Implementation is the
              problem — and that&apos;s exactly what we solve.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership, Not Prescription */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Partnership, Not Prescription</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Our approach is built on evidence-based behavior change — not fads, not quick fixes,
            not one-size-fits-all programs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: 'Evidence-Based Methodology',
                description:
                  "We use proven techniques like motivational interviewing and the transtheoretical model of behavior change. These aren't buzzwords — they're the same evidence-based approaches used in clinical settings worldwide.",
              },
              {
                title: 'Client-Led Sessions',
                description:
                  "We don't tell you what to do. We work with you to discover what's actually holding you back and help you build strategies that fit your real life — not some idealized version of it.",
              },
              {
                title: 'Hyper-Personalized Strategies',
                description:
                  'Every resource, every strategy, every conversation is tailored to your specific situation. What works for a busy executive is different from what works for a new parent.',
              },
              {
                title: 'We Know Our Lane',
                description:
                  "We complement medical care — we don't replace it. We work within our scope of practice and collaborate with your healthcare team when appropriate.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          {/* 6 Pillars */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <p className="text-center text-gray-500 font-medium mb-6">Our 6 Pillars Framework</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {pillars.map((pillar, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-3">
                    <pillar.icon size={24} />
                  </div>
                  <p className="text-sm font-medium text-gray-700">{pillar.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certified Professionals */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Certified Professionals</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Not another wellness influencer. Real credentials that matter.
          </p>

          {/* NBC-HWC */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">NBC-HWC Certification</h3>
            <p className="text-gray-600 mb-4">
              The National Board for Health & Wellness Coaching (NBHWC) credential is the gold standard
              in our field. It&apos;s administered in partnership with the National Board of Medical Examiners —
              the same organization that creates the licensing exams for physicians.
            </p>
            <p className="text-gray-600">
              This isn&apos;t a weekend certification from an Instagram course. It requires accredited training,
              supervised practice hours, and passing a rigorous board examination.
            </p>
          </div>

          {/* Mike Vera */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                <span className="text-6xl font-bold text-primary">MV</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-1">Mike Vera, MS, NBC-HWC</h3>
                <p className="text-primary font-medium mb-4">Founder</p>
                <p className="text-gray-600">
                  With research experience at Stanford Medical School and a background in cognitive psychology,
                  Mike founded Avantia to bring evidence-based health coaching to people who are tired of generic
                  advice and quick-fix promises. Our team of certified coaches brings the same rigorous,
                  personalized approach to every client.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">See If We&apos;re a Fit</h2>
          <p className="text-xl text-gray-300 mb-8">
            A $1 discovery call is all it takes to find out if we can help.
          </p>
          <CTAButton />
          <p className="text-gray-400 mt-6 text-sm">
            30-day money-back guarantee on all programs
          </p>
        </div>
      </section>
    </>
  )
}
