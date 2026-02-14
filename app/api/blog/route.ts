import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { validateRequest, BlogPostQuerySchema } from '@/lib/validations';

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

    // If slug is provided, return single post
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

    // List posts with query validation
    const queryParams = {
      category: searchParams.get('category'),
      tag: searchParams.get('tag'),
      limit: searchParams.get('limit'),
      offset: searchParams.get('offset'),
    };

    const validation = validateRequest(BlogPostQuerySchema, queryParams);
    if (!validation.success) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    const { category, limit, offset } = validation.data;
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
