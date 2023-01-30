import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, "db.json");

const adapter = new JSONFile(file);
const db = new Low(adapter);

export async function readMarker() {
  await db.read();
  return db.data;
}

export async function writeMarker(newMarker) {
  await db.read();
  db.data.push(newMarker);
  await db.write();
}
