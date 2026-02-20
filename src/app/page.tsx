import Link from 'next/link'
import { tools, categories } from '@/lib/static-data'

export default function HomePage() {
  const featuredTools = tools.filter(t => t.featured).slice(0, 6)

  return (
    <main className="min-h-screen">
      {/* Header */}
      <nav className="border-b px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">AI Tools Directory</Link>
          <div className="space-x-4">
            <Link href="/directory" className="text-gray-600 hover:text-gray-900">Directory</Link>
            <Link href="/submit" className="text-gray-600 hover:text-gray-900">Submit</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Find AI Tools by <span className="text-blue-600">Use Case</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Discover the best AI tools organized by specific workflows — e-commerce, marketing, legal, and more.
        </p>
        <Link href="/directory">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Browse Directory →
          </button>
        </Link>
      </section>

      {/* Categories */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map(cat => (
            <Link key={cat.slug} href={`/directory?category=${cat.slug}`}>
              <div className="border rounded-lg p-4 hover:shadow-md transition">
                <h3 className="font-semibold">{cat.name}</h3>
                <p className="text-sm text-gray-600">{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Tools */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Featured Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTools.map(tool => (
            <Link key={tool.slug} href={`/directory/${tool.slug}`}>
              <div className="border rounded-xl p-6 hover:shadow-lg transition">
                <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 rounded mb-2">
                  {tool.category}
                </span>
                <h3 className="text-lg font-bold mb-1">{tool.name}</h3>
                <p className="text-blue-600 text-sm font-medium mb-2">{tool.pricingModel}</p>
                <p className="text-gray-600 text-sm">{tool.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4 text-center text-gray-600">
        <p>© 2026 AI Tools Directory. Built for Lawrence.</p>
      </footer>
    </main>
  )
}
