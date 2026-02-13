// Basic database connection tests
// Run with: npx tsx lib/db.test.ts

import pool, { query } from './db';

async function testDatabaseConnection() {
  console.log('Testing PostgreSQL connection...');
  
  try {
    // Test basic connection
    const result = await query('SELECT NOW() as current_time, version() as pg_version');
    console.log('✓ Connected to PostgreSQL');
    console.log('  Time:', result.rows[0].current_time);
    console.log('  Version:', result.rows[0].pg_version.split(',')[0]);
    
    // Check if plugins table exists
    const tableCheck = await query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'plugins'
      ) as exists
    `);
    
    if (tableCheck.rows[0].exists) {
      console.log('✓ Plugins table exists');
      
      const countResult = await query('SELECT COUNT(*) as count FROM plugins');
      console.log('  Plugin count:', countResult.rows[0].count);
    } else {
      console.log('⚠ Plugins table does not exist - creating...');
      await query(`
        CREATE TABLE IF NOT EXISTS plugins (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          version VARCHAR(50) NOT NULL,
          description TEXT,
          category VARCHAR(100) DEFAULT 'general',
          download_count INTEGER DEFAULT 0,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);
      console.log('✓ Plugins table created');
    }
    
    return true;
  } catch (error) {
    console.error('✗ Database connection failed:', error);
    return false;
  } finally {
    await pool.end();
  }
}

testDatabaseConnection()
  .then((success) => process.exit(success ? 0 : 1));
