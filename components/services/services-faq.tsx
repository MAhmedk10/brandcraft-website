"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is the minimum order quantity?",
    answer: "We have no minimum order requirement for most of our products. Whether you need 10 patches or 10,000, we can accommodate your order. Some specialty items may have minimum quantities, which will be clearly stated during the quote process.",
  },
  {
    question: "How long does production take?",
    answer: "Standard production time is 2-3 weeks after artwork approval. Rush orders can be completed in as little as 5-7 business days for an additional fee. Complex designs or large quantities may require additional time.",
  },
  {
    question: "Do you offer design services?",
    answer: "Yes! We offer free design assistance with every order. Our experienced design team can help refine your artwork, create mockups, or develop completely new designs from scratch. Vector art conversion and embroidery digitizing services are also available.",
  },
  {
    question: "What file formats do you accept?",
    answer: "We accept most common file formats including AI, EPS, PDF, PNG, JPG, and SVG. Vector files (AI, EPS, PDF) are preferred as they provide the best quality for production. We can also convert raster images to vector format.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, bank transfers, and company purchase orders (for approved accounts). A 50% deposit is required to begin production, with the balance due before shipping.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship worldwide! Shipping costs are calculated based on package weight, dimensions, and destination. We offer various shipping options from economy to express delivery with full tracking.",
  },
  {
    question: "What is your return policy?",
    answer: "We stand behind every product we make. If there are any defects or quality issues with your order, we will replace it at no charge. Since all items are custom-made to your specifications, we cannot accept returns for change of mind.",
  },
  {
    question: "Can you match my brand colors exactly?",
    answer: "Absolutely! We use Pantone color matching to ensure accurate color reproduction. Provide us with your Pantone codes or a physical sample, and we will match your colors precisely. Thread and material limitations may affect some colors.",
  },
]

export function ServicesFaq() {
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
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
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
