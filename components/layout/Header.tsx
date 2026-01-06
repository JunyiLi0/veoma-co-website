'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { useState } from 'react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-slate-grey/10 sticky top-0 z-50">
      <nav className="container py-4 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-display font-bold text-midnight-blue">
            Veoma & Co
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/expertise"
              className="font-body font-medium text-sm uppercase tracking-wide text-midnight-blue hover:text-muted-gold transition-colors"
            >
              Expertise
            </Link>
            <Link
              href="/boutique"
              className="font-body font-medium text-sm uppercase tracking-wide text-midnight-blue hover:text-muted-gold transition-colors"
            >
              Boutique
            </Link>
            <Link
              href="/contact"
              className="font-body font-medium text-sm uppercase tracking-wide text-midnight-blue hover:text-muted-gold transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="primary" size="sm" asChild>
              <Link href="/projet">Confiez-nous votre projet</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-midnight-blue"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-slate-grey/10">
            <div className="flex flex-col gap-4">
              <Link href="/expertise" className="font-body text-midnight-blue">
                Expertise
              </Link>
              <Link href="/boutique" className="font-body text-midnight-blue">
                Boutique
              </Link>
              <Link href="/contact" className="font-body text-midnight-blue">
                Contact
              </Link>
              <Button variant="primary" size="sm" className="w-full" asChild>
                <Link href="/projet">Confiez-nous votre projet</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
