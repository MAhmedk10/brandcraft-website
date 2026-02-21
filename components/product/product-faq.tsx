import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { ProductFAQ } from "@/lib/products-data"

interface ProductFAQProps {
  faqs: ProductFAQ[]
}

export function ProductFAQSection({ faqs }: ProductFAQProps) {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-secondary-foreground md:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mt-10">
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="rounded-lg border border-border bg-card px-6"
              >
                <AccordionTrigger className="text-left text-sm font-semibold text-card-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
