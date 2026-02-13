import pool from "../lib/db";

async function checkPlugins() {
  try {
    const result = await pool.query("SELECT * FROM plugins");
    console.log("Plugin count:", result.rows.length);
    console.log(JSON.stringify(result.rows, null, 2));
  } finally {
    await pool.end();
  }
}

checkPlugins().catch(console.error);