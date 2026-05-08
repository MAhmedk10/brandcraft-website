import { Check, Play } from "lucide-react"

const differentiators = [
  {
    title: "Premium Materials",
    description:
      "We source only high-grade materials to ensure durability and professional appearance.",
  },
  {
    title: "Skilled Craftsmanship",
    description:
      "Our team combines traditional techniques with modern technology for superior results.",
  },
  {
    title: "Full Design Flexibility",
    description:
      "Custom designs tailored to your exact specifications and brand guidelines.",
  },
  {
    title: "Reliable Delivery",
    description:
      "Consistent timelines and quality across every project, large or small.",
  },
  {
    title: "Professional Support",
    description:
      "Dedicated account support from initial consultation through project completion.",
  },
]

// Replace with YouTube URL when ready (e.g. "https://www.youtube.com/watch?v=...")
const HOME_PROCESS_VIDEO_URL = ""

export function WhyChooseUs() {
  const videoUrl = HOME_PROCESS_VIDEO_URL
  const embedUrl = videoUrl
    .replace("watch?v=", "embed/")
    .replace("youtu.be/", "youtube.com/embed/")

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Video / Placeholder */}
          {videoUrl ? (
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
              className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-lg border border-border bg-card"
              role="img"
              aria-label="Video coming soon"
            >
              <div className="flex flex-col items-center gap-3 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg">
                  <Play className="ml-1 h-6 w-6" />
                </span>
                <p className="text-sm font-semibold text-foreground">
                  Video Coming Soon
                </p>
              </div>
            </div>
          )}

          {/* Content */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                What Sets Us Apart
              </h2>
            </div>
            <ul className="flex flex-col gap-6">
              {differentiators.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <Check className="h-3.5 w-3.5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
