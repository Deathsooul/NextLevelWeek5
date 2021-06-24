// Imports
import express, { response } from "express";

import "./database";
import { routes } from "./routes";

const app = express();
// App usage's
app.use(express.json());

app.use(routes);

//Listen
app.listen(3333, () => console.log("Server is running on port 3333"));
