import { Clock, CheckCircle, ArrowRight } from "lucide-react"

export function ResponsePromise() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {"We're Here to Help"}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            We understand that timing matters. When you reach out to us, you{"'"}re not just contacting a company{"—"}you{"'"}re connecting with a team of professionals committed to your success.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-6 md:grid-cols-2">
          <div className="flex gap-4 rounded-lg border border-border bg-card p-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
              <Clock className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-card-foreground">Response Guarantee</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                We promise to respond to every inquiry within 24 business hours. Most inquiries receive a response within a few hours.
              </p>
            </div>
          </div>

          <div className="flex gap-4 rounded-lg border border-border bg-card p-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
              <ArrowRight className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-card-foreground">What Happens Next</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                After you submit your inquiry, our team will review your project details. We{"'"}ll reach out to discuss your needs and provide a detailed quote.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
