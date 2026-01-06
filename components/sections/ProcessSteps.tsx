'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: 1,
    title: 'Écoute & Analyse',
    description: 'Nous sommes à l\'écoute de votre histoire, de vos valeurs et du style que vous souhaitez véhiculer',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
  {
    number: 2,
    title: 'Création & Design',
    description: 'Planches de tendances, croquis personnalisés, tissus dans différentes matières et coloris',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    number: 3,
    title: 'Prototypage',
    description: 'Chaque métier est pris avec beaucoup d\'intérêt pour ajuster vos particularités techniques',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: 4,
    title: 'Livraison & Suivi',
    description: 'Accompagnement jusqu\'à la livraison finale et suivi de votre satisfaction',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
  },
]

export function ProcessSteps() {
  return (
    <section className="section-spacing bg-white">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="font-display text-3xl md:text-5xl text-midnight-blue text-center mb-4"
        >
          Comment nous travaillons
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: '-100px' }}
          className="font-body text-lg text-slate-grey text-center mb-16 max-w-2xl mx-auto"
        >
          Un processus éprouvé pour transformer votre vision en réalité
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              whileHover={{ y: -8 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-20 h-20 mx-auto mb-6 bg-muted-gold/10 rounded-full flex items-center justify-center text-muted-gold group-hover:bg-muted-gold group-hover:text-white transition-colors duration-base"
              >
                {step.icon}
              </motion.div>

              <div className="w-8 h-8 mx-auto mb-4 bg-midnight-blue text-white rounded-full flex items-center justify-center font-body font-bold">
                {step.number}
              </div>

              <h3 className="font-body font-bold text-xl text-midnight-blue mb-3">
                {step.title}
              </h3>

              <p className="font-body text-slate-grey">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
