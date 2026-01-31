import { Star, ArrowRight } from 'lucide-react'
import YouTubeEmbed from '@/components/YouTubeEmbed'
import CTAButton from '@/components/CTAButton'

export default function ResultsPage() {
  const testimonialVideos = [
    { id: '0-CqH-XbkYg', title: 'Weight Loss Spartanburg SC | Avantia Health Optimization Testimonial' },
    { id: 'BfTfHnITnUc', title: 'Avantia Health Optimization Testimonial' },
    { id: '2ToHljALFKk', title: 'Avantia Health Optimization Testimonial' },
    { id: 'BwIQTtCAWsc', title: 'Avantia Health Optimization Testimonial' },
    { id: 'Q1ENi2EP5jk', title: 'Avantia Health Optimization Testimonial' },
    { id: 'sPrLos3MF24', title: 'Avantia Health Optimization Testimonial' },
    { id: 'GO50UWiKOR0', title: 'Avantia Health Optimization Testimonial' },
  ]

  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 bg-gradient-mesh">
        <div className="section-narrow text-center">
          <span className="badge mb-6">Client Stories</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Real People. <span className="gradient-text">Real Results.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600">
            Don't take our word for it. Hear from people who've been in your shoes.
          </p>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <YouTubeEmbed videoId={testimonialVideos[0].id} title={testimonialVideos[0].title} />
          <p className="text-center text-slate-500 mt-4">
            Hear from our clients about their transformation journey
          </p>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="section-container">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              More Success Stories
            </h2>
            <p className="text-slate-500">Each journey is unique. Each result is real.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonialVideos.slice(1).map((video, index) => (
              <YouTubeEmbed key={index} videoId={video.id} title={video.title} />
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Badge */}
      <section className="py-16 md:py-20 bg-white">
        <div className="section-narrow text-center">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={32} className="text-amber-400 fill-amber-400" />
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            <span className="gradient-text">130+</span> Five-Star Reviews
          </h2>

          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Our clients consistently rate their experience 5 stars on Google.
            We're proud of the relationships we build and the results we help create together.
          </p>

          <a
            href="https://www.google.com/search?q=avantia+health+optimization+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center text-base font-medium text-cyan hover:text-cyan-600 transition-colors"
          >
            View all reviews on Google
            <ArrowRight size={18} className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-20 bg-slate-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-green/10 rounded-full blur-3xl" />

        <div className="relative section-narrow text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Your Story Could Be Next
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Start with a $1 discovery call and see what's possible.
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
