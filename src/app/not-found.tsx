import Link from 'next/link'
import { HomeIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white px-4">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-bold text-orange-500 mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-slate-400 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
          >
            <HomeIcon className="w-5 h-5" />
            Go Home
          </Link>
          <Link
            href="/plugins"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors"
          >
            <DocumentTextIcon className="w-5 h-5" />
            View Plugins
          </Link>
        </div>
        <div className="mt-8 text-sm text-slate-500">
          <p>Looking for something specific?</p>
          <div className="flex flex-wrap gap-2 justify-center mt-3">
            <Link href="/about" className="text-orange-500 hover:underline">
              About
            </Link>
            <span className="text-slate-600">•</span>
            <Link href="/pricing" className="text-orange-500 hover:underline">
              Pricing
            </Link>
            <span className="text-slate-600">•</span>
            <Link href="/docs" className="text-orange-500 hover:underline">
              Docs
            </Link>
            <span className="text-slate-600">•</span>
            <Link href="/contact" className="text-orange-500 hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
