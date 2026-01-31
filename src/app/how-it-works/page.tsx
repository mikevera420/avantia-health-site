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
      title: 'Weekly Coaching',
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
      title: 'Weekly 1:1 Sessions',
      description: 'Live video calls with your dedicated coach',
    },
    {
      icon: MessageSquare,
      title: 'Unlimited Messaging',
      description: 'Real-time support between sessions',
    },
    {
      icon: FileText,
      title: 'Personalized Resources',
      description: 'Strategies and tools built for you',
    },
    {
      icon: ShieldCheck,
      title: '30-Day Guarantee',
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
      <section className="pt-16 pb-16 md:pt-24 md:pb-20 bg-gradient-mesh">
        <div className="section-narrow text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Your Path to <span className="gradient-text">Lasting Change</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600">
            A clear process. Real support. No guesswork.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="card p-6 md:p-8">
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Number */}
                  <div className="flex-shrink-0">
                    <div className="step-number">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900">{step.title}</h3>
                      {step.price && (
                        <span className="badge text-xs">
                          {step.price}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-500 mb-5">{step.subtitle}</p>

                    <ul className="space-y-3">
                      {step.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <CheckCircle2 size={18} className="text-green flex-shrink-0 mt-0.5" />
                          <span className="text-slate-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">What's Included</h2>
            <p className="text-lg text-slate-500">Everything you need for lasting transformation.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {included.map((item, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="icon-box mb-4 mx-auto">
                  <item.icon size={24} className="text-cyan" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2 text-sm md:text-base">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-500">Everything you need to know.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card p-6">
                <h3 className="font-semibold text-slate-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-20 bg-slate-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-36 h-36 sm:w-72 sm:h-72 bg-green/10 rounded-full blur-3xl" />

        <div className="relative section-narrow text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start With One Conversation
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            A $1 discovery call is all it takes to see if we're right for you.
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
