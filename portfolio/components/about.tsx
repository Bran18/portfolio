'use client'

import { motion } from 'framer-motion'
import { Code2, Globe, HeartHandshake } from 'lucide-react'

export function About() {
  const focusAreas = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Empowering Communities",
      description: "Designing solutions for DAOs and DeFi projects that drive meaningful change and empower users."
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Innovative Tech",
      description: "Combining modern Web2 development with scalable Web3 apps that integrate the potential of AI and decentralization."
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: "Real-World Impact",
      description: "Building tools and platforms that matter—fostering innovation, solving real-world problems, and driving change through technology."
    }
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Philosophy</h2>
          <p className="text-xl text-primary font-mono">"You can just ship things"</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg bg-secondary/5 border border-secondary hover:border-primary/50 transition-colors"
            >
              <div className="mb-4 text-primary">{area.icon}</div>
              <h3 className="text-xl font-bold mb-2">{area.title}</h3>
              <p className="text-muted-foreground">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

