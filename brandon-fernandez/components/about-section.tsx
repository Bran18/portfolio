"use client"

import { useRef, useEffect } from "react"
import { HighlightText } from "@/components/highlight-text"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !contentRef.current) return

    const ctx = gsap.context(() => {
      // Header slide in
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

      // Content fade in
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
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12">
      {/* Section header */}
      <div ref={headerRef} className="mb-24">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">01 / About</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">WHO I AM</h2>
      </div>

      {/* About content */}
      <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        <div>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-6">
            I&apos;m a full stack developer passionate about creating seamless digital experiences. With expertise in
            modern web technologies, I build applications that blend technical excellence with thoughtful design.
          </p>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed">
            My focus is on writing clean, maintainable code and designing systems that scale. I love collaborating on
            projects that push the boundaries of what&apos;s possible on the web.
          </p>
        </div>

        <div>
          <h3 className="font-[var(--font-bebas)] text-2xl md:text-3xl tracking-tight mb-6">
            <HighlightText parallaxSpeed={0.6}>SKILLS</HighlightText>
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Tailwind CSS",
              "PostgreSQL",
              "API Design",
              "Web Performance",
            ].map((skill) => (
              <div key={skill} className="border border-border/30 p-3 font-mono text-xs text-muted-foreground">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
