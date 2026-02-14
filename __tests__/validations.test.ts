import { describe, it, expect } from 'vitest';
import {
  PluginCreateSchema,
  PluginQuerySchema,
  BlogPostCreateSchema,
  BlogPostQuerySchema,
  DashboardQuerySchema,
  SessionCreateSchema,
  DownloadLogSchema,
  StripeCheckoutSchema,
  validateRequest,
} from '../lib/validations';

describe('Validation Schemas', () => {
  describe('PluginCreateSchema', () => {
    it('should validate valid plugin data', () => {
      const validData = {
        name: 'Test Plugin',
        version: '1.0.0',
        description: 'A test plugin',
        category: 'effect',
      };
      const result = PluginCreateSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('should reject missing name', () => {
      const invalidData = {
        version: '1.0.0',
      };
      const result = PluginCreateSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it('should reject name that is too long', () => {
      const invalidData = {
        name: 'a'.repeat(256),
        version: '1.0.0',
      };
      const result = PluginCreateSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain('Name too long');
      }
    });

    it('should reject invalid version format', () => {
      const invalidData = {
        name: 'Test Plugin',
        version: '1.0',
      };
      const result = PluginCreateSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain('Version must be semver');
      }
    });

    it('should accept valid semver versions', () => {
      const validVersions = ['1.0.0', '2.3.1', '10.0.5', '0.0.1'];
      validVersions.forEach(version => {
        const result = PluginCreateSchema.safeParse({
          name: 'Test Plugin',
          version,
        });
        expect(result.success).toBe(true);
      });
    });

    it('should provide default values for optional fields', () => {
      const minimalData = {
        name: 'Test Plugin',
        version: '1.0.0',
      };
      const result = PluginCreateSchema.parse(minimalData);
      expect(result.description).toBe('');
      expect(result.category).toBe('general');
    });

    it('should reject description that is too long', () => {
      const invalidData = {
        name: 'Test Plugin',
        version: '1.0.0',
        description: 'a'.repeat(2001),
      };
      const result = PluginCreateSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain('Description too long');
      }
    });
  });

  describe('PluginQuerySchema', () => {
    it('should validate valid query parameters', () => {
      const validQuery = {
        category: 'effect',
        limit: 10,
        offset: 0,
      };
      const result = PluginQuerySchema.safeParse(validQuery);
      expect(result.success).toBe(true);
    });

    it('should provide defaults for optional fields', () => {
      const emptyQuery = {};
      const result = PluginQuerySchema.parse(emptyQuery);
      expect(result.limit).toBe(50);
      expect(result.offset).toBe(0);
      expect(result.category).toBeUndefined();
    });

    it('should coerce string numbers to integers', () => {
      const stringQuery = {
        limit: '10',
        offset: '5',
      };
      const result = PluginQuerySchema.parse(stringQuery);
      expect(result.limit).toBe(10);
      expect(result.offset).toBe(5);
    });

    it('should reject limit below minimum', () => {
      const invalidQuery = {
        limit: 0,
      };
      const result = PluginQuerySchema.safeParse(invalidQuery);
      expect(result.success).toBe(false);
    });

    it('should reject limit above maximum', () => {
      const invalidQuery = {
        limit: 101,
      };
      const result = PluginQuerySchema.safeParse(invalidQuery);
      expect(result.success).toBe(false);
    });

    it('should reject negative offset', () => {
      const invalidQuery = {
        offset: -1,
      };
      const result = PluginQuerySchema.safeParse(invalidQuery);
      expect(result.success).toBe(false);
    });
  });

  describe('BlogPostCreateSchema', () => {
    it('should validate valid blog post', () => {
      const validPost = {
        slug: 'test-post',
        title: 'Test Post',
        content: 'This is test content',
        author: 'Test Author',
      };
      const result = BlogPostCreateSchema.safeParse(validPost);
      expect(result.success).toBe(true);
    });

    it('should reject invalid slug format', () => {
      const invalidPost = {
        slug: 'Test Post',
        title: 'Test Post',
        content: 'Content',
        author: 'Author',
      };
      const result = BlogPostCreateSchema.safeParse(invalidPost);
      expect(result.success).toBe(false);
    });

    it('should reject slug with special characters', () => {
      const invalidPost = {
        slug: 'test_post!',
        title: 'Test Post',
        content: 'Content',
        author: 'Author',
      };
      const result = BlogPostCreateSchema.safeParse(invalidPost);
      expect(result.success).toBe(false);
    });

    it('should accept valid slug formats', () => {
      const validSlugs = ['test-post', 'test-post-123', 'test', 'test-post-2024'];
      validSlugs.forEach(slug => {
        const result = BlogPostCreateSchema.safeParse({
          slug,
          title: 'Test',
          content: 'Content',
          author: 'Author',
        });
        expect(result.success).toBe(true);
      });
    });

    it('should reject missing title', () => {
      const invalidPost = {
        slug: 'test-post',
        content: 'Content',
        author: 'Author',
      };
      const result = BlogPostCreateSchema.safeParse(invalidPost);
      expect(result.success).toBe(false);
    });

    it('should reject missing content', () => {
      const invalidPost = {
        slug: 'test-post',
        title: 'Test',
        author: 'Author',
      };
      const result = BlogPostCreateSchema.safeParse(invalidPost);
      expect(result.success).toBe(false);
    });

    it('should reject missing author', () => {
      const invalidPost = {
        slug: 'test-post',
        title: 'Test',
        content: 'Content',
      };
      const result = BlogPostCreateSchema.safeParse(invalidPost);
      expect(result.success).toBe(false);
    });

    it('should reject author that is too long', () => {
      const invalidPost = {
        slug: 'test-post',
        title: 'Test',
        content: 'Content',
        author: 'a'.repeat(101),
      };
      const result = BlogPostCreateSchema.safeParse(invalidPost);
      expect(result.success).toBe(false);
    });

    it('should reject excerpt that is too long', () => {
      const invalidPost = {
        slug: 'test-post',
        title: 'Test',
        content: 'Content',
        author: 'Author',
        excerpt: 'a'.repeat(501),
      };
      const result = BlogPostCreateSchema.safeParse(invalidPost);
      expect(result.success).toBe(false);
    });

    it('should provide default values for optional fields', () => {
      const minimalPost = {
        slug: 'test-post',
        title: 'Test Post',
        content: 'Content',
        author: 'Author',
      };
      const result = BlogPostCreateSchema.parse(minimalPost);
      expect(result.excerpt).toBeUndefined();
      expect(result.category).toBe('tips');
      expect(result.tags).toEqual([]);
      expect(result.published).toBe(false);
    });

    it('should validate URL for featured_image', () => {
      const validPost = {
        slug: 'test-post',
        title: 'Test',
        content: 'Content',
        author: 'Author',
        featured_image: 'https://example.com/image.jpg',
      };
      const result = BlogPostCreateSchema.safeParse(validPost);
      expect(result.success).toBe(true);
    });

    it('should reject invalid URL for featured_image', () => {
      const invalidPost = {
        slug: 'test-post',
        title: 'Test',
        content: 'Content',
        author: 'Author',
        featured_image: 'not-a-url',
      };
      const result = BlogPostCreateSchema.safeParse(invalidPost);
      expect(result.success).toBe(false);
    });

    it('should validate datetime for published_at', () => {
      const validPost = {
        slug: 'test-post',
        title: 'Test',
        content: 'Content',
        author: 'Author',
        published_at: '2024-01-01T00:00:00Z',
      };
      const result = BlogPostCreateSchema.safeParse(validPost);
      expect(result.success).toBe(true);
    });

    it('should validate tags array', () => {
      const validPost = {
        slug: 'test-post',
        title: 'Test',
        content: 'Content',
        author: 'Author',
        tags: ['tag1', 'tag2', 'tag3'],
      };
      const result = BlogPostCreateSchema.safeParse(validPost);
      expect(result.success).toBe(true);
    });

    it('should reject tag that is too long', () => {
      const invalidPost = {
        slug: 'test-post',
        title: 'Test',
        content: 'Content',
        author: 'Author',
        tags: ['a'.repeat(51)],
      };
      const result = BlogPostCreateSchema.safeParse(invalidPost);
      expect(result.success).toBe(false);
    });
  });

  describe('BlogPostQuerySchema', () => {
    it('should validate valid query parameters', () => {
      const validQuery = {
        category: 'tips',
        tag: 'plugin',
        limit: 10,
        offset: 0,
      };
      const result = BlogPostQuerySchema.safeParse(validQuery);
      expect(result.success).toBe(true);
    });

    it('should provide defaults for optional fields', () => {
      const emptyQuery = {};
      const result = BlogPostQuerySchema.parse(emptyQuery);
      expect(result.limit).toBe(20);
      expect(result.offset).toBe(0);
      expect(result.category).toBeUndefined();
      expect(result.tag).toBeUndefined();
    });

    it('should coerce string numbers to integers', () => {
      const stringQuery = {
        limit: '10',
        offset: '5',
      };
      const result = BlogPostQuerySchema.parse(stringQuery);
      expect(result.limit).toBe(10);
      expect(result.offset).toBe(5);
    });

    it('should reject limit below minimum', () => {
      const invalidQuery = {
        limit: 0,
      };
      const result = BlogPostQuerySchema.safeParse(invalidQuery);
      expect(result.success).toBe(false);
    });

    it('should reject limit above maximum', () => {
      const invalidQuery = {
        limit: 51,
      };
      const result = BlogPostQuerySchema.safeParse(invalidQuery);
      expect(result.success).toBe(false);
    });
  });

  describe('DashboardQuerySchema', () => {
    it('should validate valid period', () => {
      const validPeriods = ['7d', '30d', '90d'];
      validPeriods.forEach(period => {
        const result = DashboardQuerySchema.safeParse({ period });
        expect(result.success).toBe(true);
      });
    });

    it('should provide default period', () => {
      const emptyQuery = {};
      const result = DashboardQuerySchema.parse(emptyQuery);
      expect(result.period).toBe('30d');
    });

    it('should reject invalid period', () => {
      const invalidQuery = {
        period: '1y',
      };
      const result = DashboardQuerySchema.safeParse(invalidQuery);
      expect(result.success).toBe(false);
    });
  });

  describe('SessionCreateSchema', () => {
    it('should validate valid session', () => {
      const validSession = {
        plugin_id: 1,
        platform: 'macos',
      };
      const result = SessionCreateSchema.safeParse(validSession);
      expect(result.success).toBe(true);
    });

    it('should accept all valid platforms', () => {
      const validPlatforms = ['macos', 'windows', 'linux'];
      validPlatforms.forEach(platform => {
        const result = SessionCreateSchema.safeParse({
          plugin_id: 1,
          platform,
        });
        expect(result.success).toBe(true);
      });
    });

    it('should reject missing plugin_id', () => {
      const invalidSession = {
        platform: 'macos',
      };
      const result = SessionCreateSchema.safeParse(invalidSession);
      expect(result.success).toBe(false);
    });

    it('should reject invalid plugin_id', () => {
      const invalidSessions = [
        { plugin_id: 0, platform: 'macos' },
        { plugin_id: -1, platform: 'macos' },
        { plugin_id: 1.5, platform: 'macos' },
      ];
      invalidSessions.forEach(session => {
        const result = SessionCreateSchema.safeParse(session);
        expect(result.success).toBe(false);
      });
    });

    it('should reject missing platform', () => {
      const invalidSession = {
        plugin_id: 1,
      };
      const result = SessionCreateSchema.safeParse(invalidSession);
      expect(result.success).toBe(false);
    });

    it('should reject invalid platform', () => {
      const invalidSession = {
        plugin_id: 1,
        platform: 'mac',
      };
      const result = SessionCreateSchema.safeParse(invalidSession);
      expect(result.success).toBe(false);
    });
  });

  describe('DownloadLogSchema', () => {
    it('should validate valid download log', () => {
      const validLog = {
        plugin_id: 1,
        user_id: 'user123',
        platform: 'macos',
        version: '1.0.0',
      };
      const result = DownloadLogSchema.safeParse(validLog);
      expect(result.success).toBe(true);
    });

    it('should provide default values for optional fields', () => {
      const minimalLog = {
        plugin_id: 1,
      };
      const result = DownloadLogSchema.parse(minimalLog);
      expect(result.user_id).toBe('anonymous');
      expect(result.platform).toBeUndefined();
      expect(result.version).toBeUndefined();
    });

    it('should accept all valid platforms', () => {
      const validPlatforms = ['macos', 'windows', 'linux'];
      validPlatforms.forEach(platform => {
        const result = DownloadLogSchema.safeParse({
          plugin_id: 1,
          platform,
        });
        expect(result.success).toBe(true);
      });
    });

    it('should reject missing plugin_id', () => {
      const invalidLog = {
        user_id: 'user123',
      };
      const result = DownloadLogSchema.safeParse(invalidLog);
      expect(result.success).toBe(false);
    });

    it('should reject invalid plugin_id', () => {
      const invalidLog = {
        plugin_id: 0,
      };
      const result = DownloadLogSchema.safeParse(invalidLog);
      expect(result.success).toBe(false);
    });

    it('should reject user_id that is too long', () => {
      const invalidLog = {
        plugin_id: 1,
        user_id: 'a'.repeat(101),
      };
      const result = DownloadLogSchema.safeParse(invalidLog);
      expect(result.success).toBe(false);
    });

    it('should reject invalid platform', () => {
      const invalidLog = {
        plugin_id: 1,
        platform: 'mac',
      };
      const result = DownloadLogSchema.safeParse(invalidLog);
      expect(result.success).toBe(false);
    });

    it('should reject version that is too long', () => {
      const invalidLog = {
        plugin_id: 1,
        version: 'a'.repeat(21),
      };
      const result = DownloadLogSchema.safeParse(invalidLog);
      expect(result.success).toBe(false);
    });
  });

  describe('StripeCheckoutSchema', () => {
    it('should validate valid checkout request', () => {
      const validCheckout = {
        plugin_id: 1,
        success_url: 'https://example.com/success',
        cancel_url: 'https://example.com/cancel',
      };
      const result = StripeCheckoutSchema.safeParse(validCheckout);
      expect(result.success).toBe(true);
    });

    it('should validate checkout with minimal required fields', () => {
      const minimalCheckout = {
        plugin_id: 1,
      };
      const result = StripeCheckoutSchema.safeParse(minimalCheckout);
      expect(result.success).toBe(true);
    });

    it('should reject missing plugin_id', () => {
      const invalidCheckout = {
        success_url: 'https://example.com/success',
      };
      const result = StripeCheckoutSchema.safeParse(invalidCheckout);
      expect(result.success).toBe(false);
    });

    it('should reject invalid plugin_id', () => {
      const invalidCheckout = {
        plugin_id: 0,
      };
      const result = StripeCheckoutSchema.safeParse(invalidCheckout);
      expect(result.success).toBe(false);
    });

    it('should reject invalid success_url', () => {
      const invalidCheckout = {
        plugin_id: 1,
        success_url: 'not-a-url',
      };
      const result = StripeCheckoutSchema.safeParse(invalidCheckout);
      expect(result.success).toBe(false);
    });

    it('should reject invalid cancel_url', () => {
      const invalidCheckout = {
        plugin_id: 1,
        cancel_url: 'not-a-url',
      };
      const result = StripeCheckoutSchema.safeParse(invalidCheckout);
      expect(result.success).toBe(false);
    });

    it('should accept valid URLs', () => {
      const validUrls = [
        'https://example.com',
        'http://localhost:3000',
        'https://amp-spot.com/success',
      ];
      validUrls.forEach(url => {
        const result = StripeCheckoutSchema.safeParse({
          plugin_id: 1,
          success_url: url,
        });
        expect(result.success).toBe(true);
      });
    });
  });

  describe('validateRequest helper function', () => {
    it('should return success for valid data', () => {
      const result = validateRequest(PluginCreateSchema, {
        name: 'Test',
        version: '1.0.0',
      });
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.name).toBe('Test');
        expect(result.data.version).toBe('1.0.0');
      }
    });

    it('should return error for invalid data', () => {
      const result = validateRequest(PluginCreateSchema, {
        name: '', // Invalid: empty string
        version: '1.0.0',
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error).toContain('Name is required');
      }
    });

    it('should include field path in error message', () => {
      const result = validateRequest(PluginCreateSchema, {
        name: 'Test',
        version: 'invalid', // Invalid: not semver
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error).toContain('version');
      }
    });
  });
});
