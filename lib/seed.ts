import { query } from "../lib/db";

const samplePlugins = [
  {
    name: "Amp Sim Pro",
    version: "2.1.0",
    description: "Professional tube amplifier simulator with 15 iconic amp models and advanced cabinet simulation.",
    category: "amp",
    download_count: 3420,
  },
  {
    name: "Tube Compressor",
    version: "1.5.3",
    description: "Analog-style optical compressor with warmth, punch, and natural-sounding dynamics control.",
    category: "compressor",
    download_count: 2180,
  },
  {
    name: "Reverb Space",
    version: "1.2.1",
    description: "Algorithmic reverb with realistic spaces from small rooms to large halls.",
    category: "reverb",
    download_count: 1890,
  },
  {
    name: "EQ Master",
    version: "2.0.0",
    description: "Precision parametric equalizer with spectrum analyzer and dynamic EQ capabilities.",
    category: "equalizer",
    download_count: 2760,
  },
  {
    name: "Delay Echoes",
    version: "1.3.2",
    description: "Versatile delay unit with tape, digital, and ping-pong modes plus modulation.",
    category: "effect",
    download_count: 1560,
  },
  {
    name: "Bass Amp",
    version: "1.1.0",
    description: "Dedicated bass amplifier models with focus on low-end clarity and punch.",
    category: "amp",
    download_count: 1240,
  },
  {
    name: "Channel Strip",
    version: "1.4.1",
    description: "Complete channel strip with preamp, EQ, compressor, and saturation.",
    category: "utility",
    download_count: 1980,
  },
  {
    name: "Saturation Drive",
    version: "1.0.5",
    description: "Analog saturation and distortion with multiple tube and circuit models.",
    category: "effect",
    download_count: 1340,
  },
];

async function seedDatabase() {
  console.log("Seeding database with sample plugins...");
  
  // Check if table is empty
  const countResult = await query("SELECT COUNT(*) as count FROM plugins");
  const count = parseInt(countResult.rows[0].count);
  
  if (count > 0) {
    console.log(`Table already has ${count} plugins. Skipping seed.`);
    return;
  }
  
  for (const plugin of samplePlugins) {
    await query(
      `INSERT INTO plugins (name, version, description, category, download_count)
       VALUES ($1, $2, $3, $4, $5)`,
      [plugin.name, plugin.version, plugin.description, plugin.category, plugin.download_count]
    );
    console.log(`✓ ${plugin.name} v${plugin.version}`);
  }
  
  console.log("\nDatabase seeding complete!");
}

seedDatabase().catch(console.error);