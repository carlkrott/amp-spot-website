import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import redis from '@/lib/redis';

// GET /api/plugins/[id]/download - Download a plugin
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);
    
    if (isNaN(id)) {
      return NextResponse.json(
        { error: 'Invalid plugin ID' },
        { status: 400 }
      );
    }

    // Get plugin info from database
    const result = await query(
      'SELECT * FROM plugins WHERE id = $1',
      [id]
    );

    if (result.rowCount === 0) {
      return NextResponse.json(
        { error: 'Plugin not found' },
        { status: 404 }
      );
    }

    const plugin = result.rows[0];

    // Update download count (fire and forget for performance)
    query(
      'UPDATE plugins SET download_count = download_count + 1 WHERE id = $1',
      [id]
    ).catch(err => console.error('Failed to update download count:', err));

    // Cache download event in Redis for analytics
    const downloadKey = `download:${id}:${Date.now()}`;
    redis.setex(downloadKey, 86400, JSON.stringify({
      plugin_id: id,
      plugin_name: plugin.name,
      timestamp: new Date().toISOString(),
    })).catch(err => console.error('Failed to cache download:', err));

    // Increment daily downloads counter
    const today = new Date().toISOString().split('T')[0];
    redis.incr(`downloads:daily:${today}`).catch(err => console.error('Failed to update daily downloads:', err));

    // In a real implementation, you would:
    // 1. Generate a signed URL for the file (if using cloud storage)
    // 2. Or serve the file directly if stored locally
    // 3. Check license/subscription before allowing download
    
    return NextResponse.json({
      success: true,
      plugin: {
        id: plugin.id,
        name: plugin.name,
        version: plugin.version,
        download_url: `/downloads/${plugin.name.toLowerCase().replace(/\s+/g, '-')}-v${plugin.version}.zip`,
      },
      message: 'Download link generated successfully',
    });
  } catch (error) {
    console.error('Failed to process download:', error);
    return NextResponse.json(
      { error: 'Failed to process download' },
      { status: 500 }
    );
  }
}

// POST /api/plugins/[id]/download - Log download with user info
export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);
    
    if (isNaN(id)) {
      return NextResponse.json(
        { error: 'Invalid plugin ID' },
        { status: 400 }
      );
    }

    const body = await request.json();
    const { user_id, platform, version } = body;

    // Log download with user context
    const downloadLog = {
      plugin_id: id,
      user_id: user_id || 'anonymous',
      platform: platform || 'unknown',
      version: version || 'unknown',
      timestamp: new Date().toISOString(),
    };

    // Store in Redis for analytics
    const logKey = `download:log:${id}:${Date.now()}`;
    await redis.setex(logKey, 86400 * 30, JSON.stringify(downloadLog));

    return NextResponse.json({
      success: true,
      message: 'Download logged successfully',
    });
  } catch (error) {
    console.error('Failed to log download:', error);
    return NextResponse.json(
      { error: 'Failed to log download' },
      { status: 500 }
    );
  }
}
