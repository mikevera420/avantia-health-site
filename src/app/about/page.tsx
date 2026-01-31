import { Activity, Apple, Moon, Users, Brain, Shield, ArrowRight, Award } from 'lucide-react'
import Link from 'next/link'

const BOOKING_URL = 'https://secure.gethealthie.com/appointments/embed_appt?dietitian_id=3464974&require_offering=true&offering_id=229095&hide_package_images=false&primary_color=000000'

export default function AboutPage() {
  const pillars = [
    { icon: Activity, name: 'Physical Activity', color: 'from-cyan-400 to-cyan-500' },
    { icon: Apple, name: 'Nutrition', color: 'from-green-400 to-green-500' },
    { icon: Moon, name: 'Circadian Health', color: 'from-indigo-400 to-indigo-500' },
    { icon: Users, name: 'Social Support', color: 'from-pink-400 to-pink-500' },
    { icon: Brain, name: 'Stress Management', color: 'from-purple-400 to-purple-500' },
    { icon: Shield, name: 'Toxic Exposure', color: 'from-amber-400 to-amber-500' },
  ]

  const methodology = [
    {
      title: 'Evidence-Based Methodology',
      description: "We use proven techniques like motivational interviewing and the transtheoretical model of behavior change. These aren't buzzwords \u2014 they're the same evidence-based approaches used in clinical settings worldwide.",
    },
    {
      title: 'Client-Led Sessions',
      description: "We don't tell you what to do. We work with you to discover what's actually holding you back and help you build strategies that fit your real life \u2014 not some idealized version of it.",
    },
    {
      title: 'Hyper-Personalized Strategies',
      description: 'Every resource, every strategy, every conversation is tailored to your specific situation. What works for a busy executive is different from what works for a new parent.',
    },
    {
      title: 'We Know Our Lane',
      description: "We complement medical care \u2014 we don't replace it. We work within our scope of practice and collaborate with your healthcare team when appropriate.",
    },
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-hero">
        {/* Floating orbs */}
        <div className="orb orb-cyan w-[600px] h-[600px] -top-40 -right-40 opacity-30" />
        <div className="orb orb-green w-[400px] h-[400px] top-1/2 -left-20 opacity-20" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="animate-fade-in-up">
            <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-6">
              Our Philosophy
            </p>
            <h1 className="display-xl text-dark mb-8">
              The New Gold Standard<br />
              <span className="gradient-text">in Health Coaching</span>
            </h1>
            <p className="body-lg max-w-2xl mx-auto">
              We exist to fill the gap mainstream healthcare ignores.
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-dark-muted/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-dark-muted/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="display-md text-dark mb-6">The Problem We Solve</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>
          
          <div className="space-y-8 body-lg">
            <p>
              Here's the truth: your doctor doesn't have time for you. Not because they don't care,
              but because the healthcare system is broken. The average primary care visit lasts 15-17 minutes.
              That's barely enough time to address your immediate concerns, let alone help you implement
              lasting lifestyle changes.
            </p>
            <p>
              You're told to "eat better and exercise more" \u2014 advice that's technically correct
              but practically useless. Where do you start? How do you fit it into your actual life?
              What happens when motivation fades?
            </p>
            <p>
              Meanwhile, insurance covers treatment but not prevention. It pays for the medication after
              you develop a chronic condition, but not the support that could have prevented it in the first place.
            </p>
            <div className="relative pl-8 border-l-4 border-primary/30 py-4">
              <p className="text-dark font-semibold text-xl">
                Information isn't the problem. You already know what you should do.<br />
                <span className="gradient-text">Implementation is the problem</span> \u2014 and that's exactly what we solve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership, Not Prescription */}
      <section className="section-padding bg-gradient-subtle relative">
        <div className="orb orb-cyan w-[500px] h-[500px] top-0 right-0 opacity-10" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="display-md text-dark mb-6">Partnership, Not Prescription</h2>
            <p className="body-lg max-w-3xl mx-auto">
              Our approach is built on evidence-based behavior change \u2014 not fads, not quick fixes,
              not one-size-fits-all programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {methodology.map((item, index) => (
              <div
                key={index}
                className="glass-card rounded-3xl p-8 hover-lift"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-primary to-accent" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-4">{item.title}</h3>
                <p className="body-md">{item.description}</p>
              </div>
            ))}
          </div>

          {/* 6 Pillars */}
          <div className="glass-card rounded-4xl p-10 md:p-14 glow">
            <p className="text-center text-dark-muted font-medium uppercase tracking-wider text-sm mb-10">
              Our 6 Pillars Framework
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {pillars.map((pillar, index) => (
                <div key={index} className="text-center group">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <pillar.icon size={28} className="text-white" />
                  </div>
                  <p className="text-sm font-semibold text-dark">{pillar.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certified Professionals */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="display-md text-dark mb-6">Certified Professionals</h2>
            <p className="body-lg">
              Not another wellness influencer. Real credentials that matter.
            </p>
          </div>

          {/* NBC-HWC */}
          <div className="gradient-border rounded-4xl mb-12">
            <div className="bg-white rounded-4xl p-10 md:p-14">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <Award size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-2">NBC-HWC Certification</h3>
                  <p className="text-primary font-medium">The Gold Standard</p>
                </div>
              </div>
              <div className="space-y-4 body-md">
                <p>
                  The National Board for Health & Wellness Coaching (NBHWC) credential is the gold standard
                  in our field. It's administered in partnership with the National Board of Medical Examiners \u2014
                  the same organization that creates the licensing exams for physicians.
                </p>
                <p>
                  This isn't a weekend certification from an Instagram course. It requires accredited training,
                  supervised practice hours, and passing a rigorous board examination.
                </p>
              </div>
            </div>
          </div>

          {/* Mike Vera */}
          <div className="glass-card rounded-4xl p-10 md:p-14">
            <div className="flex flex-col lg:flex-row gap-10 items-center">
              <div className="w-56 h-56 rounded-3xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 flex items-center justify-center flex-shrink-0 glow">
                <span className="text-7xl font-bold gradient-text">MV</span>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-dark mb-2">Mike Vera, MS, NBC-HWC</h3>
                <p className="text-primary font-semibold mb-6">Founder</p>
                <p className="body-md">
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
      <section className="section-padding bg-gradient-dark relative overflow-hidden">
        <div className="orb orb-cyan w-[600px] h-[600px] -bottom-40 -right-40 opacity-20" />
        <div className="orb orb-green w-[400px] h-[400px] top-0 -left-20 opacity-10" />
        
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="display-md text-white mb-6">See If We're a Fit</h2>
          <p className="body-lg text-white/70 mb-10">
            A $1 discovery call is all it takes to find out if we can help.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center text-lg"
          >
            Book Your $1 Discovery Call
            <ArrowRight size={20} className="ml-2" />
          </a>
          <p className="text-white/50 mt-8 text-sm">
            30-day money-back guarantee on all programs
          </p>
        </div>
      </section>
    </div>
  )
}
