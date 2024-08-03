import { fileURLToPath } from "url";
import { dirname } from "path";
import express from "express";
import cors from "cors";
import path from "path";
import { clientsRouter } from "./routes/clients.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.json());
app.use(cors());
app.disable("x-powered-by");

// Sirve archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, "public")));

// Define las rutas de tu API
app.use("/clients", clientsRouter);

// Ruta para servir tu archivo HTML principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);
