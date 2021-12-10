import CategoryRepository from "../../repositories/implementations/CategoryRepository";
import { ImportCategoryController } from "./importCategoryController";
import { ImportCategoryUseCase } from "./importCategoryUseCase";

const importCategoryUseCase = new ImportCategoryUseCase(CategoryRepository);
const importCategoryController = new ImportCategoryController(
    importCategoryUseCase
);

export { importCategoryController };
