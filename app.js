import express from "express";

const app = express();
const port = 3000;

const data = [];

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(port, () => console.log(`Server is running on localhost:${port}`));
