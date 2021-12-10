import { Router } from "express";

import { createCategoryController } from "../useCases/createCategory";

const specifications = Router();

specifications.post("", (request, response) =>
    createCategoryController.handle(request, response).send()
);

// specifications.get("", (_, response) => response.json(repository.list()));

export { specifications };
