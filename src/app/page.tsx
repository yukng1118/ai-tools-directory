'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { tools, categories } from '@/lib/static-data'
import { ThemeToggle } from '@/components/ThemeToggle'

export default function HomePage() {
  const featuredTools = tools.filter(t => t.featured).slice(0, 6)
  const latestTools = tools.slice(-4).reverse() // Get 4 most recently added

  return (
    <main className="min-h-screen">
      {/* Header */}
      <nav className="border-b px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">AI Tools Directory</Link>
          <div className="space-x-4">
            <Link href="/directory" className="text-gray-600 hover:text-gray-900">Directory</Link>
            <Link href="/newsletter" className="text-blue-600 font-medium">Newsletter</Link>
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
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/directory">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Browse Directory →
            </button>
          </Link>
          <Link href="/newsletter">
            <button className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50">
              Join Newsletter ✉️
            </button>
          </Link>
        </div>
      </section>

      {/* Newsletter Preview */}
      <section className="py-12 px-4 bg-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-purple-100 text-purple-700 rounded-full mb-4">
            📧 Weekly for Creative Makers
          </span>
          <h2 className="text-2xl font-bold mb-3">AI Tools for Creators Newsletter</h2>
          <p className="text-gray-600 mb-6">
            Latest AI tools, problem-solving guides, and creator workflows. Delivered weekly.
            <br />
            <span className="text-sm text-gray-500">Join 100+ creators. No spam, unsubscribe anytime.</span>
          </p>
          
          {/* Example Newsletter Content Preview */}
          <div className="grid md:grid-cols-3 gap-4 text-left mb-6">
            <div className="bg-white p-4 rounded-lg border">
              <span className="text-xs font-medium text-blue-600">LATEST TOOL</span>
              <h4 className="font-bold mt-1">Udio v2 Released</h4>
              <p className="text-sm text-gray-600">AI music generation with lyrics support. Free tier available.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <span className="text-xs font-medium text-green-600">PROBLEM SOLVED</span>
              <h4 className="font-bold mt-1">Video Editing Slow?</h4>
              <p className="text-sm text-gray-600">These 3 AI tools cut editing time by 70%.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <span className="text-xs font-medium text-purple-600">FEATURED</span>
              <h4 className="font-bold mt-1">Midjourney vs DALL-E</h4>
              <p className="text-sm text-gray-600">Side-by-side comparison for creators.</p>
            </div>
          </div>

          <Link href="/newsletter">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700">
              View Past Issues & Subscribe →
            </button>
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map(cat => (
            <Link key={cat.slug} href={`/directory#${cat.slug}`}>
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

      {/* Latest Additions */}
      <section className="py-12 px-4 max-w-6xl mx-auto bg-gray-50">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Latest Additions</h2>
          <span className="text-sm text-green-600 font-medium">Updated weekly</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {latestTools.map(tool => (
            <Link key={tool.slug} href={`/directory/${tool.slug}`}>
              <div className="bg-white border rounded-xl p-5 hover:shadow-lg transition">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-xs text-gray-500">New</span>
                </div>
                <h4 className="font-bold">{tool.name}</h4>
                <p className="text-sm text-gray-600 line-clamp-2">{tool.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4 text-center text-gray-600">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <Link href="/directory" className="hover:text-gray-900">Directory</Link>
            <Link href="/newsletter" className="hover:text-gray-900">Newsletter</Link>
            <Link href="/submit" className="hover:text-gray-900">Submit Tool</Link>
          </div>
          <p>© 2026 AI Tools Directory. Built for Lawrence.</p>
        </div>
      </footer>
    </main>
  )
}
