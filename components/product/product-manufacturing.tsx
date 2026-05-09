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

  if (!steps || steps.length === 0) return null

  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Video / Placeholder */}
          {hasVideo ? (
            <div className="overflow-hidden rounded-lg">
              <iframe
                src={embedUrl}
                title="Manufacturing process video"
                className="aspect-video w-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div
              className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-lg border border-border bg-card"
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

          {/* Content */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-secondary-foreground md:text-4xl">
                Manufacturing Process
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                A transparent look at how we produce your order from start to finish.
              </p>
            </div>
            <ul className="flex flex-col gap-4">
              {steps.map((step, index) => (
                <li
                  key={`${step}-${index}`}
                  className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Check className="h-3 w-3" aria-hidden="true" />
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
