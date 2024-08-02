import { Router } from "express";
import { ClientController } from "../controllers/client.js";

export const studentsRouter = Router();

studentsRouter.get("/", ClientController.getAll); // ✅
studentsRouter.get("/:id", ClientController.getById); // ✅
studentsRouter.post("/", ClientController.create); // ✅
studentsRouter.delete("/:id", ClientController.delete); // ✅
studentsRouter.patch("/:id", ClientController.update);
