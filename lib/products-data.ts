export interface ProductTestimonial {
  quote: string
  name: string
  role: string
  company: string
}

export interface ProductFAQ {
  question: string
  answer: string
}

export interface ProductData {
  slug: string
  title: string
  heroDescription: string
  valueProposition: string
  keyFeatures: { title: string; description: string }[]
  customizationOptions: string[]
  customizationImage?: string  // ← ADD THIS (optional)
  customizationImageAlt?: string  // ← ADD THIS (optional)
  orderingSteps: { number: string; title: string; description: string }[]
  manufacturingProcess: string[]
  galleryPlaceholders: { src: string;        // ← CHANGE this from just alt/caption to include src
alt: string;
caption: string }[]
  pricingExplanation: string
  industriesServed: string[]
  testimonials: ProductTestimonial[]
  faqs: ProductFAQ[]
  relatedSlugs: string[]
  ctaText: string
  whyChooseUs: { title: string; description: string }[]
  stats: { value: string; label: string }[]
}

export const products: ProductData[] = [
  {
    slug: "custom-patches",
    title: "Custom Patches",
    heroDescription:
      "Elevate your brand with premium custom patches designed and manufactured to your exact specifications. From embroidered to woven, PVC to chenille, we deliver patches that represent your identity with precision and durability.",
    valueProposition:
      "Industry-leading custom patch manufacturing with unlimited design possibilities, premium materials, and fast turnaround times.",
    keyFeatures: [
      { title: "Unlimited Design Options", description: "Any shape, size, color, or style. Our design team brings your vision to life with no limitations." },
      { title: "Premium Materials", description: "High-grade threads, fabrics, and backings sourced from trusted suppliers for lasting quality." },
      { title: "Low Minimum Orders", description: "From single samples to production runs of thousands, we accommodate orders of every size." },
      { title: "Fast Turnaround", description: "Streamlined production process delivers your custom patches in as little as 7-10 business days." },
      { title: "Free Design Assistance", description: "Our experienced designers help refine your artwork at no extra cost." },
    ],
    customizationOptions: [
      "Shape: Circle, square, rectangle, shield, custom die-cut",
      "Size: From 1 inch to 12+ inches",
      "Border: Merrowed, hot-cut, laser-cut, no border",
      "Colors: Up to 12 thread colors per design with Pantone matching",
      "Material: Twill, felt, canvas, leather base",
      "Finish: Matte, glossy, metallic thread accents",
    ],
    customizationImage: "/images/portfolio-1.jpg",  // ← Your image
    customizationImageAlt: "Custom patch options showing different sizes, materials and backing types",  // ← Optional alt text
    orderingSteps: [
      { number: "01", title: "Submit Your Design", description: "Upload your artwork or describe your concept. Our team reviews every submission." },
      { number: "02", title: "Receive Your Proof", description: "We create a detailed digital mockup for your review and approval within 24 hours." },
      { number: "03", title: "Approve & Produce", description: "Once approved, production begins immediately using premium materials and precision equipment." },
      { number: "04", title: "Quality Check & Ship", description: "Every patch is inspected before packaging and shipping directly to your door." },
    ],
    manufacturingProcess: [
      "Artwork digitization and color separation by skilled technicians",
      "Material selection and preparation based on design requirements",
      "Precision stitching using industrial embroidery machines",
      "Quality inspection for thread consistency, color accuracy, and durability",
      "Backing application (iron-on, velcro, sew-on, adhesive)",
      "Final packaging and secure shipping",
    ],
    galleryPlaceholders: [
      { src: "", alt: "Custom embroidered patches collection", caption: "Embroidered Patches" },
      { src: "", alt: "Military-style custom patches", caption: "Military & Tactical" },
      { src: "", alt: "Corporate branding patches", caption: "Corporate Branding" },
      { src: "", alt: "Sports team custom patches", caption: "Sports Teams" },
    ],
    pricingExplanation:
      "Pricing is based on patch size, stitch count, color complexity, backing type, and order quantity. Volume discounts are available for larger orders. Request a free quote to receive an itemized estimate within 24 hours.",
    industriesServed: [
      "Military & Law Enforcement",
      "Corporate & Business",
      "Sports Teams & Leagues",
      "Fashion & Apparel Brands",
      "Motorcycle & Biker Clubs",
      "Schools & Universities",
      "Non-Profit Organizations",
      "Government Agencies",
    ],
    testimonials: [
      { quote: "The quality of our custom patches was exceptional. The colors were vibrant and the stitching was flawless. Our team wears them with pride.", name: "David Thompson", role: "Brand Manager", company: "Summit Athletics" },
      { quote: "Fast turnaround, excellent communication, and the final product exceeded expectations. We've reordered three times already.", name: "Lisa Park", role: "Operations Director", company: "Pacific Security Group" },
    ],
    faqs: [
      { question: "What is the minimum order quantity for custom patches?", answer: "We have no strict minimum. We can produce as few as 25 patches for most styles, though pricing is more competitive at 50+ units." },
      { question: "How long does production take?", answer: "Standard production takes 7-10 business days after design approval. Rush orders are available for an additional fee." },
      { question: "Can you match specific Pantone colors?", answer: "Yes, we offer Pantone color matching to ensure your patches match your brand guidelines precisely." },
      { question: "What file formats do you accept for artwork?", answer: "We accept AI, EPS, PDF, SVG, PNG, and JPG files. Our design team can also work from sketches or descriptions." },
      { question: "Do you offer samples before a full order?", answer: "Yes, we can produce pre-production samples so you can review quality before committing to a full run." },
      { question: "What backing options are available?", answer: "We offer iron-on, velcro (hook and loop), sew-on, adhesive, pin-back, and magnetic backings." },
    ],
    relatedSlugs: ["embroidered-patches", "woven-patches", "pvc-patches", "velcro-patches"],
    ctaText: "Get Your Custom Patches Quote",
    whyChooseUs: [
      { title: "20+ Years Experience", description: "Two decades of patch manufacturing expertise across every industry." },
      { title: "No Minimum Orders", description: "Order as few as 25 patches without sacrificing quality or pricing." },
      { title: "Free Design Help", description: "Our in-house design team assists with artwork at no additional charge." },
      { title: "100% Satisfaction Guarantee", description: "We stand behind every order with our quality assurance promise." },
    ],
    stats: [
      { value: "500K+", label: "Patches Produced" },
      { value: "2,000+", label: "Happy Clients" },
      { value: "20+", label: "Years Experience" },
      { value: "99%", label: "On-Time Delivery" },
    ],
  },
  {
    slug: "custom-jacket-patches",
    title: "Custom Jacket Patches",
    heroDescription:
      "Make a bold statement with custom jacket patches built to endure. Perfect for biker clubs, letterman jackets, corporate outerwear, and fashion brands that demand premium quality and striking designs.",
    valueProposition:
      "Rugged, stylish jacket patches crafted for durability and visual impact on leather, denim, and outerwear.",
    keyFeatures: [
      { title: "Built for Outerwear", description: "Reinforced construction designed to withstand the demands of jacket wear and weather." },
      { title: "Large Format Capable", description: "We produce back patches up to 14 inches and beyond for maximum visual impact." },
      { title: "Multiple Material Options", description: "Embroidered, woven, PVC, leather, and chenille options for every jacket style." },
      { title: "Secure Attachment", description: "Heavy-duty sew-on, iron-on, and velcro options rated for outerwear use." },
    ],
    customizationOptions: [
      "Size: Small chest patches to full-back panels (up to 14+ inches)",
      "Style: Embroidered, woven, PVC, chenille, leather, combination",
      "Shape: Rocker style, rectangular, shield, custom die-cut",
      "Backing: Heavy-duty sew-on, industrial iron-on, velcro",
      "Detail: Up to 12 colors, metallic threads, 3D puff embroidery",
      "Finish: Matte, gloss, vintage distressed",
    ],
    customizationImage: "",  // ← Your image
    customizationImageAlt: "Custom patch options showing different sizes, materials and backing types",  // ← Optional alt text
    orderingSteps: [
      { number: "01", title: "Share Your Concept", description: "Send us your design, sketch, or idea. We specialize in translating concepts into jacket-ready patches." },
      { number: "02", title: "Digital Proof", description: "Receive a detailed mockup showing how your patch will look on outerwear." },
      { number: "03", title: "Manufacturing", description: "Production using reinforced materials and techniques specifically for jacket applications." },
      { number: "04", title: "Inspect & Deliver", description: "Every patch passes quality control before shipping to you." },
    ],
    manufacturingProcess: [
      "Design consultation for outerwear-specific requirements",
      "Material selection optimized for jacket fabric compatibility",
      "Reinforced stitching and edge finishing for durability",
      "Heavy-duty backing application",
      "Stress testing for wash and wear resistance",
      "Secure packaging for safe delivery",
    ],
    galleryPlaceholders: [
      { src: "", alt: "Biker jacket back patches", caption: "Biker Club Patches" },
      { src: "", alt: "Letterman jacket patches", caption: "Letterman Jackets" },
      { src: "", alt: "Corporate outerwear patches", caption: "Corporate Outerwear" },
      { src: "", alt: "Fashion jacket patches", caption: "Fashion Brands" },
    ],
    pricingExplanation:
      "Jacket patch pricing depends on size, complexity, material type, and order quantity. Large back patches are priced per square inch of embroidery. Contact us for a detailed quote.",
    industriesServed: ["Motorcycle & Biker Clubs", "Schools & Universities", "Fashion & Streetwear", "Corporate Outerwear", "Military Units", "Sports Teams", "Music & Entertainment", "First Responders"],
    testimonials: [
      { quote: "Our club's back patches are absolutely stunning. The detail and durability are top-notch. They look incredible on our leather jackets.", name: "Mike Brennan", role: "Chapter President", company: "Iron Road MC" },
      { quote: "We ordered letterman jacket patches for our graduating class. The quality was outstanding, and the students loved them.", name: "Jennifer Walsh", role: "Activities Director", company: "Oakwood Academy" },
    ],
    faqs: [
      { question: "What is the maximum size for jacket patches?", answer: "We can produce patches up to 14 inches and larger. Back patches for jackets typically range from 10 to 13 inches." },
      { question: "Will the patches hold up on leather jackets?", answer: "Absolutely. We use reinforced construction and heavy-duty backings specifically designed for leather and denim outerwear." },
      { question: "Can you create rocker-style patches?", answer: "Yes, we specialize in top and bottom rocker patches as well as center back patches for motorcycle clubs." },
      { question: "Do you offer iron-on backing for jackets?", answer: "We offer industrial-grade iron-on backing, though we recommend sew-on for heavy outerwear for maximum durability." },
      { question: "Can I order just one sample patch?", answer: "Yes, we offer single-unit samples so you can verify the design before placing a larger order." },
    ],
    relatedSlugs: ["custom-patches", "embroidered-patches", "chenille-patches", "leather-patches"],
    ctaText: "Order Custom Jacket Patches",
    whyChooseUs: [
      { title: "Outerwear Specialists", description: "Patches engineered specifically for jackets with reinforced durability." },
      { title: "Large Format Expertise", description: "We handle back patches up to 14 inches with no loss of detail." },
      { title: "Fast Production", description: "Most jacket patch orders ship within 7-10 business days." },
      { title: "Club & Group Discounts", description: "Special pricing for motorcycle clubs, teams, and organizations." },
    ],
    stats: [
      { value: "100K+", label: "Jacket Patches Made" },
      { value: "500+", label: "Clubs & Teams Served" },
      { value: "14in+", label: "Max Patch Size" },
      { value: "48hr", label: "Proof Turnaround" },
    ],
  },
  {
    slug: "embroidered-patches",
    title: "Embroidered Patches",
    heroDescription:
      "Classic embroidered patches with rich texture, vibrant colors, and exceptional durability. The most popular patch style for uniforms, branding, and merchandise across every industry.",
    valueProposition:
      "Premium thread-on-twill embroidered patches with up to 100% embroidery coverage and Pantone-matched colors.",
    keyFeatures: [
      { title: "Rich Texture & Dimension", description: "Raised thread creates a tactile, high-quality look and feel that stands out." },
      { title: "Vibrant Color Options", description: "Choose from hundreds of thread colors with precise Pantone matching." },
      { title: "Exceptional Durability", description: "Industrial-grade threads and construction ensure patches last for years." },
      { title: "Versatile Coverage", description: "From 50% to 100% embroidery coverage for different looks and budgets." },
    ],
    customizationOptions: [
      "Coverage: 50%, 75%, or 100% embroidery",
      "Thread: Polyester or rayon, standard or metallic",
      "Base fabric: Twill in multiple colors",
      "Border: Merrowed, hot-cut, laser-cut",
      "Size: 1 inch to 12+ inches",
      "Special effects: 3D puff, metallic thread, glow-in-the-dark",
    ],
    customizationImage: "",  // ← Your image
    customizationImageAlt: "Custom patch options showing different sizes, materials and backing types",  // ← Optional alt text
    orderingSteps: [
      { number: "01", title: "Upload Artwork", description: "Send your logo or design in any common file format." },
      { number: "02", title: "Digitization & Proof", description: "Our technicians digitize your design and send a detailed mockup." },
      { number: "03", title: "Production Run", description: "Precision embroidery on industrial machines for consistent quality." },
      { number: "04", title: "Ship to You", description: "Quality-checked and securely packaged for delivery." },
    ],
    manufacturingProcess: [
      "Professional artwork digitization for embroidery",
      "Thread color selection and Pantone matching",
      "Multi-head embroidery machine production",
      "Trim, finish, and border application",
      "Quality inspection for stitch consistency",
      "Backing application and final packaging",
    ],
    galleryPlaceholders: [
      { src: "", alt: "Embroidered corporate patches", caption: "Corporate Branding" },
      { src: "", alt: "Embroidered military patches", caption: "Military & Tactical" },
      { src: "", alt: "Embroidered sports patches", caption: "Sports & Athletics" },
      { src: "", alt: "Embroidered fashion patches", caption: "Fashion & Apparel" },
    ],
    pricingExplanation:
      "Embroidered patch pricing is based on size, embroidery coverage percentage, number of colors, and quantity. Higher coverage increases cost but delivers a more premium look. Volume discounts start at 100 units.",
    industriesServed: ["Military & Defense", "Corporate & Enterprise", "Sports Organizations", "Fashion Brands", "Schools & Universities", "Healthcare", "Hospitality & Events", "Government"],
    testimonials: [
      { quote: "The embroidery quality is impeccable. Our corporate patches look professional and have held up perfectly after months of daily wear.", name: "Rachel Kim", role: "HR Director", company: "Vertex Industries" },
      { quote: "We switched to this provider for our military unit patches and the difference in quality was immediately noticeable. Outstanding work.", name: "Sgt. Brian Collins", role: "Unit Supply", company: "3rd Infantry Division" },
    ],
    faqs: [
      { question: "What is the difference between 50% and 100% embroidery?", answer: "50% coverage leaves some base twill visible for a classic look, while 100% covers the entire surface with thread for maximum vibrancy and a premium feel." },
      { question: "Can you do 3D puff embroidery on patches?", answer: "Yes, 3D puff embroidery adds raised dimension to letters and design elements for a bold, modern look." },
      { question: "What thread types do you offer?", answer: "We use polyester and rayon threads, including standard, metallic, and specialty options like glow-in-the-dark." },
      { question: "How detailed can the embroidery be?", answer: "Embroidery works best for bold designs. Very fine text under 5mm may not embroider clearly. Our team will advise on the best approach for detailed designs." },
      { question: "Are embroidered patches machine washable?", answer: "Yes, our patches are made with colorfast threads and durable construction that withstands machine washing." },
    ],
    relatedSlugs: ["custom-patches", "chenille-patches", "woven-patches", "iron-on-patches"],
    ctaText: "Get Embroidered Patches Quote",
    whyChooseUs: [
      { title: "Expert Digitizers", description: "Skilled technicians convert your artwork into flawless embroidery files." },
      { title: "Premium Threads", description: "Colorfast, industrial-grade threads that maintain vibrancy over time." },
      { title: "Consistent Quality", description: "Multi-head machines ensure every patch in your order is identical." },
      { title: "Rapid Production", description: "Most orders completed within 7-10 business days from approval." },
    ],
    stats: [
      { value: "1M+", label: "Patches Embroidered" },
      { value: "500+", label: "Thread Colors" },
      { value: "100%", label: "Max Coverage" },
      { value: "7-10", label: "Day Turnaround" },
    ],
  },
  {
    slug: "chenille-patches",
    title: "Chenille Patches",
    heroDescription:
      "Bold, textured chenille patches with that classic varsity feel. Perfect for letterman jackets, streetwear brands, and anyone seeking a retro-premium aesthetic with modern quality standards.",
    valueProposition:
      "Soft, plush chenille patches with a vintage varsity look, available in custom shapes and vibrant color combinations.",
    keyFeatures: [
      { title: "Plush Varsity Texture", description: "Signature soft, raised pile creates an unmistakable premium look and feel." },
      { title: "Bold Visual Impact", description: "Thick chenille yarn produces vibrant colors that stand out on any garment." },
      { title: "Retro-Modern Appeal", description: "Classic letterman style updated with modern production quality." },
      { title: "Durable Construction", description: "Reinforced felt backing and secure stitching for long-lasting wear." },
    ],
    customizationOptions: [
      "Yarn colors: Full palette with custom color matching",
      "Base: Felt backing in coordinating or contrasting colors",
      "Size: 3 inches to 12+ inches",
      "Shape: Letters, numbers, mascots, logos, custom shapes",
      "Combination: Chenille with embroidered detail accents",
      "Border: Chain-stitch, merrowed, or clean-cut edge",
    ],
    customizationImage: "",  // ← Your image
    customizationImageAlt: "Custom patch options showing different sizes, materials and backing types",  // ← Optional alt text
    orderingSteps: [
      { number: "01", title: "Design Consultation", description: "Share your design concept. We advise on how to optimize it for chenille production." },
      { number: "02", title: "Mockup Approval", description: "Review a detailed rendering showing colors, textures, and dimensions." },
      { number: "03", title: "Chenille Production", description: "Skilled artisans produce your patches using specialized chenille machines." },
      { number: "04", title: "Quality Check & Ship", description: "Hands-on inspection ensures every patch meets our standards." },
    ],
    manufacturingProcess: [
      "Design adaptation for chenille yarn capabilities",
      "Yarn color selection and felt base preparation",
      "Specialized chenille tufting and shaping",
      "Chain-stitch border application",
      "Combination embroidery detail work (if applicable)",
      "Hand inspection and trimming",
    ],
    galleryPlaceholders: [
      { src: "", alt: "Chenille letterman patches", caption: "Varsity Letters" },
      { src: "", alt: "Chenille mascot patches", caption: "Mascot Designs" },
      { src: "", alt: "Chenille streetwear patches", caption: "Streetwear Brands" },
      { src: "", alt: "Chenille logo patches", caption: "Custom Logos" },
    ],
    pricingExplanation:
      "Chenille patch pricing depends on size, number of yarn colors, complexity of the design, and whether embroidered accents are included. Chenille patches are typically priced higher than standard embroidered patches due to the specialized production process.",
    industriesServed: ["Schools & Universities", "Streetwear & Fashion", "Sports Teams", "Fraternities & Sororities", "Cheerleading", "Music & Entertainment", "Youth Organizations", "Retail Brands"],
    testimonials: [
      { quote: "The chenille patches for our varsity letters are absolutely perfect. Soft, vibrant, and exactly the classic look we wanted.", name: "Coach Tom Bradley", role: "Athletics Director", company: "Lincoln High School" },
      { quote: "We used chenille patches on our streetwear line and they became the best-selling feature. Customers love the texture and quality.", name: "Jordan Blake", role: "Founder", company: "Retro District Clothing" },
    ],
    faqs: [
      { question: "What makes chenille patches different from embroidered?", answer: "Chenille uses thick, soft yarn tufted through felt, creating a plush, raised texture. Embroidered patches use flat thread stitched onto twill for a smoother finish." },
      { question: "Can chenille patches include fine details?", answer: "Chenille is best for bold shapes and letters. Fine details are typically added using embroidered accents within the chenille patch." },
      { question: "Are chenille patches suitable for washing?", answer: "Yes, but we recommend gentle cycle or hand washing to preserve the plush texture over time." },
      { question: "What is the minimum size for chenille?", answer: "Due to the yarn thickness, chenille patches work best at 3 inches or larger." },
      { question: "Can you combine chenille with other patch types?", answer: "Absolutely. Combination patches with chenille body and embroidered details are one of our most popular products." },
    ],
    relatedSlugs: ["custom-patches", "embroidered-patches", "custom-jacket-patches", "letterman-jackets"],
    ctaText: "Order Chenille Patches Now",
    whyChooseUs: [
      { title: "Varsity Specialists", description: "Decades of experience producing chenille for schools and teams." },
      { title: "Premium Yarn", description: "High-density chenille yarn for consistent pile and vibrant color." },
      { title: "Combo Expertise", description: "Seamlessly blend chenille with embroidery for detailed designs." },
      { title: "Hand Inspection", description: "Every chenille patch is individually inspected by hand." },
    ],
    stats: [
      { value: "200K+", label: "Chenille Patches Made" },
      { value: "1,000+", label: "Schools Served" },
      { value: "50+", label: "Yarn Colors" },
      { value: "100%", label: "Hand Inspected" },
    ],
  },
  {
    slug: "leather-patches",
    title: "Leather Patches",
    heroDescription:
      "Sophisticated leather patches that add a premium, tactile element to your brand. Ideal for denim, outerwear, bags, and high-end merchandise where quality materials make the difference.",
    valueProposition:
      "Genuine and synthetic leather patches with debossed, embossed, or printed branding for a luxurious finish.",
    keyFeatures: [
      { title: "Premium Material", description: "Genuine leather and high-quality synthetic options for every budget and application." },
      { title: "Multiple Techniques", description: "Debossing, embossing, laser engraving, hot stamping, and print options." },
      { title: "Luxurious Aesthetic", description: "Natural texture and rich color adds instant premium appeal to any product." },
      { title: "Versatile Applications", description: "Perfect for jeans, jackets, bags, hats, and branded merchandise." },
    ],
    customizationOptions: [
      "Material: Genuine leather, faux leather, suede",
      "Technique: Debossed, embossed, laser etched, printed, hot stamped",
      "Color: Natural tan, brown, black, custom dyed",
      "Shape: Rectangle, oval, custom die-cut",
      "Size: 1 inch to 6+ inches",
      "Backing: Sew-on, iron-on, adhesive",
    ],
    customizationImage: "",  // ← Your image
  customizationImageAlt: "Custom patch options showing different sizes, materials and backing types",  // ← Optional alt text
    orderingSteps: [
      { number: "01", title: "Choose Your Style", description: "Select material, technique, and finish for your leather patches." },
      { number: "02", title: "Proof & Sample", description: "Receive a digital proof and optional physical sample." },
      { number: "03", title: "Production", description: "Expert craftspeople produce your patches using precision leather working." },
      { number: "04", title: "Delivery", description: "Quality-checked and shipped with care." },
    ],
    manufacturingProcess: [
      "Leather selection and quality grading",
      "Die-cutting to precise dimensions",
      "Debossing, embossing, or engraving application",
      "Color treatment and finishing",
      "Backing attachment",
      "Individual inspection and packaging",
    ],
    galleryPlaceholders: [
      { src: "", alt: "Debossed leather patches", caption: "Debossed Leather" },
      { src: "", alt: "Laser engraved leather patches", caption: "Laser Engraved" },
      { src: "", alt: "Leather patches on denim", caption: "Denim Applications" },
      { src: "", alt: "Leather patches on bags", caption: "Bag & Accessory" },
    ],
    pricingExplanation:
      "Leather patch pricing varies by material (genuine vs. synthetic), technique (debossing, laser, print), size, and quantity. Genuine leather commands a premium but delivers an unmatched quality impression.",
    industriesServed: ["Denim & Fashion", "Luxury Goods", "Bag & Accessory Brands", "Outdoor & Adventure", "Craft Breweries", "Automotive", "Retail Brands", "Corporate Gifts"],
    testimonials: [
      { quote: "Our leather patches elevated the entire product line. The debossed logo on genuine leather gives our denim a premium edge that customers notice immediately.", name: "Alex Rivera", role: "Product Director", company: "Heritage Denim Co." },
      { quote: "The laser-engraved leather patches for our bags are beautiful. Clean lines, consistent quality, and they age beautifully with use.", name: "Emma Clarke", role: "Creative Director", company: "Alpine Goods" },
    ],
    faqs: [
      { question: "What is the difference between debossing and embossing?", answer: "Debossing presses the design into the leather (indented), while embossing raises the design above the surface. Both create elegant, tactile effects." },
      { question: "Is genuine leather or faux leather better?", answer: "Genuine leather offers a premium feel and develops a patina over time. Faux leather is more affordable, vegan-friendly, and consistent in appearance." },
      { question: "Can leather patches be washed?", answer: "Leather patches are durable but best maintained with spot cleaning. They naturally soften and develop character over time." },
      { question: "What finishes are available?", answer: "We offer natural, dyed, matte, gloss, and distressed finishes to match your brand aesthetic." },
      { question: "Can you do full-color printing on leather?", answer: "Yes, we offer UV printing and heat transfer printing on leather for full-color designs." },
    ],
    relatedSlugs: ["custom-patches", "custom-jacket-patches", "woven-patches", "hangtags-labels"],
    ctaText: "Get Leather Patches Quote",
    whyChooseUs: [
      { title: "Material Experts", description: "We source premium leather from vetted suppliers worldwide." },
      { title: "Precision Techniques", description: "State-of-the-art debossing, embossing, and laser equipment." },
      { title: "Custom Color Matching", description: "Dye and finish leather to match your exact brand colors." },
      { title: "Sample Available", description: "Physical samples available before committing to production." },
    ],
    stats: [
      { value: "150K+", label: "Leather Patches Made" },
      { value: "6+", label: "Leather Types" },
      { value: "5", label: "Technique Options" },
      { value: "24hr", label: "Proof Turnaround" },
    ],
  },
  {
    slug: "woven-patches",
    title: "Woven Patches",
    heroDescription:
      "Ultra-fine detail woven patches that capture intricate designs with clarity. Thinner than embroidered patches with a smooth, flat finish ideal for detailed logos and small text.",
    valueProposition:
      "Fine-thread woven construction delivers sharp detail and smooth texture for designs that demand precision.",
    keyFeatures: [
      { title: "Superior Detail", description: "Thin threads capture fine lines, small text, and intricate patterns that embroidery cannot achieve." },
      { title: "Smooth Flat Surface", description: "No raised texture means a sleek, professional appearance on any garment." },
      { title: "Lightweight & Flexible", description: "Thin profile sits flat against fabric without bulk." },
      { title: "Color Precision", description: "Weaving process produces precise, clean color transitions." },
    ],
    customizationOptions: [
      "Thread: High-density polyester weave",
      "Detail level: Fine text as small as 3mm",
      "Colors: Up to 12 colors with precise gradients",
      "Border: Merrowed, laser-cut, heat-cut",
      "Size: 0.75 inches to 6+ inches",
      "Backing: Iron-on, sew-on, velcro, adhesive",
    ],
    customizationImage: "",  // ← Your image
  customizationImageAlt: "Custom patch options showing different sizes, materials and backing types",  // ← Optional alt text
    orderingSteps: [
      { number: "01", title: "Submit Design", description: "Provide your detailed artwork or high-resolution logo file." },
      { number: "02", title: "Weaving Proof", description: "Receive a digital proof optimized for woven production." },
      { number: "03", title: "Production", description: "High-density weaving on precision looms for consistent quality." },
      { number: "04", title: "Ship & Deliver", description: "Inspected, packaged, and shipped to your location." },
    ],
    manufacturingProcess: [
      "High-resolution artwork preparation for weaving",
      "Thread color selection and loom programming",
      "Precision weaving on industrial looms",
      "Heat-cutting or laser-cutting to shape",
      "Border finishing and backing application",
      "Quality inspection for thread consistency",
    ],
    galleryPlaceholders: [
      { src: "", alt: "Woven corporate patches", caption: "Corporate Branding" },
      { src: "", alt: "Woven detailed logo patches", caption: "Detailed Logos" },
      { src: "", alt: "Small woven label patches", caption: "Label Patches" },
      { src: "", alt: "Woven flag patches", caption: "Flag Patches" },
    ],
    pricingExplanation:
      "Woven patch pricing is based on size, number of colors, and order quantity. Woven patches are competitively priced with embroidered patches and offer better value for detailed designs.",
    industriesServed: ["Corporate & Enterprise", "Fashion Labels", "Military & Government", "Sports Teams", "Schools", "Retail & Consumer Brands", "Events & Conferences", "Non-Profits"],
    testimonials: [
      { quote: "We needed our detailed company logo reproduced perfectly at a small size. The woven patches captured every element with incredible clarity.", name: "Daniel Foster", role: "Marketing Manager", company: "NovaTech Solutions" },
      { quote: "The flat, smooth finish of the woven patches is exactly what we wanted for our clothing labels. Professional quality that elevates our brand.", name: "Sophia Nguyen", role: "Head of Design", company: "Thread & Stone Apparel" },
    ],
    faqs: [
      { question: "When should I choose woven over embroidered patches?", answer: "Choose woven when your design has fine details, small text, gradients, or complex patterns. Embroidered works better for bold, textured designs." },
      { question: "How small can text be on a woven patch?", answer: "Woven patches can reproduce text as small as 3mm high with clarity, which is significantly finer than embroidery." },
      { question: "Are woven patches as durable as embroidered?", answer: "Yes, woven patches are equally durable. The tightly woven threads create a strong, long-lasting product." },
      { question: "Can woven patches have a 3D or raised effect?", answer: "Woven patches are flat by nature. For raised effects, consider embroidered or chenille patches instead." },
      { question: "What is the turnaround time?", answer: "Standard production is 7-10 business days after design approval." },
    ],
    relatedSlugs: ["embroidered-patches", "custom-patches", "iron-on-patches", "hangtags-labels"],
    ctaText: "Order Woven Patches Today",
    whyChooseUs: [
      { title: "Detail Specialists", description: "We excel at reproducing intricate designs that other methods can't handle." },
      { title: "Industrial Looms", description: "High-density weaving equipment for sharp, consistent results." },
      { title: "Color Accuracy", description: "Precision color matching for faithful brand reproduction." },
      { title: "Flexible Quantities", description: "Competitive pricing from small runs to bulk orders." },
    ],
    stats: [
      { value: "300K+", label: "Woven Patches Made" },
      { value: "12", label: "Max Colors" },
      { value: "3mm", label: "Min Text Size" },
      { value: "99%", label: "Quality Rate" },
    ],
  },
  {
    slug: "heat-transfer-dtf-print",
    title: "Heat Transfer DTF Print",
    heroDescription:
      "Full-color, photo-quality heat transfer prints using Direct-to-Film technology. Apply vibrant, detailed designs to virtually any fabric with exceptional wash durability and no minimum orders.",
    valueProposition:
      "DTF printing delivers photographic detail and unlimited colors with excellent stretch and wash performance on any fabric color.",
    keyFeatures: [
      { title: "Unlimited Colors", description: "Full CMYK printing means no color limits. Gradients, photos, and complex artwork reproduced perfectly." },
      { title: "Any Fabric Color", description: "White ink underbase allows vivid prints on dark, light, and colored garments." },
      { title: "Excellent Durability", description: "Heat-pressed transfers bond permanently with fabric for outstanding wash resistance." },
      { title: "No Minimums", description: "Cost-effective from single units to large production runs." },
    ],
    customizationOptions: [
      "Print: Full CMYK + white underbase",
      "Size: From 2 inches to full chest/back panels",
      "Finish: Matte, semi-gloss",
      "Application: T-shirts, hoodies, bags, hats, and more",
      "Detail: Photo-quality resolution up to 1200 DPI",
      "Stretch: Flexible transfer that moves with fabric",
    ],
    customizationImage: "",  // ← Your image
  customizationImageAlt: "Custom patch options showing different sizes, materials and backing types",  // ← Optional alt text
    orderingSteps: [
      { number: "01", title: "Upload Artwork", description: "Send high-resolution designs in any common format." },
      { number: "02", title: "Print Preview", description: "Review a color-accurate digital preview of your transfer." },
      { number: "03", title: "DTF Production", description: "Printed on film with hot-melt adhesive powder application." },
      { number: "04", title: "Heat Press & Ship", description: "Transfers can be shipped as-is or applied to your garments before shipping." },
    ],
    manufacturingProcess: [
      "High-resolution RIP processing for color accuracy",
      "CMYK + white ink printing onto specialty film",
      "Adhesive powder application and curing",
      "Film cutting and quality inspection",
      "Heat press application (if garment provided)",
      "Packaging and shipping",
    ],
    galleryPlaceholders: [
      { src: "", alt: "DTF printed t-shirts", caption: "Custom T-Shirts" },
      { src: "", alt: "DTF full-color hoodies", caption: "Full-Color Hoodies" },
      { src: "", alt: "DTF printed tote bags", caption: "Tote Bags" },
      { src: "", alt: "DTF transfers on film", caption: "Transfer Sheets" },
    ],
    pricingExplanation:
      "DTF pricing is based on print size and quantity. There are no screen setup fees, making it ideal for small runs and multi-color designs. Volume discounts are available for larger orders.",
    industriesServed: ["Apparel & Fashion", "E-Commerce & Print-on-Demand", "Events & Promotions", "Sports Teams", "Schools", "Small Businesses", "Music & Entertainment", "Corporate Merchandise"],
    testimonials: [
      { quote: "The DTF prints are incredibly vibrant and have survived dozens of washes without fading. Perfect for our e-commerce merchandise line.", name: "Tyler Martinez", role: "Founder", company: "UrbanPrint Co." },
      { quote: "We switched from screen printing to DTF for our small-batch runs and the quality improvement is remarkable. No setup fees made it economical too.", name: "Ashley Green", role: "Events Coordinator", company: "Bright Events LLC" },
    ],
    faqs: [
      { question: "What is DTF printing?", answer: "Direct-to-Film printing involves printing designs on a special film with adhesive, which is then heat-pressed onto fabric. It supports unlimited colors and works on any fabric color." },
      { question: "Is DTF as durable as screen printing?", answer: "Modern DTF transfers offer excellent durability comparable to screen printing, with proper heat press application. Prints resist cracking, fading, and peeling." },
      { question: "Can DTF be applied to any fabric?", answer: "DTF works on cotton, polyester, blends, nylon, and most other fabrics. It performs best on cotton and cotton-blend garments." },
      { question: "Do you provide ready-to-press transfers or finished garments?", answer: "Both. We can ship transfers for you to apply, or we can press them onto garments you provide or that we source." },
      { question: "What resolution can DTF achieve?", answer: "Our DTF printers produce up to 1200 DPI, delivering photo-quality results with smooth gradients and fine detail." },
    ],
    relatedSlugs: ["custom-apparel", "sublimation-patches", "hoodies-tracksuits", "die-cut-stickers"],
    ctaText: "Get DTF Printing Quote",
    whyChooseUs: [
      { title: "No Setup Fees", description: "DTF eliminates screen charges, making small runs affordable." },
      { title: "Photo Quality", description: "1200 DPI printing for razor-sharp detail and smooth gradients." },
      { title: "Any Fabric Color", description: "White underbase ensures vivid prints on dark and light garments." },
      { title: "Fast Production", description: "Most DTF orders ship within 3-5 business days." },
    ],
    stats: [
      { value: "250K+", label: "Transfers Printed" },
      { value: "1200", label: "DPI Resolution" },
      { value: "No Min", label: "Order Quantity" },
      { value: "3-5", label: "Day Turnaround" },
    ],
  },
  {
    slug: "iron-on-patches",
    title: "Iron On Patches",
    heroDescription:
      "Convenient iron-on patches with heat-activated adhesive backing for easy application. Professional quality patches that bond securely to fabric with a standard household iron or heat press.",
    valueProposition:
      "Easy-apply iron-on patches with industrial-grade heat adhesive that bonds securely without sewing.",
    keyFeatures: [
      { title: "Easy Application", description: "No sewing required. Apply with a household iron or heat press in minutes." },
      { title: "Strong Adhesive Bond", description: "Industrial-grade heat-activated adhesive creates a permanent bond with fabric." },
      { title: "Professional Quality", description: "Same premium embroidery and materials as our sew-on patches." },
      { title: "Versatile Use", description: "Perfect for uniforms, promotional items, retail products, and DIY projects." },
    ],
    customizationOptions: [
      "Style: Embroidered, woven, printed, or combination",
      "Adhesive: Standard iron-on, heavy-duty industrial",
      "Size: 1 inch to 10+ inches",
      "Shape: Standard shapes or custom die-cut",
      "Colors: Full color range with Pantone matching",
      "Dual backing: Iron-on with optional sew-on border",
    ],
    customizationImage: "",  // ← Your image
  customizationImageAlt: "Custom patch options showing different sizes, materials and backing types",  // ← Optional alt text
    orderingSteps: [
      { number: "01", title: "Design Submission", description: "Send your artwork or work with our design team." },
      { number: "02", title: "Proof Approval", description: "Review your digital mockup with iron-on backing specified." },
      { number: "03", title: "Manufacturing", description: "Patches produced and iron-on adhesive carefully applied." },
      { number: "04", title: "Delivery", description: "Shipped with application instructions included." },
    ],
    manufacturingProcess: [
      "Standard patch production (embroidered, woven, or printed)",
      "Heat-activated adhesive film application",
      "Adhesive bond strength testing",
      "Quality inspection for coverage and consistency",
      "Individual packaging with application instructions",
      "Secure shipping",
    ],
    galleryPlaceholders: [
      { src: "", alt: "Iron-on embroidered patches", caption: "Embroidered Iron-On" },
      { src: "", alt: "Iron-on patches for uniforms", caption: "Uniform Patches" },
      { src: "", alt: "DIY iron-on patches", caption: "DIY Applications" },
      { src: "", alt: "Iron-on patches for retail", caption: "Retail Products" },
    ],
    pricingExplanation:
      "Iron-on patches have a small surcharge over standard sew-on patches to cover the adhesive backing application. Pricing otherwise follows the same structure based on size, style, and quantity.",
    industriesServed: ["Corporate Uniforms", "Retail & Consumer", "Schools", "Scouts & Youth Groups", "DIY & Crafts", "Events & Promotions", "Sports Teams", "Fashion Brands"],
    testimonials: [
      { quote: "The iron-on patches simplified our uniform distribution enormously. Employees can apply them in minutes, and they hold up to daily wear and laundering.", name: "Karen Phillips", role: "Facilities Manager", company: "ProServe Cleaning" },
      { quote: "We sell iron-on patches as retail products and the adhesive quality is consistently excellent. Our customers love the easy application.", name: "Mark Stevens", role: "Owner", company: "Patchwork Supply Co." },
    ],
    faqs: [
      { question: "How long do iron-on patches last?", answer: "With proper application, iron-on patches create a permanent bond. For garments washed frequently, we recommend reinforcing with a few stitches around the edges." },
      { question: "Can iron-on patches be removed?", answer: "They can be removed with heat and gentle peeling, though some adhesive residue may remain. They are designed for permanent application." },
      { question: "What fabrics work with iron-on patches?", answer: "Cotton, denim, and most natural fibers work best. Synthetic fabrics like nylon or waterproof materials may not bond as effectively." },
      { question: "Do you include application instructions?", answer: "Yes, every order includes detailed application instructions with recommended temperature and time settings." },
      { question: "Can I get dual iron-on and sew-on backing?", answer: "Yes, we can add an iron-on adhesive with a merrowed border that also allows sewing for extra security." },
    ],
    relatedSlugs: ["custom-patches", "embroidered-patches", "velcro-patches", "woven-patches"],
    ctaText: "Order Iron-On Patches",
    whyChooseUs: [
      { title: "Premium Adhesive", description: "Industrial-grade heat adhesive for reliable, long-lasting bonds." },
      { title: "Easy Application", description: "Detailed instructions included. No special equipment needed." },
      { title: "Same Quality", description: "Identical craftsmanship to our sew-on patches with added convenience." },
      { title: "Bulk Friendly", description: "Ideal for organizations needing easy uniform customization at scale." },
    ],
    stats: [
      { value: "400K+", label: "Iron-On Patches Made" },
      { value: "180°C", label: "Application Temp" },
      { value: "15sec", label: "Application Time" },
      { value: "98%", label: "Satisfaction Rate" },
    ],
  },
  {
    slug: "hangtags-labels",
    title: "Hangtags & Labels",
    heroDescription:
      "Professional custom hangtags and woven labels that add a polished, branded finishing touch to your products. Elevate your packaging and garment presentation with premium printed and woven options.",
    valueProposition:
      "Custom hangtags and woven labels designed to enhance your product presentation and reinforce your brand identity at every touchpoint.",
    keyFeatures: [
      { title: "Brand Reinforcement", description: "Every label and tag is a branding opportunity that adds perceived value to your products." },
      { title: "Multiple Formats", description: "Woven labels, printed labels, hang tags, care labels, and size tags." },
      { title: "Premium Materials", description: "High-quality card stock, satin, damask, and taffeta options." },
      { title: "Custom Finishing", description: "Foil stamping, embossing, spot UV, grommets, and string attachments." },
    ],
    customizationOptions: [
      "Type: Woven labels, printed labels, hang tags, care labels",
      "Material: Satin, damask, taffeta, cotton, card stock",
      "Printing: Full color, foil stamping, embossing, spot UV",
      "Size: Custom dimensions to your specifications",
      "Fold: Center fold, end fold, straight cut, mitre fold",
      "Attachment: Sew-in, adhesive, string, safety pin, barb",
    ],
    customizationImage: "",  // ← Your image
  customizationImageAlt: "Custom patch options showing different sizes, materials and backing types",  // ← Optional alt text
    orderingSteps: [
      { number: "01", title: "Specify Requirements", description: "Share your label type, size, material, and design needs." },
      { number: "02", title: "Design & Proof", description: "Review detailed mockups with material and finish specifications." },
      { number: "03", title: "Production", description: "Precision manufacturing with your chosen materials and finishes." },
      { number: "04", title: "Deliver", description: "Quality-checked and packed for immediate use." },
    ],
    manufacturingProcess: [
      "Design optimization for chosen material and format",
      "Material selection (woven, printed, card stock)",
      "Weaving or printing production",
      "Cutting, folding, and finishing",
      "Special finish application (foil, UV, emboss)",
      "Quality inspection and packaging",
    ],
    galleryPlaceholders: [
      { src: "", alt: "Woven clothing labels", caption: "Woven Labels" },
      { src: "", alt: "Custom hang tags", caption: "Hang Tags" },
      { src: "", alt: "Care and size labels", caption: "Care Labels" },
      { src: "", alt: "Premium foil hang tags", caption: "Foil Stamped Tags" },
    ],
    pricingExplanation:
      "Label and hangtag pricing varies by type, material, size, print method, and finishing options. Woven labels are priced per unit with volume discounts. Hangtags are priced per piece based on card stock weight and finishing.",
    industriesServed: ["Fashion & Apparel", "Retail Brands", "Handmade & Artisan", "Food & Beverage", "Beauty & Cosmetics", "Home Goods", "Gifts & Specialty", "E-Commerce"],
    testimonials: [
      { quote: "The woven labels added a completely professional finish to our handmade clothing line. Our customers notice and appreciate the quality.", name: "Isabella Torres", role: "Designer", company: "Luna Thread Studio" },
      { quote: "Our custom hang tags with foil stamping look incredible. They transformed our product packaging from ordinary to premium.", name: "Ryan Mitchell", role: "Brand Manager", company: "Heritage Roast Coffee" },
    ],
    faqs: [
      { question: "What is the difference between woven and printed labels?", answer: "Woven labels have the design woven directly into the fabric for a premium, textured feel. Printed labels have ink applied to a fabric surface, which is more cost-effective for full-color designs." },
      { question: "What materials are available for hang tags?", answer: "We offer various card stocks (kraft, coated, textured), plus specialty materials. Finishing options include foil, emboss, spot UV, and more." },
      { question: "Can you create care labels with washing instructions?", answer: "Yes, we produce regulatory-compliant care labels with washing symbols, fabric content, and country of origin." },
      { question: "What is the minimum order for woven labels?", answer: "Minimum orders typically start at 100 pieces for woven labels. Printed labels can be produced in smaller quantities." },
      { question: "Do you offer label design services?", answer: "Yes, our design team can create custom label and hang tag designs that align with your brand identity." },
    ],
    relatedSlugs: ["woven-patches", "custom-apparel", "leather-patches", "die-cut-stickers"],
    ctaText: "Get Labels & Tags Quote",
    whyChooseUs: [
      { title: "Branding Experts", description: "We understand how labels and tags contribute to brand perception." },
      { title: "Premium Materials", description: "Satin, damask, taffeta, and high-quality card stock options." },
      { title: "Custom Finishes", description: "Foil stamping, embossing, spot UV, and more for a premium touch." },
      { title: "Fast Turnaround", description: "Most label and tag orders completed within 5-7 business days." },
    ],
    stats: [
      { value: "500K+", label: "Labels Produced" },
      { value: "8+", label: "Material Options" },
      { value: "5-7", label: "Day Turnaround" },
      { value: "100%", label: "Brand Compliant" },
    ],
  },
  {
    slug: "velcro-patches",
    title: "Velcro Patches",
    heroDescription:
      "Tactical-grade velcro (hook and loop) patches designed for quick attachment and removal. The standard for military, law enforcement, tactical gear, and interchangeable branding applications.",
    valueProposition:
      "Military-spec hook-and-loop patches for quick-swap identification and branding on tactical gear, uniforms, and accessories.",
    keyFeatures: [
      { title: "Quick Swap", description: "Attach and remove in seconds for interchangeable identification and branding." },
      { title: "Military Grade", description: "Meets military specifications for durability, adhesion, and field performance." },
      { title: "Secure Attachment", description: "Industrial hook-and-loop backing grips firmly during use." },
      { title: "IR & Glow Options", description: "Infrared reflective and glow-in-the-dark options for tactical applications." },
    ],
    customizationOptions: [
      "Velcro: Hook backing on patch, loop panel sold separately",
      "Material: Embroidered, woven, PVC, or printed face",
      "Special: IR reflective, glow-in-the-dark, subdued colors",
      "Size: 1 inch to 6+ inches",
      "Shape: Standard and custom die-cut",
      "Compliance: Military spec MIL-DTL-3394 available",
    ],
    customizationImage: "",  // ← Your image
  customizationImageAlt: "Custom patch options showing different sizes, materials and backing types",  // ← Optional alt text
    orderingSteps: [
      { number: "01", title: "Specify Requirements", description: "Tell us your application, size, material, and any special features needed." },
      { number: "02", title: "Tactical Proof", description: "Receive a detailed proof with velcro backing specifications." },
      { number: "03", title: "Production", description: "Manufactured to tactical standards with precision equipment." },
      { number: "04", title: "Deliver", description: "Shipped with loop panels (if requested) and ready for deployment." },
    ],
    manufacturingProcess: [
      "Design optimization for chosen face material",
      "Patch face production (embroidery, weaving, PVC, or print)",
      "Hook-side velcro backing application with industrial adhesive",
      "Edge finishing and trimming",
      "Adhesion strength testing",
      "Packaging with optional loop panels",
    ],
    galleryPlaceholders: [
      { src: "", alt: "Military velcro patches", caption: "Military & Tactical" },
      { src: "", alt: "Law enforcement velcro patches", caption: "Law Enforcement" },
      { src: "", alt: "Morale velcro patches", caption: "Morale Patches" },
      { src: "", alt: "Corporate velcro patches", caption: "Corporate ID Patches" },
    ],
    pricingExplanation:
      "Velcro patch pricing includes the hook-side backing. Loop panels are available separately. Pricing varies by face material, size, and any special features (IR, glow). Military-spec production may carry a premium.",
    industriesServed: ["Military & Defense", "Law Enforcement", "Fire & EMS", "Security", "Tactical & Outdoor", "Airsoft & Milsim", "Corporate Security", "Search & Rescue"],
    testimonials: [
      { quote: "These velcro patches are built to spec and perform in the field. We've been using them for unit identification across multiple deployments.", name: "Capt. Mark Harris", role: "Company Commander", company: "US Army" },
      { quote: "The IR-reflective velcro patches are excellent quality. Fast turnaround and they meet all our tactical requirements.", name: "Officer Kim Lee", role: "Equipment Manager", company: "Metro Police Department" },
    ],
    faqs: [
      { question: "Do you provide both hook and loop sides?", answer: "Patches come with hook backing (rough side). Loop panels (soft side) can be ordered separately for attachment surfaces." },
      { question: "Are your velcro patches mil-spec?", answer: "Yes, we offer patches manufactured to MIL-DTL-3394 specifications for military applications." },
      { question: "What are IR-reflective patches?", answer: "IR patches are visible under infrared illumination (night vision) while appearing subdued in visible light. They are used for identification in tactical environments." },
      { question: "How many times can velcro patches be reattached?", answer: "Our industrial-grade hook and loop maintains strong adhesion through thousands of attach/remove cycles." },
      { question: "Can I get velcro patches with PVC faces?", answer: "Absolutely. PVC velcro patches are extremely popular for tactical and morale patch applications." },
    ],
    relatedSlugs: ["custom-patches", "pvc-patches", "embroidered-patches", "iron-on-patches"],
    ctaText: "Order Velcro Patches Now",
    whyChooseUs: [
      { title: "Tactical Specialists", description: "We understand the demands of military and law enforcement applications." },
      { title: "Mil-Spec Quality", description: "Manufacturing to military specifications when required." },
      { title: "IR & Glow Options", description: "Specialty patches for tactical night operations." },
      { title: "Bulk Pricing", description: "Competitive pricing for large unit orders and government contracts." },
    ],
    stats: [
      { value: "350K+", label: "Velcro Patches Made" },
      { value: "MIL-SPEC", label: "Compliance" },
      { value: "1000+", label: "Reattach Cycles" },
      { value: "48hr", label: "Proof Time" },
    ],
  },
  {
    slug: "pvc-patches",
    title: "PVC Patches",
    heroDescription:
      "Durable, waterproof PVC rubber patches that withstand extreme conditions while maintaining vivid colors and sharp detail. Perfect for outdoor, tactical, and high-wear applications.",
    valueProposition:
      "Waterproof, flexible PVC rubber patches with 2D and 3D molding options for unmatched durability in any environment.",
    keyFeatures: [
      { title: "Waterproof & Weatherproof", description: "PVC rubber shrugs off water, mud, and UV exposure without fading or damage." },
      { title: "2D & 3D Options", description: "Flat designs or raised 3D elements for dimension and visual depth." },
      { title: "Vivid Colors", description: "Pantone-matched PVC maintains color intensity permanently. Will not fade or bleed." },
      { title: "Flexible & Durable", description: "Soft PVC rubber bends without cracking and resists extreme temperatures." },
    ],
    customizationOptions: [
      "Dimension: 2D flat, 2D with texture, 3D raised layers",
      "Colors: Up to 8 Pantone-matched colors",
      "Finish: Matte, gloss, translucent, glow-in-the-dark",
      "Size: 1 inch to 8+ inches",
      "Shape: Any custom shape with precision molding",
      "Backing: Velcro, sew loops, pin, adhesive, magnetic",
    ],
    customizationImage: "",  // ← Your image
  customizationImageAlt: "Custom patch options showing different sizes, materials and backing types",  // ← Optional alt text
    orderingSteps: [
      { number: "01", title: "Send Your Design", description: "Provide artwork or concept for PVC conversion." },
      { number: "02", title: "Mold Design Proof", description: "Review a 3D rendering showing layers, colors, and dimensions." },
      { number: "03", title: "Mold & Produce", description: "Custom molds created and PVC patches mass-produced." },
      { number: "04", title: "Quality Check & Ship", description: "Every patch inspected for color, detail, and flexibility." },
    ],
    manufacturingProcess: [
      "Design conversion to PVC mold specifications",
      "Custom steel or silicone mold creation",
      "PVC rubber mixing with Pantone-matched colorants",
      "Injection molding or dispensing into molds",
      "Curing and demolding",
      "Backing attachment and quality inspection",
    ],
    galleryPlaceholders: [
      { src: "", alt: "3D PVC tactical patches", caption: "3D Tactical Patches" },
      { src: "", alt: "PVC brand patches", caption: "Brand Patches" },
      { src: "", alt: "Glow-in-the-dark PVC patches", caption: "Glow Patches" },
      { src: "", alt: "PVC morale patches", caption: "Morale Patches" },
    ],
    pricingExplanation:
      "PVC patch pricing includes a one-time mold fee (waived on reorders) plus per-unit costs based on size, number of colors/layers, and quantity. 3D patches cost more than 2D due to additional mold complexity.",
    industriesServed: ["Military & Tactical", "Outdoor & Adventure", "Law Enforcement", "Firefighting & EMS", "Sports & Fitness", "Motorcycle Clubs", "Fashion & Streetwear", "Promotional Products"],
    testimonials: [
      { quote: "Our PVC patches survive everything we throw at them. Rain, mud, sun, rough handling, they always look brand new.", name: "Jake Morrison", role: "Gear Manager", company: "Summit Outdoor Adventures" },
      { quote: "The 3D detail on our PVC morale patches is incredible. They are by far the most popular item in our tactical shop.", name: "Nina Rodriguez", role: "Store Owner", company: "Tactical Edge Supply" },
    ],
    faqs: [
      { question: "What is the difference between 2D and 3D PVC patches?", answer: "2D patches have flat layers at different heights. 3D patches have raised elements with significant depth for a sculpted, dimensional look." },
      { question: "Is there a mold fee?", answer: "Yes, a one-time mold fee applies for new designs. This fee is waived on all reorders of the same design." },
      { question: "How durable are PVC patches compared to embroidered?", answer: "PVC is more resistant to water, UV, chemicals, and extreme temperatures. For harsh environments, PVC outperforms embroidered patches significantly." },
      { question: "Can PVC patches be glow-in-the-dark?", answer: "Yes, we offer phosphorescent PVC that glows in the dark after light exposure." },
      { question: "What is the maximum number of colors?", answer: "Standard PVC patches support up to 8 Pantone-matched colors per design." },
    ],
    relatedSlugs: ["velcro-patches", "custom-patches", "embroidered-patches", "die-cut-stickers"],
    ctaText: "Get PVC Patches Quote",
    whyChooseUs: [
      { title: "Mold Expertise", description: "Precision mold-making for sharp detail and consistent reproduction." },
      { title: "Waterproof Guarantee", description: "100% waterproof patches that perform in any environment." },
      { title: "3D Specialists", description: "Multi-layer 3D designs with depth and dimension." },
      { title: "Free Reorder Molds", description: "Your mold is kept on file. Reorders have no mold fee." },
    ],
    stats: [
      { value: "200K+", label: "PVC Patches Made" },
      { value: "3D", label: "Molding Capable" },
      { value: "8", label: "Max Colors" },
      { value: "100%", label: "Waterproof" },
    ],
  },
  {
    slug: "die-cut-stickers",
    title: "Die Cut Stickers",
    heroDescription:
      "Precision die-cut stickers with vibrant full-color printing and durable outdoor-rated materials. Perfect for branding, packaging, laptops, merchandise, and promotional giveaways.",
    valueProposition:
      "Custom-shaped, full-color stickers with premium vinyl and laminate options for indoor and outdoor durability.",
    keyFeatures: [
      { title: "Custom Die-Cut Shapes", description: "Cut precisely to your design contour for a professional, premium look." },
      { title: "Full-Color Printing", description: "CMYK + white ink for vivid colors on any sticker material." },
      { title: "Outdoor Durable", description: "UV-resistant, waterproof vinyl with optional laminate for years of use." },
      { title: "Multiple Finishes", description: "Glossy, matte, holographic, clear, and kraft paper options." },
    ],
    customizationOptions: [
      "Material: Vinyl, paper, clear, holographic, kraft",
      "Finish: Gloss, matte, soft-touch, spot UV",
      "Laminate: UV-resistant outdoor laminate available",
      "Size: 1 inch to 12+ inches",
      "Shape: Die-cut to design, kiss-cut on sheets",
      "Adhesive: Permanent, removable, or repositionable",
    ],
    customizationImage: "",  // ← Your image
  customizationImageAlt: "Custom patch options showing different sizes, materials and backing types",  // ← Optional alt text
    orderingSteps: [
      { number: "01", title: "Upload Design", description: "Send your artwork and specify size, material, and finish preferences." },
      { number: "02", title: "Digital Proof", description: "Review a color-accurate proof with die-cut outline." },
      { number: "03", title: "Print & Cut", description: "High-resolution printing followed by precision die-cutting." },
      { number: "04", title: "Package & Ship", description: "Individually or sheet-packed and shipped to you." },
    ],
    manufacturingProcess: [
      "Artwork preparation with bleed and cut-line setup",
      "High-resolution digital printing",
      "Laminate application (if specified)",
      "Precision die-cutting to design contour",
      "Quality inspection for print and cut accuracy",
      "Packaging by count or on sheets",
    ],
    galleryPlaceholders: [
      { src: "", alt: "Custom die-cut brand stickers", caption: "Brand Stickers" },
      { src: "", alt: "Holographic stickers", caption: "Holographic Finish" },
      { src: "", alt: "Laptop and product stickers", caption: "Product Stickers" },
      { src: "", alt: "Outdoor vinyl stickers", caption: "Outdoor Vinyl" },
    ],
    pricingExplanation:
      "Sticker pricing is based on size, material, finish, and quantity. Vinyl stickers with laminate are priced slightly higher than paper stickers. Volume discounts are significant at 500+ units.",
    industriesServed: ["Brands & Marketing", "E-Commerce", "Food & Beverage", "Tech & Startups", "Music & Entertainment", "Craft & Handmade", "Automotive", "Events & Conferences"],
    testimonials: [
      { quote: "The die-cut stickers are perfect for our product packaging. Sharp cuts, vivid colors, and they stick permanently. Great quality.", name: "Chris Taylor", role: "Marketing Lead", company: "BrightBrew Coffee" },
      { quote: "We ordered 5,000 holographic stickers for our brand launch and they were a massive hit. The quality and finish are outstanding.", name: "Mia Jackson", role: "Founder", company: "Neon Wave Studio" },
    ],
    faqs: [
      { question: "What is the difference between die-cut and kiss-cut stickers?", answer: "Die-cut stickers are cut all the way through the backing to your design shape. Kiss-cut stickers are cut through the vinyl only, leaving them on a square or sheet backing for easy peeling." },
      { question: "Are your stickers waterproof?", answer: "Our vinyl stickers with laminate are waterproof and UV-resistant, suitable for outdoor use for 3-5+ years." },
      { question: "What is the minimum order?", answer: "We can produce as few as 50 stickers, with better per-unit pricing at higher quantities." },
      { question: "Can stickers be applied to vehicles?", answer: "Yes, our outdoor vinyl stickers are suitable for vehicle application and rated for years of outdoor exposure." },
      { question: "Do you offer clear or transparent stickers?", answer: "Yes, we offer clear vinyl stickers with full-color printing and white ink for designs that show through the clear material." },
    ],
    relatedSlugs: ["holographic-stickers", "custom-patches", "hangtags-labels", "heat-transfer-dtf-print"],
    ctaText: "Order Die-Cut Stickers",
    whyChooseUs: [
      { title: "Precision Cutting", description: "Accurate die-cut contours that match your design exactly." },
      { title: "Outdoor Rated", description: "UV and waterproof options rated for years of outdoor exposure." },
      { title: "Multiple Materials", description: "Vinyl, paper, clear, holographic, and kraft options." },
      { title: "Low Minimums", description: "Start at just 50 stickers with no setup fees." },
    ],
    stats: [
      { value: "1M+", label: "Stickers Produced" },
      { value: "5+", label: "Material Options" },
      { value: "3-5yr", label: "Outdoor Life" },
      { value: "50", label: "Min Order" },
    ],
  },
  {
    slug: "sublimation-patches",
    title: "Sublimation Patches",
    heroDescription:
      "Photo-quality sublimation patches with unlimited colors and photographic detail. Dye-sublimation technology infuses ink directly into polyester fabric for vivid, permanent, full-color designs.",
    valueProposition:
      "Full-color, photo-quality patches using dye-sublimation for unlimited color designs that won't fade, crack, or peel.",
    keyFeatures: [
      { title: "Unlimited Colors", description: "Full CMYK printing with no per-color charges. Gradients and photos reproduced perfectly." },
      { title: "Photo-Quality Detail", description: "High-resolution printing captures fine details, faces, and complex imagery." },
      { title: "Permanent Color", description: "Dye infuses into fabric fibers. Colors will not fade, crack, or peel." },
      { title: "Lightweight", description: "Thin, flexible patches that sit flat and conform to garment contours." },
    ],
    customizationOptions: [
      "Print: Full CMYK, unlimited colors, photo-realistic",
      "Base: White polyester fabric",
      "Border: Merrowed, heat-cut, laser-cut",
      "Size: 1 inch to 10+ inches",
      "Shape: Standard or custom die-cut",
      "Backing: Iron-on, sew-on, velcro, adhesive",
    ],
    customizationImage: "",  // ← Your image
  customizationImageAlt: "Custom patch options showing different sizes, materials and backing types",  // ← Optional alt text
    orderingSteps: [
      { number: "01", title: "Send High-Res Artwork", description: "Provide high-resolution images or designs for sublimation." },
      { number: "02", title: "Color Proof", description: "Review a color-accurate digital proof of your sublimated patch." },
      { number: "03", title: "Sublimation & Finishing", description: "Dye-sublimation transfer, cutting, and border finishing." },
      { number: "04", title: "Quality Check & Ship", description: "Color accuracy verified and shipped." },
    ],
    manufacturingProcess: [
      "High-resolution artwork preparation",
      "Dye-sublimation printing onto transfer paper",
      "Heat press transfer onto polyester patch material",
      "Precision cutting to shape",
      "Border and backing application",
      "Color accuracy inspection",
    ],
    galleryPlaceholders: [
      { src: "", alt: "Photo-quality sublimation patches", caption: "Photo Patches" },
      { src: "", alt: "Full-color sublimation patches", caption: "Full-Color Designs" },
      { src: "", alt: "Sublimation patches on uniforms", caption: "Uniform Applications" },
      { src: "", alt: "Gradient sublimation patches", caption: "Gradient Designs" },
    ],
    pricingExplanation:
      "Sublimation patch pricing is based on size and quantity only. There are no per-color charges, making it the most cost-effective option for multi-color and photographic designs.",
    industriesServed: ["Sports Teams", "Photography & Art", "Events & Festivals", "Corporate Branding", "Fashion", "Military (Morale)", "Non-Profits", "Schools"],
    testimonials: [
      { quote: "We needed patches with our full-color team photo and the sublimation quality was amazing. Every detail came through perfectly.", name: "Coach Sarah Ellis", role: "Head Coach", company: "Riverside Volleyball Club" },
      { quote: "The sublimation patches for our arts festival were stunning. Vibrant colors and photo-quality detail at a fraction of embroidery cost.", name: "Marcus White", role: "Event Director", company: "Cascade Arts Festival" },
    ],
    faqs: [
      { question: "Can sublimation patches include photographs?", answer: "Yes, sublimation is ideal for photographic imagery. High-resolution photos reproduce with excellent detail and color accuracy." },
      { question: "Do sublimation patches fade over time?", answer: "No. The dye is infused into the fabric fibers, creating permanent coloring that will not fade, crack, or peel with washing or sun exposure." },
      { question: "Can sublimation be done on dark fabrics?", answer: "Sublimation requires a white or very light polyester base. For dark garments, the patch itself has a white base with full-color printing." },
      { question: "How does sublimation compare to embroidered patches?", answer: "Sublimation offers unlimited colors and photographic detail at lower cost, but lacks the raised texture of embroidery. Choose based on the design requirements and desired look." },
      { question: "Are sublimation patches durable?", answer: "Extremely. The dye is part of the fabric, not sitting on top, making it resistant to washing, scratching, and UV exposure." },
    ],
    relatedSlugs: ["heat-transfer-dtf-print", "woven-patches", "custom-patches", "embroidered-patches"],
    ctaText: "Get Sublimation Patches Quote",
    whyChooseUs: [
      { title: "No Color Limits", description: "Full CMYK printing with no per-color surcharges." },
      { title: "Photo Quality", description: "High-resolution sublimation for photographic detail." },
      { title: "Permanent Colors", description: "Dye-infused into fabric, never fades or peels." },
      { title: "Cost Effective", description: "Most affordable option for full-color and complex designs." },
    ],
    stats: [
      { value: "100K+", label: "Sublimation Patches" },
      { value: "CMYK", label: "Full Color" },
      { value: "1200", label: "DPI Quality" },
      { value: "Permanent", label: "Color Bond" },
    ],
  },
  {
    slug: "holographic-stickers",
    title: "Holographic Stickers",
    heroDescription:
      "Eye-catching holographic stickers with rainbow-shifting effects that demand attention. Perfect for premium branding, special editions, anti-counterfeit applications, and merchandise that stands out.",
    valueProposition:
      "Premium holographic stickers with rainbow-shift effects that add a futuristic, premium dimension to your brand.",
    keyFeatures: [
      { title: "Rainbow-Shift Effect", description: "Holographic material creates dynamic color shifts as viewing angle changes." },
      { title: "Premium Perception", description: "Holographic finish instantly elevates perceived value and brand positioning." },
      { title: "Anti-Counterfeit", description: "Holographic effects are difficult to replicate, providing authentication." },
      { title: "Full Customization", description: "Custom printed designs on holographic base with die-cut shapes." },
    ],
    customizationOptions: [
      "Base: Silver holographic, rainbow, pattern holographic",
      "Print: Full-color CMYK + white on holographic base",
      "Finish: Gloss or matte laminate over holographic",
      "Size: 1 inch to 8+ inches",
      "Shape: Die-cut to any custom shape",
      "Adhesive: Permanent or tamper-evident",
    ],
    customizationImage: "",  // ← Your image
  customizationImageAlt: "Custom patch options showing different sizes, materials and backing types",  // ← Optional alt text
    orderingSteps: [
      { number: "01", title: "Design Submission", description: "Provide your artwork with areas designated for holographic effect." },
      { number: "02", title: "Proof Review", description: "Approve a digital simulation of the holographic sticker design." },
      { number: "03", title: "Print & Die-Cut", description: "High-resolution printing on holographic material with precision cutting." },
      { number: "04", title: "Ship", description: "Quality-checked and delivered." },
    ],
    manufacturingProcess: [
      "Design layout on holographic material template",
      "Color separation for holographic base interaction",
      "High-resolution printing on holographic vinyl",
      "Optional laminate application",
      "Precision die-cutting",
      "Quality inspection for effect and adhesion",
    ],
    galleryPlaceholders: [
      { src: "", alt: "Holographic brand stickers", caption: "Brand Stickers" },
      { src: "", alt: "Holographic product labels", caption: "Product Labels" },
      { src: "", alt: "Holographic special edition stickers", caption: "Special Editions" },
      { src: "", alt: "Holographic security labels", caption: "Security Labels" },
    ],
    pricingExplanation:
      "Holographic sticker pricing includes the premium holographic material base. Pricing varies by size, print complexity, and quantity. Holographic stickers are priced slightly above standard vinyl due to material costs.",
    industriesServed: ["Beauty & Cosmetics", "Tech & Startups", "Music & Entertainment", "Fashion Brands", "Cannabis & CBD", "Craft Beverages", "Gaming", "Luxury Goods"],
    testimonials: [
      { quote: "The holographic stickers were the star of our product launch. Customers are obsessed with the rainbow effect. They photograph beautifully for social media.", name: "Zara Williams", role: "CMO", company: "Glow Beauty Co." },
      { quote: "We use holographic stickers as security labels on our limited-edition products. They look incredible and provide tamper-evident authentication.", name: "Leo Chen", role: "Product Manager", company: "Flux Electronics" },
    ],
    faqs: [
      { question: "Can I print custom designs on holographic material?", answer: "Yes, we print full-color designs on holographic bases. You can choose which areas show the holographic effect and which are covered by ink." },
      { question: "Are holographic stickers durable?", answer: "Yes, with laminate they are waterproof and UV-resistant, suitable for outdoor and product applications." },
      { question: "Can holographic stickers be used for security purposes?", answer: "Absolutely. Holographic effects are extremely difficult to counterfeit, making them ideal for tamper-evident and authentication labels." },
      { question: "What holographic patterns are available?", answer: "We offer silver rainbow, prism, dot pattern, and custom holographic patterns." },
      { question: "What is the minimum order for holographic stickers?", answer: "Minimum orders start at 100 pieces for holographic stickers." },
    ],
    relatedSlugs: ["die-cut-stickers", "hangtags-labels", "sublimation-patches", "pvc-patches"],
    ctaText: "Order Holographic Stickers",
    whyChooseUs: [
      { title: "Premium Effects", description: "Multiple holographic patterns for unique brand expression." },
      { title: "Full Customization", description: "Custom print + holographic for total design control." },
      { title: "Security Options", description: "Tamper-evident adhesives for authentication applications." },
      { title: "Social Media Ready", description: "Stickers that photograph beautifully and get shared online." },
    ],
    stats: [
      { value: "300K+", label: "Holo Stickers Made" },
      { value: "4+", label: "Holo Patterns" },
      { value: "100", label: "Min Order" },
      { value: "5yr+", label: "Outdoor Life" },
    ],
  },
  {
    slug: "custom-apparel",
    title: "Custom Apparel",
    heroDescription:
      "Fully customized apparel with your branding applied through embroidery, screen printing, DTF, and sublimation. From t-shirts and polos to jackets and workwear, we deliver branded clothing at any scale.",
    valueProposition:
      "End-to-end custom apparel production combining premium garments with expert decoration for a complete branded clothing solution.",
    keyFeatures: [
      { title: "Full Garment Range", description: "T-shirts, polos, hoodies, jackets, workwear, caps, and more from top brands." },
      { title: "Multiple Decoration Methods", description: "Embroidery, screen printing, DTF, sublimation, and vinyl application." },
      { title: "Garment Sourcing", description: "We source from premium blank brands or work with your supplied garments." },
      { title: "Complete Branding", description: "Logo placement, labels, hangtags, and packaging for a professional finish." },
    ],
    customizationOptions: [
      "Garment type: T-shirts, polos, hoodies, jackets, caps, workwear",
      "Decoration: Embroidery, screen print, DTF, sublimation, vinyl",
      "Placement: Chest, back, sleeve, collar, hem, all-over",
      "Garment color: Full range from blank suppliers",
      "Add-ons: Custom labels, hangtags, packaging",
      "Sizing: XS to 5XL with custom sizing available",
    ],
    customizationImage: "",  // ← Your image
  customizationImageAlt: "Custom patch options showing different sizes, materials and backing types",  // ← Optional alt text
    orderingSteps: [
      { number: "01", title: "Consultation", description: "Discuss garment types, decoration methods, and branding requirements." },
      { number: "02", title: "Sampling", description: "Receive a decorated sample for fit, color, and quality approval." },
      { number: "03", title: "Production", description: "Full-scale production with quality checks at every stage." },
      { number: "04", title: "Fulfillment", description: "Individual size sorting, packing, and delivery." },
    ],
    manufacturingProcess: [
      "Garment selection and sourcing from premium suppliers",
      "Artwork preparation for chosen decoration method",
      "Decoration production (embroidery, print, etc.)",
      "Quality inspection at each production stage",
      "Size sorting and folding",
      "Labeling, packaging, and shipping",
    ],
    galleryPlaceholders: [
      { src: "", alt: "Custom printed t-shirts", caption: "Custom T-Shirts" },
      { src: "", alt: "Embroidered polo shirts", caption: "Embroidered Polos" },
      { src: "", alt: "Branded hoodies", caption: "Branded Hoodies" },
      { src: "", alt: "Custom workwear", caption: "Corporate Workwear" },
    ],
    pricingExplanation:
      "Apparel pricing includes garment cost plus decoration charges. Pricing varies by garment brand, decoration method, number of print locations, and order quantity. Volume discounts are substantial.",
    industriesServed: ["Corporate & Enterprise", "Retail & E-Commerce", "Sports Teams", "Events & Conferences", "Hospitality", "Healthcare", "Construction & Trades", "Schools & Universities"],
    testimonials: [
      { quote: "They handled our entire corporate uniform program, 500 employees across 3 locations. Every garment was perfectly decorated and delivered on time.", name: "Patricia Young", role: "VP Operations", company: "NorthStar Logistics" },
      { quote: "The quality of our custom merchandise line is outstanding. From the garment quality to the print work, everything exceeds expectations.", name: "Derek Robinson", role: "Marketing Director", company: "Pulse Fitness" },
    ],
    faqs: [
      { question: "Do you supply the garments or can I provide my own?", answer: "Both. We source from premium blank brands like Bella+Canvas, Gildan, and Next Level. You can also supply your own garments." },
      { question: "Which decoration method is best for my project?", answer: "Embroidery is best for corporate wear and polos. Screen printing is ideal for large quantity t-shirt runs. DTF is perfect for small runs with full color. We'll recommend the best method for your needs." },
      { question: "What is the turnaround time for custom apparel?", answer: "Standard turnaround is 10-14 business days from approval, depending on order size and decoration method." },
      { question: "Can you do individual name customization?", answer: "Yes, we offer per-garment customization for names, numbers, and titles." },
      { question: "Do you offer custom labeling and packaging?", answer: "Yes, we can replace manufacturer labels with your own branded labels and add custom hang tags and packaging." },
    ],
    relatedSlugs: ["heat-transfer-dtf-print", "hoodies-tracksuits", "embroidered-patches", "custom-patches"],
    ctaText: "Get Custom Apparel Quote",
    whyChooseUs: [
      { title: "Full Service", description: "Garment sourcing, decoration, labeling, and fulfillment under one roof." },
      { title: "All Methods", description: "Embroidery, screen print, DTF, sublimation, and vinyl expertise." },
      { title: "Premium Blanks", description: "Top-quality garments from trusted blank apparel brands." },
      { title: "Scalable", description: "From 12-piece orders to 10,000+ unit production runs." },
    ],
    stats: [
      { value: "100K+", label: "Garments Decorated" },
      { value: "5", label: "Decoration Methods" },
      { value: "50+", label: "Garment Styles" },
      { value: "10-14", label: "Day Turnaround" },
    ],
  },
  {
    slug: "hoodies-tracksuits",
    title: "Hoodies & Tracksuits",
    heroDescription:
      "Custom branded hoodies and tracksuits with premium construction and expert decoration. Perfect for sports teams, streetwear labels, corporate events, and merchandise lines that demand comfort and style.",
    valueProposition:
      "Premium custom hoodies and tracksuits with embroidery, printing, and full customization from fabric to finish.",
    keyFeatures: [
      { title: "Premium Fabrics", description: "Heavy-weight cotton, fleece, and performance blends for comfort and durability." },
      { title: "Full Customization", description: "Custom colors, cuts, zippers, pockets, drawstrings, and linings." },
      { title: "Expert Decoration", description: "Embroidery, screen printing, DTF, and chenille application." },
      { title: "Matching Sets", description: "Coordinated hoodies and jogger/track pants for complete uniform looks." },
    ],
    customizationOptions: [
      "Style: Pullover, zip-up, quarter-zip, track jacket, joggers",
      "Fabric: Heavyweight cotton, French terry, fleece, performance",
      "Decoration: Embroidery, screen print, DTF, chenille, vinyl",
      "Details: Custom zippers, drawstrings, labels, pockets",
      "Colors: Full custom dyeing or select from blank range",
      "Sizing: XS to 5XL with custom size runs",
    ],
    customizationImage: "",  // ← Your image
  customizationImageAlt: "Custom patch options showing different sizes, materials and backing types",  // ← Optional alt text
    orderingSteps: [
      { number: "01", title: "Design & Specification", description: "Choose style, fabric, color, decoration, and details." },
      { number: "02", title: "Sample Production", description: "Physical sample produced for your approval before full production." },
      { number: "03", title: "Manufacturing", description: "Full production with quality checks at every stage." },
      { number: "04", title: "Delivery", description: "Size-sorted, packed, and delivered to your door." },
    ],
    manufacturingProcess: [
      "Design finalization and tech pack creation",
      "Fabric sourcing and color matching",
      "Garment construction and assembly",
      "Decoration application (embroidery, print, etc.)",
      "Quality inspection and finishing",
      "Individual packaging and shipping",
    ],
    galleryPlaceholders: [
      { src: "", alt: "Custom embroidered hoodies", caption: "Embroidered Hoodies" },
      { src: "", alt: "Custom tracksuit sets", caption: "Tracksuit Sets" },
      { src: "", alt: "Streetwear hoodies", caption: "Streetwear Collection" },
      { src: "", alt: "Team tracksuits", caption: "Team Tracksuits" },
    ],
    pricingExplanation:
      "Hoodie and tracksuit pricing depends on fabric weight, construction complexity, decoration method, and order quantity. Custom-made from scratch costs more than decorating blank garments. Contact us for detailed pricing.",
    industriesServed: ["Streetwear & Fashion", "Sports Teams", "Fitness & Wellness", "Schools & Universities", "Corporate Events", "Music & Entertainment", "E-Commerce", "Youth Organizations"],
    testimonials: [
      { quote: "Our custom tracksuits for the basketball team are incredible. Heavy fabric, perfect fit, and the embroidery is flawless. The players love them.", name: "Coach Williams", role: "Head Coach", company: "City Hawks Basketball" },
      { quote: "We launched our streetwear line with custom hoodies and the quality rivals brands charging three times our price. Outstanding production.", name: "Andre Davis", role: "Creative Director", company: "Midnight Culture" },
    ],
    faqs: [
      { question: "Can you create fully custom hoodies from scratch?", answer: "Yes, we offer cut-and-sew custom manufacturing where you specify every detail from fabric to construction." },
      { question: "Do you offer matching tracksuit sets?", answer: "Yes, we produce coordinated hoodie/jacket and jogger/track pant sets with consistent branding." },
      { question: "What is the minimum order for custom hoodies?", answer: "Minimum orders vary by complexity. Blank-decorated starts at 12 units. Fully custom cut-and-sew typically starts at 50 units." },
      { question: "Can I get a physical sample before ordering?", answer: "Absolutely. We produce pre-production samples for approval before committing to a full order." },
      { question: "What fabric weights do you offer?", answer: "We offer lightweight (250gsm), midweight (320gsm), and heavyweight (400gsm+) options depending on your needs." },
    ],
    relatedSlugs: ["custom-apparel", "letterman-jackets", "heat-transfer-dtf-print", "embroidered-patches"],
    ctaText: "Order Custom Hoodies & Tracksuits",
    whyChooseUs: [
      { title: "Cut & Sew Capable", description: "Fully custom manufacturing from your specifications." },
      { title: "Premium Fabrics", description: "Heavyweight cotton, fleece, and performance materials." },
      { title: "Complete Sets", description: "Matching hoodies and track pants for coordinated looks." },
      { title: "Sample First", description: "Physical samples before production for peace of mind." },
    ],
    stats: [
      { value: "50K+", label: "Hoodies Made" },
      { value: "400gsm+", label: "Max Fabric Weight" },
      { value: "5XL", label: "Max Size" },
      { value: "12", label: "Min Order" },
    ],
  },
  {
    slug: "letterman-jackets",
    title: "Letterman Jackets",
    heroDescription:
      "Classic American letterman jackets with premium wool bodies, genuine leather sleeves, and custom chenille lettering. Built for schools, teams, and anyone who appreciates timeless varsity style.",
    valueProposition:
      "Authentic varsity letterman jackets handcrafted with premium wool and leather, customized with chenille letters and embroidered details.",
    keyFeatures: [
      { title: "Genuine Leather Sleeves", description: "Premium cowhide leather sleeves with quilted satin lining." },
      { title: "Wool Body Construction", description: "Heavy 24oz melton wool body in your school or team colors." },
      { title: "Custom Chenille Letters", description: "Hand-finished chenille letters, numbers, and mascot patches." },
      { title: "Complete Customization", description: "Colors, lining, snaps, pockets, embroidery, and patches all customizable." },
    ],
    customizationOptions: [
      "Body: 24oz melton wool in custom colors",
      "Sleeves: Genuine leather or faux leather, color matched",
      "Lining: Quilted satin in custom colors with optional print",
      "Decoration: Chenille letters, embroidery, patches",
      "Hardware: Snap buttons in matching or contrasting metal",
      "Details: Inside pockets, name embroidery, graduation year",
    ],
    customizationImage: "",  // ← Your image
  customizationImageAlt: "Custom patch options showing different sizes, materials and backing types",  // ← Optional alt text
    orderingSteps: [
      { number: "01", title: "Design Your Jacket", description: "Select colors, materials, and customization options." },
      { number: "02", title: "Approve Sample", description: "Review a physical sample jacket with your specifications." },
      { number: "03", title: "Production", description: "Each jacket handcrafted with attention to detail." },
      { number: "04", title: "Delivery", description: "Individually inspected, packaged, and shipped." },
    ],
    manufacturingProcess: [
      "Pattern creation and material sourcing",
      "Wool body cutting and construction",
      "Leather sleeve cutting and attachment",
      "Lining and interior finishing",
      "Chenille and embroidery application",
      "Individual quality inspection",
    ],
    galleryPlaceholders: [
      { src: "", alt: "Classic letterman jackets", caption: "Classic Varsity" },
      { src: "", alt: "Custom school letterman jackets", caption: "School Colors" },
      { src: "", alt: "Letterman jacket chenille detail", caption: "Chenille Detail" },
      { src: "", alt: "Premium letterman jacket collection", caption: "Collection" },
    ],
    pricingExplanation:
      "Letterman jacket pricing depends on materials (genuine vs. faux leather), level of customization, and order quantity. Individual name customization is available. Contact us for a detailed quote based on your specifications.",
    industriesServed: ["High Schools", "Colleges & Universities", "Sports Teams", "Fraternities & Sororities", "Cheer & Dance", "Fashion & Streetwear", "Music Artists", "Corporate Awards"],
    testimonials: [
      { quote: "Our school letterman jackets are the best we've ever had. The wool is heavy, the leather is genuine, and the chenille is beautiful. Students treasure them.", name: "Principal Diane Moore", role: "Principal", company: "Westfield High School" },
      { quote: "We ordered letterman jackets for our brand ambassadors and they exceeded every expectation. Premium quality that represents our brand perfectly.", name: "Kevin Hart", role: "Brand Director", company: "Varsity Culture" },
    ],
    faqs: [
      { question: "Is the leather genuine?", answer: "Yes, we use premium cowhide leather for sleeves. Faux leather is available as a more affordable option." },
      { question: "Can each jacket be personalized?", answer: "Absolutely. Each jacket can have individual name embroidery, graduation year, and custom patches." },
      { question: "What is the minimum order for letterman jackets?", answer: "We can produce as few as 10 jackets per order. Single jackets are available at a premium." },
      { question: "How long does production take?", answer: "Letterman jackets require 3-4 weeks production time due to the handcrafted nature of construction." },
      { question: "Can I choose different colors for the body and sleeves?", answer: "Yes, the wool body and leather sleeves are independently color-selected. We offer dozens of wool and leather color combinations." },
    ],
    relatedSlugs: ["chenille-patches", "custom-jacket-patches", "embroidered-patches", "custom-apparel"],
    ctaText: "Design Your Letterman Jacket",
    whyChooseUs: [
      { title: "Authentic Construction", description: "Genuine wool and leather with traditional letterman craftsmanship." },
      { title: "Full Customization", description: "Every detail from colors to hardware to lining is your choice." },
      { title: "Individual Personalization", description: "Names, years, and patches unique to each recipient." },
      { title: "School Programs", description: "Dedicated support for school and university ordering programs." },
    ],
    stats: [
      { value: "25K+", label: "Jackets Made" },
      { value: "24oz", label: "Wool Weight" },
      { value: "Genuine", label: "Leather Sleeves" },
      { value: "100%", label: "Customizable" },
    ],
  },
  {
    slug: "biker-jackets",
    title: "Biker Jackets",
    heroDescription:
      "Custom biker jackets built for the road. Premium leather and textile construction with custom patches, embroidery, and branding designed for motorcycle clubs, rallies, and riders who demand quality.",
    valueProposition:
      "Road-ready custom biker jackets with premium leather construction and expert patch and embroidery application.",
    keyFeatures: [
      { title: "Premium Leather", description: "Genuine cowhide and buffalo leather in multiple weights and finishes." },
      { title: "Custom Patch Application", description: "Expert sewing of back patches, rockers, side patches, and club insignia." },
      { title: "Rider-Focused Design", description: "Action back, vented panels, and snap-down collars for riding comfort." },
      { title: "Full Branding", description: "Embroidery, patches, and custom hardware for complete club or brand identity." },
    ],
    customizationOptions: [
      "Leather: Cowhide, buffalo, faux leather in multiple colors",
      "Style: Classic, racing, cruiser, textile/leather combo",
      "Patches: Back panel, top/bottom rockers, chest, sleeve",
      "Embroidery: Direct embroidery, name bars, custom text",
      "Hardware: Custom zippers, snaps, buckles, grommets",
      "Lining: Quilted, mesh, removable thermal",
    ],
    customizationImage: "",  // ← Your image
  customizationImageAlt: "Custom patch options showing different sizes, materials and backing types",  // ← Optional alt text
    orderingSteps: [
      { number: "01", title: "Specify Your Build", description: "Choose leather, style, and customization details." },
      { number: "02", title: "Sample Review", description: "Approve a sample jacket with your specifications." },
      { number: "03", title: "Production", description: "Expert leatherworkers build and customize each jacket." },
      { number: "04", title: "Deliver", description: "Individually inspected and shipped with care." },
    ],
    manufacturingProcess: [
      "Leather selection and quality grading",
      "Pattern cutting and jacket construction",
      "Hardware installation (zippers, snaps, buckles)",
      "Lining and interior finishing",
      "Patch application and embroidery",
      "Conditioning, inspection, and packaging",
    ],
    galleryPlaceholders: [
      { src: "", alt: "Custom biker leather jackets", caption: "Leather Jackets" },
      { src: "", alt: "Biker jacket with patches", caption: "Patched Jackets" },
      { src: "", alt: "Motorcycle club jackets", caption: "Club Jackets" },
      { src: "", alt: "Racing style biker jackets", caption: "Racing Style" },
    ],
    pricingExplanation:
      "Biker jacket pricing varies significantly based on leather type, construction complexity, and level of customization. Basic decorated jackets start at a different price point than fully custom-built jackets. Request a detailed quote.",
    industriesServed: ["Motorcycle Clubs", "Riding Groups", "Fashion Brands", "Film & Entertainment", "Rallies & Events", "Custom Shops", "Retail", "Cosplay & Costumes"],
    testimonials: [
      { quote: "Our club jackets are a work of art. The leather quality is exceptional, and the patch work is the best we have ever seen. True craftsmen.", name: "Tony Callahan", role: "President", company: "Steel Riders MC" },
      { quote: "We commissioned custom biker jackets for a film production and they looked absolutely authentic on camera. Incredible attention to detail.", name: "Sarah Lane", role: "Costume Designer", company: "Meridian Pictures" },
    ],
    faqs: [
      { question: "What types of leather do you use?", answer: "We offer premium cowhide, buffalo, and faux leather. Cowhide is most popular for its durability and classic biker aesthetic." },
      { question: "Can you sew my existing patches onto jackets?", answer: "Yes, we offer patch application services. Send us your patches and jackets and we will professionally apply them." },
      { question: "Do you make textile/leather hybrid jackets?", answer: "Yes, we produce jackets combining leather and textile panels for versatility and comfort." },
      { question: "What is the minimum order?", answer: "Minimum orders for custom biker jackets typically start at 10 units. Single custom jackets are available at a premium price." },
      { question: "Can you replicate an existing jacket design?", answer: "We can work from reference images or existing jackets to create your custom design while respecting trademark guidelines." },
    ],
    relatedSlugs: ["custom-jacket-patches", "leather-patches", "embroidered-patches", "custom-apparel"],
    ctaText: "Build Your Custom Biker Jacket",
    whyChooseUs: [
      { title: "Leather Expertise", description: "Skilled leatherworkers with decades of biker jacket experience." },
      { title: "Patch Specialists", description: "Expert patch application for clubs and organizations." },
      { title: "Rider Tested", description: "Designs optimized for comfort and function on the road." },
      { title: "Club Pricing", description: "Special pricing for motorcycle clubs and group orders." },
    ],
    stats: [
      { value: "10K+", label: "Jackets Built" },
      { value: "500+", label: "Clubs Served" },
      { value: "Premium", label: "Leather Grade" },
      { value: "100%", label: "Handcrafted" },
    ],
  },
  {
    slug: "vector-art",
    title: "Vector Art",
    heroDescription:
      "Professional vector art conversion and creation services that transform your ideas, sketches, or low-resolution images into crisp, scalable vector artwork ready for any production method.",
    valueProposition:
      "Expert vector art creation and conversion for production-ready artwork that scales perfectly at any size.",
    keyFeatures: [
      { title: "Infinite Scalability", description: "Vector art scales from a 1-inch patch to a billboard without losing quality." },
      { title: "Production Ready", description: "Artwork formatted for embroidery, printing, engraving, and digital use." },
      { title: "Expert Recreations", description: "Low-resolution images, sketches, and concepts converted with precision." },
      { title: "Multiple Formats", description: "Delivered in AI, EPS, SVG, PDF, and PNG formats." },
    ],
    customizationOptions: [
      "Service: New design, image conversion, sketch to vector, logo vectorization",
      "Detail level: Simple, moderate, complex, photorealistic",
      "Colors: Spot color, CMYK, or limited palette for production",
      "Formats: AI, EPS, SVG, PDF, PNG (all included)",
      "Revisions: Unlimited revisions until satisfaction",
      "Add-ons: Color variations, size adaptations, format conversions",
    ],
    customizationImage: "",  // ← Your image
  customizationImageAlt: "Custom patch options showing different sizes, materials and backing types",  // ← Optional alt text
    orderingSteps: [
      { number: "01", title: "Submit Source Material", description: "Send your image, sketch, or concept description." },
      { number: "02", title: "Vector Conversion", description: "Our artists create precise vector artwork from your source." },
      { number: "03", title: "Review & Revise", description: "Review the vector art and request any changes at no extra cost." },
      { number: "04", title: "Receive Files", description: "Download your final vector files in all standard formats." },
    ],
    manufacturingProcess: [
      "Source material analysis and planning",
      "Manual vector tracing by skilled artists",
      "Color matching and palette optimization",
      "Detail refinement and cleanup",
      "Format conversion and export",
      "Quality review for production readiness",
    ],
    galleryPlaceholders: [
      { src: "", alt: "Vector logo conversion", caption: "Logo Vectorization" },
      { src: "", alt: "Sketch to vector art", caption: "Sketch Conversion" },
      { src: "", alt: "Complex vector illustration", caption: "Complex Illustrations" },
      { src: "", alt: "Production-ready vector art", caption: "Production Ready" },
    ],
    pricingExplanation:
      "Vector art pricing is based on complexity, from simple logos to detailed illustrations. All projects include unlimited revisions and delivery in multiple formats. Rush service is available.",
    industriesServed: ["All Industries", "Branding & Marketing", "Apparel & Fashion", "Manufacturing", "Print & Publishing", "Signage", "Promotional Products", "Digital Media"],
    testimonials: [
      { quote: "They converted our old, pixelated logo into a beautiful vector that works perfectly for embroidery and printing. Fast, accurate, and affordable.", name: "Robert Kim", role: "Owner", company: "Heritage Brewing Co." },
      { quote: "The vector illustrations for our product line are incredible. Every detail from our original sketches was captured perfectly.", name: "Laura Martinez", role: "Art Director", company: "Wild Coast Apparel" },
    ],
    faqs: [
      { question: "What is vector art?", answer: "Vector art uses mathematical paths instead of pixels, allowing it to scale to any size without losing quality. It is essential for professional production." },
      { question: "What source material do you need?", answer: "We can work from any source: low-resolution images, photos, hand sketches, napkin drawings, or just a description of your concept." },
      { question: "How many revisions are included?", answer: "Unlimited revisions are included until you are completely satisfied with the final artwork." },
      { question: "What file formats do I receive?", answer: "Every project includes AI, EPS, SVG, PDF, and high-resolution PNG files." },
      { question: "How fast is the turnaround?", answer: "Standard vector art is completed within 24-48 hours. Complex illustrations may take 3-5 days. Rush service is available." },
    ],
    relatedSlugs: ["embroidery-digitizing", "custom-patches", "custom-apparel", "die-cut-stickers"],
    ctaText: "Get Vector Art Quote",
    whyChooseUs: [
      { title: "Expert Artists", description: "Skilled vector artists with years of production experience." },
      { title: "Unlimited Revisions", description: "We refine until you are 100% satisfied." },
      { title: "All Formats", description: "AI, EPS, SVG, PDF, and PNG included with every order." },
      { title: "Fast Delivery", description: "Most vector art completed within 24-48 hours." },
    ],
    stats: [
      { value: "50K+", label: "Designs Vectorized" },
      { value: "24-48hr", label: "Turnaround" },
      { value: "5", label: "File Formats" },
      { value: "Unlimited", label: "Revisions" },
    ],
  },
  {
    slug: "embroidery-digitizing",
    title: "Embroidery Digitizing",
    heroDescription:
      "Professional embroidery digitizing that converts your artwork into production-ready stitch files. Our expert digitizers optimize every design for clean, consistent embroidery results on any machine.",
    valueProposition:
      "Expert stitch file creation that ensures your designs embroider cleanly, consistently, and beautifully on any machine.",
    keyFeatures: [
      { title: "Production Optimized", description: "Stitch files engineered for clean production on commercial embroidery machines." },
      { title: "Push-Pull Compensation", description: "Expert compensation ensures designs stitch accurately without distortion." },
      { title: "Pathing Efficiency", description: "Optimized stitch paths reduce production time and thread breaks." },
      { title: "All Formats Supported", description: "DST, PES, JEF, EXP, and all major embroidery machine formats." },
    ],
    customizationOptions: [
      "Stitch type: Satin, fill, running, bean, contour",
      "Density: Adjusted for fabric type and application",
      "Size versions: Multiple sizes from one digitization",
      "Formats: DST, PES, JEF, EXP, VP3, and more",
      "Underlay: Proper underlay for fabric stability",
      "Special: 3D puff, applique, sequin, metallic thread",
    ],
    customizationImage: "",  // ← Your image
  customizationImageAlt: "Custom patch options showing different sizes, materials and backing types",  // ← Optional alt text
    orderingSteps: [
      { number: "01", title: "Submit Artwork", description: "Send your logo or design in any format." },
      { number: "02", title: "Digitization", description: "Our digitizers convert your art into optimized stitch files." },
      { number: "03", title: "Stitch Preview", description: "Review a stitch simulation showing the digitized result." },
      { number: "04", title: "Receive Files", description: "Download production-ready files in your required formats." },
    ],
    manufacturingProcess: [
      "Artwork analysis and stitch planning",
      "Manual digitizing with push-pull compensation",
      "Stitch path optimization for efficiency",
      "Underlay and density calibration",
      "Stitch simulation and preview generation",
      "Format conversion and delivery",
    ],
    galleryPlaceholders: [
      { src: "", alt: "Digitized embroidery file preview", caption: "Stitch Preview" },
      { src: "", alt: "Embroidered result from digitizing", caption: "Production Result" },
      { src: "", alt: "Complex digitizing work", caption: "Complex Designs" },
      { src: "", alt: "3D puff digitizing", caption: "3D Puff Embroidery" },
    ],
    pricingExplanation:
      "Digitizing pricing is based on stitch count and complexity. Simple logos start at competitive rates, with complex designs priced accordingly. All orders include multiple format outputs and revisions.",
    industriesServed: ["Embroidery Shops", "Apparel Brands", "Corporate Uniforms", "Sports Teams", "Promotional Products", "Fashion Designers", "Military & Government", "All Patch Producers"],
    testimonials: [
      { quote: "The digitizing quality is the best we have used. Clean stitching, efficient pathing, and the designs run perfectly on our machines without adjustment.", name: "Frank Chen", role: "Production Manager", company: "StitchWorks Embroidery" },
      { quote: "We switched all our digitizing to this team and our rejection rate dropped to nearly zero. The push-pull compensation is spot on every time.", name: "Maria Santos", role: "Owner", company: "Prestige Embroidery" },
    ],
    faqs: [
      { question: "What is embroidery digitizing?", answer: "Digitizing converts artwork into stitch data files that embroidery machines read to produce the design. It requires specialized skill to ensure clean results." },
      { question: "What formats do you provide?", answer: "We deliver in all major formats including DST, PES, JEF, EXP, VP3, HUS, and more. Just tell us what your machine requires." },
      { question: "How fast is turnaround?", answer: "Standard digitizing is completed within 12-24 hours. Complex designs may take 24-48 hours. Rush service is available." },
      { question: "Do you offer revisions?", answer: "Yes, unlimited revisions are included until the design sews perfectly." },
      { question: "Can you digitize for 3D puff embroidery?", answer: "Yes, we specialize in 3D puff digitizing with proper foam placement specifications." },
    ],
    relatedSlugs: ["vector-art", "embroidered-patches", "custom-apparel", "custom-patches"],
    ctaText: "Get Digitizing Quote",
    whyChooseUs: [
      { title: "Expert Digitizers", description: "Skilled professionals with years of production digitizing experience." },
      { title: "All Formats", description: "Every major embroidery machine format supported." },
      { title: "Fast Turnaround", description: "Most designs digitized within 12-24 hours." },
      { title: "Production Tested", description: "Designs optimized for clean, efficient machine production." },
    ],
    stats: [
      { value: "75K+", label: "Designs Digitized" },
      { value: "12-24hr", label: "Turnaround" },
      { value: "10+", label: "File Formats" },
      { value: "Unlimited", label: "Revisions" },
    ],
  },
]

export function getProductBySlug(slug: string): ProductData | undefined {
  return products.find((p) => p.slug === slug)
}

export function getRelatedProducts(slugs: string[]): ProductData[] {
  return slugs
    .map((s) => products.find((p) => p.slug === s))
    .filter((p): p is ProductData => p !== undefined)
}

export function getAllSlugs(): string[] {
  return products.map((p) => p.slug)
}
