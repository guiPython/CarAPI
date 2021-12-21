import { Router } from "express";
import multer from "multer";

import uploadConfig from "../config/upload";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";
import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "../modules/cars/useCases/importCategory/importCategoryController";
import { ListCategoriesController } from "../modules/cars/useCases/listCategories/ListCategoriesController";

const categories = Router();
categories.use(ensureAuthenticated);
const uploadImportCategory = multer(uploadConfig.upload("./tmp"));

const createCategoryController = new CreateCategoryController();
categories.post("/", createCategoryController.handle);

const listCategoriesController = new ListCategoriesController();
categories.get("/", listCategoriesController.handle);

const importCategoryController = new ImportCategoryController();
categories.post(
    "/import",
    uploadImportCategory.single("file"),
    importCategoryController.handle
);

export { categories };
