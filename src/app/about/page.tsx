import { Activity, Apple, Moon, Users, Brain, Shield } from 'lucide-react'
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

  const methodology = [
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
  ]

  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 bg-gradient-mesh">
        <div className="section-narrow text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            The New Gold Standard in <span className="gradient-text">Health Coaching</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600">
            We exist to fill the gap mainstream healthcare ignores.
          </p>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">The Problem We Solve</h2>
          <div className="space-y-5 text-slate-600 leading-relaxed">
            <p>
              Here's the truth: your doctor doesn't have time for you. Not because they don't care,
              but because the healthcare system is broken. The average primary care visit lasts 15-17 minutes.
              That's barely enough time to address your immediate concerns, let alone help you implement
              lasting lifestyle changes.
            </p>
            <p>
              You're told to "eat better and exercise more" — advice that's technically correct
              but practically useless. Where do you start? How do you fit it into your actual life?
              What happens when motivation fades?
            </p>
            <p>
              Meanwhile, insurance covers treatment but not prevention. It pays for the medication after
              you develop a chronic condition, but not the support that could have prevented it in the first place.
            </p>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 mt-8">
              <p className="text-slate-800 font-medium">
                Information isn't the problem. You already know what you should do.
              </p>
              <p className="gradient-text font-semibold mt-1">
                Implementation is the problem — and that's exactly what we solve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership, Not Prescription */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Partnership, Not Prescription</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our approach is built on evidence-based behavior change — not fads, not quick fixes,
              not one-size-fits-all programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-12">
            {methodology.map((item, index) => (
              <div key={index} className="card p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* 6 Pillars */}
          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto border border-slate-100 shadow-soft">
            <p className="text-center text-slate-500 font-medium mb-6 text-sm">Our 6 Pillars Framework</p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {pillars.map((pillar, index) => (
                <div key={index} className="text-center">
                  <div className="icon-box mb-3 mx-auto">
                    <pillar.icon size={22} className="text-cyan" />
                  </div>
                  <p className="text-xs font-medium text-slate-700">{pillar.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certified Professionals */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Certified Professionals</h2>
            <p className="text-lg text-slate-600">
              Not another wellness influencer. Real credentials that matter.
            </p>
          </div>

          {/* NBC-HWC */}
          <div className="card p-8 mb-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">NBC-HWC Certification</h3>
            <p className="text-slate-600 mb-4 leading-relaxed">
              The National Board for Health & Wellness Coaching (NBHWC) credential is the gold standard
              in our field. It's administered in partnership with the National Board of Medical Examiners —
              the same organization that creates the licensing exams for physicians.
            </p>
            <p className="text-slate-600 leading-relaxed">
              This isn't a weekend certification from an Instagram course. It requires accredited training,
              supervised practice hours, and passing a rigorous board examination.
            </p>
          </div>

          {/* Mike Vera */}
          <div className="card p-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan to-green flex items-center justify-center flex-shrink-0">
                <span className="text-3xl font-bold text-white">MV</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-1">Mike Vera, MS, NBC-HWC</h3>
                <p className="text-cyan font-medium mb-4 text-sm">Founder</p>
                <p className="text-slate-600 leading-relaxed">
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
      <section className="relative py-16 md:py-20 bg-slate-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-green/10 rounded-full blur-3xl" />

        <div className="relative section-narrow text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            See If We're a Fit
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            A $1 discovery call is all it takes to find out if we can help.
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
