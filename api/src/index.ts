import express, { type Request, type Response } from "express";

const app = express();
const port = process.env.PORT ? Number(process.env.PORT) : 3001;

app.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
