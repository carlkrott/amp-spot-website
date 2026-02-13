import Link from 'next/link';
import { getAllPosts, getAllTags } from '@/lib/blog';

export const metadata = {
  title: 'Blog | Amp Spot',
  description: 'Tips, tutorials, and insights for music producers and audio engineers.',
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-orange-700 to-red-800 py-24 sm:py-32">
        {/* VU meter aesthetic background */}
        <div className="absolute inset-0 opacity-10">
          <div className="flex h-full justify-around items-center">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="w-1 bg-gradient-to-t from-green-500 via-yellow-500 to-red-500 rounded-full"
                style={{
                  height: `${40 + Math.random() * 40}%`,
                  opacity: 0.3 + Math.random() * 0.7,
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Amp Spot Blog
            </h1>
            <p className="mt-6 text-lg leading-8 text-orange-100 sm:text-xl">
              Tips, tutorials, and insights for better music production
            </p>
          </div>
        </div>
      </section>

      {/* Tags Filter */}
      <section className="py-8 bg-slate-950/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="text-sm font-semibold text-gray-400">Filter by topic:</span>
            {tags.map((tag) => (
              <button
                key={tag}
                className="rounded-full bg-slate-800 border border-slate-700 px-4 py-1.5 text-sm font-medium text-gray-300 hover:bg-slate-700 hover:border-orange-500/50 transition-all"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group relative overflow-hidden rounded-2xl bg-slate-800/50 border border-slate-700/50 p-6 backdrop-blur-sm hover:bg-slate-800 hover:border-orange-500/50 transition-all"
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block rounded-full bg-orange-500/20 px-3 py-1 text-xs font-medium text-orange-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  <span>{post.readTime} min read</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-600 to-red-800 py-16">
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            More Content Coming Soon
          </h2>
          <p className="mt-4 text-lg text-orange-100">
            We\'re working on bringing you the best production tips and tutorials. Stay tuned!
          </p>
        </div>
      </section>
    </div>
  );
}
