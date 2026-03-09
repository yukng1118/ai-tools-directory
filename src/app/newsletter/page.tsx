import Link from 'next/link'
import { categories } from '@/lib/static-data'

export const metadata = {
  title: 'Newsletter | AI Tools Directory',
  description: 'AI Tools for Creators Newsletter - Latest AI tools, problem-solving guides, and creator workflows. Delivered weekly.',
}

// Sample past issues data
const pastIssues = [
  {
    id: 'issue-003',
    date: 'Feb 25, 2025',
    title: 'OpenAI Sora & The Future of AI Video',
    summary: 'Text-to-video is here. Plus: Claude Code launches, Udio breaks new ground.',
    tools: ['Sora', 'Claude Code', 'Udio'],
  },
  {
    id: 'issue-002',
    date: 'Feb 18, 2025',
    title: 'The Rise of Multi-Agent Systems',
    summary: 'AutoGen Studio, agent teams, and AI workflows that actually work.',
    tools: ['AutoGen', 'Claude', 'Lovable'],
  },
  {
    id: 'issue-001',
    date: 'Feb 11, 2025',
    title: '5 AI Tools That Will Change Your 2025',
    summary: 'Motion for scheduling, Hume for voice, Haiper for video characters.',
    tools: ['Motion', 'Hume AI', 'Haiper'],
  },
]

export default function NewsletterPage() {
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

      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-purple-50 to-white">
        <span className="inline-block px-3 py-1 text-sm font-medium bg-purple-100 text-purple-700 rounded-full mb-4">
          📧 Weekly for Creative Makers
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          AI Tools for <span className="text-blue-600">Creators</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Latest AI tools, problem-solving guides, and creator workflows. 
          Delivered weekly to your inbox.
        </p>
        <p className="text-sm text-gray-500 mb-8">
          Join 100+ creators. No spam, unsubscribe anytime.
        </p>

        {/* Email Signup Form */}
        <div className="max-w-md mx-auto">
          <form className="flex flex-col sm:flex-row gap-3" action="#" method="POST">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium transition"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-3">
            We respect your privacy. No spam, ever.
          </p>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What's Inside</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Curated content for creators who want to stay ahead of the AI curve.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">🚀</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Latest Tools</h3>
            <p className="text-gray-600 text-sm">
              New AI tools every week. Early access to beta releases, exclusive invites.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">🎯</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Problem-Solving Guides</h3>
            <p className="text-gray-600 text-sm">
              Real workflows for real problems. Step-by-step guides with actual use cases.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">⚡</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Creator Workflows</h3>
            <p className="text-gray-600 text-sm">
              How top creators are using AI. Tool combinations that save hours.
            </p>
          </div>
        </div>
      </section>

      {/* Past Issues Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Past Issues</h2>
            <span className="text-sm text-gray-500">{pastIssues.length} issues archived</span>
          </div>

          <div className="space-y-4">
            {pastIssues.map((issue) => (
              <div
                key={issue.id}
                className="bg-white border rounded-lg p-6 hover:shadow-md transition"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm text-gray-500">{issue.date}</span>
                      <span className="text-xs px-2 py-1 bg-gray-100 rounded">
                        Issue #{issue.id.split('-')[1]}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg mb-1">{issue.title}</h3>
                    <p className="text-gray-600 text-sm">{issue.summary}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 md:justify-end">
                    {issue.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs px-3 py-1 bg-blue-50 text-blue-700 rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">Tools We Cover</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/directory#${cat.slug}`}>
              <div className="border rounded-lg p-4 hover:shadow-md transition text-center">
                <h3 className="font-semibold">{cat.name}</h3>
                <p className="text-sm text-gray-600">{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="