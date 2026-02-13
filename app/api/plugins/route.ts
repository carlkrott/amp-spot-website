import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export interface Plugin {
  id: number;
  name: string;
  version: string;
  description: string;
  category: string;
  download_count: number;
  created_at: Date;
  updated_at: Date;
}

// GET /api/plugins - List all plugins
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const limit = parseInt(searchParams.get('limit') || '50');
    const offset = parseInt(searchParams.get('offset') || '0');

    let queryText = 'SELECT * FROM plugins';
    const params: unknown[] = [];
    
    if (category) {
      queryText += ' WHERE category = $1';
      params.push(category);
    }
    
    queryText += ' ORDER BY created_at DESC LIMIT $' + (params.length + 1) + ' OFFSET $' + (params.length + 2);
    params.push(limit, offset);

    const result = await query<Plugin>(queryText, params);
    
    return NextResponse.json({
      plugins: result.rows,
      total: result.rowCount,
      limit,
      offset,
    });
  } catch (error) {
    console.error('Failed to fetch plugins:', error);
    return NextResponse.json(
      { error: 'Failed to fetch plugins' },
      { status: 500 }
    );
  }
}

// POST /api/plugins - Create a new plugin
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, version, description, category } = body;

    if (!name || !version) {
      return NextResponse.json(
        { error: 'Name and version are required' },
        { status: 400 }
      );
    }

    const result = await query<Plugin>(
      'INSERT INTO plugins (name, version, description, category) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, version, description || '', category || 'general']
    );

    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('Failed to create plugin:', error);
    return NextResponse.json(
      { error: 'Failed to create plugin' },
      { status: 500 }
    );
  }
}
