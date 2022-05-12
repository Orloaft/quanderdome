import cors from "cors";
import express from "express";

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8000;

app.listen(port, () =>
  console.log(`Express app listening on localhost:${port}`)
);
