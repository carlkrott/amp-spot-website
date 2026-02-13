import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { BlogPost } from "../api/blog/route";

async function getPosts() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/blog`, { cache: 'no-store' });
  if (!res.ok) return [];
  const data = await res.json();
  return data.posts as BlogPost[];
}

function formatDate(date: Date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function getCategoryColor(category: string) {
  const colors: Record<string, string> = {
    'intro': 'bg-blue-500/20 text-blue-400',
    'tutorial': 'bg-green-500/20 text-green-400',
    'tips': 'bg-yellow-500/20 text-yellow-400',
    'comparison': 'bg-purple-500/20 text-purple-400',
    'behind-the-scenes': 'bg-pink-500/20 text-pink-400',
  };
  return colors[category] || 'bg-[#FF8C00]/20 text-[#FF8C00]';
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-[#FF8C00]">Blog</span>
          </h1>
          <p className="text-xl text-gray-400">
            Tips, tutorials, and insights for audio engineers
          </p>
        </div>
      </section>

      <section className="pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center text-gray-400 py-12">
              <p>No posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block glass-card rounded-lg p-6 hover:border-[#FF8C00] transition-colors group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getCategoryColor(post.category)}`}>
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {formatDate(post.published_at)}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-white mb-2 group-hover:text-[#FF8C00] transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-400 line-clamp-2">{post.excerpt}</p>
                      <p className="text-gray-500 text-sm mt-3">By {post.author}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
