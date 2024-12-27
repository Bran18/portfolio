'use client'

import { motion } from 'framer-motion'
import { Github, X, Linkedin, Globe } from 'lucide-react'

export function Contact() {
  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/brandon-fernandez",
      color: "hover:text-blue-500"
    },
    {
      icon: <X className="w-6 h-6" />,
      label: "x.com",
      href: "https://x.com/branfdez_18",
      color: "hover:text-sky-500"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/Bran18",
      color: "hover:text-gray-400"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      label: "OnlyDust",
      href: "https://app.onlydust.com/",
      color: "hover:text-emerald-500"
    }
  ]

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Let's Collaborate</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to collaborating on non-profit projects that aim to create positive social or environmental impact. 
            If you share a similar vision, let's connect!
          </p>
        </motion.div>

        <div className="flex justify-center gap-8 flex-wrap">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex items-center gap-2 p-4 rounded-lg bg-secondary/5 border border-secondary hover:border-primary/50 transition-colors ${link.color}`}
            >
              {link.icon}
              <span>{link.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

