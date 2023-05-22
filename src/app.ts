import express, { Express, Request, Response } from "express";

const app: Express = express();
const port: number = 8000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`listening http://localhost:${port}`);
});
