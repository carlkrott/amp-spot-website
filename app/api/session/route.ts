import { NextResponse } from 'next/server';
import redis from '@/lib/redis';
import { z } from 'zod';

const SESSION_TTL = 60 * 60 * 24; // 24 hours in seconds
const CACHE_PREFIX = 'cache:';
const SESSION_PREFIX = 'session:';

// Validation schemas
const SessionGetSchema = z.object({
  key: z.string().min(1, 'Key is required'),
  type: z.enum(['cache', 'session']).optional().default('session'),
});

const SessionPostSchema = z.object({
  key: z.string().min(1, 'Key is required'),
  data: z.any(),
  type: z.enum(['cache', 'session']).optional().default('session'),
  ttl: z.coerce.number().int().positive().optional().default(SESSION_TTL),
});

const SessionDeleteSchema = z.object({
  key: z.string().min(1, 'Key is required'),
  type: z.enum(['cache', 'session']).optional().default('session'),
});

// Helper function to validate request
function validateRequest<T>(schema: z.ZodSchema<T>, data: unknown): { success: true; data: T } | { success: false; error: string } {
  const result = schema.safeParse(data);
  if (!result.success) {
    const firstError = result.error.issues[0];
    return { success: false, error: `${firstError.path.join('.')}: ${firstError.message}` };
  }
  return { success: true, data: result.data };
}

// GET /api/session - Get session or cached data
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const validation = validateRequest(SessionGetSchema, {
      key: searchParams.get('key'),
      type: searchParams.get('type'),
    });

    if (!validation.success) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    const { key, type } = validation.data;
    const prefix = type === 'cache' ? CACHE_PREFIX : SESSION_PREFIX;
    const data = await redis.get(prefix + key);

    if (!data) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json({
      key,
      type,
      data: JSON.parse(data),
      ttl: await redis.ttl(prefix + key),
    });
  } catch (error) {
    console.error('Failed to get session/cache:', error);
    return NextResponse.json({ error: 'Failed to get data' }, { status: 500 });
  }
}

// POST /api/session - Set session or cache data
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = validateRequest(SessionPostSchema, body);

    if (!validation.success) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    const { key, data, type, ttl } = validation.data;
    const prefix = type === 'cache' ? CACHE_PREFIX : SESSION_PREFIX;
    await redis.setex(prefix + key, ttl, JSON.stringify(data));

    return NextResponse.json({ success: true, key, type, ttl });
  } catch (error) {
    console.error('Failed to set session/cache:', error);
    return NextResponse.json({ error: 'Failed to set data' }, { status: 500 });
  }
}

// DELETE /api/session - Delete session or cache data
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const validation = validateRequest(SessionDeleteSchema, {
      key: searchParams.get('key'),
      type: searchParams.get('type'),
    });

    if (!validation.success) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    const { key, type } = validation.data;
    const prefix = type === 'cache' ? CACHE_PREFIX : SESSION_PREFIX;
    const deleted = await redis.del(prefix + key);

    return NextResponse.json({ success: deleted > 0, key, type });
  } catch (error) {
    console.error('Failed to delete session/cache:', error);
    return NextResponse.json({ error: 'Failed to delete data' }, { status: 500 });
  }
}
