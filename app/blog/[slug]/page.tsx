import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogPost } from "../../api/blog/route";

async function getPost(slug: string) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/blog?slug=${slug}`, { cache: 'no-store' });
  if (!res.ok) return null;
  const data = await res.json();
  return data.post as BlogPost;
}

function formatDate(date: Date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function renderMarkdown(content: string) {
  return content
    .split('\n')
    .map((line, i) => {
      if (line.startsWith('# ')) {
        return <h1 key={i} className="text-3xl font-bold text-white mt-8 mb-4">{line.slice(2)}</h1>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={i} className="text-2xl font-bold text-white mt-6 mb-3">{line.slice(3)}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={i} className="text-xl font-bold text-white mt-4 mb-2">{line.slice(4)}</h3>;
      }
      if (line.startsWith('- ')) {
        return <li key={i} className="text-gray-300 ml-6 list-disc">{renderInline(line.slice(2))}</li>;
      }
      if (line.startsWith('| ')) {
        return null;
      }
      if (line.startsWith('**') || line === '---') {
        return null;
      }
      if (line.trim() === '') {
        return <div key={i} className="h-4" />;
      }
      return <p key={i} className="text-gray-300 mb-3 leading-relaxed">{renderInline(line)}</p>;
    })
    .filter(Boolean);
}

function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="text-white font-bold">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={i} className="bg-white/10 px-1 rounded text-[#FF8C00]">{part.slice(1, -1)}</code>;
    }
    return part;
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <article className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="text-[#FF8C00] hover:underline mb-8 inline-block">
            &larr; Back to Blog
          </Link>
          
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-gray-400">
              <span>{post.author}</span>
              <span>&bull;</span>
              <span>{formatDate(post.published_at)}</span>
            </div>
          </header>
          
          <div className="prose prose-invert max-w-none">
            {renderMarkdown(post.content)}
          </div>
        </div>
      </article>

      <section className="py-12 px-4 border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <Link href="/blog" className="glass-button text-white font-medium px-6 py-3 rounded-lg inline-block">
            Read More Articles
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
