import connect from "@databases/sqlite";
import { sql } from "@databases/sqlite";
async function createDb() {
  const db = connect("./data.sqlite3");

  async function prepare() {
    await db.query(sql`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        email VARCHAR NOT NULL,
        username VARCHAR NOT NULL,
        password VARCHAR,
        token VARCHAR
      );
    `);
    await db.query(sql`
    CREATE TABLE IF NOT EXISTS pendingCredentials (
      id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
      email VARCHAR NOT NULL,
      username VARCHAR NOT NULL,
      password VARCHAR,
      token VARCHAR
    );
  `);
    await db.query(sql`
  CREATE TABLE IF NOT EXISTS games (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    data VARCHAR
  );
`);
  }
  const prepared = prepare();
  console.log("database connected");
}
createDb();
