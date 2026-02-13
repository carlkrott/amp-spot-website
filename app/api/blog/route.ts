import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  featured_image: string | null;
  published: boolean;
  published_at: Date;
  created_at: Date;
  updated_at: Date;
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    const category = searchParams.get('category');
    const limit = parseInt(searchParams.get('limit') || '20');
    const offset = parseInt(searchParams.get('offset') || '0');

    if (slug) {
      const result = await query<BlogPost>(
        'SELECT * FROM blog_posts WHERE slug = $1 AND published = true',
        [slug]
      );
      
      if (result.rows.length === 0) {
        return NextResponse.json({ error: 'Post not found' }, { status: 404 });
      }
      
      return NextResponse.json({ post: result.rows[0] });
    }

    let queryText = 'SELECT id, slug, title, excerpt, author, category, tags, featured_image, published_at FROM blog_posts WHERE published = true';
    const params: unknown[] = [];
    
    if (category) {
      queryText += ' AND category = $' + (params.length + 1);
      params.push(category);
    }
    
    queryText += ' ORDER BY published_at DESC LIMIT $' + (params.length + 1) + ' OFFSET $' + (params.length + 2);
    params.push(limit, offset);

    const result = await query<BlogPost>(queryText, params);
    
    return NextResponse.json({
      posts: result.rows,
      total: result.rowCount,
      limit,
      offset,
    });
  } catch (error) {
    console.error('Failed to fetch blog posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
}
