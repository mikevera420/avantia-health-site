import { Star } from 'lucide-react'
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
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real People. Real Results.
          </h1>
          <p className="text-xl text-gray-600">Don&apos;t take our word for it.</p>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <YouTubeEmbed videoId={testimonialVideos[0].id} title={testimonialVideos[0].title} />
          <p className="text-center text-gray-600 mt-4">
            Hear from our clients about their transformation journey
          </p>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonialVideos.slice(1).map((video, index) => (
              <YouTubeEmbed key={index} videoId={video.id} title={video.title} />
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Badge */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={32} className="text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            130+ Five-Star Reviews
          </h2>
          <p className="text-gray-600 mb-8">
            Our clients consistently rate their experience 5 stars on Google.
            We&apos;re proud of the relationships we build and the results we help create together.
          </p>
          <a
            href="https://www.google.com/search?q=avantia+health+optimization+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-dark font-medium"
          >
            View all reviews on Google &rarr;
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Story Could Be Next</h2>
          <p className="text-xl text-gray-300 mb-8">
            Start with a $1 discovery call and see what&apos;s possible.
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
