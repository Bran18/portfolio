'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold font-mono"
          >
            <span className="text-primary">&gt;_</span> Portfolio
          </motion.a>
          
          <div className="hidden md:flex items-center gap-8">
            {['Projects', 'About', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.05 }}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="md:hidden px-4 py-4 border-t"
        >
          {['Projects', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}

