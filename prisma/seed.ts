import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const categoriesData = [
  { name: 'E-commerce', slug: 'e-commerce', desc: 'AI tools for online retail', icon: 'shopping-cart' },
  { name: 'Marketing', slug: 'marketing', desc: 'AI for content and advertising', icon: 'megaphone' },
  { name: 'Legal', slug: 'legal', desc: 'AI for legal work', icon: 'scale' },
  { name: 'Image & Design', slug: 'image-design', desc: 'AI for image generation', icon: 'image' },
  { name: 'Video', slug: 'video', desc: 'AI for video creation', icon: 'video' },
  { name: 'Audio & Voice', slug: 'audio', desc: 'AI for voice and audio', icon: 'headphones' },
  { name: 'Developer Tools', slug: 'developer', desc: 'AI for coding', icon: 'code' },
  { name: 'Productivity', slug: 'productivity', desc: 'AI for productivity', icon: 'zap' },
  { name: 'Sales & CRM', slug: 'sales', desc: 'AI for sales', icon: 'briefcase' },
]

async function main() {
  // Clear existing data
  await prisma.tool.deleteMany({})
  await prisma.category.deleteMany({})

  // Create categories
  for (const cat of categoriesData) {
    await prisma.category.create({
      data: {
        name: cat.name,
        slug: cat.slug,
        description: cat.desc,
        icon: cat.icon,
      }
    })
  }
  console.log(`Created ${categoriesData.length} categories`)

  // Get category IDs
  const cats = await prisma.category.findMany()
  const getId = (slug: string) => cats.find(c => c.slug === slug)!.id

  // Create tools
  const tools = [
    // E-commerce
    { name: 'Jasper', slug: 'jasper', tagline: 'AI writing for e-commerce', desc: 'Create product descriptions and marketing content.', url: 'https://www.jasper.ai', cat: 'e-commerce', price: 'PAID', start: 49, free: false, trial: true, feat: true, order: 1 },
    { name: 'Copy.ai', slug: 'copy-ai', tagline: 'AI copywriting', desc: 'Generate copy for ads and emails with templates.', url: 'https://www.copy.ai', cat: 'e-commerce', price: 'FREE', start: 0, free: true, trial: false, feat: true, order: 2 },
    // Marketing
    { name: 'ChatGPT', slug: 'chatgpt', tagline: 'Multi-purpose AI', desc: 'Brainstorm ideas and automate workflows.', url: 'https://chat.openai.com', cat: 'marketing', price: 'FREEMIUM', start: 20, free: true, trial: true, feat: true, order: 3 },
    { name: 'Claude', slug: 'claude', tagline: 'AI for marketing', desc: 'Long-form content with large context window.', url: 'https://claude.ai', cat: 'marketing', price: 'FREEMIUM', start: 20, free: true, trial: true, feat: true, order: 4 },
    { name: 'Perplexity', slug: 'perplexity', tagline: 'AI answer engine', desc: 'Sourced answers with real-time search.', url: 'https://www.perplexity.ai', cat: 'marketing', price: 'FREEMIUM', start: 20, free: true, trial: true, feat: true, order: 5 },
    // Legal
    { name: 'Harvey AI', slug: 'harvey-ai', tagline: 'AI for legal docs', desc: 'Draft documents and analyze contracts.', url: 'https://harvey.ai', cat: 'legal', price: 'ENTERPRISE', start: null, free: false, trial: true, feat: true, order: 6 },
    { name: 'Casetext', slug: 'casetext', tagline: 'Legal research AI', desc: 'Find precedents faster with AI.', url: 'https://casetext.com', cat: 'legal', price: 'PAID', start: 65, free: false, trial: true, feat: false, order: 99 },
    // Image & Design
    { name: 'Midjourney', slug: 'midjourney', tagline: 'AI image generation', desc: 'Create stunning artistic images from prompts.', url: 'https://www.midjourney.com', cat: 'image-design', price: 'PAID', start: 10, free: false, trial: false, feat: true, order: 7 },
    { name: 'DALL-E 3', slug: 'dalle-3', tagline: 'Photorealistic images', desc: 'Generate detailed images from descriptions.', url: 'https://openai.com/dall-e-3', cat: 'image-design', price: 'FREEMIUM', start: 20, free: false, trial: true, feat: true, order: 8 },
    { name: 'Canva AI', slug: 'canva-ai', tagline: 'AI design tools', desc: 'Magic Studio for design and photo editing.', url: 'https://www.canva.com', cat: 'image-design', price: 'FREEMIUM', start: 15, free: true, trial: true, feat: false, order: 99 },
    // Video
    { name: 'Runway', slug: 'runway', tagline: 'AI video generation', desc: 'Create realistic videos from text or images.', url: 'https://runwayml.com', cat: 'video', price: 'FREEMIUM', start: 12, free: true, trial: true, feat: true, order: 9 },
    { name: 'HeyGen', slug: 'heygen', tagline: 'AI avatar videos', desc: 'Professional videos with AI avatars.', url: 'https://www.heygen.com', cat: 'video', price: 'FREEMIUM', start: 24, free: false, trial: true, feat: true, order: 10 },
    { name: 'Synthesia', slug: 'synthesia', tagline: 'AI video platform', desc: 'Videos with AI presenters in 120+ languages.', url: 'https://www.synthesia.io', cat: 'video', price: 'PAID', start: 22, free: false, trial: true, feat: false, order: 99 },
    // Audio
    { name: 'ElevenLabs', slug: 'elevenlabs', tagline: 'AI voice generator', desc: 'Lifelike speech with voice cloning.', url: 'https://elevenlabs.io', cat: 'audio', price: 'FREEMIUM', start: 0, free: true, trial: true, feat: true, order: 11 },
    { name: 'Murf AI', slug: 'murf-ai', tagline: 'AI voiceovers', desc: 'Professional voiceovers from text.', url: 'https://murf.ai', cat: 'audio', price: 'FREEMIUM', start: 0, free: true, trial: true, feat: false, order: 99 },
    // Developer
    { name: 'GitHub Copilot', slug: 'github-copilot', tagline: 'AI pair programmer', desc: 'Code suggestions and entire functions.', url: 'https://github.com/features/copilot', cat: 'developer', price: 'PAID', start: 10, free: false, trial: true, feat: true, order: 12 },
    { name: 'Cursor', slug: 'cursor', tagline: 'AI code editor', desc: 'Built-in chat and composer for coding.', url: 'https://cursor.sh', cat: 'developer', price: 'FREEMIUM', start: 0, free: true, trial: true, feat: true, order: 13 },
    { name: 'V0 by Vercel', slug: 'v0-vercel', tagline: 'AI UI generator', desc: 'Generate React components from text.', url: 'https://v0.dev', cat: 'developer', price: 'FREE', start: 0, free: true, trial: false, feat: false, order: 99 },
    // Productivity
    { name: 'Perplexity', slug: 'perplexity-prod', tagline: 'AI research', desc: 'Sourced answers with web search.', url: 'https://www.perplexity.ai', cat: 'productivity', price: 'FREEMIUM', start: 20, free: true, trial: true, feat: false, order: 99 },
    { name: 'Notion AI', slug: 'notion-ai', tagline: 'AI writing assistant', desc: 'Write, edit, and summarize in Notion.', url: 'https://www.notion.so/product/ai', cat: 'productivity', price: 'PAID', start: 10, free: false, trial: true, feat: false, order: 99 },
    // Sales
    { name: 'Apollo AI', slug: 'apollo-ai', tagline: 'Sales intelligence', desc: 'B2B contacts with AI writing tools.', url: 'https://www.apollo.io', cat: 'sales', price: 'FREEMIUM', start: 0, free: true, trial: true, feat: false, order: 99 },
  ]

  for (const t of tools) {
    await prisma.tool.create({
      data: {
        name: t.name,
        slug: t.slug,
        tagline: t.tagline,
        description: t.desc,
        websiteUrl: t.url,
        categoryId: getId(t.cat),
        pricingModel: t.price,
        startingPrice: t.start,
        hasFreeTier: t.free,
        hasFreeTrial: t.trial,
        useCases: JSON.stringify([t.cat, 'automation', 'productivity']),
        features: JSON.stringify(['AI', 'ML', t.tagline]),
        integrations: JSON.stringify(['API', 'Web']),
        deployment: 'SAAS',
        status: 'APPROVED',
        featured: t.feat,
        featuredOrder: t.order,
      }
    })
  }

  console.log(`Created ${tools.length} tools`)
}

main()
  .catch(e => { console.error(e); process.exit(1) })
  .finally(async () => { await prisma.$disconnect() })
