import { query } from './db';

async function createBlogPostsTable() {
  console.log('Creating blog_posts table...');

  try {
    // Check if table exists
    const checkResult = await query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables
        WHERE table_name = 'blog_posts'
      );
    `);

    const tableExists = checkResult.rows[0].exists;

    if (tableExists) {
      console.log('✅ blog_posts table already exists');
      return;
    }

    // Create the table
    await query(`
      CREATE TABLE blog_posts (
        id SERIAL PRIMARY KEY,
        slug VARCHAR(255) UNIQUE NOT NULL,
        title VARCHAR(255) NOT NULL,
        excerpt TEXT,
        content TEXT NOT NULL,
        author VARCHAR(100) NOT NULL,
        category VARCHAR(50) DEFAULT 'tips',
        tags TEXT[] DEFAULT '{}',
        featured_image TEXT,
        published BOOLEAN DEFAULT false,
        published_at TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log('✅ blog_posts table created');

    // Create indexes
    await query(`CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);`);
    await query(`CREATE INDEX idx_blog_posts_published ON blog_posts(published, published_at DESC);`);
    await query(`CREATE INDEX idx_blog_posts_category ON blog_posts(category);`);

    console.log('✅ Indexes created');

    // Insert seed data
    await query(`
      INSERT INTO blog_posts (slug, title, excerpt, content, author, category, tags, published, published_at) VALUES
      (
        'welcome-to-amp-spot',
        'Welcome to Amp Spot',
        'Your new home for professional audio plugins. Learn about our mission and what to expect.',
        '# Welcome to Amp Spot

We are excited to launch Amp Spot, your new destination for professional audio plugins.

## Our Mission

At Amp Spot, we believe that great tools should be accessible to everyone. Our plugins are designed with audio engineers in mind, combining professional-grade DSP with intuitive interfaces.

## What to Expect

- High-quality VST plugins for mixing and mastering
- Transparent pricing with no hidden fees
- Regular updates and new features
- Community-driven development

## Getting Started

Browse our plugins page to see what is available. Download our free plugins to experience the Amp Spot difference.

---

Stay tuned for more updates!',
        'Amp Spot Team',
        'intro',
        ARRAY['welcome', 'announcement'],
        true,
        CURRENT_TIMESTAMP
      ),
      (
        'eq-basics-for-mixing',
        'EQ Basics for Mixing',
        'Learn the fundamentals of equalization and how to use EQ effectively in your mixes.',
        '# EQ Basics for Mixing

Equalization is one of the most important tools in a mixing engineer\'s arsenal. In this guide, we cover the fundamentals.

## What is EQ?

EQ (equalization) allows you to adjust the balance of frequencies in your audio. Think of it as a sophisticated tone control for each instrument.

## Types of EQ

- **Parametric EQ**: Fully adjustable with frequency, gain, and Q (bandwidth)
- **Graphic EQ**: Fixed frequency bands with adjustable gain
- **Shelving EQ**: Affects all frequencies above or below a set point

## Common Uses

- Cut muddy low frequencies
- Add presence and clarity
- Fix problematic resonances
- Create space in the mix

## Tips

- Cut more than you boost
- Use EQ in context, not in solo
- Trust your ears, not your eyes

---

Try our Amp Spot EQ plugin for professional results!',
        'Dan Learmonth',
        'tutorial',
        ARRAY['eq', 'mixing', 'tutorial'],
        true,
        CURRENT_TIMESTAMP
      ),
      (
        'compression-101',
        'Compression 101: The Basics',
        'Understanding compression - what it does, when to use it, and how to set it up properly.',
        '# Compression 101: The Basics

Compression is essential for controlling dynamics in your mix. Here is everything you need to know to get started.

## What Does Compression Do?

Compression reduces the dynamic range of audio by making loud sounds quieter. This allows you to bring up the overall level without clipping.

## Key Parameters

- **Threshold**: The level at which compression starts
- **Ratio**: How much gain reduction is applied
- **Attack**: How fast compression engages
- **Release**: How fast compression releases
- **Makeup Gain**: Compensates for reduced level

## Common Uses

- Control vocal dynamics
- Glue drums together
- Add punch to bass
- Level out inconsistent performances

## Starting Points

- Vocals: Threshold -20dB, Ratio 3:1
- Drums: Threshold -15dB, Ratio 4:1
- Bass: Threshold -18dB, Ratio 2:1

---

Experiment with our Amp Spot Compressor plugin!',
        'Dan Learmonth',
        'tutorial',
        ARRAY['compression', 'dynamics', 'tutorial'],
        true,
        CURRENT_TIMESTAMP
      );
    `);

    console.log('✅ Seed data inserted (3 posts)');

    // Verify
    const result = await query('SELECT COUNT(*) as count FROM blog_posts');
    console.log(`✅ blog_posts table now has ${result.rows[0].count} posts`);

  } catch (error) {
    console.error('❌ Error creating blog_posts table:', error);
    process.exit(1);
  }
}

createBlogPostsTable()
  .then(() => {
    console.log('\n✨ Setup complete!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
