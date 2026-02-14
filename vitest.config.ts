import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./__tests__/setup.ts'],
    css: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        '__tests__/',
        '*.config.*',
        '*.d.ts',
        'public/',
        'lib/db.test.ts',
        'lib/redis.test.ts',
      ],
    },
    include: ['**/*.{test,spec}.{ts,tsx}'],
    exclude: ['node_modules/', '.next/', 'lib/db.test.ts', 'lib/redis.test.ts'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
});
