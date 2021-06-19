import express, { response } from "express";

import "./database";

const app = express();

/**
 * Métodos padrão
 * GET -> Buscas
 * POST -> Criaçào
 * PUT ->Alteração
 * DELETE -> Deletar
 * PATCH -> Alterar uma informaçào especifica
 */

app.get("/", (request, response) => {
  return response.json({
    message: "Salve putada",
  });
});

app.post("/", (resquest, repsonse) => {
  return response.json({
    message: "Usuário Salvo",
  });
});

app.listen(3333, () => console.log("Server is running on port 3333"));
