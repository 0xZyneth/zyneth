import { Navbar } from '@/components/navbar'
import { BusinessModelSection } from '@/components/sections/business-model'
import { ContactSection } from '@/components/sections/contact'
import { Footer } from '@/components/sections/footer'
import { HeroSection } from '@/components/sections/hero'
import { ProblemSection } from '@/components/sections/problem'
import { RoadmapSection } from '@/components/sections/roadmap'
import { SolutionSection } from '@/components/sections/solution'
import { TeamSection } from '@/components/sections/team'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <BusinessModelSection />
      <RoadmapSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
