import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="bg-primary py-20 text-primary-foreground lg:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
        <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          Ready to Elevate Your Brand?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/70">
          {"Let's discuss your custom branding project. Our team is ready to help. Get in touch today for a consultation."}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Link href="/contact">
              Request a Free Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
