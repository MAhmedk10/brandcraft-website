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
import { Textarea } from "@/components/ui/textarea"
import { Send, Upload, CheckCircle2, Loader2 } from "lucide-react"
import { serviceOptions, backingOptions } from "@/lib/form-constants"

interface ProductQuoteFormProps {
  serviceTitle: string
  productSlug?: string
}

export function ProductQuoteForm({ serviceTitle, productSlug }: ProductQuoteFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [fileName, setFileName] = useState("")
  const [fileError, setFileError] = useState("")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    
    // Validate file upload is present
    const formData = new FormData(e.currentTarget)
    const file = formData.get("file") as File | null
    if (!file || file.size === 0) {
      setFileError("Please upload your design file")
      return
    }
    setFileError("")
    
    setLoading(true)
    setError("")

    try {
      const formData = new FormData(e.currentTarget)
      if (productSlug) {
        formData.append("productSlug", productSlug)
      }
      const res = await fetch("/api/quote", { method: "POST", body: formData })
      const data = await res.json()

      if (res.status === 429) {
        setError(
          "Too many requests. Please wait before submitting again."
        )
        return
      }

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.")
        return
      }

      setSubmitted(true)
    } catch {
      setError("Network error. Please check your connection and try again.")
    } finally {
      setLoading(false)
    }
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
            Thank you for your interest in {serviceTitle}. Our team will review your request and get back to you within 24 hours with a detailed quote.
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
          <div className="flex flex-col gap-4 lg:col-span-2 lg:sticky lg:top-28">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Free Quote
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Get Your {serviceTitle} Quote
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

          <form
            onSubmit={handleSubmit}
            className="rounded-lg border border-border bg-card p-6 shadow-sm lg:col-span-3 lg:p-8"
          >
            <fieldset>
              <legend className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                Product Specifications
              </legend>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="pq-width">Width (inches)</Label>
                  <Input id="pq-width" name="width" type="number" step="0.1" min="0" placeholder="e.g. 3.5" required />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="pq-height">Height (inches)</Label>
                  <Input id="pq-height" name="height" type="number" step="0.1" min="0" placeholder="e.g. 3.5" required />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="pq-quantity">Quantity</Label>
                  <Input id="pq-quantity" name="quantity" type="number" min="1" placeholder="e.g. 100" required />
                </div>
              </div>
            </fieldset>

            <fieldset className="mt-6">
              <legend className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                Service Details
              </legend>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="pq-service">
                    Service <span className="text-destructive">*</span>
                  </Label>
                  <Select name="service" defaultValue={serviceTitle} required>
                    <SelectTrigger id="pq-service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((opt) => (
                        <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="pq-backing">Backing Type</Label>
                  <Select name="backing" required>
                    <SelectTrigger id="pq-backing">
                      <SelectValue placeholder="Select backing type" />
                    </SelectTrigger>
                    <SelectContent>
                      {backingOptions.map((opt) => (
                        <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </fieldset>

            <fieldset className="mt-6">
              <legend className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                Your Information
              </legend>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="pq-name">
                    Full Name <span className="text-destructive">*</span>
                  </Label>
                  <Input id="pq-name" name="name" placeholder="John Doe" required />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="pq-email">
                    Email Address <span className="text-destructive">*</span>
                  </Label>
                  <Input id="pq-email" name="email" type="email" placeholder="john@company.com" required />
                </div>
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <Label htmlFor="pq-phone">
                    Contact Number <span className="text-destructive">*</span>
                  </Label>
                  <Input id="pq-phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" required />
                </div>
              </div>
            </fieldset>

            {/* File upload - REQUIRED */}
            <div className="mt-6 flex flex-col gap-1.5">
              <Label htmlFor="pq-file">
                Upload Your Design <span className="text-destructive">*</span>
              </Label>
              <label
                htmlFor="pq-file"
                className={`flex cursor-pointer items-center gap-3 rounded-md border border-dashed px-4 py-3 text-sm transition-colors hover:border-accent hover:text-accent ${
                  fileError ? "border-destructive text-destructive" : "border-border text-muted-foreground"
                }`}
              >
                <Upload className="h-4 w-4 shrink-0" />
                <span className="truncate">
                  {fileName || "Click to upload (PNG, JPG, PDF, AI, EPS)"}
                </span>
              </label>
              <input
                id="pq-file"
                name="file"
                type="file"
                accept=".png,.jpg,.jpeg,.pdf,.ai,.eps,.svg"
                className="sr-only"
                onChange={(e) => {
                  setFileName(e.target.files?.[0]?.name ?? "")
                  setFileError("")
                }}
              />
              {fileError && (
                <p className="text-sm text-destructive">{fileError}</p>
              )}
            </div>

            {/* Project Description - REQUIRED */}
            <div className="mt-6 flex flex-col gap-1.5">
              <Label htmlFor="pq-message">
                Project Description <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="pq-message"
                name="message"
                rows={4}
                required
                placeholder="Tell us about your project, timeline, and any specific requirements..."
                className="resize-none"
              />
            </div>

            {error && (
              <p className="mt-4 text-sm text-destructive">{error}</p>
            )}

            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="mt-8 w-full bg-accent text-accent-foreground hover:bg-accent/90 sm:w-auto"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Request Free Quote
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
