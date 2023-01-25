import express from "express";

const app = express();
const port = 3000;

const data = [
  {
    title: "지세포중학교 운동장",
    coords: { lat: 34.8278067421632, lng: 128.7029347333332 },
    diary: "세포세포지세포에 간다. 간다 간다 나는 간다.",
    authorId: "1q2w3e",
  },
  {
    title: "일운반점",
    coords: { lat: 34.82875760278186, lng: 128.70274008706005 },
    diary: "일운반점에 가면 고양이가 누워 자고 있지만 시간도 없고 그냥 간다.",
    authorId: "qwerqwer",
  },
  {
    title: "계룡산 숯불갈비",
    coords: { lat: 34.82890836462485, lng: 128.7045881621918 },
    diary: "계룡산 숯불갈비에서는 갈비를 판다. 고기이다. 고기",
    authorId: "asdfasdf",
  },
];

app.get("/", (_, res) => {
  res.json(data);
});

app.listen(port, () => console.log(`Server is running on localhost:${port}`));
