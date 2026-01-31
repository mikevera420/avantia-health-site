import { ArrowRight } from 'lucide-react'

const BOOKING_URL = 'https://secure.gethealthie.com/appointments/embed_appt?dietitian_id=3464974&require_offering=true&offering_id=229095&hide_package_images=false&primary_color=000000'

interface CTAButtonProps {
  variant?: 'primary' | 'secondary'
  className?: string
  children?: React.ReactNode
}

export default function CTAButton({ variant = 'primary', className = '', children }: CTAButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200'

  const variants = {
    primary: 'bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-200',
  }

  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children || 'Book Your $1 Discovery Call'}
      <ArrowRight size={18} className="ml-2" />
    </a>
  )
}
