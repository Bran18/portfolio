"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface GitHubRepo {
  id: number
  name: string
  description: string | null
  url: string
  stars: number
  language: string | null
}

const FEATURED_PROJECTS: GitHubRepo[] = [
  {
    id: 1,
    name: "PACTO P2P",
    description: "Decentralized peer-to-peer network protocol for trustless transactions and collaboration",
    url: "https://github.com/PACTO-LAT/pacto-p2p",
    stars: 0,
    language: "Rust",
  },
  {
    id: 2,
    name: "KindFi",
    description: "DeFi protocol focused on charitable giving and community-driven finance",
    url: "https://github.com/kindfi-org/kindfi",
    stars: 0,
    language: "Solidity",
  },
  {
    id: 3,
    name: "We Love Dogs",
    description: "Community platform for dog lovers to connect, share, and support animal welfare",
    url: "https://github.com/lober-org/welovedogs",
    stars: 0,
    language: "TypeScript",
  },
  {
    id: 4,
    name: "PolkaHub",
    description: "Substrate-based ecosystem hub for building and managing Polkadot parachains",
    url: "https://github.com/lober-org/polkahub",
    stars: 0,
    language: "Rust",
  },
  {
    id: 5,
    name: "Arcadis",
    description: "Immersive gaming experience with blockchain integration and token economics",
    url: "https://github.com/Arcadelis/arcadis",
    stars: 0,
    language: "TypeScript",
  },
  {
    id: 6,
    name: "MasterBots",
    description: "AI-powered bot framework for autonomous agents and intelligent automation",
    url: "https://github.com/bitcashorg/masterbots",
    stars: 0,
    language: "Python",
  },
  {
    id: 7,
    name: "DBoard",
    description: "Real-time dashboard for monitoring and managing distributed systems",
    url: "https://github.com/bitcashorg/dboard",
    stars: 0,
    language: "TypeScript",
  },
  {
    id: 8,
    name: "SmartSale",
    description: "Secure smart contract platform for conducting trustless token sales and IDOs",
    url: "https://github.com/bitcashorg/smartsale",
    stars: 0,
    language: "Solidity",
  },
  {
    id: 9,
    name: "IKnowMusic",
    description: "Music discovery and collaboration platform with web3 integration",
    url: "https://www.iknowmusic.com/demo",
    stars: 0,
    language: "TypeScript",
  },
]

export function GitHubProjects() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(false)
  }, [])

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !gridRef.current) return

    const ctx = gsap.context(() => {
      // Header slide in from left
      gsap.fromTo(
        headerRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      )

      const cards = gridRef.current?.querySelectorAll("article")
      if (cards && cards.length > 0) {
        gsap.set(cards, { y: 60, opacity: 0 })
        gsap.to(cards, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [FEATURED_PROJECTS])

  return (
    <section ref={sectionRef} id="projects" className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12">
      {/* Section header */}
      <div ref={headerRef} className="mb-16 flex items-end justify-between">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">02 / Projects</span>
          <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">FEATURED WORK</h2>
        </div>
        <p className="hidden md:block max-w-xs font-mono text-xs text-muted-foreground text-right leading-relaxed">
          Open source projects and experiments. Check out more on GitHub.
        </p>
      </div>

      {/* Projects grid */}
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {loading ? (
          <div className="col-span-full py-12 text-center">
            <p className="font-mono text-sm text-muted-foreground">Loading projects...</p>
          </div>
        ) : error ? (
          <div className="col-span-full py-12 text-center">
            <p className="font-mono text-sm text-muted-foreground">{error}</p>
          </div>
        ) : FEATURED_PROJECTS.length === 0 ? (
          <div className="col-span-full py-12 text-center">
            <p className="font-mono text-sm text-muted-foreground">No projects found</p>
          </div>
        ) : (
          FEATURED_PROJECTS.map((project) => <ProjectCard key={project.id} repo={project} />)
        )}
      </div>

      {/* View more link */}
      <div className="mt-16 flex justify-center">
        <a
          href="https://github.com/Bran18"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 border border-foreground/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all duration-200"
        >
          View All Projects
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  )
}

function ProjectCard({ repo }: { repo: GitHubRepo }) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLElement>(null)

  return (
    <article
      ref={cardRef}
      className={cn(
        "group relative border border-border/40 p-6 flex flex-col justify-between transition-all duration-500 cursor-pointer overflow-hidden hover:border-accent/60",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background layer */}
      <div
        className={cn(
          "absolute inset-0 bg-accent/5 transition-opacity duration-500",
          isHovered ? "opacity-100" : "opacity-0",
        )}
      />

      {/* Content */}
      <div className="relative z-10">
        {repo.language && (
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{repo.language}</span>
        )}
        <h3
          className={cn(
            "mt-2 font-[var(--font-bebas)] text-2xl tracking-tight transition-colors duration-300 break-words",
            isHovered ? "text-accent" : "text-foreground",
          )}
        >
          {repo.name}
        </h3>

        <p
          className={cn(
            "mt-3 font-mono text-xs text-muted-foreground leading-relaxed transition-all duration-500 line-clamp-2",
            isHovered ? "opacity-100" : "opacity-70",
          )}
        >
          {repo.description}
        </p>
      </div>

      {/* Footer with stars and link */}
      <div className="relative z-10 mt-4 flex items-center justify-between pt-4 border-t border-border/30">
        <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2l-2.81 6.63L2 9.24l5.46 4.73L5.82 21 12 17.27z" />
          </svg>
          {repo.stars}
        </div>
        <a
          href={repo.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "font-mono text-xs uppercase tracking-widest transition-colors duration-200",
            isHovered ? "text-accent" : "text-muted-foreground hover:text-foreground",
          )}
        >
          View →
        </a>
      </div>

      {/* Corner line */}
      <div
        className={cn(
          "absolute top-0 right-0 w-12 h-12 transition-all duration-500",
          isHovered ? "opacity-100" : "opacity-0",
        )}
      >
        <div className="absolute top-0 right-0 w-full h-[1px] bg-accent" />
        <div className="absolute top-0 right-0 w-[1px] h-full bg-accent" />
      </div>
    </article>
  )
}
