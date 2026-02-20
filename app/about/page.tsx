import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Target,
  Eye,
  Gem,
  Users,
  ShieldCheck,
  Lightbulb,
  Scale,
  PenTool,
  Factory,
  Search,
  Gauge,
  BookOpen,
  Award,
  Star,
  TrendingUp,
  Headphones,
  MessageCircle,
  DollarSign,
} from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about BrandCraft Co. — over 20 years of premium custom branding solutions built on craftsmanship and reliability.",
}

const coreValues = [
  {
    icon: Gem,
    title: "Quality First",
    description:
      "We never compromise on materials, craftsmanship, or attention to detail.",
  },
  {
    icon: Users,
    title: "Client-Focused",
    description:
      "Your success is our success. We listen, understand, and deliver solutions tailored to your needs.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    description:
      "You can count on us to deliver on time, every time, with consistent quality.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously invest in new techniques and technology to serve you better.",
  },
  {
    icon: Scale,
    title: "Integrity",
    description:
      "We operate with honesty, transparency, and professionalism in every interaction.",
  },
]

const capabilities = [
  {
    icon: PenTool,
    title: "Design Expertise",
    description:
      "Our design team creates custom logos and artwork optimized for any application\u2014from embroidery to printing to digital use.",
  },
  {
    icon: Factory,
    title: "Manufacturing Excellence",
    description:
      "We operate modern production facilities equipped with precision equipment for patches, printing, and embroidery.",
  },
  {
    icon: Search,
    title: "Quality Control",
    description:
      "Every product is inspected multiple times throughout production to ensure it meets our exacting standards.",
  },
  {
    icon: Gauge,
    title: "Production Flexibility",
    description:
      "Whether you need a single custom item or a large production run, we have the capacity and expertise to deliver.",
  },
  {
    icon: BookOpen,
    title: "Technical Knowledge",
    description:
      "We understand materials, techniques, and applications. We guide clients toward solutions that work best for their specific needs.",
  },
]

const trustFactors = [
  {
    icon: Award,
    title: "20+ Years of Industry Experience",
    description:
      "We've successfully completed thousands of projects across diverse industries. Our experience means we understand your needs and deliver reliable results.",
  },
  {
    icon: Star,
    title: "Premium Quality Standards",
    description:
      "We use only the highest-quality materials and employ precision manufacturing techniques. Quality isn't negotiable.",
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    description:
      "Our clients return to us repeatedly because we deliver on our promises. Our reputation is built on consistent excellence.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "You'll work with a dedicated team that understands your project and is committed to your satisfaction.",
  },
  {
    icon: MessageCircle,
    title: "Transparent Communication",
    description:
      "We keep you informed throughout the process. No surprises\u2014just clear communication and professional service.",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description:
      "Premium quality doesn't have to mean premium pricing. We offer excellent value without compromising quality.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative bg-primary py-20 text-primary-foreground lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/60">
              Our Story
            </p>
            <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight md:text-5xl">
              About Us
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
              Premium Custom Branding Solutions Built on Craftsmanship and Reliability. For over 20 years, we{"'"}ve been the trusted partner for businesses and organizations seeking high-quality custom branding solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/hero-about.jpg"
                alt="BrandCraft Co. manufacturing facility and team at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Our Story
              </h2>
              <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Founded over two decades ago, our company began with a simple mission: to create the highest-quality custom branding products for businesses that demand excellence. What started as a small operation has grown into a trusted manufacturing partner serving hundreds of clients across industries.
                </p>
                <p>
                  Over the past twenty years, we{"'"}ve refined our processes, invested in the best equipment, and built a team of skilled craftspeople dedicated to delivering exceptional results. We{"'"}ve learned that success isn{"'"}t just about producing quality products{"—"}it{"'"}s about building lasting relationships with our clients and understanding their unique branding needs.
                </p>
                <p>
                  Today, we{"'"}re proud to be a leading provider of custom patches, logo design, printing, and embroidery services. But our core values remain unchanged: premium quality, reliable service, and unwavering commitment to our clients{"'"} success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-secondary-foreground md:text-4xl">
              Our Mission & Vision
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {/* Mission */}
            <div className="rounded-lg border border-border bg-card p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <Target className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-card-foreground">
                  Our Mission
                </h3>
              </div>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                To deliver premium custom branding solutions that help businesses build stronger identities and create lasting impressions through exceptional craftsmanship, innovative design, and reliable service.
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-lg border border-border bg-card p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <Eye className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-card-foreground">
                  Our Vision
                </h3>
              </div>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                To be the most trusted partner for custom branding and manufacturing, recognized for our commitment to quality, our expertise, and our dedication to client success.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mt-16">
            <h3 className="text-center font-serif text-2xl font-bold tracking-tight text-secondary-foreground">
              Core Values
            </h3>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {coreValues.map((value) => (
                <div
                  key={value.title}
                  className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-6 text-center"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                    <value.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h4 className="font-semibold text-card-foreground">{value.title}</h4>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise & Craftsmanship */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Our Expertise & Craftsmanship
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our team brings together decades of combined experience in custom manufacturing, design, and production.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.slice(0, 3).map((cap) => (
              <div key={cap.title} className="flex gap-4 rounded-lg border border-border bg-card p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent/10">
                  <cap.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground">{cap.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {cap.description}
                  </p>
                </div>
              </div>
            ))}
            {capabilities.slice(3).map((cap) => (
              <div key={cap.title} className="flex gap-4 rounded-lg border border-border bg-card p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent/10">
                  <cap.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground">{cap.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {cap.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Customers Trust Us */}
      <section className="bg-primary py-20 text-primary-foreground lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
              Why Customers Trust Us
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/70">
              Trust is earned through consistent delivery, quality results, and genuine commitment to client success.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {trustFactors.map((factor) => (
              <div
                key={factor.title}
                className="flex flex-col gap-4 rounded-lg border border-primary-foreground/10 p-6"
              >
                <factor.icon className="h-8 w-8 text-accent" />
                <h3 className="font-serif text-lg font-semibold">
                  {factor.title}
                </h3>
                <p className="text-sm leading-relaxed text-primary-foreground/70">
                  {factor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {"Let's Work Together"}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ready to elevate your brand with premium custom solutions? Get in touch with our team to discuss your project and discover how we can help bring your branding vision to life.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">
                Request a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
