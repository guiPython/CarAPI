import { Category } from "../../models/Category";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

class ListCategoriesUseCase {
    constructor(private repository: ICategoryRepository) {}

    execute(): Category[] {
        return this.repository.list();
    }
}

export { ListCategoriesUseCase };
