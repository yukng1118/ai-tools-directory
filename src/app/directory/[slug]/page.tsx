import Link from 'next/link'
import { tools, categories } from '@/lib/static-data'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return tools.map(tool => ({ slug: tool.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const tool = tools.find(t => t.slug === params.slug)
  
  if (!tool) {
    return {
      title: 'Tool Not Found | AI Tools Directory',
      description: 'The requested AI tool could not be found.',
    }
  }

  return {
    title: `${tool.name} - ${tool.tagline} | AI Tools Directory`,
    description: tool.description,
    keywords: [tool.category, tool.name, 'AI tools', `AI ${tool.category}`, tool.pricingModel],
    openGraph: {
      title: `${tool.name} - ${tool.tagline}`,
      description: tool.description,
      url: `https://ai-directory-pearl.vercel.app/directory/${tool.slug}`,
      siteName: 'AI Tools Directory',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${tool.name} - ${tool.tagline}`,
      description: tool.description,
    },
  }
}

export default function ToolPage({ params }: { params: { slug: string } }) {
  const tool = tools.find(t => t.slug === params.slug)
  if (!tool) return notFound()

  const relatedTools = tools
    .filter(t => t.category === tool.category && t.slug !== tool.slug)
    .slice(0, 3)

  return (
    <main className="min-h-screen">
      <nav className="border-b px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">AI Tools Directory</Link>
          <div className="space-x-4">
            <Link href="/directory" className="text-gray-600 hover:text-gray-900">Directory</Link>
            <Link href="/submit" className="text-gray-600 hover:text-gray-900">Submit</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <Link href="/">Home</Link><span>/</span>
          <Link href="/directory">Directory</Link><span>/</span>
          <span className="text-gray-900">{tool.name}</span>
        </div>

        <div className="border rounded-xl p-8 mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-sm text-gray-500">{tool.category}</span>
            <span className={`text-xs px-2 py-1 rounded ${tool.pricingModel === 'FREE' ? 'bg-green-100 text-green-700' : tool.pricingModel === 'FREEMIUM' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'}`}>
              {tool.pricingModel}
            </span>
            {tool.featured && <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">★ Featured</span>}
          </div>
          <h1 className="text-4xl font-bold mb-2">{tool.name}</h1>
          <p className="text-xl text-blue-600 mb-4">{tool.tagline}</p>
          <p className="text-gray-600 mb-6">{tool.description}</p>
          <div className="flex flex-wrap gap-3">
            <a href={tool.websiteUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 inline-block">
              Visit Website →
            </a>
            <Link href="/directory">
              <span className="border px-6 py-3 rounded-lg hover:bg-gray-50 inline-block">Back to Directory</span>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {Array.isArray(tool.useCases) && tool.useCases.length > 0 && (
            <div className="border rounded-xl p-6">
              <h3 className="font-bold mb-3">Use Cases</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                {tool.useCases.map((u, i) => <li key={i}>• {u}</li>)}
              </ul>
            </div>
          )}
          {Array.isArray(tool.features) && tool.features.length > 0 && (
            <div className="border rounded-xl p-6">
              <h3 className="font-bold mb-3">Key Features</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                {tool.features.map((f, i) => <li key={i}>• {f}</li>)}
              </ul>
            </div>
          )}
          {(tool.startingPrice !== null && tool.startingPrice !== undefined) && (
            <div className="border rounded-xl p-6">
              <h3 className="font-bold mb-3">Pricing</h3>
              <p className="text-2xl font-bold">${tool.startingPrice}/mo</p>
              <div className="flex gap-2 mt-2 text-sm">
                {tool.hasFreeTier && <span className="text-green-600">✓ Free tier</span>}
                {tool.hasFreeTrial && <span className="text-blue-600">✓ Free trial</span>}
              </div>
            </div>
          )}
        </div>

        {relatedTools.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4">Related Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedTools.map(t => (
                <Link key={t.slug} href={`/directory/${t.slug}`}>
                  <div className="border rounded-xl p-4 hover:shadow-md transition">
                    <span className="text-xs text-gray-500">{t.category}</span>
                    <h4 className="font-bold">{t.name}</h4>
                    <p className="text-sm text-gray-600">{t.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <footer className="border-t py-8 px-4 text-center text-gray-600 mt-12">
        <p>© 2026 AI Tools Directory. Built for Lawrence.</p>
      </footer>
    </main>
  )
}
