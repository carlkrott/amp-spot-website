import { z } from 'zod';

// Plugin validation schemas
export const PluginCreateSchema = z.object({
  name: z.string().min(1, 'Name is required').max(255, 'Name too long'),
  version: z.string().regex(/^\d+\.\d+\.\d+$/, 'Version must be semver (e.g., 1.0.0)'),
  description: z.string().max(2000, 'Description too long').optional().default(''),
  category: z.string().max(50, 'Category too long').optional().default('general'),
});

export const PluginQuerySchema = z.object({
  category: z.string().max(50).optional(),
  limit: z.coerce.number().int().min(1).max(100).default(50),
  offset: z.coerce.number().int().min(0).default(0),
});

// Blog validation schemas
export const BlogPostCreateSchema = z.object({
  slug: z.string()
    .min(1, 'Slug is required')
    .max(255)
    .regex(/^[a-z0-9-]+$/, 'Slug must be lowercase letters, numbers, and hyphens only'),
  title: z.string().min(1, 'Title is required').max(255),
  excerpt: z.string().max(500).optional(),
  content: z.string().min(1, 'Content is required'),
  author: z.string().min(1, 'Author is required').max(100),
  category: z.string().max(50).optional().default('tips'),
  tags: z.array(z.string().max(50)).optional().default([]),
  featured_image: z.string().url().optional(),
  published: z.boolean().optional().default(false),
  published_at: z.string().datetime().optional(),
});

export const BlogPostQuerySchema = z.object({
  category: z.string().max(50).optional(),
  tag: z.string().max(50).optional(),
  limit: z.coerce.number().int().min(1).max(50).default(20),
  offset: z.coerce.number().int().min(0).default(0),
});

// Dashboard validation schemas
export const DashboardQuerySchema = z.object({
  period: z.enum(['7d', '30d', '90d']).optional().default('30d'),
});

// Session validation schemas
export const SessionCreateSchema = z.object({
  plugin_id: z.number().int().positive('Valid plugin ID required'),
  platform: z.enum(['macos', 'windows', 'linux']),
});

// Download logging validation schema
export const DownloadLogSchema = z.object({
  plugin_id: z.number().int().positive('Valid plugin ID required'),
  user_id: z.string().max(100).optional().default('anonymous'),
  platform: z.enum(['macos', 'windows', 'linux']).optional(),
  version: z.string().max(20).optional(),
});

// Stripe validation schemas
export const StripeCheckoutSchema = z.object({
  plugin_id: z.number().int().positive('Valid plugin ID required'),
  success_url: z.string().url().optional(),
  cancel_url: z.string().url().optional(),
});

// Helper function to validate and return error response
export function validateRequest<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): { success: true; data: T } | { success: false; error: string } {
  const result = schema.safeParse(data);
  if (!result.success) {
    const firstError = result.error.issues[0];
    return {
      success: false,
      error: `${firstError.path.join('.')}: ${firstError.message}`,
    };
  }
  return { success: true, data: result.data };
}
