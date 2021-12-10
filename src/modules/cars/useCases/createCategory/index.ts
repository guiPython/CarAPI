import CategoryRepository from "../../repositories/implementations/CategoryRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const createCategoryUseCase = new CreateCategoryUseCase(CategoryRepository);
const createCategoryController = new CreateCategoryController(
    createCategoryUseCase
);

export { createCategoryController };
