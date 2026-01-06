export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export interface ProcessStep {
  number: number
  title: string
  description: string
  icon: React.ReactNode
}

export interface ContactInfo {
  address: string
  phone: string
  servicePhone: string
  hours: string
}
