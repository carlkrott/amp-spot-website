import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import redis from '@/lib/redis';
import { z } from 'zod';
import { validateRequest } from '@/lib/validations';

interface RecentDownload {
  plugin_name: string;
  download_count: number;
  last_download: string;
}

// Dashboard POST validation schema
const DashboardPostSchema = z.object({
  user_id: z.string().min(1, 'User ID is required').max(100, 'User ID too long'),
  action: z.enum(['add_favorite', 'remove_favorite', 'increment_downloads']),
  plugin_id: z.string().max(100).optional(),
});

// Dashboard GET validation schema
const DashboardQuerySchema = z.object({
  user_id: z.string().max(100).optional(),
});

export interface DashboardStats {
  total_downloads: number;
  total_plugins: number;
  recent_downloads: RecentDownload[];
  user_stats?: {
    user_id: string;
    downloads_count: number;
    favorite_plugins: string[];
  };
}

// GET /api/dashboard - Get dashboard statistics
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Validate query parameters
    const queryParams: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      queryParams[key] = value;
    });
    
    const validation = validateRequest(DashboardQuerySchema, queryParams);
    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      );
    }

    const userId = validation.data.user_id || null;

    // Get total plugins count
    const pluginsResult = await query('SELECT COUNT(*) as count FROM plugins');
    const totalPlugins = parseInt(pluginsResult.rows[0].count);

    // Get total downloads
    const downloadsResult = await query('SELECT SUM(download_count) as total FROM plugins');
    const totalDownloads = parseInt(downloadsResult.rows[0].total || '0');

    // Get recent downloads (top 10 most downloaded)
    const recentResult = await query<RecentDownload>(`
      SELECT name as plugin_name, download_count, updated_at as last_download
      FROM plugins
      ORDER BY download_count DESC, updated_at DESC
      LIMIT 10
    `);

    // Get user-specific stats from Redis if user_id provided
    let userStats = null;
    if (userId) {
      const userDataKey = `user:${userId}:stats`;
      const cachedUserData = await redis.get(userDataKey);
      
      if (cachedUserData) {
        userStats = JSON.parse(cachedUserData);
      } else {
        // Create default user stats
        userStats = {
          user_id: userId,
          downloads_count: 0,
          favorite_plugins: [],
        };
        // Cache for 1 hour
        await redis.setex(userDataKey, 3600, JSON.stringify(userStats));
      }
    }

    const dashboardData: DashboardStats = {
      total_downloads: totalDownloads,
      total_plugins: totalPlugins,
      recent_downloads: recentResult.rows,
      user_stats: userStats,
    };

    // Cache dashboard data in Redis for 5 minutes
    const cacheKey = userId ? `dashboard:${userId}` : 'dashboard:public';
    await redis.setex(cacheKey, 300, JSON.stringify(dashboardData));

    return NextResponse.json(dashboardData);
  } catch (error) {
    console.error('Failed to fetch dashboard data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch dashboard data' },
      { status: 500 }
    );
  }
}

// POST /api/dashboard - Update user preferences
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate request body
    const validation = validateRequest(DashboardPostSchema, body);
    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      );
    }

    const { user_id, action, plugin_id } = validation.data;

    const userStatsKey = `user:${user_id}:stats`;
    
    // Get current user stats
    let userStats = {
      user_id,
      downloads_count: 0,
      favorite_plugins: [] as string[],
    };

    const cached = await redis.get(userStatsKey);
    if (cached) {
      userStats = JSON.parse(cached);
    }

    // Handle different actions
    switch (action) {
      case 'add_favorite':
        if (plugin_id && !userStats.favorite_plugins.includes(plugin_id)) {
          userStats.favorite_plugins.push(plugin_id);
        }
        break;
      case 'remove_favorite':
        if (plugin_id) {
          userStats.favorite_plugins = userStats.favorite_plugins.filter(
            id => id !== plugin_id
          );
        }
        break;
      case 'increment_downloads':
        userStats.downloads_count += 1;
        break;
    }

    // Save updated stats (cache for 24 hours)
    await redis.setex(userStatsKey, 86400, JSON.stringify(userStats));

    return NextResponse.json({
      success: true,
      user_stats: userStats,
    });
  } catch (error) {
    console.error('Failed to update dashboard:', error);
    return NextResponse.json(
      { error: 'Failed to update dashboard' },
      { status: 500 }
    );
  }
}
