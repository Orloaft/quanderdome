import cors from "cors";
import express from "express";
import { getApi } from "./api";
const app = express();
const port = process.env.PORT || 8000;
// Middlewares
app.use(express.json());
app.use(cors());

// Mount REST on /api
app.use("/api", getApi());

//run server
app.listen(port, () =>
  console.log(`Express app listening on localhost:${port}`)
);
