"use client"

import { useState, useRef } from "react"
import { Check, Play, Pause } from "lucide-react"

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

export function WhyChooseUs() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  function togglePlay() {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Video */}
          <div className="relative aspect-video overflow-hidden rounded-lg bg-primary/5">
            {/*
              Replace the src below with your video file path, e.g. "/videos/showcase.mp4"
              Place your video file in the /public/videos/ folder.
            */}
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              loop
              muted
              playsInline
              poster="/images/hero-about.jpg"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              // src="/videos/your-video.mp4"
            >
              {/* <source src="/videos/your-video.mp4" type="video/mp4" /> */}
            </video>
            {/* Play / Pause overlay button */}
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              className="absolute inset-0 flex items-center justify-center bg-primary/30 transition-colors hover:bg-primary/40"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform hover:scale-110">
                {isPlaying ? (
                  <Pause className="h-6 w-6" />
                ) : (
                  <Play className="ml-1 h-6 w-6" />
                )}
              </span>
            </button>
          </div>

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
