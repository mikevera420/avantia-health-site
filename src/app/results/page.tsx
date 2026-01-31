import { Star, ArrowRight, Play } from 'lucide-react'
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
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50">
          <div className="floating-orb w-[500px] h-[500px] -top-32 -right-32 opacity-20" />
          <div className="floating-orb w-[400px] h-[400px] bottom-0 -left-32 opacity-15" style={{ animationDelay: '-7s' }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
            <Play size={16} className="text-cyan" />
            <span className="text-sm font-medium text-gray-700">Client Stories</span>
          </div>

          <h1 className="animate-fade-in-up text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 tracking-tight" style={{ animationDelay: '0.1s' }}>
            Real People.
            <br />
            <span className="gradient-text">Real Results.</span>
          </h1>
          <p className="animate-fade-in-up text-xl md:text-2xl text-gray-600" style={{ animationDelay: '0.2s' }}>
            Don&apos;t take our word for it. Hear from people who&apos;ve been in your shoes.
          </p>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-8 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <YouTubeEmbed videoId={testimonialVideos[0].id} title={testimonialVideos[0].title} />
          <p className="text-center text-gray-500 mt-6 text-lg">
            Hear from our clients about their transformation journey
          </p>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              More Success Stories
            </h2>
            <p className="text-xl text-gray-500">Each journey is unique. Each result is real.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialVideos.slice(1).map((video, index) => (
              <div key={index} className="transform hover:scale-[1.02] transition-transform duration-300">
                <YouTubeEmbed videoId={video.id} title={video.title} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Badge */}
      <section className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-yellow-50/50 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Floating stars animation */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute -inset-4 bg-yellow-400/20 rounded-full blur-xl" />
              <div className="relative flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={48}
                    className="text-yellow-400 fill-yellow-400 transform hover:scale-110 transition-transform duration-300"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            <span className="gradient-text">130+</span> Five-Star Reviews
          </h2>

          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Our clients consistently rate their experience 5 stars on Google.
            We&apos;re proud of the relationships we build and the results we help create together.
          </p>

          <a
            href="https://www.google.com/search?q=avantia+health+optimization+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center text-lg font-medium gradient-text"
          >
            View all reviews on Google
            <ArrowRight size={20} className="ml-2 text-cyan transition-transform duration-300 group-hover:translate-x-1" />
          </a>
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
            Your Story Could Be Next
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Start with a $1 discovery call and see what&apos;s possible.
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
