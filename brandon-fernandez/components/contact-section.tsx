"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Header slide in
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          x: -60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      }

      // Content fade up
      if (contentRef.current) {
        gsap.from(contentRef.current, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      }

      // Footer fade in
      if (footerRef.current) {
        gsap.from(footerRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/30"
    >
      {/* Section header */}
      <div ref={headerRef} className="mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">03 / Contact</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">GET IN TOUCH</h2>
      </div>

      {/* Contact content */}
      <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-24">
        <div>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-8">
            I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out if
            you&apos;d like to collaborate or just say hello.
          </p>

          <div className="space-y-6">
            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">Email</h4>
              <a
                href="mailto:andreyfdez18@gmail.com"
                className="font-mono text-sm text-foreground hover:text-accent transition-colors duration-200"
              >
                andreyfdez18@gmail.com
              </a>
            </div>

            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
                X / Twitter
              </h4>
              <a
                href="https://twitter.com/branfdez_18"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-foreground hover:text-accent transition-colors duration-200"
              >
                @branfdez_18
              </a>
            </div>

            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">LinkedIn</h4>
              <a
                href="https://linkedin.com/in/brandonfdez18"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-foreground hover:text-accent transition-colors duration-200"
              >
                linkedin.com/in/brandonfdez18
              </a>
            </div>

            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
                Open Source
              </h4>
              <a
                href="https://app.onlydust.com/u/Bran18"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-foreground hover:text-accent transition-colors duration-200"
              >
                OnlyDust Profile
              </a>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-[var(--font-bebas)] text-3xl md:text-4xl tracking-tight mb-6">
            Let&apos;s build something great together.
          </h3>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed">
            Whether you have a specific project in mind or just want to explore possibilities, I&apos;d love to chat.
            Let&apos;s connect and create something meaningful.
          </p>
        </div>
      </div>

      {/* Bottom footer */}
      <div
        ref={footerRef}
        className="pt-8 border-t border-border/20 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
          © 2025 Brandon. All rights reserved.
        </p>
        <p className="font-mono text-[10px] text-muted-foreground">Designed with precision. Built with passion.</p>
      </div>
    </section>
  )
}
