// Imports
import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";

const routes = Router();

// Import controllers
const settingsController = new SettingsController();

// Rotas

routes.post("/settings", settingsController.create);

export { routes };
