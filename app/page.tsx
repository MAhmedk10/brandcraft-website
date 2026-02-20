import { HeroSection } from "@/components/home/hero-section"
import { TrustSection } from "@/components/home/trust-section"
import { ServicesOverview } from "@/components/home/services-overview"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { ProcessSection } from "@/components/home/process-section"
import { PortfolioSection } from "@/components/home/portfolio-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CtaSection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ServicesOverview />
      <WhyChooseUs />
      <ProcessSection />
      <PortfolioSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  )
}
