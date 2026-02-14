/**
 * Version Configuration
 * Single source of truth for application version
 */

export const VERSION = '1.0.0';
export const BUILD_DATE = new Date().toISOString();

export function getVersion(): string {
  return VERSION;
}

export function getBuildDate(): string {
  return BUILD_DATE;
}
