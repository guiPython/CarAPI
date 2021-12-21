import { Category } from "../../entities/Category";
import {
    ICategoryRepository,
    ICreateCategoryDTO,
} from "../ICategoryRepository";

class CategoryRepositoryInMemory implements ICategoryRepository {
    private categories: Category[] = [];

    async create(dto: ICreateCategoryDTO): Promise<void> {
        const category = new Category();
        Object.assign(category, dto);
        this.categories.push(category);
    }
    async findByName(name: string): Promise<Category> {
        const category = this.categories.find((c) => c.name === name);
        return category;
    }

    async list(): Promise<Category[]> {
        return this.categories;
    }
}

export { CategoryRepositoryInMemory };
