import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, '..', 'public', 'images');

// Create necessary directories
const directories = [
  'custom-patches',
  'embroidery',
  'screen-printing',
  'heat-transfer',
  'vinyl-decals',
  'custom-flags',
  'promotional-products',
  'corporate-uniforms',
  'sports-apparel',
  'custom-hats',
  'specialty-textiles',
  'woven-labels',
  'custom-buttons',
  'laser-engraving',
  'sublimation',
  'direct-to-garment',
  'embossing-debossing',
  'foil-stamping',
  'custom-packaging',
  'promotional-accessories'
];

directories.forEach(dir => {
  const dirPath = path.join(publicDir, dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
});

// Dark hero background color: oklch(0.18 0.01 60) converted to hex
const darkBg = '#0a0a0a';

// Generate images for each category
const imageCategories = {
  'custom-patches': [
    { num: 1, color: '#FF6B6B', item: 'Embroidered patch with red stitching on dark background' },
    { num: 3, color: '#4ECDC4', item: 'Military-style patch with teal accents on dark background' },
    { num: 4, color: '#FFE66D', item: 'Corporate branding patch with gold embroidery on dark background' },
    { num: 5, color: '#95E1D3', item: 'Sports team patch with mint green on dark background' },
  ],
  'embroidery': [
    { num: 1, color: '#FFB6C1', item: 'Pink embroidered design on dark background' },
    { num: 2, color: '#87CEEB', item: 'Blue embroidered logo on dark background' },
    { num: 3, color: '#DDA0DD', item: 'Purple embroidered pattern on dark background' },
    { num: 4, color: '#F0E68C', item: 'Yellow embroidered text on dark background' },
  ],
  'screen-printing': [
    { num: 1, color: '#FF4444', item: 'Screen-printed red design on dark background' },
    { num: 2, color: '#44FF44', item: 'Screen-printed green design on dark background' },
    { num: 3, color: '#4444FF', item: 'Screen-printed blue design on dark background' },
    { num: 4, color: '#FFAA44', item: 'Screen-printed orange design on dark background' },
  ],
  'heat-transfer': [
    { num: 1, color: '#FF69B4', item: 'Heat transfer with hot pink on dark background' },
    { num: 2, color: '#20B2AA', item: 'Heat transfer with teal on dark background' },
    { num: 3, color: '#FFD700', item: 'Heat transfer with gold on dark background' },
    { num: 4, color: '#FF6347', item: 'Heat transfer with tomato red on dark background' },
  ],
  'vinyl-decals': [
    { num: 1, color: '#00CED1', item: 'Cyan vinyl decal on dark background' },
    { num: 2, color: '#FF1493', item: 'Deep pink vinyl decal on dark background' },
    { num: 3, color: '#32CD32', item: 'Lime green vinyl decal on dark background' },
    { num: 4, color: '#FF8C00', item: 'Dark orange vinyl decal on dark background' },
  ],
  'custom-flags': [
    { num: 1, color: '#DC143C', item: 'Red custom flag on dark background' },
    { num: 2, color: '#1E90FF', item: 'Dodger blue custom flag on dark background' },
    { num: 3, color: '#228B22', item: 'Forest green custom flag on dark background' },
    { num: 4, color: '#FFB6C1', item: 'Light pink custom flag on dark background' },
  ],
  'promotional-products': [
    { num: 1, color: '#FF6B35', item: 'Orange promotional product on dark background' },
    { num: 2, color: '#004E89', item: 'Navy blue promotional product on dark background' },
    { num: 3, color: '#F7931E', item: 'Bright orange promotional product on dark background' },
    { num: 4, color: '#00D9FF', item: 'Cyan promotional product on dark background' },
  ],
  'corporate-uniforms': [
    { num: 1, color: '#2E5090', item: 'Navy corporate uniform on dark background' },
    { num: 2, color: '#C41E3A', item: 'Crimson corporate uniform on dark background' },
    { num: 3, color: '#003478', item: 'Royal blue corporate uniform on dark background' },
    { num: 4, color: '#5B4B8A', item: 'Purple corporate uniform on dark background' },
  ],
  'sports-apparel': [
    { num: 1, color: '#FDB913', item: 'Gold sports apparel on dark background' },
    { num: 2, color: '#000000', item: 'Black sports apparel on dark background' },
    { num: 3, color: '#CE1141', item: 'Red sports apparel on dark background' },
    { num: 4, color: '#1D428A', item: 'Blue sports apparel on dark background' },
  ],
  'custom-hats': [
    { num: 1, color: '#D32F2F', item: 'Red custom hat on dark background' },
    { num: 2, color: '#388E3C', item: 'Green custom hat on dark background' },
    { num: 3, color: '#1976D2', item: 'Blue custom hat on dark background' },
    { num: 4, color: '#F57C00', item: 'Orange custom hat on dark background' },
  ],
  'specialty-textiles': [
    { num: 1, color: '#E91E63', item: 'Pink specialty textile on dark background' },
    { num: 2, color: '#9C27B0', item: 'Purple specialty textile on dark background' },
    { num: 3, color: '#673AB7', item: 'Deep purple specialty textile on dark background' },
    { num: 4, color: '#3F51B5', item: 'Indigo specialty textile on dark background' },
  ],
  'woven-labels': [
    { num: 1, color: '#FF9800', item: 'Orange woven label on dark background' },
    { num: 2, color: '#00BCD4', item: 'Cyan woven label on dark background' },
    { num: 3, color: '#009688', item: 'Teal woven label on dark background' },
    { num: 4, color: '#4CAF50', item: 'Green woven label on dark background' },
  ],
  'custom-buttons': [
    { num: 1, color: '#FF5722', item: 'Deep orange custom button on dark background' },
    { num: 2, color: '#607D8B', item: 'Blue grey custom button on dark background' },
    { num: 3, color: '#455A64', item: 'Dark blue grey custom button on dark background' },
    { num: 4, color: '#78909C', item: 'Light blue grey custom button on dark background' },
  ],
  'laser-engraving': [
    { num: 1, color: '#FFCDD2', item: 'Light red laser engraving on dark background' },
    { num: 2, color: '#C8E6C9', item: 'Light green laser engraving on dark background' },
    { num: 3, color: '#BBDEFB', item: 'Light blue laser engraving on dark background' },
    { num: 4, color: '#FFF9C4', item: 'Light yellow laser engraving on dark background' },
  ],
  'sublimation': [
    { num: 1, color: '#E1BEE7', item: 'Light purple sublimation on dark background' },
    { num: 2, color: '#FFCCBC', item: 'Light orange sublimation on dark background' },
    { num: 3, color: '#B2DFDB', item: 'Light teal sublimation on dark background' },
    { num: 4, color: '#F0F4C3', item: 'Light green sublimation on dark background' },
  ],
  'direct-to-garment': [
    { num: 1, color: '#FF7043', item: 'Coral direct-to-garment print on dark background' },
    { num: 2, color: '#29B6F6', item: 'Sky blue direct-to-garment print on dark background' },
    { num: 3, color: '#AB47BC', item: 'Purple direct-to-garment print on dark background' },
    { num: 4, color: '#FDD835', item: 'Yellow direct-to-garment print on dark background' },
  ],
  'embossing-debossing': [
    { num: 1, color: '#C0CA33', item: 'Olive embossing-debossing on dark background' },
    { num: 2, color: '#00ACC1', item: 'Cyan embossing-debossing on dark background' },
    { num: 3, color: '#8E24AA', item: 'Purple embossing-debossing on dark background' },
    { num: 4, color: '#D32F2F', item: 'Red embossing-debossing on dark background' },
  ],
  'foil-stamping': [
    { num: 1, color: '#FFD54F', item: 'Gold foil stamping on dark background' },
    { num: 2, color: '#EF9A9A', item: 'Rose foil stamping on dark background' },
    { num: 3, color: '#81C784', item: 'Green foil stamping on dark background' },
    { num: 4, color: '#64B5F6', item: 'Blue foil stamping on dark background' },
  ],
  'custom-packaging': [
    { num: 1, color: '#A1887F', item: 'Brown custom packaging on dark background' },
    { num: 2, color: '#795548', item: 'Dark brown custom packaging on dark background' },
    { num: 3, color: '#D7CCC8', item: 'Light brown custom packaging on dark background' },
    { num: 4, color: '#BCAAA4', item: 'Taupe custom packaging on dark background' },
  ],
  'promotional-accessories': [
    { num: 1, color: '#7986CB', item: 'Indigo promotional accessory on dark background' },
    { num: 2, color: '#64B5F6', item: 'Light blue promotional accessory on dark background' },
    { num: 3, color: '#42A5F5', item: 'Sky blue promotional accessory on dark background' },
    { num: 4, color: '#2196F3', item: 'Blue promotional accessory on dark background' },
  ],
};

async function generateImage(category, num, color, description) {
  // Create SVG with dark background
  const svg = `
    <svg width="1200" height="900" xmlns="http://www.w3.org/2000/svg">
      <!-- Dark background -->
      <rect width="1200" height="900" fill="${darkBg}"/>
      
      <!-- Main color block with subtle shading -->
      <rect x="200" y="150" width="800" height="600" fill="${color}" rx="20"/>
      
      <!-- Subtle highlight/shine effect -->
      <ellipse cx="600" cy="300" rx="300" ry="150" fill="white" opacity="0.08"/>
      
      <!-- Text description -->
      <text x="600" y="500" font-family="Arial, sans-serif" font-size="32" fill="#f5f5f5" text-anchor="middle" opacity="0.7">
        ${description.split(' on dark')[0]}
      </text>
    </svg>
  `;

  const outputPath = path.join(publicDir, category, `${category}-${num}.jpeg`);
  
  try {
    await sharp(Buffer.from(svg))
      .jpeg({ quality: 90 })
      .toFile(outputPath);
    console.log(`✓ Generated ${outputPath}`);
  } catch (err) {
    console.error(`✗ Error generating ${outputPath}:`, err.message);
  }
}

async function generateAllImages() {
  console.log('🎨 Generating product images with dark backgrounds...\n');
  
  for (const [category, images] of Object.entries(imageCategories)) {
    for (const img of images) {
      await generateImage(category, img.num, img.color, img.item);
    }
  }
  
  console.log('\n✅ All images generated successfully!');
}

generateAllImages().catch(console.error);
