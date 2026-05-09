import { Check, Play } from "lucide-react"

interface ProductManufacturingProps {
  steps: string[]
  videoUrl?: string
}

/**
 * Splits a Sanity manufacturing-process string like:
 *   "Design Approval — We create mockups for your review."
 * into a { title, description } pair. Falls back to a description-only
 * item when no separator is present.
 */
function parseStep(step: string): { title?: string; description: string } {
  const separator = step.match(/[—:-]/)
  if (!separator) return { description: step.trim() }

  const idx = step.indexOf(separator[0])
  const rawTitle = step.slice(0, idx).trim()
  const rawDesc = step.slice(idx + 1).trim()

  // If either side is empty, treat the whole thing as a description.
  if (!rawTitle || !rawDesc) return { description: step.trim() }
  return { title: rawTitle, description: rawDesc }
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
            <ul className="flex flex-col gap-6">
              {steps.map((step, index) => {
                const { title, description } = parseStep(step)
                return (
                  <li key={`${step}-${index}`} className="flex gap-4">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10">
                      <Check className="h-3.5 w-3.5 text-accent" />
                    </div>
                    <div>
                      {title ? (
                        <>
                          <h3 className="font-semibold text-secondary-foreground">
                            {title}
                          </h3>
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                            {description}
                          </p>
                        </>
                      ) : (
                        <p className="text-sm leading-relaxed text-secondary-foreground">
                          {description}
                        </p>
                      )}
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
