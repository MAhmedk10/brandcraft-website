import { defineType, defineField, defineArrayMember } from "sanity"

/**
 * Product schema — mirrors the ProductData interface in lib/products-data.ts.
 *
 * Conditional groups:
 *  - Group A (patch-only): patchOptions, backingOptions
 *      visible/required only when isPatchProduct === true
 *  - Group B (non-patch): customizationImage, customizationSpecs
 *      visible only when isPatchProduct !== true
 *
 * `hidden` callbacks use the document parent so editors only see relevant fields.
 */
export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  groups: [
    { name: "core", title: "Core", default: true },
    { name: "content", title: "Content" },
    { name: "patch", title: "Patch Options" },
    { name: "customization", title: "Customization" },
    { name: "social", title: "Social Proof" },
    { name: "seo", title: "SEO & Related" },
  ],
  fields: [
    // ---------- 1. CORE IDENTITY ----------
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "core",
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "core",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      group: "core",
      options: {
        list: [
          { title: "Custom Patches", value: "patches" },
          { title: "Stickers & Labels", value: "stickers" },
          { title: "Custom Apparel", value: "apparel" },
          { title: "Design Services", value: "design" },
        ],
      },
    }),
    defineField({
      name: "order",
      title: "Display Order",
      description: "Used to sort products on the homepage grid (lower = first).",
      type: "number",
      group: "core",
    }),

    // ---------- 2. HERO ----------
    defineField({
      name: "heroImage",
      title: "Hero / Card Image",
      type: "image",
      group: "core",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt Text", type: "string" }],
    }),
    defineField({
      name: "heroDescription",
      title: "Hero Description",
      type: "text",
      group: "content",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description (card / grid)",
      type: "text",
      group: "content",
      rows: 2,
    }),
    defineField({
      name: "valueProposition",
      title: "Value Proposition",
      type: "text",
      group: "content",
      rows: 2,
    }),
    defineField({
      name: "ctaText",
      title: "CTA Text",
      type: "string",
      group: "content",
    }),

    // ---------- 3. KEY FEATURES ----------
    defineField({
      name: "keyFeatures",
      title: "Key Features",
      type: "array",
      group: "content",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
          ],
        }),
      ],
    }),

    // ---------- 4. PATCH FLAG ----------
    defineField({
      name: "isPatchProduct",
      title: "Is Patch Product?",
      description:
        "Toggle ON to show Patch Options and Backing Options instead of Customization fields.",
      type: "boolean",
      group: "core",
      initialValue: false,
    }),

    // ---------- 5. GROUP A — Patch-only fields ----------
    defineField({
      name: "patchOptions",
      title: "Patch Options",
      type: "array",
      group: "patch",
      hidden: ({ parent }) => !parent?.isPatchProduct,
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "name", title: "Name", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              fields: [{ name: "alt", title: "Alt Text", type: "string" }],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "backingOptions",
      title: "Backing Options",
      type: "array",
      group: "patch",
      hidden: ({ parent }) => !parent?.isPatchProduct,
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "name", title: "Name", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              fields: [{ name: "alt", title: "Alt Text", type: "string" }],
            }),
          ],
        }),
      ],
    }),

    // ---------- 6. GROUP B — Non-patch customization ----------
    defineField({
      name: "customizationOptions",
      title: "Customization Options (bullet list)",
      type: "array",
      group: "customization",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "customizationImage",
      title: "Customization Image",
      type: "image",
      group: "customization",
      hidden: ({ parent }) => !!parent?.isPatchProduct,
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt Text", type: "string" }],
    }),
    defineField({
      name: "customizationSpecs",
      title: "Customization Specs",
      description:
        "Detailed spec rows shown on non-patch products (label / value pairs).",
      type: "array",
      group: "customization",
      hidden: ({ parent }) => !!parent?.isPatchProduct,
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "value", title: "Value", type: "string" }),
          ],
        }),
      ],
    }),

    // ---------- 7. ORDERING / MANUFACTURING ----------
    defineField({
      name: "orderingSteps",
      title: "How to Order Steps",
      type: "array",
      group: "content",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "number", title: "Number", type: "string" }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
          ],
        }),
      ],
    }),
    defineField({
      name: "manufacturingProcess",
      title: "Manufacturing Process Steps",
      type: "array",
      group: "content",
      of: [defineArrayMember({ type: "string" })],
    }),

    // ---------- 8. GALLERY ----------
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      group: "content",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              fields: [{ name: "alt", title: "Alt Text", type: "string" }],
            }),
            defineField({ name: "alt", title: "Alt Text", type: "string" }),
            defineField({ name: "caption", title: "Caption", type: "string" }),
          ],
        }),
      ],
    }),

    // ---------- 9. PRICING ----------
    defineField({
      name: "pricingExplanation",
      title: "Pricing Explanation",
      type: "text",
      group: "content",
      rows: 4,
    }),

    // ---------- 10. SOCIAL PROOF ----------
    defineField({
      name: "industriesServed",
      title: "Industries Served",
      type: "array",
      group: "social",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      group: "social",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "quote", title: "Quote", type: "text", rows: 3 }),
            defineField({ name: "name", title: "Name", type: "string" }),
            defineField({ name: "role", title: "Role", type: "string" }),
            defineField({ name: "company", title: "Company", type: "string" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      group: "social",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "value", title: "Value", type: "string" }),
            defineField({ name: "label", title: "Label", type: "string" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "whyChooseUs",
      title: "Why Choose Us",
      type: "array",
      group: "social",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
          ],
        }),
      ],
    }),

    // ---------- 11. FAQ ----------
    defineField({
      name: "faqs",
      title: "FAQs",
      type: "array",
      group: "content",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "question", title: "Question", type: "string" }),
            defineField({ name: "answer", title: "Answer", type: "text", rows: 3 }),
          ],
        }),
      ],
    }),

    // ---------- 12. SEO / RELATED ----------
    defineField({
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      group: "seo",
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      group: "seo",
      rows: 2,
    }),
    defineField({
      name: "relatedProducts",
      title: "Related Products",
      type: "array",
      group: "seo",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "product" }],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "heroImage",
    },
  },
})
