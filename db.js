import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, "db.json");

const adapter = new JSONFile(file);
const db = new Low(adapter);

export async function getMarkers() {
  await db.read();
  return db.data;
}

export async function createMarker(newMarker) {
  await db.read();
  db.data.push(newMarker);
  await db.write();
}

export async function updateMarker(currentId, { title, diary }) {
  await db.read();
  db.data = db.data.map((marker) =>
    marker.id !== currentId
      ? marker
      : {
          ...marker,
          title,
          diary,
        }
  );
  await db.write();
}

export async function deleteMarker(currentId) {
  await db.read();
  db.data = db.data.filter((marker) => marker.id !== currentId);
  await db.write();
}

export async function getMarker(currentId) {
  await db.read();
  return db.data.find(({ id }) => {
    id === currentId;
  });
}
