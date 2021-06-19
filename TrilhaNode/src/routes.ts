import { Router } from "express";
import { getCustomRepository } from "typeorm";

import { SettingsRepository } from "./repositories/SettingsRepository";

const routes = Router();

/**
 * Tipos de parametros
 * Routes Params => Parametros de Rotas
 * Query Params => Filtros e buscas
 * Body Params => {} objetos
 *
 */

// Rotas

routes.post("/settings", async (req, res) => {
  const { chat, username } = req.body;

  const SettingsRepository = getCustomRepository(SettingsRepository);

  const settings = settingsRepository.create({
    chat,
    username,
  });

  await settingsRepository.save(settings);

  return res.json(settings);
});

export { routes };
