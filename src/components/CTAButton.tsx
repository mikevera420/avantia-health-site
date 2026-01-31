import { ArrowRight } from 'lucide-react'

const BOOKING_URL = 'https://secure.gethealthie.com/appointments/embed_appt?dietitian_id=3464974&require_offering=true&offering_id=229095&hide_package_images=false&primary_color=000000'

interface CTAButtonProps {
  variant?: 'primary' | 'dark'
  size?: 'default' | 'large'
  className?: string
  children?: React.ReactNode
}

export default function CTAButton({
  variant = 'primary',
  size = 'default',
  className = '',
  children
}: CTAButtonProps) {
  const baseStyles = 'group inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200'

  const sizeStyles = {
    default: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-base',
  }

  const variants = {
    primary: 'btn-primary text-white',
    dark: 'bg-white text-slate-900 hover:bg-slate-50 shadow-soft-lg hover:shadow-soft-xl',
  }

  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${sizeStyles[size]} ${variants[variant]} ${className}`}
    >
      {children || 'Book Your $1 Discovery Call'}
      <ArrowRight
        size={18}
        className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
      />
    </a>
  )
}
