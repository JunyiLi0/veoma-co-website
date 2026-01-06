import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { PromiseSection } from '@/components/sections/PromiseSection'
import { ProcessSteps } from '@/components/sections/ProcessSteps'
import { LogoCloud } from '@/components/sections/LogoCloud'
import { ContactSection } from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PromiseSection />
        <ProcessSteps />
        <LogoCloud />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
