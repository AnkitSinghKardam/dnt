import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();

import morgan from "morgan";

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port :: ${port}`);
});
