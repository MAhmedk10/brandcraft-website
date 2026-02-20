import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does it take to complete an order?",
    answer:
      "Timeline depends on the complexity and quantity of your order. Most projects are completed within 2-4 weeks from design approval. We'll provide a specific timeline with your quote.",
  },
  {
    question: "Do you offer design services if I don't have artwork ready?",
    answer:
      "Yes. Our design team can create custom logos and artwork for your project. Design services are included in most quotes.",
  },
  {
    question: "What's your minimum order quantity?",
    answer:
      "We work with orders of all sizes, from single items to large production runs. Contact us to discuss your specific needs.",
  },
  {
    question: "Can you match my brand colors exactly?",
    answer:
      "Absolutely. We use color matching technology and work closely with you to ensure colors match your brand specifications.",
  },
  {
    question: "What if I'm not satisfied with the final product?",
    answer:
      "Your satisfaction is our priority. We stand behind our work and will work with you to make things right.",
  },
]

export function ContactFaq() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-secondary-foreground md:text-4xl">
            Common Questions
          </h2>
        </div>

        <div className="mt-10">
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
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
