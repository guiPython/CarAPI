import { Category } from "../models/Category";

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoryRepository {
    create(dto: ICreateCategoryDTO): void;
    findByName(name: string): Category;
    list(): Category[];
}

export { ICategoryRepository, ICreateCategoryDTO };
