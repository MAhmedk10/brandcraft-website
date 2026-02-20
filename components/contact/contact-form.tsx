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
  "Other / General Inquiry",
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
      className="flex flex-col gap-6 rounded-lg border border-border bg-card p-8"
    >
      {/* --- Your Information --- */}
      <fieldset>
        <legend className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
          Your Information
        </legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="fullName">
              Full Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="fullName"
              name="fullName"
              required
              placeholder="John Smith"
              className="bg-background"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">
              Email Address <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="john@company.com"
              className="bg-background"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="phone">
              Contact Number <span className="text-destructive">*</span>
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="+1 (555) 000-0000"
              className="bg-background"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="company">Company Name</Label>
            <Input
              id="company"
              name="company"
              placeholder="Your company name"
              className="bg-background"
            />
          </div>
        </div>
      </fieldset>

      {/* --- Product Specifications --- */}
      <fieldset>
        <legend className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
          Product Specifications
        </legend>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="flex flex-col gap-2">
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
          <div className="flex flex-col gap-2">
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
          <div className="flex flex-col gap-2">
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

      {/* --- Service & Backing --- */}
      <fieldset>
        <legend className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
          Service Details
        </legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="contact-service">
              Service Interest <span className="text-destructive">*</span>
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
          <div className="flex flex-col gap-2">
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

      {/* --- Upload Design --- */}
      <div className="flex flex-col gap-2">
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

      {/* Message */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="message">
          Project Description / Message
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your project, timeline, and any specific requirements..."
          className="resize-none bg-background"
        />
      </div>

      {/* Newsletter opt-in */}
      <div className="flex items-start gap-3">
        <Checkbox id="newsletter" name="newsletter" className="mt-0.5" />
        <Label htmlFor="newsletter" className="text-sm text-muted-foreground font-normal cursor-pointer">
          {"I'd like to receive updates about our services and special offers"}
        </Label>
      </div>

      {/* Submit */}
      <Button
        type="submit"
        size="lg"
        className="bg-accent text-accent-foreground hover:bg-accent/90"
      >
        <Send className="mr-2 h-4 w-4" />
        Send Message
      </Button>
    </form>
  )
}
