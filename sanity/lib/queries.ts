import { groq } from "next-sanity"

/**
 * GROQ queries used across the application.
 *
 * Naming: every query string ends in `Query` so call sites read clearly:
 *   client.fetch(productBySlugQuery, { slug })
 */

/**
 * All product slugs — used by `generateStaticParams` to pre-build product pages.
 */
export const allProductSlugsQuery = groq`
  *[_type == "product" && defined(slug.current)][].slug.current
`

/**
 * Single product by slug, with every nested field expanded for the product page.
 *
 * - `relatedProducts[]->` dereferences the references and pulls only what the
 *   related-products section actually renders (avoids deep recursion).
 * - Image fields include `asset` so urlFor() and Sanity image pipeline work.
 */
export const productBySlugQuery = groq`
  *[_type == "product" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    category,
    order,
    isActive,
    heroTagline,
    heroPrimaryButtonLabel,
    heroSecondaryButtonLabel,
    heroDescription,
    shortDescription,
    valueProposition,
    ctaText,
    heroImage{
      ...,
      asset->,
      alt
    },
    keyFeatures[]{
      title,
      description
    },
    isPatchProduct,
    patchOptions[]{
      name,
      description,
      image{
        ...,
        asset->,
        alt
      }
    },
    backingOptions[]{
      name,
      description,
      bestFor,
      highlights,
      image{
        ...,
        asset->,
        alt
      }
    },
    customizationOptions,
    customizationImage{
      ...,
      asset->,
      alt
    },
    customizationSpecs[]{
      label,
      value
    },
    orderingSteps[]{
      number,
      title,
      description
    },
    manufacturingProcess,
    videoUrl,
    gallery[]{
      image{
        ...,
        asset->,
        alt
      },
      alt,
      caption
    },
    pricingExplanation,
    industriesServed,
    testimonials[]{
      quote,
      name,
      role,
      company
    },
    stats[]{
      value,
      label
    },
    whyChooseUs[]{
      title,
      description
    },
    ctaHeading,
    ctaSubtext,
    ctaPrimaryButtonLabel,
    ctaSecondaryButtonLabel,
    faqs[]{
      question,
      answer
    },
    metaTitle,
    metaDescription,
    relatedProducts[]->{
      _id,
      title,
      "slug": slug.current,
      shortDescription,
      heroImage{
        ...,
        asset->,
        alt
      }
    }
  }
`

/**
 * All products — lightweight projection for the homepage / services grid.
 * Sorted by `order` ascending (nulls last), then alphabetical.
 */
export const allProductsQuery = groq`
  *[_type == "product" && defined(slug.current)] | order(coalesce(order, 9999) asc, title asc){
    _id,
    title,
    "slug": slug.current,
    category,
    shortDescription,
    heroImage{
      ...,
      asset->,
      alt
    }
  }
`

/**
 * Site settings — singleton document used for global header/footer/SEO.
 */
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0]{
    siteName,
    siteDescription,
    logo{
      ...,
      asset->,
      alt
    },
    contactEmail,
    contactPhone,
    address,
    social{
      twitter,
      instagram,
      facebook,
      linkedin
    },
    defaultMetaTitle,
    defaultMetaDescription,
    ogImage{
      ...,
      asset->
    }
  }
`
