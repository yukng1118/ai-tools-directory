'use client'

import { useState } from 'react'
import Link from 'next/link'
import { tools } from '@/lib/static-data'

export default function ComparePage() {
  const [tool1Slug, setTool1Slug] = useState('')
  const [tool2Slug, setTool2Slug] = useState('')
  
  const tool1 = tools.find(t => t.slug === tool1Slug)
  const tool2 = tools.find(t => t.slug === tool2Slug)

  const comparisons = tool1 && tool2 ? [
    { label: 'Pricing', t1: tool1.pricingModel + (tool1.startingPrice ? ` ($${tool1.startingPrice}/mo)` : ''), t2: tool2.pricingModel + (tool2.startingPrice ? ` ($${tool2.startingPrice}/mo)` : '') },
    { label: 'Free Tier', t1: tool1.hasFreeTier ? 'Yes' : 'No', t2: tool2.hasFreeTier ? 'Yes' : 'No' },
    { label: 'Free Trial', t1: tool1.hasFreeTrial ? 'Yes' : 'No', t2: tool2.hasFreeTrial ? 'Yes' : 'No' },
    { label: 'Category', t1: tool1.category, t2: tool2.category },
  ] : null

  return (
    <main className="min-h-screen">
      <nav className="border-b px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">AI Tools Directory</Link>
          <div className="space-x-4">
            <Link href="/directory" className="text-gray-600">Directory</Link>
            <Link href="/compare" className="text-blue-600 font-medium">Compare</Link>
            <Link href="/submit" className="text-gray-600">Submit</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Compare AI Tools</h1>
        <p className="text-gray-600 mb-8">Side-by-side comparison</p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <select value={tool1Slug} onChange={(e) => setTool1Slug(e.target.value)} className="border rounded-lg px-4 py-2">
            <option value="">Select tool 1...</option>
            {tools.map(t => <option key={t.slug} value={t.slug}>{t.name}</option>)}
          </select>
          <select value={tool2Slug} onChange={(e) => setTool2Slug(e.target.value)} className="border rounded-lg px-4 py-2">
            <option value="">Select tool 2...</option>
            {tools.map(t => <option key={t.slug} value={t.slug}>{t.name}</option>)}
          </select>
        </div>

        {comparisons && tool1 && tool2 && (
          <div className="border rounded-xl overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-50 border-b font-semibold">
              <div className="p-4">Feature</div>
              <div className="p-4 text-center">{tool1.name}</div>
              <div className="p-4 text-center">{tool2.name}</div>
            </div>
            {comparisons.map((row, i) => (
              <div key={i} className="grid grid-cols-3 border-b last:border-b-0">
                <div className="p-4 font-medium">{row.label}</div>
                <div className="p-4 text-center">{row.t1}</div>
                <div className="p-4 text-center">{row.t2}</div>
              </div>
            ))}
          </div>
        )}

        {!comparisons && <p className="text-center text-gray-500 py-12">Select two tools to compare</p>}
      </div>
    </main>
  )
}
