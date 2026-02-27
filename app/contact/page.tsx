import type { Metadata } from "next"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactForm } from "@/components/contact/contact-form"
import { ResponsePromise } from "@/components/contact/response-promise"
import { ContactFaq } from "@/components/contact/contact-faq"
import { ContactCta } from "@/components/contact/contact-cta"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with BrandCraft Co. for custom patches, logo design, printing, and embroidery services. Request a free quote today.",
}

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary py-20 text-primary-foreground lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/60">
              Get in Touch
            </p>
            <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight md:text-5xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
              Have questions about our services? Ready to request a quote? Our team is here to help. Reach out today and let{"'"}s get started.
            </p>
          </div>
        </div>
      </section>

      <ContactInfo />

      {/* Contact Form — side-by-side layout matching homepage */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-5">
            {/* Left copy */}
            <div className="flex flex-col gap-4 lg:col-span-2 lg:sticky lg:top-28">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Send Us a Message
              </p>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-secondary-foreground md:text-4xl">
                Request a Free Quote
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Fill in your project details and our team will get back to you within 24 business hours with a detailed quote. No commitments, no hidden fees.
              </p>
              <div className="mt-2 flex flex-col gap-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/10 text-accent text-xs font-bold">1</span>
                  <span>Fill in your product specifications</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/10 text-accent text-xs font-bold">2</span>
                  <span>Choose your service and backing type</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/10 text-accent text-xs font-bold">3</span>
                  <span>Add your contact information</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/10 text-accent text-xs font-bold">4</span>
                  <span>Upload your design</span>
                </div>
              </div>
            </div>
            {/* Right form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <ResponsePromise />
      <ContactFaq />
      <ContactCta />
    </>
  )
}
