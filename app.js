import express from "express";
import cors from "cors";
import {
  getMarkers,
  createMarker,
  updateMarker,
  deleteMarker,
  getMarker,
} from "./db.js";

const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (_, res) => {
  const markers = await getMarkers();
  res.json(markers);
});

app.post("/", async (req, res) => {
  await createMarker(req.body);
  const markers = await getMarkers();
  res.json(markers);
});

app.patch("/", async (req, res) => {
  const { currentId, title, diary } = req.body;
  await updateMarker(currentId, { title, diary });
  res.json(await getMarkers());
});

app.delete("/", async (req, res) => {
  const { currentId } = req.body;
  await deleteMarker(currentId);
  res.json(await getMarkers());
});

app.get("/marker/:id", async (req, res) => {
  const currentId = req.params.id;
  res.json(await getMarker(currentId));
});

app.listen(port, () => console.log(`Server is running on localhost:${port}`));
