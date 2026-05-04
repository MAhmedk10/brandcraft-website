import type { SchemaTypeDefinition } from "sanity"
import { product } from "./product"
import { siteSettings } from "./siteSettings"

/**
 * Aggregated schema list registered with Sanity Studio in sanity.config.ts.
 */
export const schemaTypes: SchemaTypeDefinition[] = [product, siteSettings]
