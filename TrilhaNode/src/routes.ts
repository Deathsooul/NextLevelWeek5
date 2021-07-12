// Imports
import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();

// Import controllers
const settingsController = new SettingsController();
const usersController = new UsersController();

// Rotas

routes.post("/settings", settingsController.create);
routes.post("/users", usersController.create);

export { routes };
