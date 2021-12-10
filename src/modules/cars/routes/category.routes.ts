import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "../useCases/createCategory/index";
import { importCategoryController } from "../useCases/importCategory";
import { listCategoriesController } from "../useCases/listCategories";

const categories = Router();
const upload = multer({ dest: "./tmp" });

categories.post("/", (request, response) =>
    createCategoryController.handle(request, response)
);

categories.get("/", (_, response) =>
    listCategoriesController.handle(_, response)
);

categories.post("/import", upload.single("file"), (request, response) =>
    importCategoryController.handle(request, response)
);

export { categories };
