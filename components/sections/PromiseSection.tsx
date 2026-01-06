'use client'

import { motion } from 'framer-motion'

export function PromiseSection() {
  return (
    <section className="section-spacing bg-off-white">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="font-display text-3xl md:text-5xl text-midnight-blue text-center mb-16"
        >
          Plus qu'un vêtement, une signature
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left - Emphasis */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-6"
          >
            <p className="font-display italic text-xl md:text-2xl text-midnight-blue leading-relaxed">
              "Plus qu'un vêtement de travail, l'uniforme professionnel a la valeur de symbole, tant pour le personnel qui le porte que pour les clients de la société qui l'identifient."
            </p>
            <p className="font-body text-lg text-slate-grey">
              Veoma & Co crée, pour vous, des tenues personnalisées et totalement inédites.
            </p>
          </motion.div>

          {/* Right - Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-body font-bold text-xl text-midnight-blue mb-3">
                Étude personnalisée
              </h3>
              <p className="font-body text-slate-grey">
                Nous sommes à l'écoute de votre histoire, de vos valeurs et du style que vous souhaitez véhiculer. Notre équipe de stylistes vous accompagne dans votre projet de création d'uniformes.
              </p>
            </div>

            <div>
              <h3 className="font-body font-bold text-xl text-midnight-blue mb-3">
                Prototypes sur-mesure
              </h3>
              <p className="font-body text-slate-grey">
                Pour l'élaboration des prototypes, chaque métier de votre personnel est pris avec beaucoup d'intérêt afin d'ajuster vos particularités techniques (ajouts de poches, renforcement de coutures pour badge...).
              </p>
            </div>

            <div>
              <h3 className="font-body font-bold text-xl text-midnight-blue mb-3">
                Accompagnement complet
              </h3>
              <p className="font-body text-slate-grey">
                Ensemble nous participons à la mise en valeur de votre image à travers des planches de tendances, des croquis personnalisés, des tissus dans différentes matières et coloris.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
