import { NextResponse } from 'next/server';
import redis from '@/lib/redis';

const SESSION_TTL = 60 * 60 * 24; // 24 hours in seconds
const CACHE_PREFIX = 'cache:';
const SESSION_PREFIX = 'session:';

// GET /api/session - Get session or cached data
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const key = searchParams.get('key');
    const type = searchParams.get('type') || 'session';

    if (!key) {
      return NextResponse.json(
        { error: 'Key parameter is required' },
        { status: 400 }
      );
    }

    const prefix = type === 'cache' ? CACHE_PREFIX : SESSION_PREFIX;
    const data = await redis.get(prefix + key);

    if (!data) {
      return NextResponse.json(
        { error: 'Not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      key,
      type,
      data: JSON.parse(data),
      ttl: await redis.ttl(prefix + key),
    });
  } catch (error) {
    console.error('Failed to get session/cache:', error);
    return NextResponse.json(
      { error: 'Failed to get data' },
      { status: 500 }
    );
  }
}

// POST /api/session - Set session or cache data
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { key, data, type = 'session', ttl = SESSION_TTL } = body;

    if (!key || data === undefined) {
      return NextResponse.json(
        { error: 'Key and data are required' },
        { status: 400 }
      );
    }

    const prefix = type === 'cache' ? CACHE_PREFIX : SESSION_PREFIX;
    await redis.setex(prefix + key, ttl, JSON.stringify(data));

    return NextResponse.json({
      success: true,
      key,
      type,
      ttl,
    });
  } catch (error) {
    console.error('Failed to set session/cache:', error);
    return NextResponse.json(
      { error: 'Failed to set data' },
      { status: 500 }
    );
  }
}

// DELETE /api/session - Delete session or cache data
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const key = searchParams.get('key');
    const type = searchParams.get('type') || 'session';

    if (!key) {
      return NextResponse.json(
        { error: 'Key parameter is required' },
        { status: 400 }
      );
    }

    const prefix = type === 'cache' ? CACHE_PREFIX : SESSION_PREFIX;
    const deleted = await redis.del(prefix + key);

    return NextResponse.json({
      success: deleted > 0,
      key,
      type,
    });
  } catch (error) {
    console.error('Failed to delete session/cache:', error);
    return NextResponse.json(
      { error: 'Failed to delete data' },
      { status: 500 }
    );
  }
}
