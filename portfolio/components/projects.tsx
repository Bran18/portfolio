'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Globe, Star } from 'lucide-react'

interface Project {
  title: string
  description: string
  tags: string[]
  stars: number
  link: string
  demoLink?: string
}

const projects: Project[] = [
  {
    title: "SmartSale",
    description: "Streamlines the auction process on EVM. A decentralized platform for efficient and transparent auctions.",
    tags: ["Web3", "DeFi", "Smart Contracts", "TypeScript"],
    stars: 17,
    link: "https://github.com/bitcashorg/smartsale",
    demoLink: "https://bitlauncher.ai/"
  },
  {
    title: "MasterBots",
    description: "Domain-specific AI bots powered by Vercel AI SDK and Wordware with prompt-tuned and fine-tuned bots to give better experiences.",
    tags: ["AI", "Automation", "TypeScript", "AI SDK"],
    stars: 11,
    link: "https://github.com/bitcashorg/masterbots",
    demoLink: "https://masterbots.ai/"
  },
  {
    title: "POC-AI",
    description: "A proof of concept for AI integration, exploring innovative approaches to artificial intelligence implementation and automation.",
    tags: ["AI", "TypeScript", "AI SDK", "RAG"],
    stars: 8,
    link: "https://github.com/Bran18/POC-AI"
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my work in Web3, DeFi, and AI technologies. These projects showcase my commitment to collaborate in innovative solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{project.title}</span>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Star className="w-4 h-4" />
                      <span>{project.stars}</span>
                    </div>
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Code</span>
                    </a>
                    {project.demoLink && (
                      <a 
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Globe className="w-4 h-4" />
                        <span>Live Site</span>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

