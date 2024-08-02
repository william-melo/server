import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { studentsRouter } from "./routes/clients.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.disable("x-powered-by");

app.use("/clients", studentsRouter);

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);
