import { Router } from "express";
import { ClientController } from "../controllers/client.js";

export const clientsRouter = Router();

clientsRouter.get("/", ClientController.getAll); // ✅
clientsRouter.get("/:id", ClientController.getById); // ✅
clientsRouter.delete("/:id", ClientController.delete); // ✅
clientsRouter.patch("/:id", ClientController.update);
