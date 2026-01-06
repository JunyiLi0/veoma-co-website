import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-midnight-blue text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl mb-4">Veoma & Co</h3>
            <p className="font-body text-white/80 max-w-md">
              Une expertise passionnée depuis plus de 10 ans pour l'uniforme professionnel.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body font-bold uppercase tracking-wide text-sm mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/expertise" className="font-body text-white/80 hover:text-muted-gold transition-colors">
                  Expertise
                </Link>
              </li>
              <li>
                <Link href="/boutique" className="font-body text-white/80 hover:text-muted-gold transition-colors">
                  Boutique
                </Link>
              </li>
              <li>
                <Link href="/contact" className="font-body text-white/80 hover:text-muted-gold transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/projet" className="font-body text-white/80 hover:text-muted-gold transition-colors">
                  Démarrer un projet
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-body font-bold uppercase tracking-wide text-sm mb-4">Informations</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/mentions-legales" className="font-body text-white/80 hover:text-muted-gold transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/cgv" className="font-body text-white/80 hover:text-muted-gold transition-colors">
                  CGV
                </Link>
              </li>
              <li>
                <Link href="/faq" className="font-body text-white/80 hover:text-muted-gold transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center md:text-left">
          <p className="font-body text-white/60 text-sm">
            © {new Date().getFullYear()} Veoma & Co. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
