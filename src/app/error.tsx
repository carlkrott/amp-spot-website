'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error to error reporting service
    console.error('Application Error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white px-4">
      <div className="text-center max-w-md">
        <ExclamationTriangleIcon className="w-20 h-20 text-orange-500 mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
        <p className="text-slate-400 mb-2">An unexpected error occurred</p>
        {error.message && (
          <p className="text-sm text-slate-500 mb-8 font-mono bg-slate-800 p-4 rounded-lg">
            {error.message}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors"
          >
            Go home
          </Link>
        </div>
        <p className="text-xs text-slate-600 mt-8">
          If this problem persists, please{' '}
          <Link href="/contact" className="text-orange-500 hover:underline">
            contact support
          </Link>
        </p>
      </div>
    </div>
  )
}
