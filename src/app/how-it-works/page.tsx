import { Video, MessageSquare, FileText, ShieldCheck, CheckCircle2 } from 'lucide-react'
import CTAButton from '@/components/CTAButton'

export default function HowItWorksPage() {
  const steps = [
    {
      number: '01',
      title: 'Discovery Call',
      price: '$1',
      subtitle: 'A low-stakes conversation to see if we\'re a fit.',
      items: [
        'Tell us what you\'re struggling with',
        'We\'ll be honest about whether we can help',
        'This isn\'t a sales pitch — it\'s a real conversation',
      ],
    },
    {
      number: '02',
      title: 'Onboarding',
      subtitle: 'Set the foundation for success.',
      items: [
        'Complete intake paperwork (health history, goals, lifestyle)',
        'We review everything before your first session',
        'Come prepared — we hit the ground running',
      ],
    },
    {
      number: '03',
      title: 'Weekly Coaching Sessions',
      subtitle: 'Where the real work happens.',
      items: [
        'One-on-one video calls with your dedicated coach',
        'Sessions are client-led — we work on what matters to you',
        'Strategies and resources built specifically for your situation',
        'Unlimited messaging between sessions for real-time support',
      ],
    },
    {
      number: '04',
      title: 'Lasting Results',
      subtitle: 'Habits that actually stick.',
      items: [
        'Build habits that stick without constant willpower',
        'Gain clarity on what actually works for your body and life',
        'Many clients continue for 1-2+ years — because it keeps working',
      ],
    },
  ]

  const included = [
    {
      icon: Video,
      title: 'Weekly 1:1 Coaching Sessions',
      description: 'Live video calls with your dedicated coach',
    },
    {
      icon: MessageSquare,
      title: 'Unlimited Messaging Support',
      description: 'Real-time support between sessions',
    },
    {
      icon: FileText,
      title: 'Personalized Resources',
      description: 'Strategies and tools built for your situation',
    },
    {
      icon: ShieldCheck,
      title: '30-Day Money-Back Guarantee',
      description: 'Your commitment is protected',
    },
  ]

  const faqs = [
    {
      question: 'How long are the programs?',
      answer:
        'Our standard program is 12 weeks, but many clients choose to continue longer. Behavior change is a journey, not a destination. We offer flexible options to meet you where you are.',
    },
    {
      question: 'Is this covered by insurance?',
      answer:
        'Most insurance plans don\'t cover health coaching directly. However, some HSA/FSA accounts can be used for our services. We provide documentation if needed for reimbursement requests.',
    },
    {
      question: 'What if it doesn\'t work for me?',
      answer:
        'We offer a 30-day money-back guarantee. If you\'re not seeing value in our work together within the first 30 days, we\'ll refund your investment. No questions asked.',
    },
    {
      question: 'Do you replace my doctor?',
      answer:
        'Absolutely not. We complement medical care, not replace it. We work within our scope of practice as certified health coaches and encourage you to maintain your relationship with your healthcare providers.',
    },
    {
      question: 'How is this different from a nutritionist or personal trainer?',
      answer:
        'Nutritionists focus on what you eat. Personal trainers focus on how you exercise. We focus on the behavior change that makes healthy eating and exercise actually sustainable. We help you build the habits and mindset that make everything else possible.',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50">
          <div className="floating-orb w-[500px] h-[500px] -top-32 -right-32 opacity-20" />
          <div className="floating-orb w-[400px] h-[400px] bottom-0 -left-32 opacity-15" style={{ animationDelay: '-7s' }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="animate-fade-in-up text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 tracking-tight">
            Your Path to
            <br />
            <span className="gradient-text">Lasting Change</span>
          </h1>
          <p className="animate-fade-in-up text-xl md:text-2xl text-gray-600" style={{ animationDelay: '0.1s' }}>
            A clear process. Real support. No guesswork.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="group relative">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-8 top-24 w-0.5 h-full bg-gradient-to-b from-cyan/30 to-transparent" />
                )}

                <div className="flex flex-col md:flex-row gap-8">
                  {/* Number */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-br from-cyan to-green rounded-3xl opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-300" />
                      <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan to-green text-white flex items-center justify-center font-bold text-xl shadow-lg">
                        {step.number}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-3">
                      <h3 className="text-3xl font-bold text-gray-900">{step.title}</h3>
                      {step.price && (
                        <span className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan/10 to-green/10 text-cyan font-semibold text-sm">
                          {step.price}
                        </span>
                      )}
                    </div>
                    <p className="text-xl text-gray-500 mb-6">{step.subtitle}</p>

                    <div className="bg-gray-50 rounded-2xl p-6">
                      <ul className="space-y-4">
                        {step.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="text-green flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-cyan/5 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What&apos;s Included</h2>
            <p className="text-xl text-gray-500">Everything you need for lasting transformation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {included.map((item, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan to-green rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
                <div className="relative bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan/10 to-green/10 mb-6">
                    <item.icon size={28} className="text-cyan" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">{item.title}</h3>
                  <p className="text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-500">Everything you need to know.</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="group">
                <div className="glass-card rounded-2xl p-8 hover:bg-white/80 transition-colors duration-300">
                  <h3 className="font-semibold text-gray-900 mb-4 text-lg flex items-start gap-3">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan/10 to-green/10 flex items-center justify-center flex-shrink-0 text-cyan font-bold text-sm">
                      Q
                    </span>
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed pl-11">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[600px] h-[600px] -top-48 -right-48 rounded-full bg-gradient-to-br from-cyan/20 to-green/20 blur-3xl" />
          <div className="absolute w-[400px] h-[400px] -bottom-32 -left-32 rounded-full bg-gradient-to-br from-green/15 to-cyan/15 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
            Start With One Conversation
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            A $1 discovery call is all it takes to see if we&apos;re right for you.
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
