import CategoryRepository from "../../repositories/implementations/CategoryRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const listCategorieesUseCase = new ListCategoriesUseCase(CategoryRepository);
const listCategoriesController = new ListCategoriesController(
    listCategorieesUseCase
);

export { listCategoriesController };
