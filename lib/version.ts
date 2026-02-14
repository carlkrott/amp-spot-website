/**
 * Version Configuration
 *
 * Single source of truth for Amp Spot website version.
 * Update this file when releasing a new version.
 */

export const VERSION = '1.0.0';

/**
 * Version metadata
 */
export const VERSION_INFO = {
  version: VERSION,
  buildDate: new Date().toISOString(),
  environment: process.env.NODE_ENV || 'development',
} as const;

/**
 * Get the current version string
 * @returns The version string (e.g., "1.0.0")
 */
export function getVersion(): string {
  return VERSION;
}
