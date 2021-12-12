import express from "express";

import { router } from "./modules/cars/routes";

import "./database"

const app = express();
app.use(express.json());
app.use(router);

app.listen(3333);
