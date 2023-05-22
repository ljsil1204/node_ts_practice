import express, { Express, Request, Response } from "express";
import { Cat, CatType } from "./app.modal";

const app: Express = express();
const port: number = 8000;

//데이터 모킹
const data = [1, 2, 3, 4];

app.get("/", (req, res) => {
  console.log(req);
  res.send({ cats: Cat });
});

// 서버 대기 상태
app.listen(port, () => {
  console.log(`listening http://localhost:${port}/`);
});
