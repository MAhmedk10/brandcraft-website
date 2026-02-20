import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function ContactCta() {
  return (
    <section className="bg-primary py-20 text-primary-foreground lg:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
        <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
          Ready to Get Started?
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/70">
          {"Don't wait\u2014reach out today and let's discuss how we can help elevate your brand with premium custom solutions."}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Link href="/contact">
              Request a Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <Link href="tel:5551234567">
              <Phone className="mr-2 h-4 w-4" />
              Call Us Today
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
