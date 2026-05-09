import { defineType, defineField, defineArrayMember } from "sanity"

/**
 * Site-wide settings — singleton document.
 *
 * Holds branding, contact details, and global SEO metadata that should
 * stay consistent across every page (header, footer, default OG tags, etc.).
 */
export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "siteName",
      title: "Site Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "siteDescription",
      title: "Site Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt Text", type: "string" }],
    }),
    defineField({
      name: "contactEmail",
      title: "Contact Email",
      type: "string",
    }),
    defineField({
      name: "contactPhone",
      title: "Contact Phone",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "social",
      title: "Social Links",
      type: "object",
      fields: [
        defineField({ name: "twitter", title: "Twitter / X", type: "url" }),
        defineField({ name: "instagram", title: "Instagram", type: "url" }),
        defineField({ name: "facebook", title: "Facebook", type: "url" }),
        defineField({ name: "linkedin", title: "LinkedIn", type: "url" }),
      ],
    }),
    defineField({
      name: "defaultMetaTitle",
      title: "Default Meta Title",
      type: "string",
    }),
    defineField({
      name: "defaultMetaDescription",
      title: "Default Meta Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "ogImage",
      title: "Default Open Graph Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "announcementStrip",
      title: "Announcement Strip",
      type: "object",
      fields: [
        defineField({
          name: "enabled",
          title: "Show Strip",
          type: "boolean",
          initialValue: true,
        }),
        defineField({
          name: "items",
          title: "Strip Items",
          description:
            "Each item scrolls across the strip. Add phone, email, offers etc.",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
        }),
      ],
    }),
    defineField({
      name: "portfolioItems",
      title: "Portfolio Items",
      description:
        "Images shown in the portfolio/recent work section on the homepage.",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              fields: [
                defineField({
                  name: "alt",
                  title: "Alt Text",
                  type: "string",
                }),
              ],
            }),
            defineField({
              name: "title",
              title: "Project Title",
              type: "string",
            }),
            defineField({
              name: "category",
              title: "Category",
              type: "string",
              options: {
                list: [
                  { title: "Patches", value: "patches" },
                  { title: "Apparel", value: "apparel" },
                  { title: "Stickers", value: "stickers" },
                  { title: "Design Services", value: "design" },
                ],
              },
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "siteName",
      media: "logo",
    },
  },
})
