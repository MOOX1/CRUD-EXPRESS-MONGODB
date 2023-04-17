import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Word");
});

app.listen(process.env.PORT || 8000, () => console.log("server is on"));
