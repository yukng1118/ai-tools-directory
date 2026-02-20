import Link from 'next/link'
import { tools, categories } from '@/lib/static-data'

export default function DirectoryPage() {
  const filteredTools = tools

  return (
    <main className="min-h-screen">
      <nav className="border-b px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">AI Tools Directory</Link>
          <div className="space-x-4">
            <Link href="/directory" className="text-blue-600 font-medium">Directory</Link>
            <Link href="/submit" className="text-gray-600 hover:text-gray-900">Submit</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">AI Tools Directory</h1>
        <p className="text-gray-600 mb-6">Browse all {tools.length} AI tools across {categories.length} categories</p>

        <div className="flex flex-wrap gap-2 mb-8">
          <Link href="/directory">
            <span className="px-3 py-1 rounded-full text-sm bg-blue-600 text-white">All</span>
          </Link>
          {categories.map(cat => (
            <Link key={cat.slug} href={`/directory#${cat.slug}`}>
              <span className="px-3 py-1 rounded-full text-sm bg-gray-100 hover:bg-gray-200">{cat.name}</span>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map(tool => (
            <Link key={tool.slug} href={`/directory/${tool.slug}`}>
              <div className="border rounded-xl p-6 hover:shadow-lg transition">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-500">{tool.category}</span>
                  <span className={`text-xs px-2 py-1 rounded ${tool.pricingModel === 'FREE' ? 'bg-green-100 text-green-700' : tool.pricingModel === 'FREEMIUM' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'}`}>
                    {tool.pricingModel}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-1">{tool.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{tool.tagline}</p>
                <p className="text-gray-500 text-sm line-clamp-2">{tool.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <footer className="border-t py-8 px-4 text-center text-gray-600 mt-12">
        <p>© 2026 AI Tools Directory. Built for Lawrence.</p>
      </footer>
    </main>
  )
}
