import express from "express";
import cors from "cors";
import { readMarker, writeMarker } from "./db.js";

const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (_, res) => {
  const markers = await readMarker();
  res.json(markers);
});

app.post("/", async (req, res) => {
  console.log(req.body);
  await writeMarker(req.body);
  const markers = await readMarker();
  res.json(markers);
});

app.listen(port, () => console.log(`Server is running on localhost:${port}`));
