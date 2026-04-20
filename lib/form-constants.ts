// All 20 products/services offered
export const serviceOptions = [
  // Patches
  "Custom Patches",
  "Custom Jacket Patches",
  "Embroidered Patches",
  "Chenille Patches",
  "Leather Patches",
  "Woven Patches",
  "Iron On Patches",
  "Velcro Patches",
  "PVC Patches",
  "Sublimation Patches",
  // Stickers & Labels
  "Die Cut Stickers",
  "Holographic Stickers",
  "Hangtags & Labels",
  // Apparel
  "Custom Apparel",
  "Hoodies & Tracksuits",
  "Letterman Jackets",
  "Biker Jackets",
  // Design Services
  "Vector Art",
  "Embroidery Digitizing",
  "Heat Transfer DTF Print",
] as const

export const backingOptions = [
  "Iron-On",
  "Velcro (Hook & Loop)",
  "Sew-On",
  "Adhesive / Sticker",
  "No Backing",
  "Not Sure",
] as const

export type ServiceOption = typeof serviceOptions[number]
export type BackingOption = typeof backingOptions[number]
