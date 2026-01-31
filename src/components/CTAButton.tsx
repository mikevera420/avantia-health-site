import { ArrowRight } from 'lucide-react'

const BOOKING_URL = 'https://secure.gethealthie.com/appointments/embed_appt?dietitian_id=3464974&require_offering=true&offering_id=229095&hide_package_images=false&primary_color=000000'

interface CTAButtonProps {
  variant?: 'primary' | 'secondary' | 'dark'
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
  const baseStyles = 'group inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full'

  const sizeStyles = {
    default: 'px-8 py-4 text-base',
    large: 'px-10 py-5 text-lg',
  }

  const variants = {
    primary: 'btn-primary text-white hover:scale-105 hover:shadow-2xl',
    secondary: 'glass-card text-gray-900 hover:bg-white/90',
    dark: 'bg-white text-gray-900 hover:bg-gray-100 hover:scale-105 shadow-lg hover:shadow-xl',
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
        size={size === 'large' ? 20 : 18}
        className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
      />
    </a>
  )
}
