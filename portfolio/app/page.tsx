import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Navigation } from '@/components/navigation'

export default function Home() {
  return (
    <div className="relative">
      <Navigation />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  )
}

