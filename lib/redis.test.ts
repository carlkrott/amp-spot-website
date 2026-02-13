// Basic Redis connection tests
// Run with: npx tsx lib/redis.test.ts

import redis from './redis';

async function testRedisConnection() {
  console.log('Testing Redis connection...');
  
  try {
    // Test basic connection
    const pong = await redis.ping();
    console.log('✓ Connected to Redis (PING:', pong + ')');
    
    // Test set/get
    const testKey = 'test:connection:' + Date.now();
    await redis.setex(testKey, 60, 'test-value');
    const value = await redis.get(testKey);
    console.log('✓ SET/GET working (value:', value + ')');
    
    // Clean up
    await redis.del(testKey);
    
    // Get server info
    const info = await redis.info('server');
    const version = info.match(/redis_version:(.+)/)?.[1]?.trim();
    console.log('  Redis version:', version);
    
    // Check memory
    const memInfo = await redis.info('memory');
    const usedMemory = memInfo.match(/used_memory_human:(.+)/)?.[1]?.trim();
    console.log('  Memory usage:', usedMemory);
    
    return true;
  } catch (error) {
    console.error('✗ Redis connection failed:', error);
    return false;
  } finally {
    await redis.quit();
  }
}

testRedisConnection()
  .then((success) => process.exit(success ? 0 : 1));
