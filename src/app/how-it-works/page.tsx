import { Video, MessageSquare, FileText, ShieldCheck } from 'lucide-react'
import CTAButton from '@/components/CTAButton'

export default function HowItWorksPage() {
  const steps = [
    {
      number: '01',
      title: 'Discovery Call ($1)',
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
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Path to Lasting Change
          </h1>
          <p className="text-xl text-gray-600">
            A clear process. Real support. No guesswork.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center font-bold text-xl">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.subtitle}</p>
                  <ul className="space-y-2">
                    {step.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What&apos;s Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {included.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                  <item.icon size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start With One Conversation</h2>
          <p className="text-xl text-gray-300 mb-8">
            A $1 discovery call is all it takes to see if we&apos;re right for you.
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
