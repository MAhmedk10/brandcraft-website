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
import { Send, CheckCircle2 } from "lucide-react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // In a real app, this would submit to an API
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
      {/* Name and Email row */}
      <div className="grid gap-6 sm:grid-cols-2">
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
      </div>

      {/* Phone and Company row */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">
            Phone Number <span className="text-destructive">*</span>
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="(555) 123-4567"
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

      {/* Service Interest */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="service">
          Service Interest <span className="text-destructive">*</span>
        </Label>
        <Select name="service" required>
          <SelectTrigger className="bg-background">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="patches">Custom Patches</SelectItem>
            <SelectItem value="logo">Logo Design</SelectItem>
            <SelectItem value="printing">Printing Services</SelectItem>
            <SelectItem value="embroidery">Embroidery Services</SelectItem>
            <SelectItem value="other">Other / General Inquiry</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="message">
          Project Description / Message{" "}
          <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
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
