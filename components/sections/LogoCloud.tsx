'use client'

import { motion } from 'framer-motion'

const clients = [
  'Hôtel Le Meurice',
  'Restaurant Gastronomique',
  'Société de Sécurité Prestige',
  'Compagnie Air Élégance',
  'Groupe Hôtelier Luxe',
  'Centre de Beauté & Spa',
  'Corporate Business Solutions',
  'Réseau Restauration Rapide',
]

export function LogoCloud() {
  return (
    <section className="section-spacing bg-midnight-blue text-white">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="font-display text-3xl md:text-5xl text-center mb-16"
        >
          Ils nous font confiance
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true, margin: '-100px' }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <div className="h-32 flex items-center justify-center text-center p-6 border-2 border-white/10 rounded-lg hover:border-muted-gold transition-colors duration-base">
                <p className="font-display text-muted-gold text-lg group-hover:text-white transition-colors duration-base">
                  {client}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-4xl mx-auto text-center"
        >
          <blockquote className="font-display italic text-2xl md:text-3xl text-white/90 mb-6">
            "Veoma & Co a su capturer l'essence de notre établissement tout en fournissant des tenues résistantes et élégantes pour nos 150 employés."
          </blockquote>
          <p className="font-body text-muted-gold">
            — Directeur des Opérations, Groupe Hôtelier Luxe
          </p>
        </motion.div>
      </div>
    </section>
  )
}
