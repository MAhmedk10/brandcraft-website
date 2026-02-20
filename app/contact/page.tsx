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

      {/* Contact Form */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-secondary-foreground md:text-4xl">
              Send Us a Message
            </h2>
            <p className="mt-4 text-muted-foreground">
              Fill out the form below and we{"'"}ll get back to you as soon as possible.
            </p>
          </div>
          <div className="mt-10">
            <ContactForm />
          </div>
        </div>
      </section>

      <ResponsePromise />
      <ContactFaq />
      <ContactCta />
    </>
  )
}
