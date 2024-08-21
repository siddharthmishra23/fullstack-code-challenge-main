import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || "5432"),
});

const createTable = async () => {
  const queryText = `
    CREATE TABLE IF NOT EXISTS results (
      id SERIAL PRIMARY KEY,
      status VARCHAR(50),
      repository_name TEXT,
      findings JSONB,
      queued_at TIMESTAMP,
      scanning_at TIMESTAMP,
      finished_at TIMESTAMP
    );
  `;

  try {
    await pool.query(queryText);
    console.log("Table created successfully or already exists.");
  } catch (err) {
    console.error("Error creating table:", err);
  }
};

export { pool, createTable };
