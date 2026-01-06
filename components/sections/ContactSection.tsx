'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export function ContactSection() {
  return (
    <section className="section-spacing bg-off-white">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            className="font-display text-3xl md:text-5xl text-midnight-blue text-center mb-4"
          >
            Parlons de votre projet
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
            className="font-body text-lg text-slate-grey text-center mb-12"
          >
            Notre équipe est à votre disposition pour répondre à toutes vos questions
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: '-100px' }}
              className="space-y-6"
            >
              {/* Address */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-muted-gold/10 rounded-full flex items-center justify-center text-muted-gold">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-body font-bold text-midnight-blue mb-1">Adresse</h3>
                  <p className="font-body text-slate-grey">
                    10 allée Lydia Becker<br />
                    75018 Paris
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-muted-gold/10 rounded-full flex items-center justify-center text-muted-gold">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-body font-bold text-midnight-blue mb-1">Téléphone</h3>
                  <p className="font-body text-slate-grey">
                    <a href="tel:+33145332417" className="hover:text-muted-gold transition-colors">
                      +33 01 45 33 24 17
                    </a>
                  </p>
                  <p className="font-body text-sm text-slate-grey mt-1">
                    Service clientèle :{' '}
                    <a href="tel:+33622605678" className="hover:text-muted-gold transition-colors">
                      +33 06 22 60 56 78
                    </a>
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-muted-gold/10 rounded-full flex items-center justify-center text-muted-gold">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-body font-bold text-midnight-blue mb-1">Horaires</h3>
                  <p className="font-body text-slate-grey">
                    Du Lundi au Vendredi<br />
                    de 9h à 19h
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, margin: '-100px' }}
              className="bg-white p-8 md:p-12 rounded-lg shadow-lg flex flex-col justify-center items-center text-center"
            >
              <h3 className="font-display text-2xl md:text-3xl text-midnight-blue mb-4">
                Prêt à démarrer votre projet ?
              </h3>
              <p className="font-body text-slate-grey mb-8">
                Décrivez-nous votre projet et recevez une réponse personnalisée sous 48h
              </p>
              <Button variant="primary" size="lg" asChild>
                <Link href="/projet">Démarrer un projet</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
