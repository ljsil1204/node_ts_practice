import express, { Express, Request, Response } from "express";

const app: Express = express();
const port: number = 8000;

//라우팅
app.get("/", (req, res) => {
  res.send({ name: "jin", age: "22", friends: ["ss", "ys"] });
});

app.post("/test", (req: Request, res: Response) => {
  res.send({ person: "sss" });
});

// app.get("/user", (req: Request, res: Response) => {
//   res.send("user!");
// });

// app.put("/user", (req: Request, res: Response) => {
//   res.send("Got a put request at /user");
// });

// app.delete("/user", (req: Request, res: Response) => {
//   res.send("Got a delete request at /user");
// });

// 서버 대기 상태
app.listen(port, () => {
  console.log(`listening http://localhost:${port}/`);
});
