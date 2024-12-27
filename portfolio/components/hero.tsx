'use client'

import { motion } from 'framer-motion'
import { Terminal, Github, Cpu } from 'lucide-react'
import { ParticlesBackground } from './particles'
import { SvgText } from './svg-text'

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0" />
      <ParticlesBackground />
      
      <div className="relative z-10 px-4 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="mb-8">
            <img 
              src="https://avatars.githubusercontent.com/u/31634868?v=4" 
              alt="Brandon Fernández"
              className="rounded-full mx-auto border-0 border-[#22d4bf]/50"
              width={150}
              height={150}
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-mono">
            <motion.span 
              className="text-gray-300 inline-block"
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => {
                const particles = (window as any).tsParticles.domItem(0);
                if (particles) {
                  particles.particles.push({
                    position: { x: window.innerWidth / 2, y: window.innerHeight / 2 },
                    color: { value: "#22d4bf" },
                    size: { value: 3 },
                    move: {
                      direction: "none",
                      enable: true,
                      speed: 2,
                      straight: false
                    }
                  });
                }
              }}
            >
              Brandon Fernández_
            </motion.span>
          </h1>
          <p className="text-xl text-[#22d4bf] font-mono mb-4">
            Full Stack Developer | Web3 Enthusiast | Open Source Advocate | AI Innovator
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            Based in San José, Costa Rica 🇨🇷
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap mb-16">
            <motion.a
              href="https://github.com/Bran18"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-lg bg-[#22d4bf] text-primary-foreground font-medium flex items-center gap-2 hover:bg-[#22d4bf]/90 transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub Profile
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium flex items-center gap-2"
            >
              <Cpu className="w-4 h-4" />
              View Projects
            </motion.a>
          </div>
        </motion.div>
      </div>

      <div className="relative z-0 w-full max-w-4xl mx-auto">
        <SvgText />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}

