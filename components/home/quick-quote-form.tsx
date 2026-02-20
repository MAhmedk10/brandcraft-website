"use client"

import { useState, type FormEvent } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Send, Upload, CheckCircle2 } from "lucide-react"

const serviceOptions = [
  "Custom Patches",
  "Logo Design",
  "Screen Printing",
  "Embroidery",
  "PVC / Rubber Patches",
  "Woven Patches",
  "Other",
]

const backingOptions = [
  "Iron-On",
  "Velcro (Hook & Loop)",
  "Sew-On",
  "Adhesive / Sticker",
  "Pin Back",
  "Magnetic",
  "No Backing",
  "Not Sure",
]

export function QuickQuoteForm() {
  const [submitted, setSubmitted] = useState(false)
  const [fileName, setFileName] = useState("")

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // TODO: Wire up to your backend / email service
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
            <CheckCircle2 className="h-8 w-8 text-accent" />
          </div>
          <h2 className="mt-6 font-serif text-3xl font-bold tracking-tight text-foreground">
            Quote Request Received
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Thank you for your interest. Our team will review your request and get back to you within 24 hours with a detailed quote.
          </p>
          <Button
            onClick={() => setSubmitted(false)}
            variant="outline"
            className="mt-8"
          >
            Submit Another Quote
          </Button>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-secondary py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-5">
          {/* Left copy */}
          <div className="flex flex-col gap-4 lg:col-span-2 lg:sticky lg:top-28">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Quick Quote
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Get a Free Quote in Minutes
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Fill in your project details and we will send you a detailed quote
              within 24 hours. No commitments, no hidden fees.
            </p>
            <div className="mt-2 flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                <span>No minimum order required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                <span>Free design assistance included</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                <span>Response within 24 business hours</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-lg border border-border bg-card p-6 shadow-sm lg:col-span-3 lg:p-8"
          >
            {/* Product specs row */}
            <fieldset>
              <legend className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                Product Specifications
              </legend>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="width">Width (inches)</Label>
                  <Input
                    id="width"
                    name="width"
                    type="number"
                    step="0.1"
                    min="0"
                    placeholder="e.g. 3.5"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="height">Height (inches)</Label>
                  <Input
                    id="height"
                    name="height"
                    type="number"
                    step="0.1"
                    min="0"
                    placeholder="e.g. 3.5"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input
                    id="quantity"
                    name="quantity"
                    type="number"
                    min="1"
                    placeholder="e.g. 100"
                    required
                  />
                </div>
              </div>
            </fieldset>

            {/* Service & Backing row */}
            <fieldset className="mt-6">
              <legend className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                Service Details
              </legend>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="service">Service</Label>
                  <Select name="service" required>
                    <SelectTrigger id="service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="backing">Backing Type</Label>
                  <Select name="backing" required>
                    <SelectTrigger id="backing">
                      <SelectValue placeholder="Select backing type" />
                    </SelectTrigger>
                    <SelectContent>
                      {backingOptions.map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </fieldset>

            {/* Contact info */}
            <fieldset className="mt-6">
              <legend className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                Your Information
              </legend>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="quote-name">Full Name</Label>
                  <Input
                    id="quote-name"
                    name="name"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="quote-email">Email Address</Label>
                  <Input
                    id="quote-email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <Label htmlFor="quote-phone">Contact Number</Label>
                  <Input
                    id="quote-phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    required
                  />
                </div>
              </div>
            </fieldset>

            {/* File upload */}
            <div className="mt-6 flex flex-col gap-1.5">
              <Label htmlFor="quote-file">
                Upload Your Design{" "}
                <span className="text-muted-foreground">(optional)</span>
              </Label>
              <label
                htmlFor="quote-file"
                className="flex cursor-pointer items-center gap-3 rounded-md border border-dashed border-border px-4 py-3 text-sm text-muted-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <Upload className="h-4 w-4 shrink-0" />
                <span className="truncate">
                  {fileName || "Click to upload (PNG, JPG, PDF, AI, EPS)"}
                </span>
              </label>
              <input
                id="quote-file"
                name="file"
                type="file"
                accept=".png,.jpg,.jpeg,.pdf,.ai,.eps,.svg"
                className="sr-only"
                onChange={(e) =>
                  setFileName(e.target.files?.[0]?.name ?? "")
                }
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="mt-8 w-full bg-accent text-accent-foreground hover:bg-accent/90 sm:w-auto"
            >
              <Send className="mr-2 h-4 w-4" />
              Request Free Quote
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
