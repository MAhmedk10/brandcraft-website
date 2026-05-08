import { Check, Play } from "lucide-react"

interface ProductManufacturingProps {
  steps: string[]
  videoUrl?: string
}

export function ProductManufacturing({ steps, videoUrl }: ProductManufacturingProps) {
  const hasVideo = !!videoUrl && videoUrl.trim() !== ""
  const embedUrl = hasVideo
    ? videoUrl!
        .replace("watch?v=", "embed/")
        .replace("youtu.be/", "youtube.com/embed/")
    : ""

  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-secondary-foreground md:text-4xl">
              Manufacturing Process
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A transparent look at how we produce your order from start to finish.
            </p>
          </div>
          <div className="flex flex-col gap-0">
            {steps.map((step, index) => (
              <div key={step} className="relative flex gap-4 pb-8 last:pb-0">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-[13px] top-7 h-full w-px bg-border" />
                )}
                {/* Step indicator */}
                <div className="relative z-10 mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <p className="pt-0.5 text-sm leading-relaxed text-secondary-foreground">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Manufacturing process video / placeholder */}
        <div className="mt-12">
          {hasVideo ? (
            <div className="overflow-hidden rounded-lg">
              <iframe
                src={embedUrl}
                title="Manufacturing process video"
                className="w-full aspect-video rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div
              className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-lg border border-accent/40 bg-card"
              role="img"
              aria-label="Production process video coming soon"
            >
              <div className="flex flex-col items-center gap-3 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg">
                  <Play className="ml-1 h-6 w-6" />
                </span>
                <p className="font-serif text-lg font-semibold text-foreground">
                  Watch Our Production Process
                </p>
                <p className="text-sm text-muted-foreground">Video coming soon</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
