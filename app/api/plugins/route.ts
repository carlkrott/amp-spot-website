import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { validateRequest, PluginCreateSchema, PluginQuerySchema } from '@/lib/validations';

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
    const queryParams = {
      category: searchParams.get('category'),
      limit: searchParams.get('limit'),
      offset: searchParams.get('offset'),
    };

    const validation = validateRequest(PluginQuerySchema, queryParams);
    if (!validation.success) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    const { category, limit, offset } = validation.data;
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
    const validation = validateRequest(PluginCreateSchema, body);

    if (!validation.success) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    const { name, version, description, category } = validation.data;

    const result = await query<Plugin>(
      'INSERT INTO plugins (name, version, description, category) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, version, description, category]
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
