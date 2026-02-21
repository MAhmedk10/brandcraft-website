"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
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

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [fileName, setFileName] = useState("")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-lg border border-border bg-card p-12 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
          <CheckCircle2 className="h-8 w-8 text-accent" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-card-foreground">
          Thank You!
        </h3>
        <p className="max-w-md text-muted-foreground">
          {"We'll review your message and respond within 24 business hours. We appreciate your interest in BrandCraft Co."}
        </p>
        <Button
          variant="outline"
          className="mt-4"
          onClick={() => setSubmitted(false)}
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 rounded-lg border border-border bg-card p-6 lg:p-8"
    >
      {/* 1 — Product Specifications (matches homepage order) */}
      <fieldset>
        <legend className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
          Product Specifications
        </legend>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="contact-width">Width (inches)</Label>
            <Input
              id="contact-width"
              name="width"
              type="number"
              step="0.1"
              min="0"
              placeholder="e.g. 3.5"
              className="bg-background"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="contact-height">Height (inches)</Label>
            <Input
              id="contact-height"
              name="height"
              type="number"
              step="0.1"
              min="0"
              placeholder="e.g. 3.5"
              className="bg-background"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="contact-quantity">Quantity</Label>
            <Input
              id="contact-quantity"
              name="quantity"
              type="number"
              min="1"
              placeholder="e.g. 100"
              className="bg-background"
            />
          </div>
        </div>
      </fieldset>

      {/* 2 — Service Details (matches homepage order) */}
      <fieldset>
        <legend className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
          Service Details
        </legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="contact-service">
              Service <span className="text-destructive">*</span>
            </Label>
            <Select name="service" required>
              <SelectTrigger id="contact-service" className="bg-background">
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
            <Label htmlFor="contact-backing">Backing Type</Label>
            <Select name="backing">
              <SelectTrigger id="contact-backing" className="bg-background">
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

      {/* 3 — Your Information (matches homepage order) */}
      <fieldset>
        <legend className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
          Your Information
        </legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="contact-name">
              Full Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="contact-name"
              name="name"
              required
              placeholder="John Doe"
              className="bg-background"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="contact-email">
              Email Address <span className="text-destructive">*</span>
            </Label>
            <Input
              id="contact-email"
              name="email"
              type="email"
              required
              placeholder="john@company.com"
              className="bg-background"
            />
          </div>
          <div className="flex flex-col gap-1.5 sm:col-span-2">
            <Label htmlFor="contact-phone">
              Contact Number <span className="text-destructive">*</span>
            </Label>
            <Input
              id="contact-phone"
              name="phone"
              type="tel"
              required
              placeholder="+1 (555) 000-0000"
              className="bg-background"
            />
          </div>
        </div>
      </fieldset>

      {/* 4 — File upload */}
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="contact-file">
          Upload Your Design{" "}
          <span className="text-muted-foreground font-normal">(optional)</span>
        </Label>
        <label
          htmlFor="contact-file"
          className="flex cursor-pointer items-center gap-3 rounded-md border border-dashed border-border bg-background px-4 py-3 text-sm text-muted-foreground transition-colors hover:border-accent hover:text-accent"
        >
          <Upload className="h-4 w-4 shrink-0" />
          <span className="truncate">
            {fileName || "Click to upload (PNG, JPG, PDF, AI, EPS)"}
          </span>
        </label>
        <input
          id="contact-file"
          name="file"
          type="file"
          accept=".png,.jpg,.jpeg,.pdf,.ai,.eps,.svg"
          className="sr-only"
          onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
        />
      </div>

      {/* 5 — Message */}
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="contact-message">
          Project Description / Message
        </Label>
        <Textarea
          id="contact-message"
          name="message"
          rows={4}
          placeholder="Tell us about your project, timeline, and any specific requirements..."
          className="resize-none bg-background"
        />
      </div>

      {/* Newsletter opt-in */}
      <div className="flex items-start gap-3">
        <Checkbox id="contact-newsletter" name="newsletter" className="mt-0.5" />
        <Label htmlFor="contact-newsletter" className="cursor-pointer text-sm font-normal text-muted-foreground">
          {"I'd like to receive updates about our services and special offers"}
        </Label>
      </div>

      {/* Submit */}
      <Button
        type="submit"
        size="lg"
        className="bg-accent text-accent-foreground hover:bg-accent/90 sm:w-auto"
      >
        <Send className="mr-2 h-4 w-4" />
        Send Message
      </Button>
    </form>
  )
}
