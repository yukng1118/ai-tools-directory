import Link from 'next/link'

export default function SubmitPage() {
  return (
    <main className="min-h-screen">
      <nav className="border-b px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">AI Tools Directory</Link>
          <div className="space-x-4">
            <Link href="/directory" className="text-gray-600 hover:text-gray-900">Directory</Link>
            <Link href="/submit" className="text-blue-600 font-medium">Submit</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-2">Submit a Tool</h1>
        <p className="text-gray-600 mb-8">Have an AI tool to share? Submit it for review.</p>

        <div className="border rounded-xl p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Tool Name *</label>
              <input type="text" required className="w-full border rounded-lg px-4 py-2" placeholder="e.g., Jasper"/>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Website URL *</label>
              <input type="url" required className="w-full border rounded-lg px-4 py-2" placeholder="https://..."/>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Tagline *</label>
              <input type="text" required className="w-full border rounded-lg px-4 py-2" placeholder="Short description..."/>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Category *</label>
              <select required className="w-full border rounded-lg px-4 py-2">
                <option value="">Select category...</option>
                <option value="e-commerce">E-commerce</option>
                <option value="marketing">Marketing</option>
                <option value="legal">Legal</option>
                <option value="image-design">Image & Design</option>
                <option value="video">Video</option>
                <option value="audio">Audio & Voice</option>
                <option value="developer">Developer Tools</option>
                <option value="productivity">Productivity</option>
                <option value="sales">Sales & CRM</option>
              </select>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
              Submit Tool
            </button>
          </form>

          <div className="mt-6 p-4 bg-yellow-50 rounded-lg text-sm text-yellow-800">
            📝 Form is for demo purposes. In the full version, this will save to a database pending review.
          </div>
        </div>
      </div>

      <footer className="border-t py-8 px-4 text-center text-gray-600 mt-12">
        <p>© 2026 AI Tools Directory. Built for Lawrence.</p>
      </footer>
    </main>
  )
}
