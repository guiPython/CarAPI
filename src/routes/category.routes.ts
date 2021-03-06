import uploadConfig from "@config/upload";
import { CreateCategoryController } from "@modules/cars/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "@modules/cars/useCases/importCategory/importCategoryController";
import { ListCategoriesController } from "@modules/cars/useCases/listCategories/ListCategoriesController";
import { Router } from "express";
import { ensureAuthenticated } from "middleware/ensureAuthenticated";
import multer from "multer";

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
